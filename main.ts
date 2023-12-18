import { Stapil } from "./src/Stapil.ts";
import { SteamID } from "./src/_base.ts";

// getting the steam id
const key =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.web_api_key;
// const id =
//   (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.steam_id;

const stapil = new Stapil(key);
// const steamid = new SteamID(id);
// console.log(await stapil.IPlayerService.GetRecentlyPlayedGames(steamid));

const apiListData = await stapil.ISteamWebAPIUtil.GetSupportedAPIList(false);
const data = JSON.stringify(apiListData, null, 4);
await Deno.writeTextFile("./ISteamWebAPIUtil.json", data);
