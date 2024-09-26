import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar"; // Navbar component
import GenreTable from "../Components/GenreTable"
import GenreForm from "../Components/GenreForm";

const Genre = () => {

 

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
            gridTemplateColumns: "1fr 2fr", // Two columns: 1/3 for form, 2/3 for table
            gap: "2rem",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {/* Left side - Form */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              padding: "2rem",
              borderRadius: "0.5rem",
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
                  style={{ backgroundColor: "#F2E8C6", color: "black" }}
                >
                 Maintain Genre
                </Link>
              </li>
            </ul>

            {/* Genre Form */}
            <GenreForm />
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
            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
              <GenreTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genre;
