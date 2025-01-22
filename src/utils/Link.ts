export class Link {
  #base: string;
  #extension: string;
  #query: string;

  constructor(base: string, extension: string, query: string) {
    this.#base = base;
    this.#extension = extension;
    this.#query = query;
  }

  public get base(): string {
    return this.#base;
  }

  public get extension(): string {
    return this.#extension;
  }

  public get query(): string {
    return this.#query;
  }

  public toString(): string {
    return this.#base + this.#extension + this.#query;
  }
}