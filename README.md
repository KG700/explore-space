# Explore SpaceX 🚀

Explore spaceships ... See a list of rockets and dragons. Click on each any to find out more about it.

### Getting Started
Clone this repository
````
git clone ...
````

Ensure you have [npm installed](https://www.npmjs.com/get-npm) and install dependencies
````
npm install
````

Start the server
````
npm start
````

Open http://localhost:3000/ in your browser to view the app

### Tech Stack and Dependencies
This application has a React frontend with Typescript. Redux has been used for state management.

#### Dependencies:
- redux
- react-redux
- redux-thunk
- axios
- antd

### Future Improvements
#### Code Improvements
- To avoid duplicating code across components for specific spaceship types (rockets / dragons), refactor state to store both rockets and dragons in the same object. Will need to customise the key-values that are stored since rocket and dragons contain different types of details. To create list view, filter on rocket/dragon, and to display details view, filter on id. This will make the code slimmer, more DRY and more scalable.
- Replace type 'any' with specific type definitions
- Add router application so url updates with /rockets or /dragons when selected.

#### Design Improvements
- Make card size for each space ship list item a consistent dimension
- Add a logo
- Add a favicon

#### Test Improvements

