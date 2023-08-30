import { CheckValidSteamID, SteamWebApiRequest } from "./util.ts";

class ISteamUser {
  /**
   * @static
   * @async
   * @function GetFriendList - Version 1 - HTTP-Methode GET
   * @param {string} key - access key
   * @param {uint64} steamid - SteamID of user
   * @param {string} relationship - relationship type (ex: friend)
   */
  static async GetFriendList(
    key: string,
    steamid: number,
    relationship = "friend",
  ) {
    const isValid = CheckValidSteamID(steamid);
    if (isValid) {
      return isValid;
    }
    const link =
      `http://api.steampowered.com/ISteamUser/GetFriendList/v1/?key=${key}&steamid=${steamid}&relationship=${relationship}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @static
   * @async
   * @function GetPlayerBans - Version 1 - HTTP-Methode GET
   * @param {string} key - access key
   * @param {string} steamids - Comma-delimited list of SteamIDs
   */
  static async GetPlayerBans(key: string, steamids: string) {
    const link =
      `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${key}&steamids=${steamids}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @static
   * @async
   * @function GetPlayerSummaries - Version 1 - HTTP-Methode GET
   * @param {string} key - access key
   * @param {string} steamids - Comma-delimited list of SteamIDs
   */
  static async GetPlayerSummaries(key: string, steamids: number) {
    const link =
      `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v1/?key=${key}&steamids=${steamids}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @static
   * @async
   * @function GetPlayerSummaries - Version 2 - HTTP-Methode GET
   * @param {string} key - access key
   * @param {string} steamids - Comma-delimited list of SteamIDs (max: 100)
   */
  static async GetPlayerSummaries_2(key: string, steamids: number) {
    const link =
      `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${key}&steamids=${steamids}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @static
   * @async
   * @function GetUserGroupList - Version 1 - HTTP-Methode GET
   * @param {string} key - access key
   * @param {uint64} steamid - SteamID of user
   */
  static async GetUserGroupList(key: string, steamid: number) {
    const isValid = CheckValidSteamID(steamid);
    if (isValid) {
      return isValid;
    }
    const link =
      `http://api.steampowered.com/ISteamUser/GetUserGroupList/v1/?key=${key}&steamid=${steamid}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @static
   * @async
   * @function ResolveVanityURL - Version 1 - HTTP-Methode GET
   * @param {string} key - access key
   * @param {string} vanityurl - The vanity URL to get a SteamID for
   * @param {int32} url_type - The type of vanity URL. 1 (default): Individual profile, 2: Group, 3: Official game group
   */
  static async ResolveVanityURL(key: string, vanityurl: string, url_type = 1) {
    const link =
      `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${key}&vanityurl=${vanityurl}&url_type=${url_type}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }
}

export { ISteamUser };
