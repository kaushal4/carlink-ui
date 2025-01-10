import { Dispatch, SetStateAction, useEffect, useState } from "react"
import SearchList from "./searchList"

interface searchBoxProps {
    setVisibility: Dispatch<SetStateAction<any>>;
}


export default ({ setVisibility }: searchBoxProps) => {
    const [searchVal, setSearchVal] = useState("");

    const close = (e: React.MouseEvent) => {
        e.stopPropagation();
        setVisibility(false);
    }

    return (
        <>
            <div className="absolute h-full w-full top-0 left-0 opacity-25 bg-white z-0" onClick={(e) => close(e)}>
            </div>
            <div className="absolute rounded-md h-5/6 w-5/6 dark:bg-sky-950 bg-sky-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-2 flex flex-col cursor-default">
                <div className="rounded-full dark:bg-cyan-800 bg-cyan-400 flex justify-between p-2 px-4 hover:cursor-pointer flex-none">
                    <span className="mr-2 flex items-center">
                        <svg width="1em" height="1em" viewBox="0 0 20 20" className="grey"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" strokeWidth="2" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </span>
                    <input placeholder="Search" className="focus-visible:outline-none flex-grow bg-inherit text-sky-900 dark:text-sky-50" onChange={(e) => setSearchVal(e.target.value)} value={searchVal} autoFocus={true} />
                </div>
                <SearchList />
            </div>
        </>
    )

}