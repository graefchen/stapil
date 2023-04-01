import { SteamWebApiRequest } from "./util.ts";

class ISteamEconomy {
  /**
   * @async
   * @function GetAssetClassInfo - Version 1 - HTTP-Methode GET
   * @param {string} key - Access key
   * @param {uint32} appid - Must be a steam economy app.
   * @param {string} language - The user's local language
   * @param {uint32} class_count - Number of classes requested. Must be at least one.
   * @param {uint64} classid - Class ID of the nth class.
   * @param {uint64} instanceid - Instance ID of the nth class.
   */
  static async GetAssetClassInfo(
    key: string,
    appid: number,
    language = "en",
    class_count = 1,
    classid = [],
    instanceid = [],
  ) {
    if (key == undefined) {
      throw new Error("Key needs to be given as an parameter.");
    }
    if (appid == undefined) {
      throw new Error("AppID needs to be given as an parameter.");
    }
    if (class_count < 1) throw new Error("Class_count needs to be at least 1");
    if (!Array.isArray(classid)) {
      throw new Error("ClassID needs to be an array.");
    }
    if (!Array.isArray(instanceid)) {
      throw new Error("InstanceID needs to be an array.");
    }
    let link =
      `http://api.steampowered.com/ISteamEconomy/GetAssetClassInfo/v1/?key=${key}&appid=${appid}&language=${language}&class_count=${class_count}`;
    for (let i = 0; i < classid.length; i++) {
      link += `&classid${i}=${classid[i]}`;
    }
    for (let i = 0; i < instanceid.length; i++) {
      link += `&instanceid${i}=${instanceid[i]}`;
    }
    const response = await SteamWebApiRequest(link);
    return response;
  }

  /**
   * @async
   * @function GetAssetPrices - Version 1 - HTTP-Methode GET
   * @param {string} key - Access key
   * @param {uint32} appid - Must be a steam economy app.
   * @param {string} currency - The currency to filter for
   * @param {string} language - The user's local language
   */
  static async GetAssetPrices(
    key: string,
    appid: number,
    currency = "",
    language = "en",
  ) {
    if (key == undefined) {
      throw new Error("Key needs to be given as an parameter.");
    }
    if (appid == undefined) {
      throw new Error("AppID needs to be given as an parameter.");
    }
    const link =
      `http://api.steampowered.com/ISteamEconomy/GetAssetPrices/v1/?key=${key}&appid=${appid}&currency=${currency}&language=${language}`;
    const response = await SteamWebApiRequest(link);
    return response;
  }
}

export { ISteamEconomy };
