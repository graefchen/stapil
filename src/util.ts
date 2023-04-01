/**
 *  @async 
 * @function steam_web_api_request
 * @param link 
 * @returns 
 */
export async function SteamWebApiRequest(link: string) {
  console.log(link);
  const res = await fetch(link);
  const data = await res.json();
  return data.response != undefined ? data.response : data;
}