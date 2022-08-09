import React from 'react';
import BorderedText from '../../BorderText';
import { TYPES } from './config';
import '../../../index.css';
import {CardPanel, CardContent, PriceContainer, Title, Label} from './CardStyle';

/**
 * Одна карточка
 * @param props - свойства
 * @param props.type - редкость карточки
 * @param props.price - верстка с ценой
 */
function Card(
    {
        type = "common",
        label = '',
        title = '',
        price,
        children,
    }:
        {
            type: ("common" | 'yellow' | 'legendary' | 'rare'),
            label: string,
            title: string,
            price: JSX.Element,
            children: JSX.Element | JSX.Element[],
        }) {

    return (
        <CardPanel back={TYPES[type].back} shadow={TYPES[type].shadow}>
            <Title>
                <BorderedText
                    color={TYPES[type].font}
                    component='div'
                >
                    {title}
                </BorderedText>
            </Title>
            <Label>
                <BorderedText component='div'>{label}</BorderedText>
            </Label>
            <CardContent>{children}</CardContent>
            <PriceContainer>{price}</PriceContainer>
        </CardPanel>
    );
};

export default React.memo(Card);