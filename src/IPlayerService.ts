import { CheckValidSteamID, SteamWebApiRequest } from "./util.ts";

class IPlayerService {
  /**
   * @async
   * @function IsPlayingSharedGame - Version 1 - HTTP-Methode GET
   * @param {string} key - Access key
   * @param {uint64} steamid - The player we're asking about
   * @param {uint32} appid_playing - The game player is currently playing
   */
  static async IsPlayingSharedGame(
    key: string,
    steamid: number,
    appid_playing: number,
  ) {
    const isValid = CheckValidSteamID(steamid);
    if (isValid) {
      return isValid;
    }
    const link =
      `http://api.steampowered.com/IPlayerService/IsPlayingSharedGame/v1/?key=${key}&steamid=${steamid}&appid_playing=${appid_playing}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetRecentlyPlayedGames - Version 1 - HTTP-Methode GET
   * @param {string} key - Access key
   * @param {uint64} steamid - The player we're asking about
   * @param {uint32} count - The number of games to return (0/unset: all)
   */
  static async GetRecentlyPlayedGames(key: string, steamid: number, count = 0) {
    const isValid = CheckValidSteamID(steamid);
    if (isValid) {
      return isValid;
    }
    const link =
      `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${key}&steamid=${steamid}&count=${count}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetOwnedGames - Version 1 - HTTP-Methode GET
   * @param {string} key - Access key
   * @param {uint64} steamid - The player we're asking about
   * @param {bool} include_appinfo - true if we want additional details (name, icon) about each game
   * @param {bool} include_played_free_games - Free games are excluded by default.  If this is set, free games the user has played will be returned.
   * @param {uint32} appids_filter - if set, restricts result set to the passed in apps
   * @param {bool} include_free_sub - Some games are in the free sub, which are excluded by default.
   * @param {bool} skip_unvetted_apps - if set, skip unvetted store apps
   * @param {string} language - Will return appinfo in this language
   * @param {bool} include_extended_appinfo - true if we want even more details (capsule, sortas, and capabilities) about each game.  include_appinfo must also be true.
   */
  static async GetOwnedGames(
    key: string,
    steamid: number,
    include_appinfo = false,
    include_played_free_games = false,
    appids_filter = 0,
    include_free_sub = false,
    skip_unvetted_apps = false,
    language = "en",
    include_extended_appinfo = false,
  ) {
    const isValid = CheckValidSteamID(steamid);
    if (isValid) {
      return isValid;
    }
    const link =
      `http://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${key}&steamid=${steamid}&include_appinfo=${include_appinfo}&include_played_free_games=${include_played_free_games}&appids_filter=${appids_filter}&include_free_sub=${include_free_sub}&skip_unvetted_apps=${skip_unvetted_apps}&language=${language}&include_extended_appinfo=${include_extended_appinfo}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetSteamLevel - Version 1 - HTTP-Methode GET
   * @param {string} key - Access key
   * @param {uint64} steamid - The player we're asking about
   */
  static async GetSteamLevel(key: string, steamid: number) {
    const isValid = CheckValidSteamID(steamid);
    if (isValid) {
      return isValid;
    }
    const link =
      `http://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=${key}&steamid=${steamid}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetBadges - Version 1 - HTTP-Methode GET
   * @param {string} key - Access key
   * @param {uint64} steamid - The player we're asking about
   */
  static async GetBadges(key: string, steamid: number) {
    const isValid = CheckValidSteamID(steamid);
    if (isValid) {
      return isValid;
    }
    const link =
      `http://api.steampowered.com/IPlayerService/GetBadges/v1/?key=${key}&steamid=${steamid}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetCommunityBadgeProgress - Version 1 - HTTP-Methode GET
   * @param {string} key - Access key
   * @param {uint64} steamid - The player we're asking about
   * @param {int32} badgeid - The badge we're asking about
   */
  static async GetCommunityBadgeProgress(
    key: string,
    steamid: number,
    badgeid = 0,
  ) {
    const isValid = CheckValidSteamID(steamid);
    if (isValid) {
      return isValid;
    }
    const link =
      `http://api.steampowered.com/IPlayerService/GetCommunityBadgeProgress/v1/?key=${key}&steamid=${steamid}&badgeid=${badgeid}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }
}

export { IPlayerService };
