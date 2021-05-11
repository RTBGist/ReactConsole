import React from 'react';
import styled, {keyframes, css} from "styled-components";

type ButtonProps = {
    color?: string
    fontSize?: string
    alignSelf?: string
    children: React.ReactNode
    primary?: boolean
}

const opacityAnimation = keyframes`
  0% {
    opacity: 1
  }
  50% {
    opacity: 0.25
  }
  100% {
    opacity: 1
  }
`

const StyledButton = styled.button<Pick<ButtonProps, 'color' | 'fontSize' | 'alignSelf' | 'primary'>>`
  color: ${props => props.color || props.theme.colors.primary};
  font-size: ${props => props.fontSize};
  align-self: ${props => props.alignSelf};
  padding: 10px 30px;
  cursor: pointer;
  &:hover {
    animation: ${opacityAnimation} 1s linear infinite;
  }
  ${props => props.primary && css`
    color: ${props => props.theme.colors.secondary};
  `}
`

const LargeButton = styled(StyledButton)`
    font-size: 32px;
`

const Button: React.FC<ButtonProps> = (props) => {
    return <StyledButton {...props}/>;
};

export default Button;