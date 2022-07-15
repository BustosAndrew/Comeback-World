import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import "../css/pagination.css";

const items = [...Array(33).keys()];

const Items = ({ currentItems }) => {
    return (
        <div className="items">
            {currentItems &&
                currentItems.map((item) => (
                    <div className="thrd">
                        <img alt="" className="upvote" src="upvote.png" />
                        <div className="thrd-content">
                            <h3>Item #{item}</h3>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export const PaginatedItems = ({ itemsPerPage }) => {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
            <Items currentItems={currentItems} />
            <div className="page-nav">
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link page"
                    previousClassName="page-item"
                    previousLinkClassName="page-link page"
                    nextClassName="page-item"
                    nextLinkClassName="page-link page"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link page"
                    containerClassName="mt-auto pagination justify-content-center align-items-end"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
};
