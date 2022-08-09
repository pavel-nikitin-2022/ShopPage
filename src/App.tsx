import React from 'react'
import Shop from './components/Shop/index';
import BorderText from './components/BorderText';

function App() {
  return (
    <Shop
      promoCards={
        [
          {
            title: "Сундук",
            label: "Обычный",
            price: (<BorderText component='div'>2 голоса</BorderText>),
            type: "common",
          },
          {
            title: "Сундук",
            label: "Особый",
            price: (<BorderText component='div'>2 голоса</BorderText>),
            type: "legendary",
          },
        ]
      }

      defaultCards={
        [
          {
            title: "Сундук",
            label: "Обычный",
            price: (<BorderText component='div'>2 голоса</BorderText>),
            type: "common",
          },
          {
            title: "Сундук",
            label: "Особый",
            price: (<BorderText component='div'>2 голоса</BorderText>),
            type: "legendary",
          },
          {
            title: "Сундук",
            label: "Обычный",
            price: (<BorderText component='div'>2 голоса</BorderText>),
            type: "common",
          },
          {
            title: "Сундук",
            label: "Особый",
            price: (<BorderText component='div'>2 голоса</BorderText>),
            type: "legendary",
          },

        ]
      }
    />
  );
};

export default React.memo(App);
