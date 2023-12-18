import { Base } from "./_base.ts";

export class App extends Base {
  constructor(key: string) {
    super(key, "http://api.steampowered.com/ISteamApps/");
  }

  public GetAppList() {
    return super.request(`${super.link}GetAppList/v1/`);
  }

  public GetAppListV2() {
    return super.request(`${super.link}ISteamApps/GetAppList/v2/`);
  }

  public GetSDRConfig(appid: number) {
    return super.request(`${super.link}GetSDRConfig/v1/?appid=${appid}`);
  }

  public GetServersAtAddress(addr: string) {
    return super.request(`${this.link}GetServersAtAddress/v1/?addr=${addr}`);
  }
}
