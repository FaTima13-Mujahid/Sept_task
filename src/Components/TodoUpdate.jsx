import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoUpdate = () => {
  //useStates of TODO
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Date, setDate] = useState("");
  const [Status, setStatus] = useState("");
  const [Genre, setGenre] = useState("");

  const [Fetchgenre, setFetchgenre] = useState([]);
  const [Error, setError] = useState("");
  const [Success, setSuccess] = useState("");
  const [modalVisible, setModalVisible] = useState(true);


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
          method: "PUT",
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
    <div>
      {" "}
      {modalVisible && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update To-do</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setModalVisible(false)} // Close modal on click
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="todoName" className="form-label">
                      To-do Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="todoName"
                      // value={selectedTodo.todo_name}
                      // onChange={(e) =>
                      //   setSelectedTodo({
                      //     ...selectedTodo,
                      //     todo_name: e.target.value,
                      //   })
                      // }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="todoDescription" className="form-label">
                      To-do Description
                    </label>
                    <textarea
                      className="form-control"
                      id="todoDescription"
                      // value={selectedTodo.todo_description}
                      // onChange={(e) =>
                      //   setSelectedTodo({
                      //     ...selectedTodo,
                      //     todo_description: e.target.value,
                      //   })
                      // }
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="todoDate" className="form-label">
                      To-do Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="todoDate"
                      // value={selectedTodo.todo_date}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="todoGenre" className="form-label">
                      Genre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="todoGenre"
                      // value={selectedTodo.genre}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="todoStatus" className="form-label">
                      Status
                    </label>
                    <select
                      className="form-select"
                      id="todoStatus"
                      // value={selectedTodo.todo_status}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setModalVisible(true)}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoUpdate