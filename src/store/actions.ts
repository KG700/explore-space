export const SELECT = 'SELECT';

export const select = ( id: string ) => {
    return {
        type: SELECT,
        id: id
    }
};