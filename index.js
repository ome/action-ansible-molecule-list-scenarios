const fs = require("fs");
const path = require("path");

// https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-commands-for-github-actions

async function run() {
  try {
    var scenarios = [];
    const subdir = (process.env["INPUT_SUBDIR"] || ".").trim();
    const moleculedir = path.posix.join(subdir, "molecule");
    const items1 = fs.readdirSync(moleculedir);
    items1.forEach((i) => {
      const pathi = path.posix.join(moleculedir, i);
      if (fs.statSync(pathi).isDirectory()) {
        const items2 = fs.readdirSync(pathi);
        items2.forEach((j) => {
          if (j == "molecule.yml") {
            if (!/^[\w][\w-]*$/.exec(i)) {
              throw `Unexpected scenario name: ${i}`;
            }
            scenarios.push(i);
          }
        });
      }
    });
    process.stdout.write(`Found scenarios ${scenarios}\n`);

    if (scenarios.length) {
      fs.appendFileSync(
        process.env.GITHUB_OUTPUT,
        `scenarios=${JSON.stringify(scenarios)}\n`
      );
    } else {
      throw "No scenarios found!";
    }
  } catch (error) {
    process.stdout.write(`::error ${error.toString()}\n`);
    process.exitCode = 1;
  }
}

run();
