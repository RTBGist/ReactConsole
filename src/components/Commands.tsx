import React from 'react';
import styled from "styled-components";
import Title from "./Title";


const StyledCommands = styled.div`
  width: 100%;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 30px;
`

const Commands:React.FC = (props) => {
    return (
        <StyledCommands {...props}>
            <Title marginBottom={'10px'} small>Ниже комманды которые вы можете ввести в консоль:</Title>
            <h4>rtb users</h4>
            <h4>rtb planets</h4>
            <h4>rtb films</h4>
            <h4>clear</h4>
        </StyledCommands>
    )
};

export default Commands;