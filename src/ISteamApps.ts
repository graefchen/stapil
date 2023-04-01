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
    if (appid == undefined) {
      throw new Error("Appid needs to be given as an parameter.");
    }
    const link =
      `http://api.steampowered.com/ISteamApps/GetSDRConfig/v1/?appid=${appid}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetSDRConfigLegacy - Version 1 - HTTP-Methode GET
   * @param {uint32} appid - AppID of game
   */
  static async GetSDRConfigLegacy(appid: number) {
    if (appid == undefined) {
      throw new Error("Appid needs to be given as an parameter.");
    }
    const link =
      `http://api.steampowered.com/ISteamApps/GetSDRConfigLegacy/v1/?appid=${appid}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetServersAtAddress - Version 1 - HTTP-Methode GET
   * @param {string} addr - IP or IP:queryport to list
   */
  static async GetServersAtAddress(addr: string) {
    if (addr == undefined) {
      throw new Error("Addr needs to be given as an parameter.");
    }
    const link =
      `http://api.steampowered.com/ISteamApps/GetServersAtAddress/v1/?addr=${addr}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function UpToDateCheck - Version 1 - HTTP-Methode GET
   * @param {uint32} appid - AppID of game
   * @param {uint32} version - The installed version of the game
   */
  static async UpToDateCheck(appid: number, version: number) {
    if (appid == undefined) {
      throw new Error("Appid needs to be given as an parameter.");
    }
    if (version == undefined) {
      throw new Error("Version needs to be given as an parameter.");
    }
    const link =
      `http://api.steampowered.com/ISteamApps/UpToDateCheck/v1/?appid=${appid}&version=${version}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }
}

export { ISteamApps };
