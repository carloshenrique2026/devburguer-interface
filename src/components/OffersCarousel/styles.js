import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item {
        padding: 10px;
    }
    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }

    .react-multiple-carousel__arrow--left {
        left: 15px;
        top: 10px;
    }

    .react-multiple-carousel__arrow--right {
        top: 10px;
    }

    padding-left: 40px;
    padding-bottom: 40px;
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 800;
    color: #2cec13;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 20px;
    
    &::after  {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #2cec13;
        left: calc(50% - 28px);
    }
`;

