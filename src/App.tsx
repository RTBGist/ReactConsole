import React from 'react';
import styled from 'styled-components'
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

const AppWrapper = styled.div`
  padding: 2rem;
  background: black;
  width: 100%;
  min-height: 100vh;
  color: white
`

const App: React.FC = () => {
    return (
        <AppWrapper>

            <Flex justify={'center'}>
                <Title marginBottom={'30px'}>Yourdeveloper console 2021</Title>
            </Flex>
            <Flex direction={'column'}>
                <Console marginBottom={'20px'} fontSize={'24px'}/>
                <Button primary alignSelf={'flex-end'} color={'black'} fontSize={'14px'} children={'Отправить'} />
            </Flex>

        </AppWrapper>
    );
};

export default App;