const reset = "\u001B[0m";
const bold = "\u001B[1m";
const red = "\u001B[31m";
const green = "\u001B[32m";
const yellow = "\u001B[33m";

export class Log {

	static failure(message) {
		console.log(`${red}${message}${reset}`);
	}

	static success(message) {
		console.log(`${green}${message}${reset}`);
	}

	static info(message) {
		console.log(`${yellow}${message}${reset}`);
	}
	
}

function assert(condition) {
	if (condition) {
		return true;
	}
	return false;
}

class TestSuite {
	constructor(suite_name) {
		this.suite_name;
		Log.info(`-> Suite: ${bold}${suite_name}${reset}`);
	}
	
	runTest(name, condition) {
		if(assert(condition)) {
			Log.success(`   + Passed: ${bold}${yellow}${name}${reset}`);
		} else {
			Log.failure(`   - Failed: ${bold}${yellow}${name}${reset}`);
		}
	}
}

export { TestSuite };