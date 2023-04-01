class ISteamUserStats {

	/**
	 * @async
	 * @function GetGlobalAchievementPercentagesForApp - Version 1 - HTTP-Methode GET
	 * @param {uint64} gameid - GameID to retrieve the achievement percentages for
	 */
	static async GetGlobalAchievementPercentagesForApp(gameid: number)
	{
		if (gameid == undefined) throw new Error("GameID needs to be given as an parameter.");
		const link = `http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v1/?gameid=${gameid}`;
		const res = await fetch(link);
		const data = await res.json();
		return data.response != undefined ? data.response : data;
	}

	/**
	 * @async
	 * @function GetGlobalAchievementPercentagesForApp - Version 2 - HTTP-Methode GET
	 * @param {uint64} gameid - GameID to retrieve the achievement percentages for
	 */
	static async GetGlobalAchievementPercentagesForApp_2(gameid: number)
	{
		if (gameid == undefined) throw new Error("GameID needs to be given as an parameter.");
		const link = `http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=${gameid}`;
		const res = await fetch(link);
		const data = await res.json();
		return data.response != undefined ? data.response : data;
	}

	/**
	 * @async
	 * @function GetNumberOfCurrentPlayers - Version 1 - HTTP-Methode GET
	 * @param {uint32} appid - AppID that we're getting user count for
	 */
	static async GetNumberOfCurrentPlayers(appid: number)
	{
		if (appid == undefined) throw new Error("AppID needs to be given as an parameter.");
		const link = `http://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appid}`;
		const res = await fetch(link);
		const data = await res.json();
		return data.response != undefined ? data.response : data;
	}

	/**
	 * @async
	 * @function GetPlayerAchievements - Version 1 - HTTP-Methode GET
	 * @param {string} key - access key
	 * @param {uint64} steamid - SteamID of user
	 * @param {uint32} appid - AppID to get achievements for
	 * @param {string} l - Language to return strings for
	 */
	static async GetPlayerAchievements(key: string, steamid: bigint, appid: number, l = "en")
	{
		if (key == undefined) throw new Error("Key needs to be given as an parameter.");
		if (steamid == undefined) throw new Error("SteamID needs to be given as an parameter.");
		if (appid == undefined) throw new Error("AppID needs to be given as an parameter.");
		const link = `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?key=${key}&steamid=${steamid}&appid=${appid}&l=${l}`;
		const res = await fetch(link);
		const data = await res.json();
		return data.response != undefined ? data.response : data;
	}

	/**
	 * @async
	 * @function GetSchemaForGame - Version 1 - HTTP-Methode GET
	 * @param {string} key - access key
	 * @param {uint32} appid - appid of game
	 * @param {string} l - localized langauge to return (en, french, etc.)
	 */
	static async GetSchemaForGame(key: string, appid: number, l = "en")
	{
		if (key == undefined) throw new Error("Key needs to be given as an parameter.");
		if (appid == undefined) throw new Error("AppID needs to be given as an parameter.");
		const link = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v1/?key=${key}&appid=${appid}&l=${l}`;
		const res = await fetch(link);
		const data = await res.json();
		return data.response != undefined ? data.response : data;
	}

	/**
	 * @async
	 * @function GetSchemaForGame - Version 2 - HTTP-Methode GET
	 * @param {string} key - access key
	 * @param {uint32} appid - appid of game
	 * @param {string} l - localized language to return (en, french, etc.)
	 */
	static async GetSchemaForGame_2(key: string, appid: number, l = "en")
	{
		if (key == undefined) throw new Error("Key needs to be given as an parameter.");
		if (appid == undefined) throw new Error("AppID needs to be given as an parameter.");
		const link = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${key}&appid=${appid}&l=${l}`;
		const res = await fetch(link);
		const data = await res.json();
		return data.response != undefined ? data.response : data;
	}

	/**
	 * @async
	 * @function GetUserStatsForGame - Version 1 - HTTP-Methode GET
	 * @param {string} key - access key
	 * @param {uint64} steamid - SteamID of user
	 * @param {uint32} appid - appid of game
	 */
	static async GetUserStatsForGame(key: string, steamid: bigint, appid: number)
	{
		if (key == undefined) throw new Error("Key needs to be given as an parameter.");
		if (steamid == undefined) throw new Error("SteamID needs to be given as an parameter.");
		const link = `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v1/?key=${key}&steamid=${steamid}&appid=${appid}`;
		const res = await fetch(link);
		const data = await res.json();
		return data.response != undefined ? data.response : data;
	}

	/**
	 * @async
	 * @function GetUserStatsForGame - Version 2 - HTTP-Methode GET
	 * @param {string} key - access key
	 * @param {uint64} steamid - SteamID of user
	 * @param {uint32} appid - appid of game
	 */
	static async GetUserStatsForGame_2(key: string, steamid:bigint, appid: number)
	{
		if (key == undefined) throw new Error("Key needs to be given as an parameter.");
		if (steamid == undefined) throw new Error("SteamID needs to be given as an parameter.");
		const link = `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?key=${key}&steamid=${steamid}&appid=${appid}`;
		const res = await fetch(link);
		const data = await res.json();
		return data.response != undefined ? data.response : data;
	}

}

export { ISteamUserStats };
