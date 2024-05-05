import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editName, loadUser, selectName } from './redux/reducers/currentUser/currentUsersReducer';


function App() {
  const dispatch = useDispatch()
  const name = useSelector(selectName);
  
  useEffect(() => {
     dispatch(loadUser());
  }, [])

  return (
    <div>
       <h1>Hello</h1>
       <h3>{name}</h3>

       <input type='text ' value={name}
         onChange={(evnt) => {
             dispatch(editName(evnt.target.value))
         }}
       />
    </div>
  );
}

export default App