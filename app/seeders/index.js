const productsSeeder = require("./products");
const basePath = require("#basePath");

const seeders = [
	productsSeeder.bind(null, 10),
];

(async () => {
	const {default: mongoDBConnect} = await import(`${basePath}/app/lib/mongodb.js`);
	const {default: chalk} = await import("chalk");

	await mongoDBConnect();

	console.log('Running Seeders');

	const startTime = Date.now();

	for (const seeder of seeders) {
		const startTime = Date.now();
		console.log(chalk.gray(`Running ${seeder.name}...`));
		await seeder();
		const tt = Date.now() - startTime;
		console.log(chalk.bgGreen.black('Done'), chalk.gray(`in ${ tt.toLocaleString() }ms`));
	}

	const tt = Date.now() - startTime;
	console.log(chalk.green('\nAll seeders ran successfully'));
	console.log(chalk.bgGray.black(`Took a total of ${ (tt/1000).toLocaleString() }s`));

	process.exit();
})();


