import { Base } from "./_base.ts";

export class News extends Base {
  constructor(key: string) {
    super(key, "http://api.steampowered.com/ISteamNews/");
  }

  public GetNewsForApp(
    appid: number,
    maxlength = 0,
    enddate = Math.floor(Date.now() / 1000),
    count = 20,
    tags = "",
  ) {
    return super.request(
      `${super.link}GetNewsForApp/v1/?appid=${appid}&maxlength=${maxlength}&enddate=${enddate}&count=${count}&tags=${tags}`,
    );
  }

  public GetNewsForAppV2(
    appid: number,
    maxlength = 0,
    enddate = Math.floor(Date.now() / 1000),
    count = 20,
    feeds = "",
    tags = "",
  ) {
    return super.request(
      `${super.link}GetNewsForApp/v2/?appid=${appid}&maxlength=${maxlength}&enddate=${enddate}&count=${count}&feeds=${feeds}&tags=${tags}`,
    );
  }
}
