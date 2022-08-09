import React from 'react';
import BorderedText from '../../BorderText';
import BackGround from './CardBlockBack';
import Illuminate from './Illumination';
import '../../../index.css';
import {
  CardBlockBody,
  CardBlockHeader,
  Content,
  Subtitle,
  CardBlockPanel
} from './CardBlockStyle';

/**
 * Функция оптимизации для красвой растоновки карточек в кардблоке
 * @param children - массив карточек для синей панели
 */
const rowData = (children: JSX.Element[]) => {
  let rowChildren = []
  for (let i = 0; i < children.length; i += 3) rowChildren.push(
    <Content key={"content_" + i}>
      {children.slice(i, Math.min(3 + i, children.length))}
    </Content>
  )
  return rowChildren;
}

/**
 * Блок с карточками для магазина
 * @param props - свойства карточки
 * @param props.appearence - вид карточки(волны/default)
 * @param props.illuminate - свечение карточки
 */
function CardBlock(
  {
    style,
    appearance = 'default',
    title = '',
    subtitle = '',
    illuminate = false,
    children
  }: {
    style?: React.CSSProperties,
    appearance?: string,
    title?: string,
    subtitle?: string,
    illuminate?: boolean,
    children: JSX.Element[] | any[]
  }): JSX.Element {

  return (
    <CardBlockPanel style={style}>
      {illuminate && <Illuminate />}

      <CardBlockHeader
        shadow={`0px 0px 22px 4px rgba(${appearance === 'waves' ? '255, 0, 11' : '5, 125, 217'}, 0.47)`}
        appearance={appearance}
      >
        <BorderedText>{title}</BorderedText>
      </CardBlockHeader>

      <CardBlockBody>
        <BackGround appearance={appearance} />
        {subtitle ? <Subtitle>{subtitle}</Subtitle> : <br />}
        {children.length ? rowData(children) : <Content>{children}</Content>}
      </CardBlockBody>

    </CardBlockPanel>
  );
};

export default React.memo(CardBlock);