import * as actionTypes from './actions';

interface Action {
    type: string,
    id?: string,
    rockets?: any,
    dragons?: any
}

export interface IState {
    selected: string,
    rockets: any[],
    dragons: any[],
    selectedRocket: any
}

const initialState: IState = {
    selected: 'rocket',
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
                selected: 'rocket'
            }
        case actionTypes.SHOW_DRAGONS:
            return {
                ...state,
                dragons: action.dragons,
                selected: 'dragon'
            }

    }
    return state;
}

export default reducer;