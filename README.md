# major-minor-tag-calculator GitHub Action

[![build-test](https://github.com/manics/action-ansible-molecule-list-scenarios/workflows/build-test/badge.svg)](https://github.com/manics/action-ansible-molecule-list-scenarios/actions)

List [Ansible Molecule](https://molecule.readthedocs.io/) scenarios in a repository.

This will return a list of scenarios as an action output that can be fed to another job.

## Optional parameters

- `subdir`: The subdirectory containing the `molecule` directory, default is the top-level of the repository.

## Example

```yaml
TODO
```

## Developer notes

Install the dependencies:

```bash
$ npm install
```

Build the typescript, run the formatter and linter:

```bash
$ npm run build && npm run format && npm run lint
```

Package the code for distribution (uses [ncc](https://github.com/zeit/ncc)):

```bash
$ npm run package
```

This is required because JavaScript GitHub actions must be self contained with all their dependencies.

Run the tests :heavy_check_mark:

```bash
$ npm test
```

Shortcut:

```bash
$ npm run all
```

Actions are run from GitHub repos so you must checkin the packed `dist` folder:

```bash
$ npm run all
$ git add dist
$ git commit
$ git push origin main
```

The CI check will fail if the `dist` directory is not up to date.
