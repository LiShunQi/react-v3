/**
 * Created by Administrator on 2018/7/18.
 */
import React, { Component } from 'react'
import './index.css'

const TIMER = 10

class CountDown extends Component {
    constructor (props) {
        super(props)
        this.state = {
            timer: TIMER,
            isSuccess: false,
        }

        this.start = this.start.bind(this)
        this.countDown = this.countDown.bind(this)
    }

    start () {
        if(this.state.timer !== TIMER) return false;
        setTimeout(() => {
            this.setState({
                isSuccess: true,
            })
            this.countDown()
        }, 2000)
    }
    countDown () {
        let { timer } = this.state
        this.setState({
            timer:TIMER,
        })
        const clock = setInterval(() => {
            if(timer === 0) {
                clearInterval(clock)
                timer = TIMER + 1
                this.setState({
                    isSuccess: false,
                })
            }
            this.setState({
                timer: --timer,
            })
        }, 1000)
    }
    render() {
        return (
            <div className="countDown" onClick={ this.start }>
                <span>{ this.state.isSuccess ? this.state.timer : '倒计时'}</span>
            </div>
        )
    }
}

export default CountDown

