module.exports = () => {
	if (!isSleeping) return console.log('Kate is already awake!');
	console.log('You have awakened Kate 🌞!');
	isSleeping = false;
	isCozy = false;
	return 'You have awakened Kate 🌞! ';
};
