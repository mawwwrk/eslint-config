# Mork's eslint config

## How to use

Clone this repo, `pnpm install`, then use `pnpm link` to link it to the project. Currently also requires installing all the plugins used as devDependencies.

Alternatively, could also run a registry container and install from there.

## A place to keep my eslint config under version control

- should just work with .js, .ts, and jsx/tsx files.
- has support for testing with jest.
- supports linting json and yaml files.
- to be used (preferably) with prettier

## To do

- make installable via npm
  1. add a way to make it easier to use this without having to install literally 20 plugin dependencies <https://github.com/eslint/eslint/issues/3458>
        - possible solutions:
            1. <https://github.com/mmkal/eslint-plugin-wrapper>
            2. manually load all the plugins from within this project and export as a object
  2. squash(?) commits from before pushing to github
