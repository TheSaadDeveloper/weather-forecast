export const initialState ={
    weatherChange:null
}

const reducer = (state ,action) =>{
    switch(action.type){
        case 'WEATHER_CHANGE':
            return{
                ...state,
                weatherChange:action.weatherChange
            }
            default:
                return state;
    }
}

export default reducer