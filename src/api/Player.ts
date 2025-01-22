import { Options } from "../utils/Options.ts";
import { steamWebRequest } from "../utils/WebRequest.ts";
import { Link } from "../utils/Link.ts";

export interface recentGame {
  appid: number;
  name: string;
  playtime_2weeks: number;
  playtime_forever: number;
  img_icon_url: string;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
  playtime_deck_forever: number;
}

export interface ownedGame {
  appid: number;
  name?: string;
  playtime_forever: number;
  img_icon_url?: string;
  has_community_visible_stats?: boolean;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
  playtime_deck_forever: number;
  rtime_last_played: number;
  content_descriptorids?: number[];
  capsule_filename: string;
  has_workshop: boolean;
  has_market: boolean;
  has_dlc: boolean;
  playtime_disconnected: number;
}

export interface badge {
  badgeid: number;
  appid: number;
  level: number;
  completion_time: number;
  xp: number;
  communityitemid: string;
  border_color: number;
  scarcity: number;
}

export interface badges {
  badges: badge[];
  player_xp: number;
  player_level: number;
  player_xp_needed_to_level_up: number;
  player_xp_needed_current_level: number;
}

export interface quest {
  questid: number;
  completed: boolean;
}

export class Player {
  #options: Options;
  baseLink = "http://api.steampowered.com/IPlayerService/";

  /** */
  constructor(key: string | undefined) {
    this.#options = new Options(key);
  }

  // TODO: Find out which type it returns
  public isPlayingSharedGame(args: {
    steamid: string;
    appid_playing: number;
  }) {
    const link = new Link(
      this.baseLink,
      "IsPlayingSharedGame/v1/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }

  public getRecentlyPlayedGames(args: {
    steamid: string;
    count?: number;
  }): Promise<{ total_count: number; games: recentGame[] }> {
    const link = new Link(
      this.baseLink,
      "GetRecentlyPlayedGames/v1/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }

  public getOwnedGames(args: {
    steamid: string;
    include_appinfo?: boolean;
    include_played_free_games?: boolean;
    appids_filter?: number;
    include_free_sub?: boolean;
    skip_unvetted_apps?: boolean;
    language?: string;
    include_extended_appinfo?: boolean;
  }): Promise<{ game_count: number; games: ownedGame[] }> {
    const link = new Link(
      this.baseLink,
      "GetOwnedGames/v1/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }

  public getSteamLevel(
    args: { steamid: string },
  ): Promise<{ player_level: number }> {
    const link = new Link(
      this.baseLink,
      "GetSteamLevel/v1/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }

  public getBadges(args: { steamid: string }): Promise<{ badges: badges }> {
    const link = new Link(
      this.baseLink,
      "GetBadges/v1/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }

  public getCommunityBadgeProgress(args: {
    steamid: string;
    badgeid?: number;
  }): Promise<{ quests: quest[] }> {
    const link = new Link(
      this.baseLink,
      "GetCommunityBadgeProgress/v1/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }
}
