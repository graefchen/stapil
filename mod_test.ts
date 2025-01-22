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

const stapil = new Stapil({ key: key });

Deno.test(async function IsWorkingIPlayerService() {
  await stapil.player.getRecentlyPlayedGames({ steamid: id, count: 10 });
  await stapil.player.getOwnedGames({ steamid: id });
  await stapil.player.getOwnedGames({ steamid: id, include_appinfo: true });
  await stapil.player.getOwnedGames({
    steamid: id,
    include_appinfo: true,
    include_played_free_games: true,
  });
  await stapil.player.getOwnedGames({
    steamid: id,
    include_appinfo: true,
    include_played_free_games: true,
    include_extended_appinfo: true,
  });
  await stapil.player.getSteamLevel({ steamid: id });
  await stapil.player.getBadges({ steamid: id });
  await stapil.player.getCommunityBadgeProgress({ steamid: id });
});

Deno.test(async function IsWorkingISteamApps() {
  await stapil.apps.getAppList();
  await stapil.apps.upToDateCheck({ appid: ark_appid, version: 1 });
  await stapil.apps.upToDateCheck({ appid: ark_appid, version: 1000 });
  await stapil.apps.upToDateCheck({ appid: skyrim_appid, version: 1 });
});

Deno.test(async function IsWorkingISteamNews() {
  await stapil.news.getNewsForApp({ appid: skyrim_appid });
});

Deno.test(async function IsWorkingISteamUser() {
  await stapil.user.getFriendList({ steamid: id });
  await stapil.user.getPlayerSummaries({ steamids: id });
  await stapil.user.getUserGroupList({ steamid: id });
  await stapil.user.resolveVanityURL({ vanityurl: vanityurl });
});

Deno.test(async function IsWorkingISteamUserStats() {
  await stapil.stats.getGlobalAchievementPercentagesForApp({
    gameid: skyrim_appid,
  });
  await stapil.stats.getNumberOfCurrentPlayers({ appid: skyrim_appid });
  await stapil.stats.getPlayerAchievements({
    steamid: id,
    appid: skyrim_appid,
  });
  await stapil.stats.getGameScheme({ appid: skyrim_appid });
  await stapil.stats.getUserStatsForGame({ steamid: id, appid: skyrim_appid });
});

Deno.test(async function IsWorkingISteamWebAPIUtil() {
  await stapil.util.getServerInfo();
  await stapil.util.getSupportedAPIList();
});
