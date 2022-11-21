import React from 'react';
import s from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return (
        <div className={s.root}>
            <span>☹</span>
            <br/>
            <h3>404 Ничего не найдено</h3>
            <p className={s.description}>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
        </div>
    );
};

export default NotFoundBlock;