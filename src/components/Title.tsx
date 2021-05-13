import React from 'react';
import styled, {css} from "styled-components";

type TitleProps = {
    color?: string
    marginBottom?: string
    small?: boolean
    children: React.ReactNode
}

const StyledTitle = styled.h1<Pick<TitleProps, 'color' | 'marginBottom' | 'small'>>`
  color: ${props => props.color || props.theme.colors.primary};
  margin: 0 0 ${props => props.marginBottom};
  ${props => props.small && css`
    font-size: 18px;
  `}
`

const Title:React.FC<TitleProps> = (props) => {
    return <StyledTitle {...props} />
};

export default Title;