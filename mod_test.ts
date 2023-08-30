// imports
import { assertIsError } from "https://deno.land/std@0.200.0/assert/mod.ts";

import {
  IPlayerService,
  ISteamApps,
  ISteamEconomy,
  ISteamNews,
  ISteamUser,
  ISteamUserStats,
  ISteamWebAPIUtil,
} from "./mod.ts";

// test for one function
// Deno.test(function *functionname*(){
//	*things to test*
// });

// Getting all the important info
const key =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.web_api_key;
const id =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.steam_id;
const vanityurl =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.vanity_url;
const appid =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.appid;

Deno.test(async function IsWorkingIPlayerService() {
  await IPlayerService.IsPlayingSharedGame(key, id, appid);
  await IPlayerService.GetRecentlyPlayedGames(key, id, 10);
  await IPlayerService.GetOwnedGames(key, id);
  await IPlayerService.GetSteamLevel(key, id);
  await IPlayerService.GetBadges(key, id);
  await IPlayerService.GetCommunityBadgeProgress(key, id);
});

Deno.test(async function IsWorkingISteamApps() {
  await ISteamApps.GetAppList();
  await ISteamApps.GetAppList_2();
  await ISteamApps.GetSDRConfig(appid);
  await ISteamApps.GetServersAtAddress("155.133.248.36");
});

Deno.test(async function IsWorkingISteamEconomy() {
  // Example from the Team Fortress Wiki, just modified (440 is TeamFortress)
  // This function works only on certain ... games ...
  await ISteamEconomy.GetAssetClassInfo(key, 440, "en", 2, [195151, 16891096]);
  await ISteamEconomy.GetAssetPrices(key, appid);
});

Deno.test(async function IsWorkingISteamNews() {
  await ISteamNews.GetNewsForApp(appid);
  await ISteamNews.GetNewsForApp_2(appid);
});

Deno.test(async function IsWorkingISteamUser() {
  await ISteamUser.GetFriendList(key, id);
  await ISteamUser.GetPlayerBans(key, id);
  await ISteamUser.GetPlayerSummaries(key, id);
  await ISteamUser.GetPlayerSummaries_2(key, id);
  await ISteamUser.GetUserGroupList(key, id);
  await ISteamUser.ResolveVanityURL(key, vanityurl);
});

Deno.test(async function IsWorkingISteamUserStats() {
  await ISteamUserStats.GetGlobalAchievementPercentagesForApp(appid);
  await ISteamUserStats.GetGlobalAchievementPercentagesForApp_2(appid);
  await ISteamUserStats.GetNumberOfCurrentPlayers(appid);
  await ISteamUserStats.GetPlayerAchievements(key, id, appid);
  await ISteamUserStats.GetSchemaForGame(key, appid);
  await ISteamUserStats.GetSchemaForGame_2(key, appid);
  await ISteamUserStats.GetUserStatsForGame(key, id, appid);
  await ISteamUserStats.GetUserStatsForGame_2(key, id, appid);
});

Deno.test(async function IsWorkingISteamWebAPIUtil() {
  await ISteamWebAPIUtil.GetServerInfo();
  await ISteamWebAPIUtil.GetSupportedAPIList(key);
});

Deno.test(async function ErrorTest() {
  assertIsError(await IPlayerService.GetOwnedGames(key, 0), Error, "The given 'SteamID' is not a valid 'SteamID'");
  assertIsError(await IPlayerService.GetOwnedGames("Hello_World!", id), Error, "Access is denied. Please verify your 'key' parameter.");
})
