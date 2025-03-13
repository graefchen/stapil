import { Options } from "../utils/Options.ts";
import { steamWebRequest } from "../utils/WebRequest.ts";
import { Link } from "../utils/Link.ts";

export interface friend {
  steamid: string;
  relationship: string;
  friend_since: number;
}

export interface friendList {
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

export class User {
  #options: Options;
  baseLink = "http://api.steampowered.com/ISteamUser/";

  constructor(key: string | undefined) {
    this.#options = new Options(key);
  }

  public getFriendList(args: {
    steamid: string;
    relationship?: string;
  }): Promise<{ friendslist: friendList }> {
    const link = new Link(
      this.baseLink,
      "GetFriendList/v1/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }

  // TODO: Check if we should uncomment this.
  // public GetPlayerBans(args: {steamids: string}) {
  //   const link = new Link(
  //     this.baseLink,
  //     "GetPlayerBans/v1/",
  //     this.#options.toString(args),
  //   );

  //   return steamWebRequest(link);
  // }

  public getPlayerSummaries(args: {
    steamids: string[];
  }): Promise<{ players: player[] }> {
    const link = new Link(
      this.baseLink,
      "GetPlayerSummaries/v2/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }

  public getUserGroupList(args: {
    steamid: string;
  }): Promise<{ success: boolean; groups: group[] }> {
    const link = new Link(
      this.baseLink,
      "GetUserGroupList/v1/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }

  public resolveVanityURL(args: {
    vanityurl: string;
    url_type?: number;
  }): Promise<{ success: number; steamid: string }> {
    const link = new Link(
      this.baseLink,
      "ResolveVanityURL/v1/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }
}
