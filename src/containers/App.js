import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state = {
            roboList : [],
            searchval : ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({roboList: users}));
    }

    sschanger = (event) => {
        this.setState({searchval: event.target.value});     
    }

    render() {
        const filteredRobots = this.state.roboList.filter(robos => {
            return robos.name.toLowerCase().includes(this.state.searchval.toLowerCase());
        })

        if (this.state.roboList.length === 0){
            return (<h1>Loading</h1>);
        }
        else{
            return(
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange= {this.sschanger}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = {filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }

        
    }
}

export default App