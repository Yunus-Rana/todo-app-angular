# Todo App

A simple Angular todo application for creating, tracking, and managing daily tasks. The app supports adding a task title and due time, marking tasks as complete, and deleting tasks from the list.

## Features

- Add a new task with a title and optional due time
- Mark tasks as complete or incomplete
- Delete tasks from the list
- View an empty-state message when no tasks exist
- Built with Angular 22 and TypeScript

## Tech Stack

- Angular 22
- TypeScript
- RxJS
- SCSS
- npm

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js 20 or later
- npm 10 or later

## Installation

```bash
git clone <your-repository-url>
cd todo-app
npm install
```

## Run the app

Start the development server:

```bash
npm start
```

Then open your browser at:

```text
http://localhost:4200/
```

The app will automatically reload when you change source files.

## Build for production

Create a production build:

```bash
npm run build
```

The compiled files are generated in the `dist/` directory.

## Run tests

```bash
npm test
```

## Project structure

```text
todo-app/
├── src/
│   ├── app/
│   │   ├── app.html
│   │   ├── app.scss
│   │   ├── app.ts
│   │   └── app.spec.ts
│   ├── main.ts
│   ├── styles.scss
│   └── index.html
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── README.md
└── public/
```

## Credits

Built and maintained by [Yunus-Rana](https://github.com/Yunus-Rana/).

## License

This project is available for learning and personal use.

## Notes

This app is intentionally lightweight and is a good starting point for expanding into features like:

- task editing
- localStorage persistence
- filtering by status
- categories and priority labels
- drag-and-drop organization
