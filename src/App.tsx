import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";
import Commands from "./components/Commands";
import StarWarsStore from "./store/StarWarsStore";
import FetchedData from "./components/FetchedData";
import {observer} from "mobx-react-lite";

const AppWrapper = styled.div`
  padding: 2rem;
  background: black;
  width: 100%;
  min-height: 100vh;
  color: white
`

const App: React.FC = observer(() => {
    const [search, setSearch] = useState<string>('')
    const [usersVisible, setUsersVisible] = useState<boolean>(false)

    const onSubmit = () => {
        if (search === 'rtb planets') {
            StarWarsStore.fetchUsers('https://swapi.dev/api/planets/');
            setUsersVisible(true);
        }
        if (search === 'rtb users') {
            StarWarsStore.fetchUsers('https://swapi.dev/api/people/');
            setUsersVisible(true);
        }
        if (search === 'rtb films') {
            StarWarsStore.fetchUsers('https://swapi.dev/api/films/');
            setUsersVisible(true);
        }
        if (search === 'clear') {
            setUsersVisible(false);
        }

        setSearch('')
    }

    return (
        <AppWrapper>

            <Flex justify={'center'} wrap>
                <Title marginBottom={'30px'}>Yourdeveloper Star Wars console 2021</Title>
                <Commands />
            </Flex>
            <Flex direction={'column'}>
                <Console onSubmit={onSubmit} search={search} setSearch={setSearch} marginBottom={'20px'} fontSize={'24px'}/>
                <Button onClick={onSubmit} primary alignSelf={'flex-end'} color={'black'} fontSize={'14px'} children={'Отправить'} />
            </Flex>

            {usersVisible &&
                <Flex>
                    <FetchedData status={StarWarsStore.status} fetchedData={StarWarsStore.starWarsData}></FetchedData>
                </Flex>
            }


        </AppWrapper>
    );
});

export default App;