import { FilterState } from "./home"

interface filterListProps {
    filters: FilterState
}

export default ({filters}: filterListProps) => {
    const activeFilters:[string, any][] = Object.entries(filters).filter(([_, value]) => value !== "none")
    return (
        <div>
            <p>Active filters:</p>
            <div>
                {activeFilters.map(([key, value]) => (
                    <div key={key}>
                        <p>{key} &gt; {value}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}