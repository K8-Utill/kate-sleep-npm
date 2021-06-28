global.isSleeping = false; // can use the variable anywhere
global.isCozy = false;

const stuffForKate = require('./lib');

const kate = {
	sleep: stuffForKate.sleep,
	wake: stuffForKate.wake,
	meth: stuffForKate.meth,
	sleepover: stuffForKate.sleepover,
	say: stuffForKate.say,
	color: stuffForKate.color,
	kate: stuffForKate.kate,
	layout: stuffForKate.layout,
	getColor: stuffForKate.getColor,
	get isSleeping() {
		return global.isSleeping;
	},
	get isCozy() {
		return global.isCozy;
	},
};

module.exports = kate;
