import React from 'react';
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss'

const Pagination = ({onChangePage}) => {
    return (
        <div className={s.container}>
            <ReactPaginate
                className={s.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={8}
                pageCount={3}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Pagination;