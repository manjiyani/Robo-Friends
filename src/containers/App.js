import React, {useEffect, useState} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

function App () {
    // constructor(){
    //     super();
    //     this.state = {
    //         roboList : [],
    //         searchval : ""
    //     }
    // }

    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({roboList: users}));
    // }

    const [roboList, setRoboList] = useState([]);
    const [searchval, setSearchval] = useState("");

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => setRoboList(users));
    }, []);

    const sschanger = (event) => {
        setSearchval(event.target.value);     
    }

    const filteredRobots = roboList.filter(robos => {
        return robos.name.toLowerCase().includes(searchval.toLowerCase());
    })

    if (roboList.length === 0){
        return (<h1>Loading</h1>);
    }
    else{
        return(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange= {sschanger}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots = {filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }

        
    
}

export default App