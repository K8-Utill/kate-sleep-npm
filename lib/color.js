const fetch = require('node-fetch');

/**
 * @param {{r: number, g: number, b: number}} color
 * @param {number} id
 * @returns If the request was successful
 */

module.exports = async (color, id) => {
	if (!id)
		return {
			successful: false,
			message: 'No panel id was passed',
		};

	if (!color || typeof color !== 'object') return { successful: false, message: 'No color passed' };
	const kateRequest = await fetch(`https://kate.rest/control/panels/color/${id}`, {
		method: 'POST',
		body: JSON.stringify(color),
		headers: { 'content-type': 'application/json' },
	});

	if (kateRequest.status !== 204)
		return {
			successful: false,
			...JSON.parse(await kateRequest.text()),
		};
	return {
		successful: true,
	};
};
