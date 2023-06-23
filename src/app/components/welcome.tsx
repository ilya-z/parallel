import React from "react";
import styled from "styled-components";
import {useUser} from "../hooks/useUser";

const Wrapper = styled.div`
  display: flex;
  color: green;
  font-size: 1.2em;
`;
const WelcomeComponent = () => {

    const { user } = useUser();

    return <Wrapper>Welcome, {user}</Wrapper>
}

export default WelcomeComponent;