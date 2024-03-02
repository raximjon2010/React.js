import { data } from "../../components/mock"

export const initial  = data

export const Reduce = (state, {type, payload}) => {
    switch(type) {
        case 'delete' : return state.filter((val) => val.id !== payload)
        default : state
    } 
}