import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import "../../resources/sass/main/CommingSoon.scss";

const ComminSoon = () => {
    const body = (<main className="comming-soon">서비스 준비 중 입니다...</main>)
    return (
        <MainTemplate className="commin-soon" body={body}/>
    );
};

export default ComminSoon;