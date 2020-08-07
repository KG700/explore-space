export const SELECT = 'SELECT';
export const SHOW_ROCKETS = 'SHOW_ROCKETS'

const saveRockets = () => {

}

export const showRockets = () => {
    return {
        type: SHOW_ROCKETS,
    }
}

export const select = ( id: string ) => {
    return {
        type: SELECT,
        id: id
    }
};