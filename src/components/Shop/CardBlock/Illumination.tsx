import React from 'react';
import styled from '@emotion/styled';
import light from '../../../assets/img/light.png';
import { keyframes } from '@emotion/css';

const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
`;

const AnimeBlock = styled.div`
    width: 600px; 
    height: 600px; 
    position: absolute; 
`;

const IMG = styled.img`
    mix-blend-mode: normal;
    filter: blur(20px); 
    width: 100%; 
    height: 100%;
    fill: none;
    animation: ${rotation} ${({ duration }: { duration: number }) => duration}s linear infinite;
`;

/**
 * Элемент свечения для CardBlock
 * @param duration - время длительности анимации
 */
function Illuminate({ duration = 35 }) {
    return (
        <AnimeBlock>
            <IMG duration={duration} src={light}/>
        </AnimeBlock>
    );
}

export default React.memo(Illuminate)