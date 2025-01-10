import { useEffect, useState } from "react";
import SearchBox from "./searchBox"

export default () => {
    const [searchBoxVisible, setSearchBoxVisible] = useState(false);
    const isMac = navigator.userAgent.indexOf("Mac") > -1;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && searchBoxVisible) {
                setSearchBoxVisible(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="rounded-full dark:bg-cyan-800 bg-cyan-400 flex justify-between grow p-2 px-4 hover:cursor-pointer" onClick={() => setSearchBoxVisible(true)}>
            {searchBoxVisible && <SearchBox setVisibility={setSearchBoxVisible}/>}
            <span className="flex items-center" >
                <span className="mr-2">
                    <svg width="1em" height="1em" viewBox="0 0 20 20" className="grey"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" strokeWidth="2" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
                Search
            </span>
            <span>
                <span className="mr-1">
                    {isMac ? (
                        <kbd className="" data-platform="mac">⌘</kbd>
                    ) : (
                        <kbd className="" data-platform="win">Ctrl</kbd>
                    )}
                </span>
                <kbd className="">K</kbd>
            </span>

        </div>
    )
}