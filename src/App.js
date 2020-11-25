import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import person from "./Person";
//import Person from './Person'
import Person from './Person'

const App = props =>{
   const [personState, setPersonState] = useState({
        person:[
            {name:"Prasanna",age:22,Location:"Bangalore"},
            {name:"Pk",age:32,Location:"Mangalore"}
        ]
    });
    const switchHandler = ()=>{
        setPersonState({
            person:[
                {name:"Prasad",age:92,Location:"Mangalore"},
            {name:"PkP",age:22,Location:"Mysore"}
            ]
        })
    }
    return(
        <div>
            <h1>Welcome to React</h1>
            <button type="button" onClick={switchHandler}>SwitchButton</button>
            <Person name={personState.person[0].name} age={personState.person[0].age} Location={personState.person[0].Location}/>
            <Person name={personState.person[1].name} age={personState.person[1].age} Location={personState.person[1].Location}/>
        </div>
    )
}
// class App extends Component {
//     // state={
//     //     person: [
//     //         {name:"Prasanna",
//     //         age:25
//     //     },
//     //     {name:"Prasanna1",
//     //     age:252}
//     //     ]
//     // }
//     state = {
//         person: [
//             {name:"Raj",Age:26,Location:"Bangalore"},
//             {name:"Prasad",Age:38,Location:"Paris"},
//             {name:"Priti",Age:27,Location:"Pune"}

//         ]
//     }
//     switchHandler =()=>{
//         console.log("was clicked");
//         this.setState({
//             person:[
//                 {name:"Matish",age:26,Location:"Bangalore"},
//                 {name:"Priya",age:21,Location:"Surat"},
//                 {name:"Suresh",age:33,Location:"Lokandwala"}
    
//             ]
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <p>Hello</p>
//                 <button type="button" onClick={this.switchHandler}>Switch Button</button>
//                 <Person name={this.state.person[0].name} age={this.state.person[0].age} />
//                 <Person name={this.state.person[1].name} age={this.state.person[1].age} />

//                 <Person name={this.state.person[2].name} Location={this.state.person[2].Location} />

//                 {/* <button type="button" onClick={this.switchHandler}>Switch</button>
//                 <Person name={this.state.person[0].name} age={this.state.person[0].age} />
//                 <Person name={this.state.person[1].name} age={this.state.person[1].age} >My hobbies is </Person> */}

//             </div>
//         );
//     }
// }
export default App;

