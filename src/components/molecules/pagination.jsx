import React from 'react';

const Pagination = () => {
    const stylePagi = "p-4 w-14 border border-gray-300 text-center cursor-pointer";
    return (
        <div className="flex items-center">
            <div onClick={() => alert("Prev Page")} className={stylePagi}>{`<`}</div>
            <div onClick={() => alert("Page 1")} className={stylePagi}>1</div>
            <div onClick={() => alert("Page 2")} className={stylePagi}>2</div>
            <div onClick={() => alert("Page 3")} className={stylePagi}>3</div>
            <div onClick={() => alert("Next Page")} className={stylePagi}>{`>`}</div>
        </div>
    )
}

export default Pagination