import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { IState } from './reducer';

export const SELECTED_ROCKET = 'SELECTED_ROCKET';
export const SELECTED_DRAGON = 'SELECTED_DRAGON';
export const SHOW_ROCKETS = 'SHOW_ROCKETS';
export const SHOW_DRAGONS = 'SHOW_DRAGONS';

const saveRockets = ( rockets: any ) => {
    return {
        type: SHOW_ROCKETS,
        rockets: rockets
    }
}

const saveDragons = ( dragons: any ) => {
    return {
        type: SHOW_DRAGONS,
        dragons: dragons
    }
}

export const showRockets = () => {
    return (dispatch: ThunkDispatch<IState, void, Action>) => {
        axios.get('/rockets')
            .then(response => {
                dispatch(saveRockets(response.data))
            });
    }
}

export const showDragons = () => {
    return (dispatch: ThunkDispatch<IState, void, Action>) => {
        axios.get('/dragons')
            .then(response => {
                dispatch(saveDragons(response.data))
            });
    }
}

export const selectedRocket = ( id: string ) => {
    return {
        type: SELECTED_ROCKET,
        id: id
    }
};

export const selectedDragon= ( id: string ) => {
    return {
        type: SELECTED_DRAGON,
        id: id
    }
};