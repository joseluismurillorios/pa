## Prerequisites

- [Node 8.11.2](https://nodejs.org/fr/blog/release/v8.11.2/)

### Install Prerequisites (OSX, Linux)

- [nvm](https://github.com/nvm-sh/nvm)

Install

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

Load NVM

```sh
export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Install node version

```bash
nvm install 8.11.2
```

## Installation

Install depenndencies.

```bash
npm install
```

Run development server.

```bash
npm run dev
```

Build.

```bash
npm run build
```

## TODO:
- Add Rivescript
- A detailed user manual
- Add UI elements
- Integrate electron for desktop applications

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

<!-- ## License -->
<!-- [MIT](https://choosealicense.com/licenses/mit/) -->