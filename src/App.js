import React from 'react';
import './App.css';
import logo from './logo192.png';
import myFakeData from './myFakeData';
import { useState } from 'react';
import Main from './Components/Main/Main';
import ADD from './Components/ADD/ADD';
function App() {
  // console.log(myFakeData)
  // const DATA = [...myFakeData];
  const DATA = myFakeData.slice(0,15);
  // const [persons,setPersons] = useState([]);
  const [uniqPersons, setUniqPersons] = useState([]);
  // console.log(uniqPersons);
  const handleData = (person) => {
    // if(ck==='remove'){
    //   setUniqPersons(person);
    //   return;
    // }
    // console.log(uniqPersons);
    const newPerson = [...uniqPersons, person];
    let uniq = [];
    let uniqData = [];
    // console.log(newPerson);
    for (let i = 0; i < newPerson.length; i++) {
      if(uniq.indexOf(newPerson[i].id) === -1){
        uniq.push(newPerson[i].id);
        uniqData.push(newPerson[i]);
      }
    }
    // console.log(realUniq);
    setUniqPersons(uniqData);
    // setPersons(newPerson);
  }
  const handleRemovePerson = (person) => {
    // console.log(person);
    const newPerson = [...uniqPersons];
    let newRemovePerson = newPerson.filter(p => p.id !== person.id);
    // console.log(newRemovePerson);
    // handleData(newRemovePerson,'remove');
    setUniqPersons(newRemovePerson);
    // console.log(uniqPersons);
  }
  return (
    <div>
      <header className="App-logo" style={{textAlign: 'center'}}><img src={logo} alt=""/></header>
      <div className="main-add">
        <div className="main">
          {
            DATA.map(d => <Main key={d.id} handleData={handleData} data={d}></Main>)
          }
        </div>
        <div className="add">
          <p>Friend List: {uniqPersons.length}</p>
          <div className="details">
            {
              uniqPersons.map(uPerson => <ADD handleRemovePerson={handleRemovePerson} key={uPerson.id} person={uPerson}></ADD>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
