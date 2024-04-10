import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  min-width: 250px;

  border-radius: 15px;
  border: 1px solid lightgray;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  justify-content: space-between;

  p {
    font-size: 13px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const LinkButton = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 10px;

  font-size: 3em;
  color: black;
  text-decoration: none;

  p {
    color: black;
    font-size: 20px;
    font-weight: 800;
  }
`;

export { Container, InputContainer, ButtonContainer, ButtonLayout, LinkButton };
