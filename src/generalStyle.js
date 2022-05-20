import styled from "styled-components";
import cityOfTears from "./assets/body_background.png"

// styles

export const Main = styled.div`
background: url(${cityOfTears}) no-repeat;
background-size: cover;
background-position: center center;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 550px;
  margin-left: 2.8em;
`
export const SecondsDisplay = styled.h1`
font-size: 45px;
`
export const ButtonsDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
width: 50%;
margin-top: 3em;
`
export const StartButton = styled.img`
cursor: pointer;
height: 100%;
`
export const StopButton = styled.img`
cursor: pointer;
height: 70%;
`
export const ResetButton = styled.img`
cursor: pointer;
height: 70%;
`