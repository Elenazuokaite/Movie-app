let bookmarks = localStorage.getItem('bookmarks');
bookmarks = bookmarks ? JSON.parse(bookmarks) : [];
// listeners turi gauti isbaigtus duomenis ir zinoti kaip interpretuoti, visada naujas objektas
const INITIAL_STATE = { 
    api_key: '969a0dc3',
    input: '',
    movie: {},
    bookmarks: bookmarks
 };

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_SEARCH":
            return {...state, input: action.payload};
        case "ADD_MOVIE":
            return { ...state, movie: action.payload };
        case "ADD_BOOKMARK":
            return { ...state, movie: action.payload };
        default:
            return state;
    }
};

export default reducer;