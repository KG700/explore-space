# Explore Space 🚀

Explore the spaceships that we've sent up to space. Find out when they first launched, how much it cost and how heavy they are and more!

### Getting Started
Clone this repository
````
git clone git@github.com:KG700/explore-space.git
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


### Technology and Dependencies
This application has a React frontend with Typescript. Redux has been used for state management. The data is sourced from the [Space X's open API](https://docs.spacexdata.com/?version=latest) using axios to make the connection. The styling has been done using [Ant Design](https://ant.design/).

#### Dependencies:
- redux
- react-redux
- redux-thunk
- axios
- antd

### Future Improvements
#### Code Improvements
- To avoid duplicating code across components for specific spaceship types (rockets / dragons), refactor state to store both rockets and dragons in the same object. Will need to customise the key-values that are stored since rocket and dragons contain different types of details. To create list view, filter on rocket/dragon, and to display details view, filter on id. This will make the code slimmer, more DRY and more scalable.
- Replace type 'any' with specific type definitions.
- Add router application so url updates with /rockets or /dragons when selected.
- Update to only call api when page first loads, rather than everytime Rockets or Dragons are selected.

#### Design Improvements
- Make card size for each space ship list item a consistent dimension.
- Add a logo.
- Add a favicon.
- Format first flight dates to dd mmm yyyy format.
- Add pictures to the detail modals.
- Convert css files to modular style.

#### Test Improvements
- Learn how to test applications with redux using Jest and Enzyme, then test:
- [ ] App: WelcomeMessage displays when page is first loaded
- [ ] App: Rocket cards display when Rockets is selected
- [ ] App: Dragon cards display when Dragons is selected
- [ ] WelcomeMessage: when select in props is SpaceShips.BLANK message displays
- [ ] WelcomeMessage: when select in props is not SpaceShips.BLANK message does not display
- [ ] SpaceShipList: when SpaceShips.BLANK, SpaceShipList renders null
- [ ] SpaceShipList: when SpaceShips.ROCKET, SpaceShipList renders rockets in props
- [ ] SpaceShipList: when SpaceShips.DRAGON, SpaceShipList renders dragons in props
- [ ] RocketDetails: is visible when rocket object isn't empty and isVisible prop is true
- [ ] RocketDetails: is not visible when rocket object is empty
- [ ] RocketDetails: is not visible when isVisible is false
- [ ] DragonDetails: is visible when dragon object isn't empty and isVisible prop is true
- [ ] DragonDetails: is not visible when dragon object is empty
- [ ] DragonDetails: is not visible when isVisible is false
- [ ] Test actions and reducer