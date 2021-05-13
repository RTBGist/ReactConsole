import React from 'react';
import styled, {css} from "styled-components";

type FlexProps = {
    children: React.ReactNode,
    direction?: string,
    justify?: string,
    align?: string
    width?: string
    wrap?: boolean
}

const StyledFlex = styled.div<Pick<FlexProps, 'direction' | 'justify' | 'align' | 'width' | 'wrap'>>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'stretch'};
  align-items: ${props => props.align || 'flex-start'};
  width: ${props => props.width || '100%'};
  ${props => props.wrap && css`
    flex-wrap: wrap;
  `}
`
const Flex: React.FC<FlexProps> = (props) => {
    return <StyledFlex {...props}/>;
};

export default Flex;