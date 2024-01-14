import { WebApi } from "../utils/WebApi.ts";
import { steamWebRequest } from "../utils/WebRequest.ts";

export interface parameter {
  name: string;
  type: string;
  optional: boolean;
  description: string;
}

export interface methode {
  name: string;
  version: number;
  httpmethode: string;
  description: string;
  parameters: parameter[];
}

export interface steamInterface {
  name: string;
  methods: methode[];
}

export interface apilist {
  interfaces: steamInterface[];
}

export class Utils extends WebApi {
  constructor(key: string) {
    super(key, "http://api.steampowered.com/ISteamWebAPIUtil/");
  }

  public getServerInfo() {
    return steamWebRequest(`${super.link}GetServerInfo/v1/`);
  }

  public getSupportedAPIList(keyless = true): Promise<{ apilist: apilist }> {
    return keyless
      ? steamWebRequest(`${super.link}GetSupportedAPIList/v1/`)
      : steamWebRequest(
        `${super.link}GetSupportedAPIList/v1/?key=${super.key}`,
      );
  }
}
