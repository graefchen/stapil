import { Stapil } from "./mod.ts";

// Getting all the important info
const key =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.web_api_key;
const id =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.steam_id;
const vanityurl =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.vanity_url;
const appid =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.appid;

const stapil = new Stapil(key);

Deno.test(async function IsWorkingIPlayerService() {
  await stapil.IPlayerService.IsPlayingSharedGame(id, appid);
  await stapil.IPlayerService.GetRecentlyPlayedGames(id, 10);
  await stapil.IPlayerService.GetOwnedGames(id);
  await stapil.IPlayerService.GetSteamLevel(id);
  await stapil.IPlayerService.GetBadges(id);
  await stapil.IPlayerService.GetCommunityBadgeProgress(id);
});

Deno.test(async function IsWorkingISteamApps() {
  await stapil.ISteamApps.GetAppList();
});

Deno.test(async function IsWorkingISteamNews() {
  await stapil.ISteamNews.GetNewsForApp(appid);
});

Deno.test(async function IsWorkingISteamUser() {
  await stapil.ISteamUser.GetFriendList(id);
  await stapil.ISteamUser.GetPlayerSummaries(id);
  await stapil.ISteamUser.GetUserGroupList(id);
  await stapil.ISteamUser.ResolveVanityURL(vanityurl);
});

Deno.test(async function IsWorkingISteamUserStats() {
  await stapil.ISteamUserStats.GetGlobalAchievementPercentagesForApp(appid);
  await stapil.ISteamUserStats.GetNumberOfCurrentPlayers(appid);
  await stapil.ISteamUserStats.GetPlayerAchievements(id, appid);
  await stapil.ISteamUserStats.GetSchemaForGame(appid);
  await stapil.ISteamUserStats.GetUserStatsForGame(id, appid);
});

Deno.test(async function IsWorkingISteamWebAPIUtil() {
  await stapil.ISteamWebAPIUtil.GetServerInfo();
  await stapil.ISteamWebAPIUtil.GetSupportedAPIList(key);
});
