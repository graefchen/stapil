import { Stapil } from "./mod.ts";

// Getting all the important info
const key =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.web_api_key;
const id =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.steam_id;
const vanityurl =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.vanity_url;

const skyrim_appid = 72850;
const ark_appid = 346110;

const stapil = new Stapil(key);

Deno.test(async function IsWorkingIPlayerService() {
  await stapil.IPlayerService.GetRecentlyPlayedGames(id, 10);
  await stapil.IPlayerService.GetOwnedGames(id);
  await stapil.IPlayerService.GetOwnedGames(id, true);
  await stapil.IPlayerService.GetOwnedGames(id, true, true);
  await stapil.IPlayerService.GetSteamLevel(id);
  await stapil.IPlayerService.GetBadges(id);
  await stapil.IPlayerService.GetCommunityBadgeProgress(id);
});

Deno.test(async function IsWorkingISteamApps() {
  await stapil.ISteamApps.GetAppList();
  await stapil.ISteamApps.UpToDateCheck(ark_appid, 1);
  await stapil.ISteamApps.UpToDateCheck(ark_appid, 1000);
  await stapil.ISteamApps.UpToDateCheck(skyrim_appid, 1);
});

Deno.test(async function IsWorkingISteamNews() {
  await stapil.ISteamNews.GetNewsForApp(skyrim_appid);
});

Deno.test(async function IsWorkingISteamUser() {
  await stapil.ISteamUser.GetFriendList(id);
  await stapil.ISteamUser.GetPlayerSummaries(id);
  await stapil.ISteamUser.GetUserGroupList(id);
  await stapil.ISteamUser.ResolveVanityURL(vanityurl);
});

Deno.test(async function IsWorkingISteamUserStats() {
  await stapil.ISteamUserStats.GetGlobalAchievementPercentagesForApp(
    skyrim_appid,
  );
  await stapil.ISteamUserStats.GetNumberOfCurrentPlayers(skyrim_appid);
  await stapil.ISteamUserStats.GetPlayerAchievements(id, skyrim_appid);
  await stapil.ISteamUserStats.GetSchemaForGame(skyrim_appid);
  await stapil.ISteamUserStats.GetUserStatsForGame(id, skyrim_appid);
});

Deno.test(async function IsWorkingISteamWebAPIUtil() {
  await stapil.ISteamWebAPIUtil.GetServerInfo();
  await stapil.ISteamWebAPIUtil.GetSupportedAPIList(key);
});
