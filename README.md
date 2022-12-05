# Hanna code documentation server

This webserver contains multiple sets of (versioned) documentations for various
coding layers of the Hanna, Reykjavík's design system.

This server is hosted at <https://hanna-docs.reykjavik.is>.

Its contents are static builds made from within the
[hanna monorepo](https://github.com/rvk-utd/hanna).

## Start the server

1. Clone the project repo
2. Make sure `yarn` (version `>=1.22`) is installed.
3. `yarn install`
4. `yarn run start`

This starts a lightweight, static HTTP file-server on port `3000`
