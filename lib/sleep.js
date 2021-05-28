/**
 * @param {Object} opts - Stuff for Kate.
 * @param {(['Baby Fox', 'Moose', 'Frog', 'Dog', 'Wolf']|'Baby Fox', 'Moose', 'Frog', 'Dog', 'Wolf')} [opts.stuffedAnimals] - Stuffed animals to help Kate sleep better.
 * @param {Boolean} [opts.cozyBed] - A cozy bed for Kate to sleep in
 */

module.exports = opts => {
	if (isSleeping) return `Zzz, Kate is Already sleeping ${isCozy ? 'and cozy' : 'and not cozy'}`;
	let kateInfo = 'Zzz';
	if (opts?.stuffedAnimals) {
		if (Array.isArray(opts?.stuffedAnimals)) kateInfo += `, sleeping with a ${opts?.stuffedAnimals.join(', ')}`;
		else kateInfo += `, sleeping with a ${opts?.stuffedAnimals}`;
	}
	if (opts?.cozyBed) {
		kateInfo += ', in a cozy bed';
		isCozy = true;
	}
	isSleeping = true;
	console.log(kateInfo);
	return kateInfo;
};
