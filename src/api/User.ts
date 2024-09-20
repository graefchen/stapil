import { SteamID } from "../utils/SteamID.ts";
import { WebApi } from "../utils/WebApi.ts";
import { steamWebRequest } from "../utils/WebRequest.ts";

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

export class User extends WebApi {
	constructor(key: string) {
		super(key, "http://api.steampowered.com/ISteamUser/");
	}

	public getFriendList(
		steamid: string,
		relationship = "friend",
	): Promise<{ friendslist: friendList }> {
		return steamWebRequest(
			`${super.link}GetFriendList/v1/?key=${super.key}&steamid=${new SteamID(
				steamid,
			)}&relationship=${relationship}`,
		);
	}

	// TODO: Check if we should uncomment this.
	// public GetPlayerBans(steamids: string) {
	//   return steamWebRequest(
	//     `${super.link}GetPlayerBans/v1/?key=${super.key}&steamids=${steamids}`,
	//   );
	// }

	public getPlayerSummaries(
		steamids: string,
	): Promise<{ players: player[] }> {
		return steamWebRequest(
			`${super.link}GetPlayerSummaries/v2/?key=${super.key}&steamids=${steamids}`,
		);
	}

	public getUserGroupList(
		steamid: string,
	): Promise<{ success: boolean; groups: group[] }> {
		return steamWebRequest(
			`${super.link}GetUserGroupList/v1/?key=${super.key}&steamid=${new SteamID(
				steamid,
			)}`,
		);
	}

	public resolveVanityURL(
		vanityurl: string,
		url_type = 1,
	): Promise<{ success: number; steamid: string }> {
		return steamWebRequest(
			`${super.link}ResolveVanityURL/v1/?key=${super.key}&vanityurl=${vanityurl}&url_type=${url_type}`,
		);
	}
}
