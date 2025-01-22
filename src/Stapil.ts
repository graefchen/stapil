import { App } from "./api/App.ts";
import { News } from "./api/News.ts";
import { Player } from "./api/Player.ts";
import { User } from "./api/User.ts";
import { UserStats } from "./api/UserStats.ts";
import { Utils } from "./api/Util.ts";

export class Stapil {
  public player: Player;
  public apps: App;
  public news: News;
  public user: User;
  public stats: UserStats;
  public util: Utils;

  constructor(args: {key?: string}) {
    this.player = new Player(args.key);
    this.apps = new App(args.key);
    this.news = new News(args.key);
    this.user = new User(args.key);
    this.stats = new UserStats(args.key);
    this.util = new Utils(args.key);
  }
}
