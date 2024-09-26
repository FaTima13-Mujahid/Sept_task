import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoForm = () => {
  //useStates of TODO
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Date, setDate] = useState("");
  const [Status, setStatus] = useState("");
  const [Genre, setGenre] = useState("");

  const [Fetchgenre, setFetchgenre] = useState([]);
  const [Error, setError] = useState("");
  const [Success, setSuccess] = useState("");

  // Fetch Genre Start
  useEffect(() => {
    async function handleGenre() {
      try {
        const get_Response = await fetch(
          "https://66dff6762fb67ac16f27bba7.mockapi.io/crud/Generic"
        );
        if (get_Response.status === 200) {
          setFetchgenre(await get_Response.json());
        }
      } catch (error) {
        console.log(error);
      }
    }
    handleGenre();
  }, []);
  // Fetch Genre End
  const Notification = () => {
    toast.success(` success`, {
      autoClose: 2000,
      theme: "dark",
    });
  };
  // Handle form submission
  const handleSubmission = async (e) => {
    e.preventDefault();

    // Validation
    if (Name.length < 3) {
      setError("To-do Name must be at least 3 characters long!!");
      return;
    }
    if (!Description) {
      setError("To-do Description is required!!");
      return;
    }
    if (!Date) {
      setError("To-do Date is required!!");
      return;
    }
    if (!Genre) {
      setError("Please select a Genre!!");
      return;
    }
    if (!Status) {
      setError("Please select a Status!!");
      return;
    }

    // Reset Error on Successful Validation
    setError("");
    setSuccess("To-do added successfully!");

    const newTodoData = {
      todo_name: Name,
      todo_description: Description,
      todo_date: Date,
      genre: Genre,
      todo_status: Status,
    };

    // Mock API POST request (replace this with your actual API endpoint)
    try {
      const response = await fetch(
        "https://66dff6762fb67ac16f27bba7.mockapi.io/crud/Todo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTodoData),
        }
      );

      if (response.status === 201) {
        Notification();
        setName("");
        setDescription("");
        setDate("");
        setGenre("");
        setStatus("");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      {/* Error and Success Messages */}
      {Error && (
        <div className="alert alert-danger" role="alert">
          {Error}
        </div>
      )}
      {Success && (
        <div className="alert alert-success" role="alert">
          {Success}
        </div>
      )}
      <form onSubmit={handleSubmission}>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="todoName">
            To-do Name
          </label>
          <input
            type="text"
            id="todoName"
            className="form-control"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="todoDescription">
            To-do Description
          </label>
          <textarea
            id="todoDescription"
            className="form-control"
            rows="3"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="todoDate">
            To-do Date
          </label>
          <input
            type="date"
            className="form-control"
            value={Date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="genreSelect">
            Select Genre
          </label>
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            value={Genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Select Genre</option>
            {Fetchgenre.map((data, index) => (
              <option key={index} value={data.gen_name}>
                {data.gen_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="statusSelect">
            To-do Status
          </label>
          <select
            id="statusSelect"
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>

        <center>
          <button
            type="submit"
            className="btn btn-danger btn-lg"
            style={{ backgroundColor: "#B8001F" }}
          >
            Add To-do
          </button>
        </center>
      </form>
      <ToastContainer />
    </>
  );
};

export default TodoForm;
