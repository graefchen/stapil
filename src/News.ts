import { Base } from "./_base.ts";

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

export class News extends Base {
  constructor(key: string) {
    super(key, "http://api.steampowered.com/ISteamNews/");
  }

  public getNewsForApp(
    appid: number,
    maxlength = 0,
    enddate = Math.floor(Date.now() / 1000),
    count = 20,
    feeds = "",
    tags = "",
  ): Promise<{ appnews: appnews }> {
    return super.request(
      `${super.link}GetNewsForApp/v2/?appid=${appid}&maxlength=${maxlength}&enddate=${enddate}&count=${count}&feeds=${feeds}&tags=${tags}`,
    );
  }
}
