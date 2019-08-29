## @0x/python-contract-wrappers

Python wrappers around the 0x smart contracts, generated using @0x/abi-gen.

The code generated by this package's `build` script is consumed by
`../../python-packages/contract_wrappers/setup.py`'s `pre_install` command.
The code generated by this package should not be used directly.

## Contributing

We welcome improvements and fixes from the wider community! To report bugs within this package, please create an issue in this repository.

Please read our [contribution guidelines](../../CONTRIBUTING.md) before getting started.

### Install dependencies

If you don't have yarn workspaces enabled (Yarn < v1.0) - enable them:

```bash
yarn config set workspaces-experimental true
```

Then install dependencies

```bash
yarn install
```

### Build

To build this package and all other monorepo packages that it depends on, run the following from the monorepo root directory:

```bash
PKG=@0x/python-contract-wrappers yarn build
```

### Clean

```bash
yarn clean
```