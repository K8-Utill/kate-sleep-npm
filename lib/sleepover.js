/**
 * @param {Object} opts - Stuff for Kate.
 * @param {(['Cynthia'|'Ben'|'Alice'|'Joakim'|'Emma'|'Aetheryx'|'Olykir']|'Cynthia'|'Ben'|'Alice'|'Joakim'|'Emma'|'Aetheryx'|'Olykir')} [opts.invited] - Invited people to the sleepover.
 * @param {Boolean} [opts.cozyBeds] - Should Kate and crew sleep in cozy beds
 */

module.exports = opts => {
	if (isSleeping) return `Zzz, Kate is sleeping ${isCozy ? 'and cozy' : 'and not cozy'}`;
	let kateInfo = 'Zzz';
	if (!opts?.invited) {
		console.log("Can't have a sleepover alone!");
		return "Can't have a sleepover alone!";
	}
	if (opts?.invited) {
		if (Array.isArray(opts?.invited)) kateInfo += `, sleepover inlcuding ${opts?.invited.join(', ')}!`;
		else kateInfo += `, sleepover inlcuding ${opts?.invited}!`;
	}
	if (opts?.cozyBeds) {
		kateInfo += ', in a cozy beds';
		isCozy = true;
	}
	isSleeping = true;
	console.log(kateInfo);
	return kateInfo;
};
