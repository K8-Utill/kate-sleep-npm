const fetch = require('node-fetch');

/**
 * @returns Kates status
 */

module.exports = async () => {
	const kateRequest = await fetch('https://kate.rest/control/panels/layout');

	if (kateRequest.status !== 200)
		return {
			successful: false,
			...JSON.parse(await kateRequest.text()),
		};

	return { successful: true, message: JSON.parse(await kateRequest.text()) };
};
