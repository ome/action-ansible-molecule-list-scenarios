const globby = require("globby");
const path = require("path");

let listscenarios = async function (subdir) {
  const moleculedir = path.posix.join(subdir, "molecule");
  const molecule_ymls = await globby(
    path.posix.join(moleculedir, "*", "molecule.yml")
  );
  const scenarios = molecule_ymls.map((p) => path.basename(path.dirname(p)));
  return scenarios;
};

module.exports = listscenarios;
