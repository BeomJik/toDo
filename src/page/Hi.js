import React from 'react';
import add_circle from '../img/add_circle.svg';
import PropTypes from 'prop-types'; // 프로퍼티 타입을 지정하기 위해 사용

function Hi({addr,country,count,male}) { // 구조분해
    const name = '박범근';
    const sex = male ? '남자' : '여자';
    return( 
        <p className='welcome'>
            {country} {addr}
            <strong className='na'>{name}</strong>님({sex}) {count}회 방문을 환영합니다! 
            <img src = {add_circle} className='add_circle'  alt='add_circle'/> 
        </p> 
    );
}

Hi.propTypes = { // 값의 타입 검사
    count: PropTypes.string
    // count: PropTypes.number
}

Hi.defaultProps = { // 기본 값
    count: 0,
    addr: '의',
    // sex : '기타'
}

export default Hi; 