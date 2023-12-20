import { Base, SteamID } from "./_base.ts";

interface gameachievement {
  name: string;
  percentage: number;
}

interface achievementpercentages {
  achievements: gameachievement[];
}

interface playerachievement {
  apiname: string;
  achieved: number;
  unlocktime: number;
  name: string;
  description: string;
}

interface simpleplayerachievement {
  name: string;
  achieved: number;
}

interface playerstats {
  steamID: string;
  gameName: string;
  achievements: playerachievement[] | simpleplayerachievement[];
  success: boolean;
}

interface achievementstats {
  name: string;
  defaultvalue: number;
  displayname: string;
  hidden: number;
  desciption: string;
  icon: string;
  icongray: string;
}

interface gamestats {
  achievements: achievementstats[];
}

interface game {
  gameName: string;
  gameVersion: string;
  availableGameStats: gamestats;
}

export class UserStats extends Base {
  constructor(key: string) {
    super(key, "http://api.steampowered.com/ISteamUserStats/");
  }

  public GetGlobalAchievementPercentagesForApp(
    gameid: number,
  ): Promise<{ achievementpercentages: achievementpercentages }> {
    return super.request(
      `${super.link}GetGlobalAchievementPercentagesForApp/v2/?gameid=${gameid}`,
    );
  }

  public GetNumberOfCurrentPlayers(
    appid: number,
  ): Promise<{ player_count: number; result: number }> {
    return super.request(
      `${super.link}GetNumberOfCurrentPlayers/v1/?appid=${appid}`,
    );
  }

  public GetPlayerAchievements(
    steamid: string,
    appid: number,
    language = "en",
  ): Promise<{ playerstats: playerstats }> {
    return super.request(
      `${super.link}GetPlayerAchievements/v1/?key=${super.key}&steamid=${new SteamID(
        steamid,
      )}&appid=${appid}&l=${language}`,
    );
  }

  public GetSchemaForGame(
    appid: number,
    language = "en",
  ): Promise<{ game: game }> {
    return super.request(
      `${super.link}GetSchemaForGame/v2/?key=${super.key}&appid=${appid}&l=${language}`,
    );
  }

  public GetUserStatsForGame(
    steamid: string,
    appid: number,
  ): Promise<{ playerstats: playerstats }> {
    return super.request(
      `${super.link}GetUserStatsForGame/v2/?key=${super.key}&steamid=${new SteamID(
        steamid,
      )}&appid=${appid}`,
    );
  }
}
