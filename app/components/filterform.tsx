"use client"
import { useActionState } from "react";
import Button from "./button";

const demoModels = ["honda", "toyota", "ford", "chevy"];

export default function FilterForm() {
    const [_, submitAction] = useActionState(
        async (_:null , formData:FormData) => {
            console.log(formData)
            console.log(formData.get("model"))
            console.log(formData.get("condition"))
            return null
        }, null
    )
    return (
        <form className="flex flex-col mt-3" action = {submitAction}>
            <label htmlFor="model">Model</label>
            <select name="model" id="model" defaultValue={"none"}>
                <option key="None" value="none">None</option>
                {demoModels.map((model) => (
                    <option key={model} value={model}>
                        {model}
                    </option>
                ))}
            </select>
            <label htmlFor="condition">Condition</label>
            <input type="range" name="condition" id="condition" min="0" max="2" list="condition-markers"/>
            <datalist id="condition-markers" className="flex justify-between">
                <option value="0" label="Bad"></option>
                <option value="1" label="Good"></option>
                <option value="2" label="Great"></option>
            </datalist>
            <Button textContent="Submit"/>
        </form>
    )
}