import * as actionTypes from './actions';

interface Action {
    type: string,
    id?: string,
    rockets?: any,
    dragons?: any
}

export enum SpaceShips { BLANK, ROCKET, DRAGON }

export interface IState {
    selected: SpaceShips,
    rockets: any[],
    dragons: any[],
    selectedRocket: any,
    selectedDragon: any
}

const initialState: IState = {
    selected: SpaceShips.BLANK,
    rockets: [],
    dragons: [],
    selectedRocket: {},
    selectedDragon: {}
}

const reducer = (state = initialState, action: Action) => {

    switch (action.type) {
        case actionTypes.SELECTED_ROCKET:
            const selectedRocket = state.rockets.filter((rocket) => rocket.rocket_id === action.id)[0]
            console.log(selectedRocket);
            return {
                ...state,
                selectedRocket: selectedRocket
            }
        case actionTypes.SELECTED_DRAGON:
            const selectedDragon = state.dragons.filter((dragon) => dragon.id === action.id)[0]
            console.log(selectedDragon);
            return {
                ...state,
                selectedDragon: selectedDragon
            }
        case actionTypes.SHOW_ROCKETS:
            return {
                ...state,
                rockets: action.rockets,
                selected: SpaceShips.ROCKET
            }
        case actionTypes.SHOW_DRAGONS:
            return {
                ...state,
                dragons: action.dragons,
                selected: SpaceShips.DRAGON
            }

    }
    return state;
}

export default reducer;