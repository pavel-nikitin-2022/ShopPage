import styled from '@emotion/styled';

//титульник - строка
export const Title = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: center;
    font-family: "Russo One";
    font-size: 13px;
`;

//тип - строка
export const Label = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: center;
    color: white;
    font-family: "Russo One";
`;

//цена - реакт элемент
export const PriceContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 10px;
    display: flex;
    justify-content: center;
    font-family: "Russo One";
    font-size: 16px;
    color: white;
`;

//видимо png с изображением объекта
export const CardContent = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: center;
`;

// основной блок карточки
export const CardPanel = styled.div`
    position: relative;
    justify-content: center;
    max-width: 109px;
    width: ${0.265 * window.innerWidth}px;
    max-height: 209px;
    height: ${0.55 * window.innerWidth}px;
    background: ${({ shadow, back }: { shadow: string, back: string }) => back};
    border: 1px solid #000000;
    box-shadow: ${({ shadow, back }: { shadow: string, back: string }) => shadow};
    border-radius: 15px;
`;