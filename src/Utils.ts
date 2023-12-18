import { Base } from "./_base.ts";

export class Utils extends Base {
  constructor(key: string) {
    super(key, "http://api.steampowered.com/ISteamWebAPIUtil/");
  }

  public GetServerInfo() {
    return super.request(`${super.link}GetServerInfo/v1/`);
  }

  public GetSupportedAPIList(keyless = true) {
    return keyless
      ? super.request(`${super.link}GetSupportedAPIList/v1/`)
      : super.request(`${super.link}GetSupportedAPIList/v1/?key=${super.key}`);
  }
}
