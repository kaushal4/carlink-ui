
interface DropdownProps {
    values: string[],
    defaultValue: string,
    name: string,
    refreshKey: string
    shoudAddNull?: boolean
}

export default ({values, defaultValue, name, refreshKey, shoudAddNull}: DropdownProps) => {
    const setKey:boolean = refreshKey? true : false
    return (
        <>
        <label htmlFor={name}>Model</label>
        <select key={refreshKey} name={name} id={name} className="text-black" defaultValue={defaultValue}>
            {shoudAddNull && <option key="None" value="none">None</option>}
            {values.map((value) => (
                <option key={value} value={value}>
                    {value}
                </option>
            ))}
        </select>
</>
    ) 
}