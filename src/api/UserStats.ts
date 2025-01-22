import { Options } from "../utils/Options.ts";
import { steamWebRequest } from "../utils/WebRequest.ts";
import { Link } from "../utils/Link.ts";

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

export interface playerStats<T> {
  steamID: string;
  gameName: string;
  achievements: T;
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

export class UserStats {
  #options: Options;
  baseLink = "http://api.steampowered.com/ISteamUserStats/";

  /** */
  constructor(key: string | undefined) {
    this.#options = new Options(key);
  }

  public getGlobalAchievementPercentagesForApp(args: {
    gameid: number,
  }
  ): Promise<{ achievementpercentages: achievementPercentages }> {
    const link = new Link(
      this.baseLink,
      "GetGlobalAchievementPercentagesForApp/v2/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }

  public getNumberOfCurrentPlayers(
    args: {appid: number},
  ): Promise<{ player_count: number; result: number }> {
    const link = new Link(
      this.baseLink,
      "GetNumberOfCurrentPlayers/v1/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }

  public getPlayerAchievements( args: {
    steamid: string,
    appid: number,
    language?: string,}
  ): Promise<{ playerstats: playerStats<playerachievement[]> }> {
    const link = new Link(
      this.baseLink,
      "GetPlayerAchievements/v1/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }

  public getGameScheme(args: {
    appid: number,
    language?: string,
  }
  ): Promise<{ game: game }> {
    const link = new Link(
      this.baseLink,
      "GetSchemaForGame/v2/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }

  public getUserStatsForGame( args:{
    steamid: string,
    appid: number,}
  ): Promise<{ playerstats: playerStats<simplePlayerAchievement[]> }> {
    const link = new Link(
      this.baseLink,
      "GetUserStatsForGame/v2/",
      this.#options.toString(args),
    );

    return steamWebRequest(link);
  }
}
