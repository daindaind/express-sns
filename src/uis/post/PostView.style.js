import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  padding: 20px;

  border-radius: 10px;
  background-color: #f1f3f5;

  p {
    font-size: 13px;
    color: gray;
    margin: 0px;
  }

  h3 {
    font-size: 15px;
    margin: 0px;
    margin-bottom: 5px;
  }

  img {
    width: 300px;
    height: 300px;
  }
`;

export { Container };
