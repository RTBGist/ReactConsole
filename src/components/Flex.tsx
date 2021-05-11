import React from 'react';
import styled from "styled-components";

type FlexProps = {
    children: React.ReactNode,
    direction?: string,
    justify?: string,
    align?: string
    width?: string
}

const StyledFlex = styled.div<Pick<FlexProps, 'direction' | 'justify' | 'align' | 'width'>>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'stretch'};
  align-items: ${props => props.align || 'flex-start'};
  width: ${props => props.width || '100%'};
`
const Flex: React.FC<FlexProps> = (props) => {
    return <StyledFlex {...props}/>;
};

export default Flex;