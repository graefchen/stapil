import { SteamID } from "../utils/SteamID.ts";
import { WebApi } from "../utils/WebApi.ts";
import { steamWebRequest } from "../utils/WebRequest.ts";

export interface gameAchievement {
  name: string;
  percentage: number;
}

export interface achievementPercentages {
  achievements: gameAchievement[];
}

export interface playerachievement {
  apiname: string;
  achieved: number;
  unlocktime: number;
  name: string;
  description: string;
}

export interface simplePlayerAchievement {
  name: string;
  achieved: number;
}

export interface playerStats {
  steamID: string;
  gameName: string;
  achievements: playerachievement[] | simplePlayerAchievement[];
  success: boolean;
}

export interface achievementStats {
  name: string;
  defaultvalue: number;
  displayname: string;
  hidden: number;
  desciption: string;
  icon: string;
  icongray: string;
}

export interface gameStats {
  achievements: achievementStats[];
}

export interface game {
  gameName: string;
  gameVersion: string;
  availableGameStats: gameStats;
}

export class UserStats extends WebApi {
  GetSchemaForGame(skyrim_appid: number) {
    throw new Error("Method not implemented.");
  }
  constructor(key: string) {
    super(key, "http://api.steampowered.com/ISteamUserStats/");
  }

  public getGlobalAchievementPercentagesForApp(
    gameid: number,
  ): Promise<{ achievementpercentages: achievementPercentages }> {
    return steamWebRequest(
      `${super.link}GetGlobalAchievementPercentagesForApp/v2/?gameid=${gameid}`,
    );
  }

  public getNumberOfCurrentPlayers(
    appid: number,
  ): Promise<{ player_count: number; result: number }> {
    return steamWebRequest(
      `${super.link}GetNumberOfCurrentPlayers/v1/?appid=${appid}`,
    );
  }

  public getPlayerAchievements(
    steamid: string,
    appid: number,
    language = "en",
  ): Promise<{ playerstats: playerStats }> {
    return steamWebRequest(
      `${super.link}GetPlayerAchievements/v1/?key=${super.key}&steamid=${new SteamID(
        steamid,
      )}&appid=${appid}&l=${language}`,
    );
  }

  public getGameScheme(
    appid: number,
    language = "en",
  ): Promise<{ game: game }> {
    return steamWebRequest(
      `${super.link}GetSchemaForGame/v2/?key=${super.key}&appid=${appid}&l=${language}`,
    );
  }

  public getUserStatsForGame(
    steamid: string,
    appid: number,
  ): Promise<{ playerstats: playerStats }> {
    return steamWebRequest(
      `${super.link}GetUserStatsForGame/v2/?key=${super.key}&steamid=${new SteamID(
        steamid,
      )}&appid=${appid}`,
    );
  }
}
