import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state ={
            counter : 0
        }

        this.addCounterHandler = this.addCounterHandler.bind(this)
        this.minuseCounterHandler = this.minuseCounterHandler.bind(this)

    }

    addCounterHandler(){
        this.setState(prevstate =>{
            return {counter: prevstate.counter +1}
        })
    }

    minuseCounterHandler(){
        this.setState(prevstate => {
            return {counter: prevstate.counter -1}
        })
    }

    render() {
        return (
            <div>
                <section>
                    <div className='counter'>
                        <h2>Counter</h2>
                        <h3>{this.state.counter}</h3>
                        <button onClick={this.addCounterHandler} className='add'>addCounter</button>
                        <button onClick={this.minuseCounterHandler} className='minuse'>minusefromcounter</button>
                    </div>
                </section>
            </div>
        )
    }
}
