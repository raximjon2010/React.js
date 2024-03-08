
import {data} from '../utils/data'

export const initial = data

export const Param2 = (state, action) => {
    switch(action.type) {
        case 'delete' : return state.filter((value) => value.id !== action.payload);
        case 'fillter' : 
        const {key, qiymat} = action.payload
        let res = data.filter((value) => `${value[key]}`.includes(qiymat));
        return res
        default : state
    }
}
