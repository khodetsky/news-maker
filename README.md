# About

This is a news site. For convenience, read news can be deleted from the general list. The Material.UI library was used to stylize this site. The site also has an authentication page and the ability to change the language of the main page and navigation menu using the i18next library.

## Preparation.

1. Make sure you have the LTS version of Node.js installed on your computer.
   Install her, if necessary.
2. Clone this repository.
3. Install the project's base dependencies with the `npm install` command.
4. Start development mode by running `npm start`.
5. Open http://localhost:3000/news-maker/ to view it in the browser. The page
   will automatically reload if you make changes to the code. You will see the
   build errors and lint warnings in the console.
6. Command `npm test` runs the test watcher in an interactivemode. By default,
   runs tests related to files changed since the last commit.
7. Command `npm run build` builds the app for production to the build folder. It
   correctly bundles React in production mode and optimizes the build for the
   best performance. The build is minified and the filenames include the hashes.
   App is ready to be deployed.

## Live page

The production version of the project is automatically linted, built, and
deployed to GitHub Pages, in the gh-pages branch, every time the main branch is
updated. For example, after a direct push or an accepted pull request.

The live page can be viewed at "https://khodetsky.github.io/news-maker/".

## How it works

1. After each push to the `main` branch of the GitHub repository, a special
   script (GitHub Action) from `.github/workflows/deploy.yml` file.
2. All repository files are copied to the server where the project is
   initialized and passes linting and assembly before deployment.
3. If all steps were successful, the assembled production version of the project
   files goes to the `gh-pages` branch. Otherwise, in the execution log The
   script will indicate what the problem is.
