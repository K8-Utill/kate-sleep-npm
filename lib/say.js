const fetch = require('node-fetch');

/**
 * @param {String} text
 * @returns If the request was successful
 * @deprecated
 */

module.exports = async text => {
	return 'This no longer works because kate has removed this';
	if (!text || typeof text !== 'string') return false;
	const kateRequest = await fetch('https://kate.rest/say', {
		method: 'POST',
		body: JSON.stringify({ text }),
		headers: { 'content-type': 'application/json' },
	});

	if (kateRequest.status !== 200) return false;
	return true;
};
