const core = require("@actions/core");
const listscenarios = require("./listscenarios");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const scenarios = await listscenarios(core.getInput("subdir"));
    // const moleculedir = path.posix.join(core.getInput('subdir'), 'molecule');
    // const molecule_ymls = await globby(path.posix.join(moleculedir, '*', 'molecule.yml'));
    core.info(`Found scenarios ${scenarios}`);
    if (scenarios.length) {
      core.setOutput("scenarios", JSON.stringify(scenarios));
    } else {
      core.setFailed("No scenarios found!");
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
