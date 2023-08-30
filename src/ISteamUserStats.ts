import { CheckValidSteamID, SteamWebApiRequest } from "./util.ts";

class ISteamUserStats {
  /**
   * @async
   * @function GetGlobalAchievementPercentagesForApp - Version 1 - HTTP-Methode GET
   * @param {uint64} gameid - GameID to retrieve the achievement percentages for
   */
  static async GetGlobalAchievementPercentagesForApp(gameid: number) {
    const link =
      `http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v1/?gameid=${gameid}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetGlobalAchievementPercentagesForApp - Version 2 - HTTP-Methode GET
   * @param {uint64} gameid - GameID to retrieve the achievement percentages for
   */
  static async GetGlobalAchievementPercentagesForApp_2(gameid: number) {
    const link =
      `http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=${gameid}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetNumberOfCurrentPlayers - Version 1 - HTTP-Methode GET
   * @param {uint32} appid - AppID that we're getting user count for
   */
  static async GetNumberOfCurrentPlayers(appid: number) {
    const link =
      `http://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appid}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetPlayerAchievements - Version 1 - HTTP-Methode GET
   * @param {string} key - access key
   * @param {uint64} steamid - SteamID of user
   * @param {uint32} appid - AppID to get achievements for
   * @param {string} l - Language to return strings for
   */
  static async GetPlayerAchievements(
    key: string,
    steamid: number,
    appid: number,
    l = "en",
  ) {
    const isValid = CheckValidSteamID(steamid);
    if (isValid) {
      return isValid;
    }
    const link =
      `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?key=${key}&steamid=${steamid}&appid=${appid}&l=${l}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetSchemaForGame - Version 1 - HTTP-Methode GET
   * @param {string} key - access key
   * @param {uint32} appid - appid of game
   * @param {string} l - localized langauge to return (en, french, etc.)
   */
  static async GetSchemaForGame(key: string, appid: number, l = "en") {
    const link =
      `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v1/?key=${key}&appid=${appid}&l=${l}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetSchemaForGame - Version 2 - HTTP-Methode GET
   * @param {string} key - access key
   * @param {uint32} appid - appid of game
   * @param {string} l - localized language to return (en, french, etc.)
   */
  static async GetSchemaForGame_2(key: string, appid: number, l = "en") {
    const link =
      `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${key}&appid=${appid}&l=${l}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetUserStatsForGame - Version 1 - HTTP-Methode GET
   * @param {string} key - access key
   * @param {uint64} steamid - SteamID of user
   * @param {uint32} appid - appid of game
   */
  static async GetUserStatsForGame(
    key: string,
    steamid: number,
    appid: number,
  ) {
    const isValid = CheckValidSteamID(steamid);
    if (isValid) {
      return isValid;
    }
    const link =
      `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v1/?key=${key}&steamid=${steamid}&appid=${appid}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetUserStatsForGame - Version 2 - HTTP-Methode GET
   * @param {string} key - access key
   * @param {uint64} steamid - SteamID of user
   * @param {uint32} appid - appid of game
   */
  static async GetUserStatsForGame_2(
    key: string,
    steamid: number,
    appid: number,
  ) {
    const isValid = CheckValidSteamID(steamid);
    if (isValid) {
      return isValid;
    }
    const link =
      `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?key=${key}&steamid=${steamid}&appid=${appid}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }
}

export { ISteamUserStats };
