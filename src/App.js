import styled from "styled-components";
import { Tabs } from '@mantine/core';

import TabLayout from "./components/TabLayout";
import TodoItems from "./components/TodoItems"

const Container = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const App = () => {
  return (
    <Container>
    <h1>#todo</h1>
    <Tabs tabPadding="xl" sx={{ marginTop: "2rem" }}>
        <Tabs.Tab label="All" sx={{padding: "20px 75px" }}>
          <TabLayout />
          <TodoItems show="all" />
        </Tabs.Tab>
        <Tabs.Tab label="Active" sx={{padding: "20px 75px" }}>
          <TabLayout />
          <TodoItems show="active" />
        </Tabs.Tab>
        <Tabs.Tab label="Completed" sx={{padding: "20px 75px" }}>
          <TabLayout />
          <TodoItems show="completed" />
        </Tabs.Tab>
      </Tabs>
    </Container>
  );
}

export default App;
