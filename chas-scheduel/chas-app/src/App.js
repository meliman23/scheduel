import React from 'react'
import Nav from './Components/Nav'
import Card from "./Components/Card"

import './App.css';
//the adresses dont work yet 
const bambiAdress = 'https://maps.apple.com/?address=6357%20NW%2063rd%20St%0AOklahoma%20City,%20OK%20%2073132%0AUnited%20States'
const components = [
  {day:'Monday',
   time:'8am - 10am',
   name:'Bambi',
   adress: bambiAdress,
  time2:'10:30am - 2:30pm',
name2:'Marilyn',
adress2:''},
 {day:'Tuesday',
time:'8am - 11am',
name:'Marilyn',
adress:'',
name2:'Cynthia',
time2:'11:30am - 1:30pm',
adress2:''},
 {day:'Wednesday',
time:'8am - 10am',
name:'Bambi',
adress:'',
name2:'Cynthia',
time2:'10:30am - 12:30pm',
adress2:''}, 
{day:'Thusday',
time:'8am - 10am',
name:'Cynthia',
adress:'',
}, 
{day:'Friday',
time:'8am - 1:30',
name:'Marilyn',
adress:''}, 
{day:'Saturday',
time:'9:30 - 12:30pm ',
name:'coy',
adress:'',
}];

const list = components.map((component, index) =>(
<Card
key ={index}
day={component.day}
time={component.time}
name={component.name}
adress={component.adress}
time2={component.time2}
name2={component.name2}
adress2={component.adress2}
/>
));
 


const App = () => {
  return (
    <div>
    <Nav/>
    <div>{list}</div>
    </div>
  )
}
export default App 