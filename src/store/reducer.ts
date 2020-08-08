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
    selectedRocket: any
}

const initialState: IState = {
    selected: SpaceShips.BLANK,
    rockets: [],
    dragons: [],
    selectedRocket: {}
}

const reducer = (state = initialState, action: Action) => {
    console.log(state);
    console.log(action)
    switch (action.type) {
        case actionTypes.SELECT:
            const selectedRocket = state.rockets.filter((rocket) => rocket.rocket_name === action.id)[0]
            return {
                ...state,
                selectedRocket: selectedRocket
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