import { Stapil } from "./src/Stapil.ts";

// getting the steam id
const key =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.web_api_key;
const id =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.steam_id;
const vanityurl =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.vanity_url;
const appid =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.appid;

const stapil = new Stapil(key);

// Testing for Apps.ts
// console.log(await stapil.ISteamApps.UpToDateCheck(346110, 1));
// console.log(await stapil.ISteamApps.UpToDateCheck(346110, 1000));
// console.log(await stapil.ISteamApps.UpToDateCheck(appid, 1));

// Testing for News.ts
// console.log(await stapil.ISteamNews.GetNewsForApp(appid));

// Testing for User.ts
// console.log(await stapil.ISteamUser.GetFriendList(id));
// console.log(await stapil.ISteamUser.GetPlayerSummaries(`${id}`));
// console.log(await stapil.ISteamUser.GetUserGroupList(id));
// console.log(await stapil.ISteamUser.ResolveVanityURL(vanityurl));

// Testing for UserStats.ts
// console.log(await stapil.ISteamUserStats.GetGlobalAchievementPercentagesForApp(appid));
// console.log(await stapil.ISteamUserStats.GetNumberOfCurrentPlayers(appid));
// console.log(await stapil.ISteamUserStats.GetPlayerAchievements(id, appid))
// console.log(await stapil.ISteamUserStats.GetSchemaForGame(appid));
// console.log(await stapil.ISteamUserStats.GetUserStatsForGame(id, appid))

// const apiListData = await stapil.ISteamWebAPIUtil.GetSupportedAPIList(false);
// const list = apiListData.apilist.interfaces.filter(element => {
//   // Just check if any name has a number in it
//   // mostly because any interface with an number in it is a
//   // video game web api interface for games from valve
//   // that we do not need
//   return !/\d/.test(element.name);
// });
// const data = JSON.stringify(list, null, 4);
// await Deno.writeTextFile("./ISteamWebAPIUtil.json", data);
