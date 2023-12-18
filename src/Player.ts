import { Base, SteamID } from "./_base.ts";

export class Player extends Base {
  /** */
  constructor(key: string) {
    super(key, "http://api.steampowered.com/IPlayerService/");
  }

  public IsPlayingSharedGame(
    steamid: SteamID,
    appid_playing: number,
  ) {
    return super.request(
      `${super.link}IsPlayingSharedGame/v1/?key=${super.key}&steamid=${steamid.id}&appid_playing=${appid_playing}`,
    );
  }

  public GetRecentlyPlayedGames(
    steamid: SteamID,
    count = 0,
  ) {
    return super.request(
      `${super.link}GetRecentlyPlayedGames/v1/?key=${super.key}&steamid=${steamid.id}&count=${count}`,
    );
  }

  public GetOwnedGames(
    steamid: SteamID,
    include_appinfo = false,
    include_played_free_games = false,
    appids_filter = 0,
    include_free_sub = false,
    skip_unvetted_apps = false,
    language = "en",
    include_extended_appinfo = false,
  ) {
    return super.request(
      `${super.link}GetOwnedGames/v1/?key=${super.key}&steamid=${steamid.id}&include_appinfo=${include_appinfo}&include_played_free_games=${include_played_free_games}&appids_filter=${appids_filter}&include_free_sub=${include_free_sub}&skip_unvetted_apps=${skip_unvetted_apps}&language=${language}&include_extended_appinfo=${include_extended_appinfo}`,
    );
  }

  public GetSteamLevel(steamid: SteamID) {
    return super.request(
      `${super.link}GetSteamLevel/v1/?key=${super.key}&steamid=${steamid.id}`,
    );
  }

  public GetBadges(steamid: SteamID) {
    return super.request(
      `${super.link}GetBadges/v1/?key=${super.key}&steamid=${steamid.id}`,
    );
  }

  public GetCommunityBadgeProgress(
    steamid: SteamID,
    badgeid = 0,
  ) {
    return super.request(
      `${super.link}GetCommunityBadgeProgress/v1/?key=${super.key}&steamid=${steamid.id}&badgeid=${badgeid}`,
    );
  }
}
