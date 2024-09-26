import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap"; // Import Modal from react-bootstrap
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoTable = () => {
  const [TodoInfo, setTodoInfo] = useState([]); // State  all to-dos
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedTodo, setSelectedTodo] = useState(null); // State to store the selected to-do for update

  const [updatedTodoName, setUpdatedTodoName] = useState(""); // State for updated to-do name
  const [updatedTodoDesc, setUpdatedTodoDesc] = useState(""); // State for updated description
  const [updatedTodoDate, setUpdatedTodoDate] = useState(""); // State for updated date
  const [updatedTodoGenre, setUpdatedTodoGenre] = useState(""); // State for updated genre
  const [updatedTodoStatus, setUpdatedTodoStatus] = useState(""); // State for updated status

  const [Fetchgenre, setFetchGenre] = useState([]); // State for genres fetched from API
  const [statusFilter, setStatusFilter] = useState(""); // State for status filtering

  useEffect(() => {
    // Fetch the to-do data
    const handleTodoData = async () => {
      try {
        const response = await fetch(
          "https://66dff6762fb67ac16f27bba7.mockapi.io/crud/Todo"
        );
        if (response.status === 200) {
          const genreData = await response.json();
          setTodoInfo(genreData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch genre data for dropdown
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          "https://66dff6762fb67ac16f27bba7.mockapi.io/crud/Generic"
        );
        if (response.status === 200) {
          const genreData = await response.json();
          setFetchGenre(genreData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    handleTodoData();
    fetchGenres();
  }, []);

  // Delete to-do
  const DeleteTodo = async (userid) => {
    try {
      const deleteuser = await fetch(
        `https://66dff6762fb67ac16f27bba7.mockapi.io/crud/Todo/${userid}`,
        { method: "DELETE" }
      );
      if (deleteuser.status === 200) {
        Notification(userid);
        setTodoInfo((prevTodos) =>
          prevTodos.filter((todo) => todo.id !== userid)
        ); // Remove deleted todo from state
      }
    } catch (error) {

      
      console.log(error);
    }
  };

  const Notification = (message) => {
    toast.success(`To-do ${message} deleted`, {
      autoClose: 2000,
      theme: "dark",
    });
  };

  // Show Modal and populate with selected data
  const handleEditClick = (todo) => {
    setSelectedTodo(todo);
    setUpdatedTodoName(todo.todo_name); // Set name value
    setUpdatedTodoDesc(todo.todo_description); // Set description value
    setUpdatedTodoDate(todo.todo_date); // Set date value
    setUpdatedTodoGenre(todo.genre); // Set genre value
    setUpdatedTodoStatus(todo.todo_status); // Set status value
    setShowModal(true); // Open modal
  };

  // Close Modal
  const handleClose = () => setShowModal(false);

  // Handle form submission for updating
  const handleSubmission = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading page
    try {
      const response = await fetch(
        `https://66dff6762fb67ac16f27bba7.mockapi.io/crud/Todo/${selectedTodo.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            todo_name: updatedTodoName,
            todo_description: updatedTodoDesc,
            todo_date: updatedTodoDate,
            genre: updatedTodoGenre,
            todo_status: updatedTodoStatus,
          }),
        }
      );
      if (response.status === 200) {
        toast.success("To-do updated successfully", {
          autoClose: 2000,
          theme: "dark",
        });
        setShowModal(false); // Close modal after successful update
        setTodoInfo((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === selectedTodo.id
              ? {
                  ...todo,
                  todo_name: updatedTodoName,
                  todo_description: updatedTodoDesc,
                  todo_date: updatedTodoDate,
                  genre: updatedTodoGenre,
                  todo_status: updatedTodoStatus,
                }
              : todo
          )
        ); // Update the local state with the new todo data
      }
    } catch (error) {
      console.log(error);
    }
  };


  const filteredTodos = statusFilter
    ? TodoInfo.filter((todo) => todo.todo_status === statusFilter)
    : TodoInfo;

  return (
    <>
      {/* Dropdown to filter by status */}
      <div className="mb-3 text-end">
        <select
          id="statusFilter"
          className="form-select d-inline-block w-auto" // Add d-inline-block and w-auto to keep it inline and auto width
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
        </select>
      </div>

      {/* Table to display the to-do list */}
      <div
        style={{
          maxHeight: "400px", // Set a fixed height for the table (8 rows * 50px)
          overflowY: "auto", // Enable vertical scrolling
          display: "block", // Display as block to allow scrolling
        }}
      >
        <table
          className="table mt-3"
          style={{ width: "100%", tableLayout: "fixed" }}
        >
          <thead
            className="table-danger"
            style={{
              position: "sticky", // Make the header sticky
              top: 0, // Align the header to the top
              zIndex: 10, // Set z-index to keep it on top
              backgroundColor: "#f8f9fa", // Background color for header
            }}
          >
            <tr>
              <th scope="col">#</th>
              <th scope="col">To-do Name</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="col">Genre</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTodos.map((data, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.todo_name}</td>
                <td>{data.todo_description}</td>
                <td>{data.todo_date}</td>
                <td>{data.genre}</td>
                <td>{data.todo_status}</td>
                <td>
                  <span className="mx-2">
                    <button
                      className="btn btn-outline-success"
                      onClick={() => handleEditClick(data)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                  </span>
                  <span className="mx-2">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => DeleteTodo(data.id)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Editing */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit To-do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmission}>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="todoName">
                To-do Name
              </label>
              <input
                type="text"
                id="todoName"
                className="form-control"
                value={updatedTodoName}
                onChange={(e) => setUpdatedTodoName(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="todoDescription">
                Description
              </label>
              <textarea
                id="todoDescription"
                className="form-control"
                value={updatedTodoDesc}
                onChange={(e) => setUpdatedTodoDesc(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="todoDate">
                To-do Date
              </label>
              <input
                type="date"
                id="todoDate"
                className="form-control"
                value={updatedTodoDate}
                onChange={(e) => setUpdatedTodoDate(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="genreSelect">
                Select Genre
              </label>
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                value={updatedTodoGenre}
                onChange={(e) => setUpdatedTodoGenre(e.target.value)}
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
                value={updatedTodoStatus}
                onChange={(e) => setUpdatedTodoStatus(e.target.value)}
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
              </select>
            </div>

            <center>
              <button type="submit" className="btn btn-danger btn-lg">
                Save Changes
              </button>
            </center>
          </form>
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </>
  );
};

export default TodoTable;
