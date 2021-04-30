import { useEffect, useState } from 'react';
import './App.css';
import Income from './components/Income';
import Users from './components/Users/Users';
// import fakedata from './Fakedata/generated.json'

function App() {
  // console.log(fakedata);
  // const [income, setIncome] = useState([])
  // useEffect(()=>{
  //   setIncome(fakedata)
  // },[])

  const [data, setData] = useState([])
  const [addUser, setAddUser] = useState([]) 

  useEffect (()=>{
    fetch('https://randomuser.me/api/?results=15')
    .then (res => res.json())
    .then ( data => {
      setData(data.results)
      // console.log(data)
      // console.log (data.results)
    })
    .catch ( err => console.log(err))
    
  },[])

  // console.log(data)

  const handleAddUser = (data) => {
      const newAddUser = [...addUser, data]
      setAddUser(newAddUser)
  }

  return (
    <div className="App">
      <div id="header">
          <h1>Total Users: {data.length}</h1>
          <h2>Total Added: {addUser.length} </h2>
          {/* {console.log(addUser)} */}
          <Income income = {addUser}></Income>
      </div>
      
      {/* <Users user={data} ></Users> */}
      {/* {
        income.map ( (salary) => <Users income={salary.income}></Users>)
        data.map (user => <Users user={user} ></Users>)

        
      } */}
      {
        
          data.map (user => <Users user={user} handleAddUser = {handleAddUser} key={user.email} ></Users>)

      }
        
      




      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
