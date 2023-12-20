import { Base } from "./_base.ts";

interface parameter {
  name: string;
  type: string;
  optional: boolean;
  description: string;
}

interface methode {
  name: string;
  version: number;
  httpmethode: string;
  description: string;
  parameters: parameter[];
}

interface steaminterface {
  name: string;
  methods: methode[];
}

interface apilist {
  interfaces: steaminterface[];
}

export class Utils extends Base {
  constructor(key: string) {
    super(key, "http://api.steampowered.com/ISteamWebAPIUtil/");
  }

  public GetServerInfo() {
    return super.request(`${super.link}GetServerInfo/v1/`);
  }

  public GetSupportedAPIList(keyless = true): Promise<{ apilist: apilist }> {
    return keyless
      ? super.request(`${super.link}GetSupportedAPIList/v1/`)
      : super.request(`${super.link}GetSupportedAPIList/v1/?key=${super.key}`);
  }
}
