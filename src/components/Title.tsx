import React from 'react';
import styled from "styled-components";

type TitleProps = {
    color?: string
    marginBottom?: string
    children: React.ReactNode
}

const StyledTitle = styled.h1<Pick<TitleProps, 'color' | 'marginBottom'>>`
  color: ${props => props.color || props.theme.colors.primary};
  margin: 0 0 ${props => props.marginBottom};
`

const Title:React.FC<TitleProps> = (props) => {
    return <StyledTitle {...props} />
};

export default Title;