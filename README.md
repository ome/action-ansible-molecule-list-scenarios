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

This is a self-contained javascript action.
No bundling step is required.
