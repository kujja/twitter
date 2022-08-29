export const initialState ={
    user: null,
     playlists: [],
    playing: false,
    item: null,
    //  token:"BQAMkY9XcdvkycZUTyeAyK_glilyTsA8VVdlKIASb9P2qeH5zx8blqRND6ZZ4tQqCCjOotBZdBb5flqv7NSs0e1Gvuu-9sZ92cp6J2xuKI5QhxfKJJxFs_gUa5N3_K8_XGjdOZuYdkslsPTUODOUHbySvteOrGYdmkCEVvABXeGMdGKA68vJXUY9zPbPRkoW1xChbKH8pkOVxMxwB2CYrng"
};

const reducer = (state, action)=> {
console.log(action);

switch(action.type){
case 'SET_USER':
    return{
        ...state, 
        user:action.user

    };

    case 'SET_TOKEN':
    return{
        ...state,
        token: action.token
    };

    case 'SET_PLAYLISTS':
        return{
            ...state,
            playlists: action.playlists,
        };


        case 'SET_DISCOVER_WEEKLY':
            return{
                    ...state,
                    discover_weekly:action.discover_weekly,
            }


    default:
        return state;
}
}

export default reducer