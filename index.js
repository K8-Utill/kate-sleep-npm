global.isSleeping = false; // can use the variable anywhere

const kate = {
	sleep: require('./lib/sleep'),
	wake: require('./lib/wake'),
	meth: require('./lib/meth')
};

module.exports = kate;