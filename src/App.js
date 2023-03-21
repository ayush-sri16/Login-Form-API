import React, { useState } from 'react'
// import axios from 'axios';

const App = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin() {

    // try {
    //   console.log(username, password)
    //   let result = await fetch("http://13.235.173.171:8080/login", {
    //     method: 'POST',
    //     credentials: 'include',
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json",
    //       "Access-Control-Allow-Credentials": true
    //     },
    //     body: JSON.stringify({
    //       username,
    //       password
    //     })
    //   });
    //   console.log(result);
    //   // localStorage.setItem("user-info", JSON.stringify(result));
    // } catch (error) {
    //   console.log(`The Error is ${error}`)
    // }
    fetch('http://13.235.173.171:8080/login', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: 'testing',
        password: 'test@1234',
        // expiresInMins: 60, // optional
      })
    })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(console.log);
  }

  // const config = {
  //   url: 'http://13.235.173.171:8080/login',
  //   method: 'post',
  //   headers: 
  // }

  // try {
  //   const response = await axios({
  //     username: 'testing',
  //     password: 'test@1234'
  //   });
  //   console.log(response.data);
  // } catch (error) {
  //   console.error(error);
  // }


  return (
    <>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="">
          <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label htmlFor="">
          <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </form>
      <button onClick={handleLogin}>Continue</button>
    </>
  )
}

export default App
