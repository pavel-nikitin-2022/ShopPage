import styled from '@emotion/styled';

//Вся конструкция с Header и Back
export const CardBlockPanel = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

// блок для расположения 1 ряда карточек
export const Content = styled.div`
    box-sizing:border-box;
    position: relative;
    display: flex;
    flex-direction: row;
    padding-left: 2%;
    padding-right: 2%;
    margin-bottom: 15px;
    gap: 10px;
`;

// инфо-блок
export const Subtitle = styled.div`
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
    font-family: "SF Pro Text";
    position: relative;
    padding-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    text-align: center;
`;

// нижняя часть карточки с контентом
export const CardBlockBody = styled.div`
    position: relative;
    padding-bottom: 10px;
    max-width: 360px;
    width: ${0.9 * window.innerWidth}px;
    min-height: 165px;
    border-radius: 0 0 15px 15px;
`;

  //заголовок
  export const CardBlockHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Russo One";
    max-width: 360px;
    width: ${0.9 * window.innerWidth}px;
    height: 35px;
    background-color: ${({appearance} : {appearance: string, shadow: string}) => (appearance === 'waves' ? '#FD0A5A' : '#5956FF')};
    border-radius: 12px 12px 0px 0px;
    -webkit-box-shadow: ${({shadow} : {appearance: string, shadow: string}) => shadow};
    -moz-box-shadow: ${({shadow} : {appearance: string, shadow: string}) => shadow};
    box-shadow: ${({shadow} : {appearance: string, shadow: string}) => shadow};
    z-index: 2;
`;
