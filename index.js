#!/usr/bin/env node

const cli = require('./utils/cli');
const PricelabCli = require('./PricelabCli');

const flags = cli.flags;

const initaiteCli = async () => {
	const { address, pageSize } = flags;

	console.log("Welcome to Pricelab's CLI");
	const cliInstance = new PricelabCli({ address, pageSize });
	cliInstance.init();
};

initaiteCli();
