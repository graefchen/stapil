import { Options } from "../utils/Options.ts";
import { steamWebRequest } from "../utils/WebRequest.ts";
import { Link } from "../utils/Link.ts";

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

export class Utils {
  #options: Options;
  baseLink = "http://api.steampowered.com/ISteamWebAPIUtil/";

  /** */
  constructor(key: string | undefined) {
    this.#options = new Options(key);
  }

  public getServerInfo() {
    const link = new Link(
      this.baseLink,
      "GetServerInfo/v1/",
      this.#options.toString({}),
    );

    return steamWebRequest(link);
  }

  public getSupportedAPIList(): Promise<{ apilist: apilist }> {
    const link = new Link(
      this.baseLink,
      "GetSupportedAPIList/v1/",
      this.#options.toString({}),
    );

    return steamWebRequest(link);
  }
}
