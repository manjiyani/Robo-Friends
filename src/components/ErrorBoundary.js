import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasErr : false
        };
    }

    componentDidCatch(err, inf) {
        this.setState({hasErr : true});
    }

    render() {
        if(this.state.hasErr){
            return (<h1> Oops! Something went wrong. </h1>);
        }
        
        return (this.props.children);
        
    }
}

export default ErrorBoundary