import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.div`
    color: white;
    background-color: black;
    font-size: 1rem;
    padding: 5px 5px;
    border-radius: 3px;
    font-weight: bold;
    text-align center;
    cursor: pointer;
    width: 5rem;
    height: 2rem;
    margin-bottom: 1rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: bold;
`;

const Cont = styled.div`
    display: flex;
    width: 50%;
    flex-direction column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Content = styled.div`
  width: 8rem;
  height: 2rem;
  border: 1px solid black;
  background-color: gray;
  box-shadow: 2px 5px 0px 0.5px black;
`;
export default function SamplePage() {
  const [counter_1, setCounter_1] = useState(0);
  const [counter_2, setCounter_2] = useState(0);

  useEffect(() => {
    console.log(counter_1);
  }, [counter_1]);

  return (
    <>
      <Container>
        <Cont>
          <Button onClick={() => setCounter_1(counter_1 + 1)}>Click Me</Button>
          <Content>{`Counter 1: ${counter_1}`}</Content>
        </Cont>
        <Cont>
          <Button onClick={() => setCounter_2(counter_2 + 1)}>Click Me</Button>
          <Content>{`Counter 1: ${counter_2}`}</Content>
        </Cont>
      </Container>
    </>
  );
}
