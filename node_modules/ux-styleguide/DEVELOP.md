# Building and running ux-styleguide

This document describes how to set up your development environment to build and run `ux-styleguide`.
It also explains the basic mechanics of using `git`, `node`, `yarn`, and `gulp`.

* [Prerequisites](#prerequisites)
* [Getting the Sources](#getting-the-sources)
* [Installing NPM Modules](#installing-npm-modules)
* [Building](#building)
* [Running Locally](#running-locally)

See the [contribution guidelines](https://github.homedepot.com/ux/ux-styleguide/blob/master/CONTRIBUTING.md) if you'd like to contribute.

## Prerequisites

Before you can build and run, you must install and configure the following products on your development machine:

* [Git](http://git-scm.com) and/or the **GitHub app** (for [Mac](http://mac.github.com) or
  [Windows](http://windows.github.com)); [GitHub's Guide to Installing
  Git](https://help.github.com/articles/set-up-git) is a good source of information.

* [Node.js](http://nodejs.org), (version specified in the engines field of [`package.json`](../master/package.json)) which is used to run a development web server,
  run tests, and generate distributable files.
    * Ensure to point NPM to the Home Depot artifactory: 
    ```shell
    npm config set registry https://npm.artifactory.homedepot.com/artifactory/api/npm/npm
    ```

* [Yarn](https://yarnpkg.com) (version specified in the engines field of [`package.json`](../master/package.json)) which is used to install dependencies.

## Getting the Sources

Fork and clone the repository:

1. Login to your GitHub account.
2. [Fork](http://help.github.com/forking) the [repository](https://github.homedepot.com/ux/ux-styleguide).
3. Clone your fork of the repository and define an `upstream` remote pointing back to the main repository that you forked in the first place.

```shell
# Clone your GitHub repository:
git clone https://github.homedepot.com/ux/ux-styleguide.git

# Go to the ux-styleguide directory:
cd ux-styleguide

# Add the main repository as an upstream remote to your repository:
git remote add upstream https://github.homedepot.com/ux/ux-styleguide.git
```
## Installing NPM Modules

Next, install the JavaScript modules needed to build and run:

```shell
# Install project dependencies (package.json)
yarn install
```

## Building

```shell
gulp
```

* Results are put in the dist folder.

## Running Locally

```shell
gulp watch
```

* Open the index.html page to view working examples
