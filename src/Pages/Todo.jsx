import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar"; // Navbar component

import TodoTable from "../Components/TodoTable";
import TodoForm from "../Components/TodoForm";

const Todo = ({ filteredTodos }) => {
 
 

  return (
    <div>
      <Navbar />
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 4fr", // Two columns: 1/3 for form, 2/3 for table
            gap: "2rem",
            width: "100%",
            maxWidth: "1500px",
          }}
        >
          {/* Left side - Form */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              padding: "2rem",
              borderRadius: "0.4rem",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <ul
              className="nav nav-pills nav-justified mb-3"
              id="ex1"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <Link
                  className="nav-link active"
                  id="tab-genre"
                  to="/"
                  role="tab"
                  aria-controls="pills-genre"
                  aria-selected="true"
                  style={{ backgroundColor: "#F2E8C6",color:"black" }}
                >
                  Maintain Todo 
                </Link>
              </li>
            </ul>

            {/* Form with todo fields */}
            <TodoForm />
          </div>

          {/* Right side - Table */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              padding: "2rem",
              borderRadius: "0.5rem",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <TodoTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
