class ISteamNews {

	/**
	 * @async
	 * @function GetNewsForApp - Version 1 - HTTP-Methode GET
	 * @param {uint32} appid - AppID to retrieve news for
	 * @param {uint32} maxlength - Maximum length for the content to return, if this is 0 the full content is returned, if it's less then a blurb is generated to fit.
	 * @param {uint32} enddate - Retrieve posts earlier than this date (unix epoch timestamp)
	 * @param {uint32} count - # of posts to retrieve (default 20)
	 * @param {string} tags - Comma-separated list of tags to filter by (e.g. 'patchnodes')
	 */
	static async GetNewsForApp(appid, maxlength = 0, enddate = Math.floor(Date.now() / 1000), count = 20, tags = "")
	{
		const link = `http://api.steampowered.com/ISteamNews/GetNewsForApp/v1/?appid=${appid}&maxlength=${maxlength}&enddate=${enddate}&count=${count}&tags=${tags}`;
		const res = await fetch(link);
		const data = await res.json();
		return data.response != undefined ? data.response : data;
	}

	/**
	 * @async
	 * @function GetNewsForApp - Version 2 - HTTP-Methode GET
	 * @param {uint32} appid - AppID to retrieve news for
	 * @param {uint32} maxlength - Maximum length for the content to return, if this is 0 the full content is returned, if it's less then a blurb is generated to fit.
	 * @param {uint32} enddate - Retrieve posts earlier than this date (unix epoch timestamp)
	 * @param {uint32} count - # of posts to retrieve (default 20)
	 * @param {string} feeds - Comma-separated list of feed names to return news for
	 * @param {string} tags - Comma-separated list of tags to filter by (e.g. 'patchnodes')
	 */
	static async GetNewsForApp_2(appid, maxlength = 0, enddate = Math.floor(Date.now() / 1000), count = 20, feeds = "", tags = "")
	{
		const link = `http://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=${appid}&maxlength=${maxlength}&enddate=${enddate}&count=${count}&feeds=${feeds}&tags=${tags}`;
		const res = await fetch(link);
		const data = await res.json();
		return data.response != undefined ? data.response : data;
	}

}

export { ISteamNews };
