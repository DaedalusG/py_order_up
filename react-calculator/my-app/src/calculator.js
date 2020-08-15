import React from 'react'

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            num2: '',
            result: 0
        }
    };

    handleFirstNum = e => {
        this.setState({
            num1: Number.parseInt(e.target.value)
        })
        console.log(e.target.value)
        console.log(this.state.num1)
    };
    handleSecondNum = e => {
        this.setState({
            num2: Number.parseInt(e.target.value)
        })
        console.log(e.target.value)
        console.log(this.state.num2)
    };
    handleClear = e => {
        this.setState(
            {
                result: 0,
                num1: '',
                num2: ''
            }
        )
    };

    //operations buttons
    add = e => {
        this.setState({
            result: this.state.num1 + this.state.num2
        })
    }
    subtract = e => {
        this.setState({
            result: this.state.num1 - this.state.num2
        })
    }
    multiply = e => {
        this.setState({
            result: this.state.num1 * this.state.num2
        })
    }
    divide = e => {
        this.setState({
            result: this.state.num1 / this.state.num2
        })
    }


    render() {
        const { result, num1, num2 } = this.state;
        return (
            <>
                <div>
                    <h1>{result}</h1>
                    <input onChange={this.handleFirstNum} placeholder="FirstNumber" value={num1}></input>
                    <input onChange={this.handleSecondNum} placeholder="SecondNumber" value={num2}></input>
                    <button onClick={this.handleClear}>Clear</button>
                </div>
                <div>
                    <button onClick={this.add}>+</button>
                    <button onClick={this.subtract}>-</button>
                    <button onClick={this.multiply}>*</button>
                    <button onClick={this.divide}>/</button>
                </div>
            </>
        );
    }
}

export default Calculator 