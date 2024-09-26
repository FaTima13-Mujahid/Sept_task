import React, { useState } from "react";


const GenreForm = () => {
  // useState for genre fields
  const [GenreName, setGenreName] = useState("");
  const [GenreStatus, setGenreStatus] = useState("");
  const [Error, setError] = useState("");
  const [Success, setSuccess] = useState("");
  //   const navigate = useNavigate();

  // Handle form submission
  const handleSubmission = async (e) => {
    e.preventDefault();

    // Validate Genre fields
    if (GenreName.length > 3) {
      if (GenreStatus === "Active" || GenreStatus === "Inactive") {
        try {
          const newGenreData = {
            gen_name: GenreName,
            gen_status: GenreStatus,
          };

          // Mock API POST request
          const response = await fetch(
            "https://66dff6762fb67ac16f27bba7.mockapi.io/crud/Generic",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newGenreData),
            }
          );

          if (response.status === 201) {
            setError("");
            setSuccess("Genre Registered Successfully!!");
            // setTimeout(() => {
            //   navigate("/Genre");
            // }, 1000);
            setGenreName("");
            setGenreStatus("");
          }
        } catch (error) {
          console.log(error);
          setError("An error occurred while submitting the form.");
        }
      } else {
        setError("Status must be Active or Inactive!!");
      }
    } else {
      setError("Genre Name must be at least 4 characters long!!");
    }
  };

  return (
    <div>
      {" "}
      {/* Errors */}
      {Error && (
        <div className="alert alert-danger" role="alert">
          <p>{Error}</p>
        </div>
      )}
      {Success && (
        <div className="alert alert-success" role="alert">
          <p>{Success}</p>
        </div>
      )}
      <form onSubmit={handleSubmission}>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="genreName">
            Genre Name
          </label>
          <input
            type="text"
            id="genreName"
            className="form-control"
            value={GenreName}
            onChange={(e) => setGenreName(e.target.value)}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="genreStatus">
            Genre Status
          </label>
          <select
            id="genreStatus"
            className="form-select form-select-lg mb-3"
            //   value={GenreStatus}
            onChange={(e) => setGenreStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <center>
          <button
            type="submit"
            className="btn btn-danger btn-lg"
            style={{ backgroundColor: "#B8001F" }}
          >
            Add Genre
          </button>
        </center>
      </form>
    </div>
  );
};

export default GenreForm;
