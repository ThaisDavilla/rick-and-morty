import styled from "styled-components";
import portal from "../Assets/portal.png";
export const Caixa = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  background-image: url(${portal});
  background-attachment: scroll;
  background-color: black;
  background-repeat: repeat-y;
`;
export const Image = styled.img`
  height: 35vh;
  border: white double 10px;
`;
export const Infos = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  &:hover {
    p {
      transform: scale(110%);
    }
  }
  p {
    transition: ease-in-out 0.5s;
    transform: scale(0%);
    position: relative;
    top: -5vh;
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    color: #ffff;
    font-weight: bold;
  }
  .secondP {
    position: relative;
    top: -10vh;
  }
`;
