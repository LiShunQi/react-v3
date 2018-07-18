import React from 'react'
import { Router, Link } from "@reach/router"
import ConectContainer from '../Conect'
import { connect } from 'react-redux'
import CountDown from 'components/CountDown'

const About = (props) => {
    return (
        <div>
            <h3>about page <span style={{color: '#00f'}}>{ props.message}</span></h3>
            <button onClick={() => props.asyncTest('shun')}>change</button>
            <nav>
                <Link to="conect">conect</Link>
            </nav>
            <div>
                <Router>
                    <ConectContainer path="conect" />
                </Router>
            </div>
            <div>
                <CountDown />
            </div>
        </div>
    )
}

const mapState = state => ({
    message: state.about.message
})

const mapDispatch = ({about: {aboutTest, asyncTest}}) => ({
    aboutTest: (name) => aboutTest(name),
    asyncTest: (str) => asyncTest(str)
})

const AboutContainer = connect(mapState, mapDispatch)(About)

export default AboutContainer
