import { SteamWebApiRequest } from "./util.ts";

class ISteamApps {
  /**
   * @async
   * @function GetAppList - Version 1 - HTTP-Methode GET
   */
  static async GetAppList() {
    const link = `http://api.steampowered.com/ISteamApps/GetAppList/v1/`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetAppList - Version 2 - HTTP-Methode GET
   */
  static async GetAppList_2() {
    const link = `http://api.steampowered.com/ISteamApps/GetAppList/v2/`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetSDRConfig - Version 1 - HTTP-Methode GET
   * @param {uint32} appid - AppID of game
   */
  static async GetSDRConfig(appid: number) {
    const link =
      `http://api.steampowered.com/ISteamApps/GetSDRConfig/v1/?appid=${appid}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetServersAtAddress - Version 1 - HTTP-Methode GET
   * @param {string} addr - IP or IP:queryport to list
   */
  static async GetServersAtAddress(addr: string) {
    const link =
      `http://api.steampowered.com/ISteamApps/GetServersAtAddress/v1/?addr=${addr}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }
}

export { ISteamApps };
