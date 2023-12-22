import { Base } from "./_base.ts";

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

export class Utils extends Base {
  constructor(key: string) {
    super(key, "http://api.steampowered.com/ISteamWebAPIUtil/");
  }

  public getServerInfo() {
    return super.request(`${super.link}GetServerInfo/v1/`);
  }

  public getSupportedAPIList(keyless = true): Promise<{ apilist: apilist }> {
    return keyless
      ? super.request(`${super.link}GetSupportedAPIList/v1/`)
      : super.request(`${super.link}GetSupportedAPIList/v1/?key=${super.key}`);
  }
}
