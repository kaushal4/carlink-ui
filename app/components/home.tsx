import FilterForm from "./filterform"

export default () => {
    return (
        <div className="w-full flex">
            <div className="basis-1/4 flex justify-center"> 
            <FilterForm />
            </div>
            <div className="basis-3/4"> Car listings </div>
        </div>
    )
}