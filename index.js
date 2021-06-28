global.isSleeping = false; // can use the variable anywhere
global.isCozy = false;

const kate = {
	sleep: require('./lib/sleep'),
	wake: require('./lib/wake'),
	meth: require('./lib/meth'),
	sleepover: require('./lib/sleepover'),
	say: require('./lib/say'),
	color: require('./lib/color'),
	get isSleeping() {
		return global.isSleeping;
	},
	get isCozy() {
		return global.isCozy;
	},
};

module.exports = kate;
