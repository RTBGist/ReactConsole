import React, {ReactHTML, useState} from 'react';
import styled from "styled-components";
import Flex from "./Flex";
import Line from "./Line";

type ConsoleProps = {
    color?: string
    fontSize?: string
    marginBottom?: string
    children?: React.ReactNode
}

const CONSOLE_PATH = 'C/users/yourdeveoper'

const StyledConsole = styled.textarea<Pick<ConsoleProps, 'color' | 'fontSize' | 'marginBottom'>>`
  color: ${props => props.color || props.theme.colors.primary};
  font-size: ${props => props.fontSize};
  margin-bottom: ${props => props.marginBottom};
  height: 70vh;
  resize: none;
  background: #000;
  width: 100%;
  outline: none;
  border: 1px solid transparent;
  margin-left: 5px;
  @media ${props => props.theme.media.tablet} {
    border: 1px solid ${props => props.color || props.theme.colors.primary};
  }
`
const Console: React.FC<ConsoleProps> = (props) => {
    const [lines, setLines] = useState<string[]>([CONSOLE_PATH])

    const HandleKeyPress = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            setLines((prev: string[]) => [...prev, CONSOLE_PATH])
        }
    }

    return (
        <Flex>
            <Flex width={'auto'} direction={'column'}>
                {lines.map((line, i) => {
                    return (
                        <Line key={i} color={'green'}>{line}</Line>
                    )
                })}
            </Flex>
            <StyledConsole onKeyPress={HandleKeyPress} {...props}/>
        </Flex>
    );
};

export default Console;