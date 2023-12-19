import { Base } from "./_base.ts";

interface app {
  appid: number;
  name: string;
}

interface apps {
  app: app[];
}

interface applist {
  apps: apps;
}

interface uptodate {
  success: boolean;
  up_to_date?: boolean;
  version_is_listable?: boolean;
  required_version?: number;
  message?: string;
  error?: string;
}

export class App extends Base {
  constructor(key: string) {
    super(key, "http://api.steampowered.com/ISteamApps/");
  }

  public GetAppList() : Promise<applist> {
    return super.request(`${super.link}GetAppList/v2/`);
  }

  // While 'GetSDTConfig' is listed in the json list of the valid requests ...
  // It is not listed in the steamworks documentation and therefor it will be
  // commented out.
  // There is a decision to be made to maybe include it later.
  // TODO: Check if we should uncomment this.
  // public GetSDRConfig(appid: number) {
  //   return super.request(`${super.link}GetSDRConfig/v1/?appid=${appid}`);
  // }

  // TODO: Check if we should uncomment this.
  // public GetServersAtAddress(addr: string) {
  //   return super.request(`${this.link}GetServersAtAddress/v1/?addr=${addr}`);
  // }

  public UpToDateCheck(appid: number, version: number) : Promise<uptodate> {
    return super.request(`${this.link}UpToDateCheck/v1/?appid=${appid}&version=${version}`);
  }
}
