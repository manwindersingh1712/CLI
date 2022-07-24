const meow = require('meow');

const flags = {
	address: {
		type: `string`,
		alias: `a`,
		default: `chicago-illinois-united-states-of-america`,
		desc: `What is the address you want ?`
	},
	pageSize: {
		type: `number`,
		alias: `pg`,
		default: 50,
		desc: `What is the page size you want ?`
	}
};

module.exports = meow({ flags });
