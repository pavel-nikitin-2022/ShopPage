
import { css } from '@emotion/css';
import React from 'react';
import Wave from './Wave';
import styled from '@emotion/styled';

// 4 вариации волны переходящей в саму в себя
const wave_1 = 'M0 0C38.5643 0 231.076 0 358.998 0V10.5C196.998 10.5 137.634 27.5 0 27.5L0 0Z';
const wave_2 = 'M0 0C38.5643 0 231.076 0 358.998 0V21C222.499 36.5 137.634 21 0 21L0 0Z';
const wave_3 = 'M0 0C38.5643 0 231.076 0 358.998 0V10.5C303.498 22 137.634 22 0 22L0 0Z';
const wave_4 = 'M0 0C38.5643 0 231.076 0 358.998 0V21C222.499 36.5 137.634 21 0 21L0 0';

const BackGround = styled.div`
    overflow: hidden;
    position: absolute; 
    max-width: 360px;
    width: 100%;
    height: 100%;
`;

const BlueClass = css`
    background: linear-gradient(180deg, #1B45AF 0%, #223F89 100%);
    background-size: 101% 101%;
    border-radius: 0 0 15px 15px;
    -webkit-box-shadow: 0px 0px 15px 4px rgba(5, 125, 217, 0.47);
    -moz-box-shadow: 0px 0px 15px 4px rgba(5, 125, 217, 0.47);
    box-shadow: 0px 0px 15px 4px rgba(5, 125, 217, 0.47);
`;

const PinkClass = css`
    background: linear-gradient(180deg, #DA0C56 0%, #9E0C38 100%);
    background-size: 101% 101%;
    border-radius: 0 0 15px 15px;
    -webkit-box-shadow: 0px 0px 22px 4px rgba(255, 0, 11, 0.47);
    -moz-box-shadow: 0px 0px 22px 4px rgba(255, 0, 11, 0.47);
    box-shadow: 0px 0px 22px 4px rgba(255, 0, 11, 0.47);
`;

/**
 * Фон основной части CardBlock
 * @param appearence - тип фона(волны/синий)
 */
function CardBlockBack({ appearance = 'default' }) {
    return (
        <BackGround className={appearance === "waves" ? PinkClass : BlueClass}>
            {appearance === 'waves' && <div>
                <Wave id='waves_1' duration={7500} waves={[wave_1, wave_2, wave_3, wave_4, wave_1]} />
                <Wave id='waves_2' duration={10000} waves={[wave_2, wave_3, wave_1, wave_4, wave_2]} />
                <Wave id='waves_3' duration={5000} waves={[wave_4, wave_2, wave_1, wave_3, wave_4]} />
                <Wave id='waves_4' duration={15000} waves={[wave_3, wave_4, wave_2, wave_1, wave_3]} />
                <Wave id='waves_5' duration={9000} waves={[wave_2, wave_1, wave_3, wave_4, wave_2]} />
                <Wave id='waves_6' duration={6000} waves={[wave_4, wave_1, wave_2, wave_3, wave_4]} />
            </div>}
        </BackGround>
    );
};

export default React.memo(CardBlockBack);