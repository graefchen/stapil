// deno-lint-ignore-file no-explicit-any

import { Link } from "./Link.ts";

/**
 * @async
 * @function steamWebRequest
 * @param link
 * @returns
 */
// TODO: remove the lint line below and switch out the typeunsafe any
// for an typesafe unknown
export async function steamWebRequest(link: Link): Promise<any | Error> {
  const res = await fetch(link.toString());
  if (res.status != 200) {
    // If it is an 401 error:
    if (res.status == 401) {
      // turn string into tokens
      const text = await res.text();
      const array = text.replaceAll("<", " ")
        .replaceAll(">", " ")
        .replaceAll("  ", " ")
        .split(" ");
      // get the position of a specific token
      const position = array.indexOf("pre") + 1;
      const parameter = array[position].replace("=", "");
      return new Error(
        `Access is denied. Please verify your '${parameter}' parameter.`,
      );
    }
    return new Error(
      `Something went wrong and the request returned with the status: "${res.status}" and statusText: "${res.statusText}".`,
    );
  }
  const data = await res.json();
  return data.response != undefined ? data.response : data;
}
