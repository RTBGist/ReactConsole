import React from 'react';
import styled from 'styled-components'

type LineProps = {
    color: string,
    children?: React.ReactNode
}

const StyledLine = styled.div`
    font-size: 24px;
    color: ${props => props.color || props.theme.colors.primary};
`

const Line: React.FC<LineProps> = (props) => {
    return <StyledLine {...props}/>
};

export default Line;