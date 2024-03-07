import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state ={
            counter : 0
        }
    }

    addCounterHandler(){
        this.setState(prevstate =>{
            return {counter: prevstate.counter +1}
        })
    }

    minuseCounterHandler(){
        this.setState(prevstate => {
            return {counter: prevstate.Counter -1}
        })
    }

    render() {
        return (
            <div>
                <section>
                    <div className='counter'>
                        <h2>Counter</h2>
                        <h3>{this.state.counter}</h3>
                        <button className='add'>addCounter</button>
                        <button className='minuse'>minusefromcounter</button>
                    </div>
                </section>
            </div>
        )
    }
}
