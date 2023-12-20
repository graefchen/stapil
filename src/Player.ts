import { Base, SteamID } from "./_base.ts";

interface game {
  appid: number;
  name: string;
  playtime_2weeks: number;
  playtime_forever: number;
  img_icon_url: string;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
}

interface ownedgame {
  appid: number;
  name?: string;
  playtime_forever: number;
  img_icon_url?: string;
  has_community_visible_stats: boolean;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
  rtime_last_played: number;
  content_descriptorids: number[];
  playtime_disconnected: number;
}

interface badge {
  badgeid: number;
  appid: number;
  level: number;
  completion_time: number;
  xp: number;
  communityitemid: string;
  border_color: number;
  scarcity: number;
}

interface badges {
  badges: badge[];
  player_xp: number;
  player_level: number;
  player_xp_needed_to_level_up: number;
  player_xp_needed_current_level: number;
}

interface quest {
  questid: number;
  completed: boolean;
}

export class Player extends Base {
  /** */
  constructor(key: string) {
    super(key, "http://api.steampowered.com/IPlayerService/");
  }

  // TODO: Find out which type it returns and if we should uncomment it
  // public IsPlayingSharedGame(
  //   steamid: string,
  //   appid_playing: number,
  // ) {
  //   return super.request(
  //     `${super.link}IsPlayingSharedGame/v1/?key=${super.key}&steamid=${new SteamID(
  //       steamid,
  //     )}&appid_playing=${appid_playing}`,
  //   );
  // }

  public GetRecentlyPlayedGames(
    steamid: string,
    count = 0,
  ): Promise<{ total_count: number; games: ownedgame[] }> {
    return super.request(
      `${super.link}GetRecentlyPlayedGames/v1/?key=${super.key}&steamid=${new SteamID(
        steamid,
      )}&count=${count}`,
    );
  }

  public GetOwnedGames(
    steamid: string,
    include_appinfo = false,
    include_played_free_games = false,
    appids_filter = 0,
    include_free_sub = false,
    skip_unvetted_apps = false,
    language = "en",
    include_extended_appinfo = false,
  ): Promise<{ game_count: number; games: ownedgame[] }> {
    return super.request(
      `${super.link}GetOwnedGames/v1/?key=${super.key}&steamid=${new SteamID(
        steamid,
      )}&include_appinfo=${include_appinfo}&include_played_free_games=${include_played_free_games}&appids_filter=${appids_filter}&include_free_sub=${include_free_sub}&skip_unvetted_apps=${skip_unvetted_apps}&language=${language}&include_extended_appinfo=${include_extended_appinfo}`,
    );
  }

  public GetSteamLevel(steamid: string): Promise<{ player_level: number }> {
    return super.request(
      `${super.link}GetSteamLevel/v1/?key=${super.key}&steamid=${new SteamID(
        steamid,
      )}`,
    );
  }

  public GetBadges(steamid: string): Promise<{ badges: badges }> {
    return super.request(
      `${super.link}GetBadges/v1/?key=${super.key}&steamid=${new SteamID(
        steamid,
      )}`,
    );
  }

  public GetCommunityBadgeProgress(
    steamid: string,
    badgeid = 0,
  ): Promise<{ quests: quest[] }> {
    return super.request(
      `${super.link}GetCommunityBadgeProgress/v1/?key=${super.key}&steamid=${new SteamID(
        steamid,
      )}&badgeid=${badgeid}`,
    );
  }
}
