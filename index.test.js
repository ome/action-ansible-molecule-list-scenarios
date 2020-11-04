const listscenarios = require("./listscenarios");
const os = require("os");

const fsify = require("fsify")({
  cwd: os.tmpdir(),
  persistent: false,
  force: true,
});

test("lists molecule scenarios", async () => {
  const structure = [
    {
      type: fsify.DIRECTORY,
      name: "root",
      contents: [
        {
          type: fsify.DIRECTORY,
          name: "molecule",
          contents: [
            {
              type: fsify.DIRECTORY,
              name: "scenario-dir",
              contents: [
                {
                  type: fsify.FILE,
                  name: "molecule.yml",
                  contents: "",
                },
              ],
            },
            {
              type: fsify.DIRECTORY,
              name: "other-dir",
              contents: [
                {
                  type: fsify.FILE,
                  name: "other.txt",
                  contents: "",
                },
              ],
            },
            {
              type: fsify.FILE,
              name: "other-file.txt",
              contents: "",
            },
          ],
        },
      ],
    },
  ];

  const scenarios = await fsify(structure)
    .then((structure) => {
      return structure[0].name;
    })
    .then((root) => {
      return listscenarios(root);
    });
  expect(scenarios).toEqual(["scenario-dir"]);
});
