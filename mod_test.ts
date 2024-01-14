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
  await stapil.Player.getRecentlyPlayedGames(id, 10);
  await stapil.Player.getOwnedGames(id);
  await stapil.Player.getOwnedGames(id, true);
  await stapil.Player.getOwnedGames(id, true, true);
  await stapil.Player.getSteamLevel(id);
  await stapil.Player.getBadges(id);
  await stapil.Player.getCommunityBadgeProgress(id);
});

Deno.test(async function IsWorkingISteamApps() {
  await stapil.Apps.getAppList();
  await stapil.Apps.upToDateCheck(ark_appid, 1);
  await stapil.Apps.upToDateCheck(ark_appid, 1000);
  await stapil.Apps.upToDateCheck(skyrim_appid, 1);
});

Deno.test(async function IsWorkingISteamNews() {
  await stapil.News.getNewsForApp(skyrim_appid);
});

Deno.test(async function IsWorkingISteamUser() {
  await stapil.User.getFriendList(id);
  await stapil.User.getPlayerSummaries(id);
  await stapil.User.getUserGroupList(id);
  await stapil.User.resolveVanityURL(vanityurl);
});

Deno.test(async function IsWorkingISteamUserStats() {
  await stapil.UserStats.getGlobalAchievementPercentagesForApp(
    skyrim_appid,
  );
  await stapil.UserStats.getNumberOfCurrentPlayers(skyrim_appid);
  await stapil.UserStats.getPlayerAchievements(id, skyrim_appid);
  await stapil.UserStats.getGameScheme(skyrim_appid);
  await stapil.UserStats.getUserStatsForGame(id, skyrim_appid);
});

Deno.test(async function IsWorkingISteamWebAPIUtil() {
  await stapil.WebAPIUtil.getServerInfo();
  await stapil.WebAPIUtil.getSupportedAPIList(key);
});
