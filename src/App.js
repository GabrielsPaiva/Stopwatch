import React from "react";

// styles
import { createGlobalStyle } from "styled-components"
import * as S from "./generalStyle.js"

// images
import playButton from "./assets/play_button.png"
import resetButton from "./assets/reset_button.png"
import pauseButton from "./assets/pause_button.png"


const Globalstyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`

export default class App extends React.Component {
    state = {
        mins: 0,
        secs: 0,
        ms: 0,
        totalTime: "00 : 00 : 00",
        isButtonDisabled: false
    };

    componentDidUpdate(){
        if(this.state.ms > 0){
            document.title = this.state.totalTime
        }
        if(this.state.ms === 100){
            this.setState( prevState => ({
                ms: prevState.ms / 100,
                secs: prevState.secs + 1
            }))
        }
        if(this.state.secs === 60){
            this.setState( prevState => ({
                secs: prevState.secs / 60,
                mins: prevState.mins + 1
            }))
    }
}

    startCount = () => {
        this.setState({isButtonDisabled: true})

        const interval = setInterval(() => {
                this.setState( prevState => ({
                    ms: prevState.ms + 1,
                    totalTime: `${prevState.mins < 10 ? "0" + prevState.mins : prevState.mins} : ${prevState.secs < 10 ? "0" + prevState.secs : prevState.secs} : ${prevState.ms < 10 ? "0" + prevState.ms : prevState.ms}`
                }))
        }, 10)


        // Pause and stop functions

        this.clear = () => {
            clearInterval(interval)
            this.setState({isButtonDisabled: false})
        }
        this.reset = () => {
            clearInterval(interval)
            this.setState({ mins: 0, secs: 0, ms: 0, totalTime: "00 : 00 : 00" })
            document.title = "Melhor Stopwatch Ever"
            this.setState({isButtonDisabled: false})
        }
    }

    render() {
        return (
            <S.Main>
                <Globalstyle />
                <S.Div>
                    <S.SecondsDisplay>{this.state.totalTime}</S.SecondsDisplay>
                    <S.ButtonsDiv>
                        <S.ResetButton src={resetButton} alt="circulo azul verde com uma seta circular" onClick={this.reset}/>
                        <S.StartButton src={playButton} alt="circulo azul com um tri??ngulo virado pra direita no meio" onClick={() => {if(!this.state.isButtonDisabled){return this.startCount()}}}/>
                        <S.StopButton src={pauseButton} alt="circulo azul com um simbolo de pause " onClick={this.clear}/>
                    </S.ButtonsDiv>
                </S.Div>
            </S.Main>
        )
    }
}
