import { Stapil } from "./src/Stapil.ts";

// getting the steam id
const id =
  (JSON.parse(await Deno.readTextFile("./secret.json"))).steam.steam_id;

const stapil = new Stapil(id);
console.log(stapil);
