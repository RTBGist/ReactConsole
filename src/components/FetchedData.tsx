import React from 'react';
import styled from "styled-components";

type FetchedDataProps = {
    color?: string,
    fetchedData: [],
    status: string
}

const StyledFetchedData = styled.h1<Pick<FetchedDataProps, 'color'>>`
  color: ${props => props.color || props.theme.colors.primary};
`

const FetchedData:React.FC<FetchedDataProps> = (props) => {

    if(props.status && !props.fetchedData.length) {
        return (
            <div>{props.status}</div>
        )
    }



    return (
        <StyledFetchedData {...props}>
            {props.status}
            {props.fetchedData.map(({name, title}) => {
                return <div key={name || title}>{name || title}</div>
            })}
        </StyledFetchedData>
    )
};

export default FetchedData;