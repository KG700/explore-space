import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { IState } from './reducer';

export const SELECT = 'SELECT';
export const SHOW_ROCKETS = 'SHOW_ROCKETS'

const saveRockets = ( rockets: any ) => {
    return {
        type: SHOW_ROCKETS,
        rockets: rockets
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

export const select = ( id: string ) => {
    return {
        type: SELECT,
        id: id
    }
};