import React,{useState, useContext} from 'react';
import {FormContext} from './FormContext';



const AddForm = () => {
 
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [users,setUsers] = useContext(FormContext);

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const updatePassword = (e) => {
      setPassword(e.target.value)
  }

    const addForm = e => {
        e.preventDefault(); 
        setUsers(prevForm => [...prevForm,{name:name, email, password}]);
    }

    //===============================================================

    //===============================================================
    
     return(
        <div className="wrapper">
        <div className="form-wrapper">

        <h1>Register</h1>

        <form onSubmit={addForm}>
        <div className="firstName">
        <label htmlFor="firstName">Full Name</label>
        <input
          className=' '
          placeholder="Full Name"
          type="text"
          value={name}
          name="name"
          onChange={updateName}
        />
       
      </div>
      
      <div className="email">
        <label htmlFor="email">Email</label>
        <input
          className=''
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={updateEmail}
        />
            </div>

            <div className="password">
            <label htmlFor="password">Password</label>
            <input
              className=' '
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={updatePassword}
            />
          
          </div>
            <div className="createAccount">
            <button type="submit">Submit</button>
        </div>
        </form>
        </div>
        </div>
     );
}
export default AddForm;