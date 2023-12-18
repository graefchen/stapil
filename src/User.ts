import { Base, SteamID } from "./_base.ts";

export class User extends Base {
  constructor(key: string) {
    super(key, "http://api.steampowered.com/ISteamUser/");
  }

  public GetFriendList(
    steamid: SteamID,
    relationship = "friend",
  ) {
    return super.request(
      `${super.link}GetFriendList/v1/?key=${super.key}&steamid=${steamid.id}&relationship=${relationship}`,
    );
  }

  public GetPlayerBans(steamids: string) {
    return super.request(
      `${super.link}GetPlayerBans/v1/?key=${super.key}&steamids=${steamids}`,
    );
  }

  public GetPlayerSummaries(steamids: number) {
    return super.request(
      `${super.link}GetPlayerSummaries/v2/?key=${super.key}&steamids=${steamids}`,
    );
  }

  public GetUserGroupList(steamid: SteamID) {
    return super.request(
      `${super.link}GetUserGroupList/v1/?key=${super.key}&steamid=${steamid.id}`,
    );
  }

  public ResolveVanityURL(vanityurl: string, url_type = 1) {
    return super.request(
      `${super.link}ResolveVanityURL/v1/?key=${super.key}&vanityurl=${vanityurl}&url_type=${url_type}`,
    );
  }
}
