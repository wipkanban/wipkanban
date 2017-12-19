First of all we are very happy that you are wanting to contribute to WipKanban. Thank you!!

### [Code of Conduct](https://github.com/wipkanban/wipkanban/blob/master/CODE_OF_CONDUCT.md)

WipKanban has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://github.com/wipkanban/wipkanban/blob/master/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### Open Development

All work on WipKanban happens directly on [GitHub](https://github.com/wipkanban/wipkanban). Both core team members and external contributors send pull requests which go through the same review process.

### Branch Organization

We will do our best to keep the [`master` branch](https://github.com/wipkanban/wipkanban/tree/master) in good shape, with tests passing at all times. But in order to move fast, we will make API changes that your application might not be compatible with.

If you send a pull request, please do it against the `master` branch. We maintain stable branches for major versions separately but we don't accept pull requests to them directly. Instead, we cherry-pick non-breaking changes from master to the latest stable major version.

### Semantic Versioning

WipKanban follows [semantic versioning](http://semver.org/). We release patch versions for bugfixes, minor versions for new features, and major versions for any breaking changes.

We tag every pull request with a label marking whether the change should go in the next [patch](https://github.com/wipkanban/wipkanban/pulls?q=is:open+is:pr+label:semver-patch), [minor](https://github.com/wipkanban/wipkanban/pulls?q=is:open+is:pr+label:semver-minor), or a [major](https://github.com/wipkanban/wipkanban/pulls?q=is:open+is:pr+label:semver-major) version. We release new patch versions every few weeks, minor versions every few months, and major versions one or two times a year.

Every significant change is documented in the [changelog file](https://github.com/wipkanban/wipkanban/blob/master/CHANGELOG.md).

### Bugs

#### Where to Find Known Issues

We are using [GitHub Issues](https://github.com/wipkanban/wipkanban/issues) for our public bugs. We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn't already exist.

#### Reporting New Issues

The best way to get your bug fixed is to provide a reduced test case. Use [JSFiddle](https://jsfiddle.net), is a great tool.

### Proposing a Change

If you intend to change the public API, or make any non-trivial changes to the implementation, we recommend [filing an issue](https://github.com/wipkanban/wipkanban/issues/new). This lets us reach an agreement on your proposal before you put significant effort into it.

If you're only fixing a bug, it's fine to submit a pull request right away but we still recommend to file an issue detailing what you're fixing. This is helpful in case we don't accept that specific fix but want to keep track of the issue.

### Your First Pull Request

Working on your first Pull Request? You can learn how from this free video series:

**[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)**

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don't accidentally duplicate your effort.

If somebody claims an issue but doesn't follow up for more than two weeks, it's fine to take over it but you should still leave a comment.

### Sending a Pull Request

We will is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request,** please make sure the following is done:

1. Fork [the repository](https://github.com/wipkanban/wipkanban) and create your branch from `master`.
2. Run `npm install` in the repository root.
3. Rename `.env-template` to `.env` and complete it. It is necessary to the backend tests.
4. If you've fixed a bug or added code that should be tested, add tests!
5. Ensure the test suite passes (`npm test`).
6. Format your code with [prettier](https://github.com/prettier/prettier) (`npm run prettier`).
7. Make sure your code lints (`npm run lint`).
8. If you haven't already, agrree the CLA.

### Contributor License Agreement (CLA)

In order to accept your pull request, we need you to submit a CLA. You only need to do this once, so if you've done this for another Facebook open source project, you're good to go. If you are submitting a pull request for the first time, just let us know that you have completed the CLA and we can cross-check with your GitHub username.

**[Complete your CLA here.](https://cla-assistant.io/wipkanban/wipkanban)**

### Contribution Prerequisites
* You have [Node](https://nodejs.org) installed at v7.0.0+.
* You have `gcc` installed or are comfortable installing a compiler if needed. Some of our dependencies may require a compilation step. On OS X, the Xcode Command Line Tools will cover this. On Ubuntu, `apt-get install build-essential` will install the required packages. Similar commands should work on other Linux distros. Windows will require some additional steps, see the [`node-gyp` installation instructions](https://github.com/nodejs/node-gyp#installation) for details.
* You have [mongoDB](https://www.mongodb.com) installed at v3.6.0+.
* You are familiar with Reactjs ecossystem, Expressjs, Mongodb and Git.

### Development Workflow

After cloning React, run `npm install` to fetch its dependencies.
Then, you can run several commands:

* `npm run lint` checks the code style.
* `npm test` runs the complete test suite backend api and frontend.
* `npm run prettier` to format your code.
* `npm run analyze` to generate [webpack bundle analyze](https://github.com/webpack-contrib/webpack-bundle-analyzer).
* `npm run apidoc` to generate api documentation. To access go to `apidoc/index.html`.
* `npm run check` to verify if your dependences are updated.
* `npm build` creates a `build` folder with all the code to production.

We recommend running `npm test` to make sure you don't introduce any regressions as you work on your change..

We still require that your pull request contains unit tests for any new functionality. This way we can ensure that we don't break your code in the future.

### Style Guide

We use an automatic code formatter called [Prettier](https://prettier.io/).
Run `npm run prettier` after making any changes to the code.

Then, our linter will catch most issues that may exist in your code.
You can check the status of your code styling by simply running `npm run lint`.

However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at [Airbnb's Style Guide](https://github.com/airbnb/javascript) will guide you in the right direction.

### License

By contributing to WipKanban, you agree that your contributions will be licensed under its [MIT license](https://github.com/wipkanban/wipkanban/blob/master/LICENSE) 
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://github.com/wipkanban/wipkanban/blob/master/LICENSE).
