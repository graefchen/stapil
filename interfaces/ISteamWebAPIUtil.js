class ISteamWebAPIUtil {

	/**
	 * @async
	 * @function GetServerInfo - Version 1 - HTTP-Methode GET
	 */
	static async GetServerInfo()
	{
		const link = `http://api.steampowered.com/ISteamWebAPIUtil/GetServerInfo/v1/`;
		const res = await fetch(link);
		const data = await res.json();
		return data.response != undefined ? data.response : data;
	}

	/**
	 * @async
	 * @function GetSupportedAPIList - Version 1 - HTTP-Methode GET
	 * @param {string} key - access key
	 */
	static async GetSupportedAPIList(key)
	{
		let link = "";
		if (key == undefined)
			link = "http://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v1";
		else
			link = `http://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v1/?key=${key}`;
		const res = await fetch(link);
		const data = await res.json();
		return data.response != undefined ? data.response : data;
	}

}

export { ISteamWebAPIUtil };
