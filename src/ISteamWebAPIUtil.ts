import { SteamWebApiRequest } from "./util.ts";

class ISteamWebAPIUtil {
  /**
   * @async
   * @function GetServerInfo - Version 1 - HTTP-Methode GET
   */
  static async GetServerInfo() {
    const link =
      `http://api.steampowered.com/ISteamWebAPIUtil/GetServerInfo/v1/`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetSupportedAPIList - Version 1 - HTTP-Methode GET
   * @param {string} key - access key
   */
  static async GetSupportedAPIList(key?: string) {
    let link = "";
    if (key == undefined) {
      link =
        "http://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v1";
    } else {
      link =
        `http://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v1/?key=${key}`;
    }
    const response = await SteamWebApiRequest(link);
    return response;
  }
}

export { ISteamWebAPIUtil };
