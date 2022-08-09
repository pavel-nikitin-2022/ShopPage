import React from 'react'
import Card from './Card/Card';
import BorderText from '../BorderText';
import cardContent from '../../assets/img/cardContent.png';
import CardBlock from './CardBlock/CardBlock';
import styled from '@emotion/styled';
import BackGround from '../../assets/img/ShopBack.png';

type CardType = {
  title: string,
  type: 'common' | 'yellow' | 'legendary' | 'rare',
  label: string,
  name?: string,
  price: JSX.Element
}

const ShopPanel = styled.div`
  -webkit-user-select: none;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgb(27, 69, 175, 0.5) 0%, rgb(34, 63, 137, 0.5) 100%), url(${BackGround});
  background-size: auto 100%;
  background-attachment: fixed;
`;

const HeaderText = styled.div`
  font-family: 'Russo One';
  font-size: 24px;
  margin-top: 62px;
  margin-bottom: 20px;
  z-index: 1;
`;

/**
 * Создание из массива данных => карточек
 * @param cards - массив с данными о карточках
 */
function CardsRender(cards: CardType[]) {
  return (
    cards.map((card, index) => {
      return (
        <Card
          key={`defaultCard${index}`}
          title={card?.title}
          type={card?.type}
          label={card?.label}
          price={card?.price}
        >
          <img src={cardContent} style={{ width: "80%" }} />
        </Card>
      );
    }))
}

/**
 * Страница магазина
 * @param props - свойства
 * @param props.defaultCards - карточки для синей панели
 * @param props.defaultCards - карточки для розовой панели панели
 */
function Shop({ defaultCards, promoCards }: { defaultCards: CardType[], promoCards: CardType[] }) {
  return (
    <ShopPanel>

      <HeaderText>
        <BorderText component='div'>Магазин</BorderText>
      </HeaderText>

      <CardBlock appearance='waves' illuminate={true} style={{ marginBottom: '24px' }} title='Акции дня'>
        {CardsRender(promoCards)}
      </CardBlock>

      <CardBlock appearance='default' title='Наборы' style={{ marginBottom: '157px' }}>
        {CardsRender(defaultCards)}
      </CardBlock>

    </ShopPanel>
  );
};

export default React.memo(Shop);