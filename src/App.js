import React from 'react';
import './App.css';
import Search from './Search';
import Pagination from './Pagination';
import Stories from './Stories';
// import {useContext} from "react";
// import {AppContext} from "./Context";

const App=()=> {

  return (
   <>
   <Search/>
   <Pagination/>
   <Stories/>
   </>
  );
}

export default App;
