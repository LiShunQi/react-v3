import React from 'react'
import { navigate } from "@reach/router"
import { connect } from 'react-redux'


const nav = () => {
    navigate('/')
};

const Conect = (props) => (
    <div>
        <h3>{props.decription}</h3>
        <button onClick={props.conectTest}>change</button>
        <div onClick={nav}>
            Conect page
        </div>
    </div>
)

const mapState = state => ({
    decription: state.conect.decription
})

const mapDispatch = ({conect: {conectTest}}) => ({
    conectTest: () => conectTest()
})

const ConectContainer = connect(mapState, mapDispatch)(Conect)

export default ConectContainer