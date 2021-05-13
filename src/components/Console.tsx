import React, {ReactHTML, useState} from 'react';
import styled from "styled-components";
import Flex from "./Flex";

type ConsoleProps = {
    color?: string
    fontSize?: string
    marginBottom?: string
    children?: React.ReactNode
    search: string
    setSearch(search: string): void
    onSubmit(): void
}


const StyledConsole = styled.input<Pick<ConsoleProps, 'color' | 'fontSize' | 'marginBottom'>>`
  color: ${props => props.color || props.theme.colors.primary};
  font-size: ${props => props.fontSize};
  margin-bottom: ${props => props.marginBottom};
  resize: none;
  background: #000;
  width: 100%;
  padding: 20px 15px;
  outline: none;
  border: 1px solid ${props => props.color || props.theme.colors.primary};
  @media ${props => props.theme.media.tablet} {
    border: 1px solid ${props => props.color || props.theme.colors.primary};
  }
`
const Console: React.FC<ConsoleProps> = (props) => {

    const HandleKeyPress = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            props.onSubmit()
        }
    }

    const HandleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSearch(event.target.value)
    }

    return (
        <Flex>
            <StyledConsole placeholder={'Введите команду'} value={props.search} onChange={HandleChangeSearch} onKeyPress={HandleKeyPress} {...props}/>
        </Flex>
    );
};

export default Console;