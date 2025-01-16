"use client"
import { ActionDispatch, useActionState } from "react";
import Button from "./button";
import { FilterAction, FilterState } from "./home";
import Dropdown from "./dropdown";

interface filterFormProps {
    formState: FilterState,
    dispatch: ActionDispatch<[action: FilterAction]>
}

const demoModels = ["honda", "toyota", "ford", "chevy"];
const demoContitions = ["good", "great", "bad"];

export default function FilterForm({formState, dispatch}:filterFormProps) {
    const [state, submitAction] = useActionState(
        async (_:FilterState , formData:FormData) => {
            const newFilters: FilterState = {model: String(formData.get("model")), condition: String(formData.get("condition"))};
            dispatch({type: "filterUpdate", payload: newFilters});
            return newFilters;
        }, formState
    )
    return (
        <form className="flex flex-col mt-3" action = {submitAction}>
            <Dropdown values={demoModels} defaultValue={state.model} name="model" shoudAddNull={true} refreshKey = {"model "+state.model} />
            <Dropdown values={demoContitions} defaultValue={state.condition} name="condition" shoudAddNull={true} refreshKey={"condition " + state.condition} />
            <Button textContent="Submit"/>
        </form>
    )
}