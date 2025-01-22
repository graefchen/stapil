import { Link } from "../utils/Link.ts";
import { Options } from "../utils/Options.ts";
import { steamWebRequest } from "../utils/WebRequest.ts";

export interface newsitems {
  gid: string;
  title: string;
  url: string;
  is_external_url: boolean;
  author: string;
  contents: string;
  feedlabel: string;
  date: number;
  feedname: string;
  feed_type: number;
  appid: number;
}

export interface appnews {
  appid: number;
  newsitems: newsitems[];
  count: number;
}

export class News {
  #options: Options;
  baseLink = "http://api.steampowered.com/ISteamNews/";

  constructor(key: string | undefined) {
    this.#options = new Options(key);
  }

  public getNewsForApp(args: {
    appid: number;
    maxlength?: number;
    enddate?: number;
    count?: number;
    feeds?: string;
    tags?: string;
  }): Promise<{ appnews: appnews }> {
    const link = new Link(
      this.baseLink,
      "GetNewsForApp/v2/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }
}
