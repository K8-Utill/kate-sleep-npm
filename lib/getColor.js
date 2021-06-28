const fetch = require('node-fetch');

/**
 * @param {number} id
 * @returns If the request was successful
 */

module.exports = async id => {
	if (!id)
		return {
			successful: false,
			message: 'No panel id was passed',
		};

	const kateRequest = await fetch(`https://kate.rest/control/panels/color/${id}`);

	if (kateRequest.status !== 200)
		return {
			successful: false,
			...JSON.parse(await kateRequest.text()),
		};
	return {
		successful: true,
		message: JSON.parse(await kateRequest.text()),
	};
};
