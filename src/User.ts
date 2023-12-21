import { Base, SteamID } from "./_base.ts";

export interface friend {
  steamid: string;
  relationship: string;
  friend_since: number;
}

export interface friendlist {
  friends: friend[];
}

export interface player {
  steamid: string;
  communityvisibilitystate: number;
  profilestate: number;
  personaname: string;
  commentpermission: number;
  profileurl: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  avatarhash: string;
  lastlogoff: number;
  personastate: 1;
  realname: string;
  primaryclanid: string;
  timecreated: number;
  personastateflags: number;
  loccountrycode: string;
}

export interface group {
  gid: string;
}

export class User extends Base {
  constructor(key: string) {
    super(key, "http://api.steampowered.com/ISteamUser/");
  }

  public GetFriendList(
    steamid: string,
    relationship = "friend",
  ): Promise<{ friendlist: friendlist }> {
    return super.request(
      `${super.link}GetFriendList/v1/?key=${super.key}&steamid=${new SteamID(
        steamid,
      )}&relationship=${relationship}`,
    );
  }

  // TODO: Check if we should uncomment this.
  // public GetPlayerBans(steamids: string) {
  //   return super.request(
  //     `${super.link}GetPlayerBans/v1/?key=${super.key}&steamids=${steamids}`,
  //   );
  // }

  public GetPlayerSummaries(steamids: string): Promise<{ players: player[] }> {
    return super.request(
      `${super.link}GetPlayerSummaries/v2/?key=${super.key}&steamids=${steamids}`,
    );
  }

  public GetUserGroupList(
    steamid: string,
  ): Promise<{ success: boolean; groups: group[] }> {
    return super.request(
      `${super.link}GetUserGroupList/v1/?key=${super.key}&steamid=${new SteamID(
        steamid,
      )}`,
    );
  }

  public ResolveVanityURL(
    vanityurl: string,
    url_type = 1,
  ): Promise<{ success: number; steamid: string }> {
    return super.request(
      `${super.link}ResolveVanityURL/v1/?key=${super.key}&vanityurl=${vanityurl}&url_type=${url_type}`,
    );
  }
}
