#!/usr/bin/env node

const cli = require('./utils/cli');
const PricelabCli = require('./PricelabCli');

const flags = cli.flags;

const initaiteCli = async () => {
	const { address, pageSize } = flags;

	console.log("Welcome to Pricelab's CLI");
	new PricelabCli({ address, pageSize }).init();
};

initaiteCli();
