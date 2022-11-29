import React from 'react';
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setPageCount} from '../../redux/slices/filterSlice'

const Pagination = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.filter.pageCount)
    return (
        <div className={s.container}>
            <ReactPaginate
                className={s.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => dispatch(setPageCount(event.selected + 1))}
                pageRangeDisplayed={8}
                pageCount={3}
                forcePage={currentPage - 1}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Pagination;