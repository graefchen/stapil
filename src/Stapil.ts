export class Stapil {
  private steamid: string;

  /**
   * @param steamid 
   */
  constructor(steamid: string) {
    this.checkValidSteamID(steamid);
    this.steamid = steamid;
  }

  /**
   * @function checkValidSteamID
   * @param id 
   */
  private checkValidSteamID(id: string) {
    if (id.length != 17) {
      throw new Error("The given 'SteamID' is not a valid 'SteamID'");
    }
  }
}
