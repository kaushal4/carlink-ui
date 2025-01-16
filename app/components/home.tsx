"use client"
import { Suspense, useReducer } from "react"
import FilterForm from "./filterform"
import CarList from "./carList"
import FilterList from "./filterList"

export interface FilterState {
    model: string,
    condition: string
}

export interface FilterAction {
    type: string,
    payload: FilterState
}


function filterReducer(state: FilterState, action: FilterAction): FilterState {
    if (action.type === "filterUpdate") {
        return {
            model: action.payload.model,
            condition: action.payload.condition
        }
    }
    return state
}

export default () => {
    const [formState, dispatch] = useReducer(filterReducer, {
        model: "none",
        condition: "none"
    })
    
    return (
        <div className="w-full flex">
            <div className="basis-1/4 flex justify-center"> 
                <FilterForm formState={formState} dispatch={dispatch} />
            </div>
            <div className="basis-3/4"> 
            <FilterList filters={formState}/>
            <CarList filters={formState}/>
            </div>
        </div>
    )
}