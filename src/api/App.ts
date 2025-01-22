import { Options } from "../utils/Options.ts";
import { steamWebRequest } from "../utils/WebRequest.ts";
import { Link } from "../utils/Link.ts";

export interface app {
  appid: number;
  name: string;
}

export interface apps {
  app: app[];
}

export interface appList {
  apps: apps;
}

export class App {
  #options: Options;
  baseLink = "http://api.steampowered.com/ISteamApps/";

  constructor(key: string) {
    this.#options = new Options(key);
  }

  public getAppList(): Promise<{ applist: appList }> {
    const link = new Link(
      this.baseLink,
      "GetAppList/v2/",
      this.#options.toString({})
    );

    return steamWebRequest(link);
  }

  // While 'GetSDTConfig' is listed in the json list of the valid requests ...
  // It is not listed in the steamworks documentation and therefor it will be
  // commented out.
  // There is a decision to be made to maybe include it later.
  // TODO: Check if we should uncomment this.
  // public GetSDRConfig(args: {appid: number}) {
  //   const link = new Link(
  //     this.baseLink,
  //     "GetSDRConfig/v1/",
  //     this.#options.toString(args)
  //   );

  //   return steamWebRequest(link);
  // }

  // TODO: Check if we should uncomment this.
  // public GetServersAtAddress(args: {addr: string}) {
  //   const link = new Link(
  //     this.baseLink,
  //     "GetServersAtAddress/v1",
  //     this.#options.toString(args)
  //   );

  //   return steamWebRequest(link);
  // }

  public upToDateCheck( args: {
      appid: number,
      version: number,
    }
  ): Promise<
    {
      success: boolean;
      up_to_date?: boolean;
      version_is_listable?: boolean;
      required_version?: number;
      message?: string;
      error?: string;
    }
  > {
    const link = new Link(
      this.baseLink,
      "UpToDateCheck/v1/",
      this.#options.toString(args)
    );

    return steamWebRequest(link);
  }
}
