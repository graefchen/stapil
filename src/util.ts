/**
 * @async
 * @function SteamWebApiRequest
 * @param link
 * @returns
 */
export async function SteamWebApiRequest(link: string) {
  const res = await fetch(link);
  if (res.status != 200) {
    // If it is an 401 error:
    if(res.status == 401) {
      // turn string into tokens
      let text = await res.text();
      text = text.replaceAll("<", " ")
      text = text.replaceAll(">", " ");
      text = text.replaceAll("  ", " ");
      const array = text.split(" ");
      // get the position of a specific token
      const p = array.indexOf("pre") + 1;
      const para = array[p].replace("=", "");
      return new Error(`Access is denied. Please verify your '${para}' parameter.`);
    }
    return new Error(`Something went wrong and the reqest returned with the status: "${res.status}" and statusText: "${res.statusText}".`);
  }
  const data = await res.json();
  return data.response != undefined ? data.response : data;
}

/**
 * @function CheckValidSteamID
 * @param id 
 * @returns 
 */
export function CheckValidSteamID(id: bigint) {
  if (id.toString().length != 17) {
    return new Error("The given 'SteamID' is not a valid 'SteamID'");
  }
}
