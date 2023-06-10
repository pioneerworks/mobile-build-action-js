const core = require('@actions/core');
const validate_input = require('./validate_input');
const get_next_version = require('./get_next_version'); 

async function run() {
  try {
    const previousVersion = core.getInput('previousVersion');
    core.info(`Got ${previousVersion} as previous version...`);

    core.debug((new Date()).toTimeString()); 

    await validate_input(previousVersion);
    core.info((new Date()).toTimeString());
    const result = await get_next_version(previousVersion);
    console.log(result);
    core.setOutput('nextVersion', result); 
} catch (error) {
   console.log(core.input) 
   core.setFailed(error.message);
  }
}

run();
