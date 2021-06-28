const fetch = require('node-fetch');

/**
 * @param {String} color
 * @returns If the request was successful
 */

module.exports = async color => {
	if (!color || typeof color !== 'string') return false;
	const kateRequest = await fetch('https://kate.rest/color', {
		method: 'POST',
		body: JSON.stringify({ color }),
		headers: { 'content-type': 'application/json' },
	});

	if (kateRequest.status !== 200) return false;
	return true;
};
