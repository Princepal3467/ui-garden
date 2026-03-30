## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

for checking node-v

for creating the react app

npm create react-app ui-garden
cd ui-garden

code .

for intall stroybook
npx storybook@latest init

for run storybook
npm run stroybook

for building docker
docker build -t ui-garden .

for docker run
docker run -p 8083:8083 ui-garden

NEW--

# UI Component Library - Assignment 13

## Description

This project is a React UI Component Library using Storybook with code quality enforcement using Husky and CI/CD using GitHub Actions.

---

## Features

- React Component Library
- Storybook UI
- Husky Pre-commit Hooks
- Prettier + ESLint + Tests enforcement
- GitHub Actions CI/CD pipeline
- Docker Production Build

---

## Husky (Pre-commit)

Husky ensures:

- Code is formatted using Prettier
- ESLint checks pass
- Tests pass

If any fail → commit is blocked

---

## GitHub Actions

Runs on every push:

- Prettier check
- ESLint check
- Tests

If any fail → build fails

---

## Docker Setup

### Build

docker build -t princepal_coding_assignment13 .

### Run

docker run -p 8018:8018 princepal_coding_assignment13

### Open

http://localhost:8018

---

## Technologies

- React
- Storybook
- Husky
- ESLint
- Prettier
- Jest
- Docker
- GitHub Actions

## Demo Steps

1. Break code → Husky blocks commit
2. Bypass Husky using --no-verify → push to GitHub
3. GitHub Actions fails
4. Fix code → commit and push
5. GitHub Actions passes
6. Run Docker and open localhost:8018
