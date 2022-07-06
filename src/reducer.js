export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //REMOVE AFTER FINISHED DEVELOPING
    token: 'BQB7fn-yJXTGBizc3gT2pkx0NYmMdBlFdRexy_cHLhwSDZViaLaSQOVduw16ZdXvB4s1BA6JGs0HxgcdZCh5rulXPGHjZlC-P3Pi76CKL7qfuPzTI6CQmYq527bGLP0ZqLJ9VyB8dFkHRb7RfF3WJ7FGlqCeEstqPl-SnncvDzqYpxc7TeOP8I-pgJhTgCpe3blRZ93XfSXW5zg8'
};  //like an empty data layer slide, initial data state which we are giving it

const reducer = (state, action) => {
    console.log(action);
    //Action -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        default:
            return state;
    }
}

export default reducer