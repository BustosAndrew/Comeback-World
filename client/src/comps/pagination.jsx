import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import "../css/pagination.css";

export const PaginatedItems = ({ itemsPerPage, numOfItems, itemsHandler }) => {
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        itemsHandler(itemOffset, endOffset);
        setPageCount(Math.ceil(numOfItems / itemsPerPage));
    }, [itemOffset, itemsPerPage, numOfItems]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % numOfItems;
        setItemOffset(newOffset);
    };

    return (
        <div>
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
                    containerClassName="pagination"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
};
