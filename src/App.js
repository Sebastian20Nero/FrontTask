
import './App.css';
import axios from "axios";
import {  useEffect, useState } from 'react'



function App() {
  const [listtask, setlisttask] = useState('')
  const [listpriority, setlistpriority] = useState('')
  const [liststatus, setliststatus] = useState('')

  /*const [idtask, setidtask] = useState('')
  const [description, setdescription] = useState('')
  const [begindate, setbegindate] = useState('')
  const [enddate, setenddate] = useState('')
  const [duration, setduration] = useState('')
  const [idpadre, setidpadre] = useState('')
  const [idpriority, setidpriority] = useState('')
  const [idstatus, setidstatus] = useState('')
  const [estado, setestado] = useState('')
  const [name, setname] = useState('')*/
  
  useEffect(() => {
    axios.get("http://localhost:4000/api/task?idpadre=0").then((response) => {
      console.log(response.data)
    setlisttask(response.data)
    });
    axios.get("http://localhost:4000/api/priority").then((response) => {
    setlistpriority(response.data)
    });
    axios.get("http://localhost:4000/api/status").then((response) => {
    setliststatus(response.data)
    });
  
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-wrapper">
              <p className="brand-logo">Prueba</p>
        </div>
      </header>  
      <tbody>
        <table>
        <tbody> 
                    
                    
                  </tbody>
        </table>
      </tbody>
    </div>
  );
}

export default App;
