import { Base, SteamID } from "./_base.ts";

export class UserStats extends Base {
  constructor(key: string) {
    super(key, "http://api.steampowered.com/ISteamUserStats/");
  }

  public GetGlobalAchievementPercentagesForApp(gameid: number) {
    return super.request(
      `${super.link}GetGlobalAchievementPercentagesForApp/v1/?gameid=${gameid}`,
    );
  }

  public GetGlobalAchievementPercentagesForAppV2(gameid: number) {
    return super.request(
      `${super.link}GetGlobalAchievementPercentagesForApp/v2/?gameid=${gameid}`,
    );
  }

  public GetNumberOfCurrentPlayers(appid: number) {
    return super.request(
      `${super.link}GetNumberOfCurrentPlayers/v1/?appid=${appid}`,
    );
  }

  public GetPlayerAchievements(
    steamid: SteamID,
    appid: number,
    language = "en",
  ) {
    return super.request(
      `${super.link}GetPlayerAchievements/v1/?key=${super.key}&steamid=${steamid.id}&appid=${appid}&l=${language}`,
    );
  }

  public GetSchemaForGame(appid: number, language = "en") {
    return super.request(
      `${super.link}GetSchemaForGame/v1/?key=${super.key}&appid=${appid}&l=${language}`,
    );
  }

  public GetSchemaForGameV2(appid: number, language = "en") {
    return super.request(
      `${super.link}GetSchemaForGame/v2/?key=${super.key}&appid=${appid}&l=${language}`,
    );
  }

  public GetUserStatsForGame(
    steamid: SteamID,
    appid: number,
  ) {
    return super.request(
      `${super.link}GetUserStatsForGame/v1/?key=${super.key}&steamid=${steamid.id}&appid=${appid}`,
    );
  }

  public GetUserStatsForGameV2(
    steamid: SteamID,
    appid: number,
  ) {
    return super.request(
      `${super.link}GetUserStatsForGame/v2/?key=${super.key}&steamid=${steamid.id}&appid=${appid}`,
    );
  }
}
