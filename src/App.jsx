import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Update from './Pages/Update'
import Genre from './Pages/Genre'
import Todo from './Pages/Todo'
import TodoUpdate from './Components/TodoUpdate';
// import new from './Pages/New';
import New from "./Pages/New"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<New />} />
        <Route path="/Todo" element={<Todo />} />

        {/* <Route path="/Update/:id" element={<Update />} /> */}
        <Route path="/Genre" element={<Genre />} />
        <Route path="/TodoUpdate" element={<TodoUpdate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App