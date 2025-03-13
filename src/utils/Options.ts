/**
 * The main Options that are given when
 * initiating an `stapil` object.
 */
export class Options {
  #key: string | undefined;

  constructor(key?: string) {
    if (key != undefined) {
      this.#key = key;
    }
  }

  public get key(): string | undefined {
    return this.#key;
  }

  public toString(args: object): string {
    const array = [];
    if (this.#key != undefined) {
      array.push(`key=${this.#key}`);
    }
    for (const [key, value] of Object.entries(args)) {
      if (Array.isArray(value)) {
        array.push(`${key}=${value.map((v) => String(v)).join(",")}`);
      }
      array.push(`${key}=${value}`);
    }
    if (array.length == 0) return "";
    return "?" + array.join("&");
  }
}
