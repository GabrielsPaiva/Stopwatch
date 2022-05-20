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
        totalTime: "00 : 00 : 00"
    };

    componentDidUpdate(){
        if(this.state.ms > 0){
            document.title = this.state.totalTime
        }
        if(this.state.ms === 100){
            this.setState({
                ms: this.state.ms / 100,
                secs: this.state.secs + 1
            })
        }
        if(this.state.secs === 60){
            this.setState({
                secs: this.state.secs / 60,
                mins: this.state.mins + 1
            })
    }
}

    startCount = () => {
        const interval = setInterval(() => {
                this.setState({
                    ms: this.state.ms + 1,
                    totalTime: `${this.state.mins < 10 ? "0" + this.state.mins : this.state.mins} : ${this.state.secs < 10 ? "0" + this.state.secs : this.state.secs} : ${this.state.ms < 10 ? "0" + this.state.ms : this.state.ms}`
                })
        }, 10)

        this.clear = () => {
            clearInterval(interval)
        }
        this.reset = () => {
            clearInterval(interval)
            this.setState({ mins: 0, secs: 0, ms: 0, totalTime: "00 : 00 : 00" })
            document.title = "Melhor Stopwatch Ever"
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
                        <S.StartButton src={playButton} alt="circulo azul com um triângulo virado pra direita no meio" onClick={this.startCount}/>
                        <S.StopButton src={pauseButton} alt="circulo azul com um simbolo de pause " onClick={this.clear}/>
                    </S.ButtonsDiv>
                </S.Div>
            </S.Main>
        )
    }
}
