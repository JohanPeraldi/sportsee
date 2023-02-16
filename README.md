# Sportsee dashboard

## 1. Available Scripts

In the project directory, you can run `npm start` to run the app in the development mode.\
The Sportsee dashboard displays data from different user profiles, two "real" profiles with data fetched from a backend API which can also be run locally (see Section 2 below), and two "fake" profiles fetched from a local `src/data/mockedData.js` file. If the backend is run first, it should use port 3000 by default and this app will therefore not be able to run on that same port. An alternative port, such as port 3001, will be proposed instead. In that case, just type `y` when prompted and the project will open in a new browser window. If not, open [http://localhost:3001](http://localhost:3001) to view it in your browser.

## 2. Running the backend API

The backend linked to this project can be found here: [link to backend on GitHub](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).\
It should be downloaded and setup according to it's own README: [Backend README](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard/blob/master/README.md).

## 3. Switching between the real data and the mocked data

To switch between the real data fetched from the backend API (if it is running locally according to indications in Section 2 above) and the mocked data fetched from the `src/data/mockedData.js` file, you should create a `.env` file in the project's root directory and create an environment variable with the values indicated in the `.env.example` file.\
**IMPORTANT: Stop the app by typing `Control + C` and restart it with `npm start` every time you modify the environment variable for the change to take effect.**

## 4. Tools needed

The following tools are necessary to run this project:

- Node.js (this project was created using `Node.js version 16.14.2`);
- NPM (installed with Node.js);
- All dependencies listed in the package.json file (just run `npm install` after cloning the project).
