# Overview

A simple blog powered by a frontend single page application with backend serverless DynamoDB API

## Key Concepts

- JavaScript - By using JavaScript, we're unifying our development around one language for both backend and frontend
- [JSX](https://reactjs.org/docs/introducing-jsx.html) - This is a specific JavaScript file that allows HTML tags
  (such as React components) in a JavaScript file
- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)\/[TSX](https://www.typescriptlang.org/docs/handbook/jsx.html) - Our files are
  written in this. It's a JavaScript superset that adds static typing and strict
  syntactial support to our application. It's transcompiled into vanilla JavaScript behind the scenes.
- [NodeJS](https://nodejs.org/en/about/) - Node is JavaScript code that's stripped of all HTML and browser references that executes outside of a browser
- npm - Node Package Manager interacts with the npm repository and installs, upgrades, and removes NodeJS packages found
  in the `package.json` file. It can aslo run any script commands listed in the `scripts` tag of `package.json` such as
  `npm run offline`
- [Serverless (Concept)](https://serverless-stack.com/chapters/what-is-serverless.html): Traditionally, we deploy apis
  and websites to always running servers, even when no one is accessing the hosted content. With serverless computing
  platforms such as [AWS Lambda](https://aws.amazon.com/lambda/), the cloud provider provisions resources when your
  code is requested and then deallocates it when no longer needed. It's also scalable for the same reason.
  However, if the resource hasn't been access in some time, the next request will take a bit longer than normal
  (cold start) though it's possible to solve that problem via serverless framework plugins
- [Serverless Framework (npm package)](https://serverless.com/framework/docs/providers/aws/guide/intro/): This allows us
  to create simplified AWS CloudFormation templates for serverless function handlers and deploy them to AWS.
  Additionally, with plugins, we can run our code in an offline development environment and create small optimized builds
  with [tree shaking](https://webpack.js.org/guides/tree-shaking/)

## Goals

- Fully tested api using mocha
- Fully tested app using jest
- Hybrid local/online environment
- Shareable/Configurable (maybe make it an npm package)

## Why go through all this work?

It's the 21st century. It's easy to make a blog with content management systems like WordPress, Wix, and SquareSpace.
They're great approaches and do the job well. They may even be a better option to get started quick so you can post
content right away. I chose this approach for the following reasons:

- I really like serverless development
- I like the flexibility of using React components to create whatever I want without needing to learn how to plug it in
  to one of the aforementioned content management systems
- It's environmentally friendly since code runs on demand instead of being constantly provisioned
- It's cheaper since code runs on demand
- It's easy to test locally
- I wanted an excuse to program something cause it's really stimulating
- There's a good amount of documentation from the JavaScript community and AWS with examples of serverless development

## Getting Started

This assumes you're using [Visual Studio Code](https://code.visualstudio.com/Download) to setup your local development
environment and have the following installed:

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [npm](https://www.npmjs.com/get-npm)
- [Python 3](https://www.python.org/downloads/)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)

#### Clone this repository

From a terminal or shell, enter the following after changing to a directory of your choice

```shell script
git clone https://github.com/lahiyam/simple-blog.git
```

#### Open the project in a Visual Studio Code workspace

Create a new VSC workspace or open existing one.

Then, open the folder that was just created by git

#### Enable npm integration in VSC

From Visual Studio Code `Settings`, expand the `Extensions` tab and select `Npm`

Make sure `Enable Run From Folder` and `Enable Script Explorer` are checked. This will allow you to right click a folder
that contains a `package.json` file and instruct VSC to run a script that you choose. You'll also see a new tool window
called `NPM SCRIPTS` where you can run scripts found in any `package.json` files

#### Install NPM Dependencies

The `api` and `app` are in separate directories. You'll need to install dependencies for each directory.

Right click the `api` folder, select `Run NPM Script in Folder...` and select `install` in the following context menu.
Once the terminal completes installation, repeat the same for the `app` directory

### Make sure the API builds

Right click the `api` folder, select `Run NPM Script in Folder...` and select `offline` to launch an API Gateway server
on `http://localhost:3000/`

Once Serverless shows a message in the terminal that it's listening on `http://localhost:3000/`, open
http://localhost:3000/hello to make sure everything worked as expected

Any changes you make to `TypeScript (.ts)` files in the `api` directory will cause the application to automatically
(and quickly) rebuild so you can test changes immediately.

### Make sure the APP builds

Right click the `app` folder, select `Run NPM Script in Folder...` and select `start` to launch a local development
build. When prompted, allow React to run on a different port, enter `Y` and press enter.
Once it's ready, a new browser window should open to http://localhost:3001/ automatically

Any changes you make to the `app` directory will cause the application to automatically
(and quickly) rebuild as well as refresh the browser so you can test changes immediately. (Hot Reloading)

# External Documentation

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React](https://reactjs.org/docs/) - Single Page Application framework developed by Facebook
- [Reactstrap](https://reactstrap.github.io/components) - prebuilt JSX components
- [Bootstrap](https://getbootstrap.com/docs/4.4/layout/overview/) - for CSS class name helpers that can be applied to components
