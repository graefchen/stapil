import { key, id, vanityurl, appid } from "./secrets.js";
import { TestSuite } from "./TestSuite.js";
import { IPlayerService } from "./library/IPlayerService.ts";
import { ISteamApps } from "./library/ISteamApps.ts";
import { ISteamUser } from "./library/ISteamUser.ts";
import { ISteamWebAPIUtil } from "./library/ISteamWebAPIUtil.ts";
import { ISteamUserStats } from "./library/ISteamUserStats.ts";
import { ISteamNews } from "./library/ISteamNews.ts";
import { ISteamEconomy } from "./library/ISteamEconomy.ts";
console.log("Running tests.");


async function IPlayerServiceTest() {
	// Running the IPlayerService Tests
	const test = new TestSuite("IPlayerService");
	const sg = await IPlayerService.IsPlayingSharedGame(key, id, appid);
	// console.log(sg);
	test.runTest("IsPlayingSharedGame", sg == sg);
	const rg = await IPlayerService.GetRecentlyPlayedGames(key, id);
	// console.log(rg);
	test.runTest("GetRecentlyPlayedGames", rg == rg);
	const e = await IPlayerService.GetOwnedGames(key, id, true);
	// console.log(e);
	test.runTest("getOwnedGame", e == e);
	const l = await IPlayerService.GetSteamLevel(key, id);
	// console.log(l);
	test.runTest("getSteamLevel", l == l);
	const b = await IPlayerService.GetBadges(key, id);
	// cosnole.log(b);
	test.runTest("getBadges", b == b);
	const cb = await IPlayerService.GetCommunityBadgeProgress(key, id);
	// console.log(cb);
	test.runTest("GetCommunityBadgeProgress", cb == cb)
}
await IPlayerServiceTest();

async function ISteamAppsTest() {
	const test = new TestSuite("ISteamApps");
	const al = await ISteamApps.GetAppList();
	// console.log("al", al);
	test.runTest("GetAppList", al == al);
	const al2 = await ISteamApps.GetAppList_2();
	// console.log("al2", al2);
	test.runTest("GetAppList_2", al2 == al2);
	const sdrc = await ISteamApps.GetSDRConfig(appid);
	// console.log("sdrc", sdrc);
	test.runTest("GetSDRConfig", sdrc == sdrc);
	const sdrc2 = await ISteamApps.GetSDRConfig_2(appid);
	// console.log("sdrc2", sdrc2);
	test.runTest("GetSDRConfig_2", sdrc2 == sdrc2);
	const lsdrc = await ISteamApps.GetSDRConfigLegacy(appid);
	// console.log("lsdrc", lsdrc);
	test.runTest("GetSDRConfigLegacy", lsdrc == lsdrc);
	const ser = await ISteamApps.GetServersAtAddress("155.133.248.36");
	// console.log("ser", ser);
	test.runTest("GetServersAtAddress", ser == ser);
	const up = await ISteamApps.UpToDateCheck(appid, 1);
	// console.log("up", up)
	test.runTest("UpToDateCheck", up == up);
}
await ISteamAppsTest();

async function ISteamEconomyTest() {
	const test = new TestSuite("ISteamEconomy");
	const gaci = await ISteamEconomy.GetAssetClassInfo(key, 440, "en", 2, [195151, 16891096]);
	// console.log(gaci);
	test.runTest("GetAssetClassInfo", gaci == gaci);
	const gap = await ISteamEconomy.GetAssetPrices(key, 440, "USD");
	// console.log(gap)
	test.runTest("GetAssetPrices", gap == gap);
}
await ISteamEconomyTest();

async function ISteamNewsTest() {
	const test = new TestSuite("ISteamNews");
	const gnfa = await ISteamNews.GetNewsForApp(appid);
	// console.log(gnfa)
	test.runTest("GetNewsForApp", gnfa == gnfa);
	const gnfa2 = await ISteamNews.GetNewsForApp_2(appid);
	// console.log(gnfa2)
	test.runTest("GetNewsForApp", gnfa2 == gnfa2);
}
await ISteamNewsTest();

async function ISteamUserTest() {
	const test = new TestSuite("ISteamUser");
	const flist = await ISteamUser.GetFriendList(key, id);
	// console.log("flist", flist);
	test.runTest("GetFriendList", flist == flist);
	const bans = await ISteamUser.GetPlayerBans(key, id);
	// console.log("bans", bans);
	test.runTest("GetPlayerBans", bans == bans);
	const sum = await ISteamUser.GetPlayerSummaries(key, id);
	// console.log("sum", sum);
	test.runTest("GetPlayerSummaries", sum == sum);
	const sum2 = await ISteamUser.GetPlayerSummaries_2(key, id);
	// console.log("sum2", sum2);
	test.runTest("GetPlayerSummaries_2", sum2 == sum2);
	const ulist = await ISteamUser.GetUserGroupList(key, id);
	// console.log("ulist", ulist);
	test.runTest("GetUserGroupList", ulist.success == true);
	const url = await ISteamUser.ResolveVanityURL(key, vanityurl);
	// console.log("url", url);
	test.runTest("ResolveVanityURL", url.steamid == id);
}
await ISteamUserTest();

async function ISteamUserStatsTest() {
	const test = new TestSuite("ISteamUserStats");
	const ggapfa = await ISteamUserStats.GetGlobalAchievementPercentagesForApp(appid);
	// console.log(ggapfa);
	test.runTest("GetGlobalAchievementPercentagesForApp", ggapfa == ggapfa);
	const ggapfa2 = await ISteamUserStats.GetGlobalAchievementPercentagesForApp_2(appid);
	// console.log(ggapfa2);
	test.runTest("GetGlobalAchievementPercentagesForApp_2", ggapfa2 == ggapfa2);
	const gnocp = await ISteamUserStats.GetNumberOfCurrentPlayers(appid);
	// console.log(gnocp);
	test.runTest("GetNumberOfCurrentPlayers", gnocp == gnocp);
	const gpa = await ISteamUserStats.GetPlayerAchievements(key, id, appid);
	// console.log(gpa);
	test.runTest("GetPlayerAchievements", gpa == gpa);
	const gsfg = await ISteamUserStats.GetSchemaForGame(key, id);
	// console.log(gsfg);
	test.runTest("GetSchemaForGame", gsfg == gsfg);
	const gsfg2 = await ISteamUserStats.GetSchemaForGame_2(key, id);
	// console.log(gsfg2);
	test.runTest("GetSchemaForGame_2", gsfg2 == gsfg2);
	const gusfg = await ISteamUserStats.GetUserStatsForGame(key, id, appid);
	// console.log(gusfg);
	test.runTest("GetUserStatsForGame", gusfg == gusfg);
	const gusfg2 = await ISteamUserStats.GetUserStatsForGame_2(key, id, appid);
	// console.log(gusfg2);
	test.runTest("GetUserStatsForGame_2", gusfg2 == gusfg2);
}
await ISteamUserStatsTest();

async function ISteamWebAPIUtilTest() {
	const test = new TestSuite("ISteamWebAPIUtil");
	const si = await ISteamWebAPIUtil.GetServerInfo();
	// console.log(si)
	test.runTest("GetServerInfo", si == si);
	const a = await ISteamWebAPIUtil.GetSupportedAPIList();
	// console.log(a);
	test.runTest("GetSupportedAPIList", a == a);
}
await ISteamWebAPIUtilTest();
