import { Stapil } from "./src/Stapil.ts";

// getting the steam id
const secrets = JSON.parse(await Deno.readTextFile("./secret.json"));
const key = secrets.steam.web_api_key;

const stapil = new Stapil(key);

const apiListData = await stapil.ISteamWebAPIUtil.GetSupportedAPIList(true);
const list = apiListData.apilist.interfaces.filter((element) => {
  // Just check if any name has a number in it
  // mostly because any interface with an number in it is a
  // video game web api interface for games from valve
  // that we do not need
  return !/\d/.test(element.name);
});
const data = JSON.stringify(list, null, 2);
await Deno.writeTextFile("./ISteamWebAPIUtil.json", data);
