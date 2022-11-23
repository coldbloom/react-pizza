import React from 'react';
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss'

const Pagination = () => {
    return (
        <>
            <ReactPaginate
                className={s.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => console.log(event)}
                pageRangeDisplayed={8}
                pageCount={3}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    );
};

export default Pagination;