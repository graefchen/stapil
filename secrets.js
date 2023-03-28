// Getting the key
export const key = (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.web_api_key;
export const id = (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.steam_id;
export const vanityurl = (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.vanity_url;
export const appid = (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.appid;