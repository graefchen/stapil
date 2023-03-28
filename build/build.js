/**
 * Script to generate JavaScript Scripts in the "interfaces" folder.
 */

// Getting the key
// const key = (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.web_api_key;

// const apiListLink = `http://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v1/?key=${key}`;
// const apiListResponse = await fetch(apiListLink);
// const apiListData = await apiListResponse.json();
// // console.log(apiListData);

// const data = JSON.stringify(apiListData, null, 4);
// await Deno.writeTextFile("./ISteamWebAPIUtil.json", data);

const text = await Deno.readTextFile("./ISteamWebApiUtil.json");
const json = JSON.parse(text);
// console.log(json)

const types = [];

const interfaces = json.apilist.interfaces;
interfaces.forEach(element => {
	const interface_name = element.name
	let file_string = "";
	// console.log(`Interface: ${interface_name}`);
	file_string += `class ${interface_name} {\n\n`;
	const methods = element.methods;
	methods.forEach(element => {
		const methode_name = element.name;
		const methode_version = element.version;
		const parameters = element.parameters;
		let has_key = false;
		let has_steamid = false;
		let has_steamids = false;
		let methode_comment = `\t/**\n\t * @async\n\t * @function ${methode_name} - Version ${methode_version} - HTTP-Methode ${element.httpmethod}\n`;
		for(let i = 0; i < parameters.length; i++) {
			const n = parameters[i].name;
			if (n === "key" )
				has_key = true;
			if (n === "steamid")
				has_steamid = true;
			if (n === "steamids")
				has_steamids = true;
			methode_comment += `\t * @param {${parameters[i].type}} ${parameters[i].name} - ${parameters[i].description}\n`;
			types.push(parameters[i].type);
		}
		methode_comment += "\t */\n";
		file_string += methode_comment;
		// console.log(`Method => ${methode_name}`);
		if(methode_version == 1)
			file_string += `\tstatic async ${methode_name}(`
		else
			file_string += `\tstatic async ${methode_name}_${element.version}(`
		for(let i = 0; i < parameters.length; i++) {
			// console.log(`    Parameter => name:     ${parameters[i].name}`);
			// console.log(`    Parameter => type:     ${parameters[i].type}`);
			// console.log(`    Parameter => optional: ${parameters[i].optional}`);
			// console.log();
			const parameter_name = parameters[i].name;
			if (i == parameters.length - 1 && i != 0) {
				file_string += ` ${parameter_name}`;
			}
			else if (i == parameters.length - 1 && i == 0) {
				file_string += `${parameter_name}`;
			}
			else if(i == 0) {
				file_string += `${parameter_name},`
			}
			else {
				file_string += ` ${parameter_name},`
			}
		}
		file_string += `)\n`
		file_string += `\t{\n`
		if (has_key)
			file_string += "\t\tif (key == undefined) throw new Error(\"Key needs to be given as an parameter.\");\n";
		if (has_steamid)
			file_string += "\t\tif (steamid == undefined) throw new Error(\"SteamID needs to be given as an parameter.\");\n";
		if (has_steamids)
			file_string += "\t\tif (steamids == undefined) throw new Error(\"At least a SteamID needs to be given as an parameter.\");\n";
		let req_link = `const link = \`http://api.steampowered.com/${interface_name}/${methode_name}/v000${methode_version}/`;
		if (parameters.length != 0) {
			for(let i = 0; i < parameters.length; i++) {
				const parameter_name = parameters[i].name;
				if (i == 0)
					req_link += `?${ parameter_name}=$\{${parameter_name}\}`;
				else
					req_link += `&${ parameter_name}=$\{${parameter_name}\}`;
			}
		}
		req_link += `\`;`;
		const req_resp = "const res = await fetch(link);";
		const req_data = "const data = await res.json();";
		const req_return = "return data.response != undefined ? data.response : data;"
		file_string += `\t\t${req_link}\n\t\t${req_resp}\n\t\t${req_data}\n\t\t${req_return}`
		file_string += `\n\t}\n\n`
	});
	file_string += `}\n\n`;
	file_string += `export { ${interface_name} };\n`;
	Deno.writeTextFile(`./../interfaces/${element.name}.js`, file_string);
});

const uniq = [...new Set(types)];
console.log(uniq);