
interface searchData {
    model?: string[],
    condition?: string[],
}

const dummyData: searchData = {
    model: ['Honda', 'Toyota'],
    condition: ['great', 'good', 'fair'],
}

export default () => {
    return (
        <div className="p-2 overflow-y-auto flex-grow">
            {Object.keys(dummyData).map((key) => (
                <div key={key}>
                    <h3 className="capitalize font-bold text-lg m-2">{key}</h3>
                    <ul className="list-none pl-4">
                        {dummyData[key as keyof searchData]?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
} 