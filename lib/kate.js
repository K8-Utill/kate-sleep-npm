const fetch = require('node-fetch');

/**
 * @returns Kates status
 */

module.exports = async () => {
	const kateRequest = await fetch('https://kate.rest/kate/');

	if (kateRequest.status !== 200)
		return {
			successful: false,
			...JSON.parse(await kateRequest.text()),
		};

	return JSON.parse(await kateRequest.text());
};
