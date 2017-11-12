import React from 'react';
import {Redirect} from 'react-router-dom'

export default function (ComposedComponent) {
    return class Authentication extends React.Component {

        render() {
            
            if ((typeof window !== 'undefined') && !window.localStorage.getItem('token')) {
                console.log(window.localStorage.getItem('token'));
                return <Redirect to="/login"/>
            }
            return <ComposedComponent {...this.props}/>
        }

    }
}