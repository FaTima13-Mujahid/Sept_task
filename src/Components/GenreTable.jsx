import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap"; // Import Modal and Button
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GenreTable = () => {
  // State to store genre data
  const [GenreInfo, setGenreInfo] = useState([]);

  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  // State to store the selected genre for editing
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [updatedGenreName, setUpdatedGenreName] = useState("");
  const [updatedGenreStatus, setUpdatedGenreStatus] = useState("");

  // Fetch genre data from API
  useEffect(() => {
    const handlefetchAccount = async () => {
      try {
        const response = await fetch(
          "https://66dff6762fb67ac16f27bba7.mockapi.io/crud/Generic"
        );
        if (response.status === 200) {
          const genreData = await response.json();
          setGenreInfo(genreData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    handlefetchAccount();
  }, [GenreInfo]);

  // Function to delete genre
  const DeleteGenre = async (varid, varname) => {
    try {
      const deleteUser = await fetch(
        `https://66dff6762fb67ac16f27bba7.mockapi.io/crud/Generic/${varid}`,
        { method: "DELETE" }
      );
      if (deleteUser.status === 200) {
        DelNotification(varname);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Success notification for deletion
  const DelNotification = (message) => {
    toast.success(`Genre "${message}" deleted`, {
      autoClose: 2000,
      theme: "dark",
    });
  };

  // Function to handle the edit button click
  const handleEditClick = (genre) => {
    setSelectedGenre(genre);
    setUpdatedGenreName(genre.gen_name);
    setUpdatedGenreStatus(genre.gen_status);
    setShowModal(true); // Show the modal
  };

  // Function to handle form submission (updating genre)
  const handleUpdateGenre = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://66dff6762fb67ac16f27bba7.mockapi.io/crud/Generic/${selectedGenre.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gen_name: updatedGenreName,
            gen_status: updatedGenreStatus,
          }),
        }
      );
      if (response.status === 200) {
        toast.success(`Genre "${updatedGenreName}" updated successfully`, {
          autoClose: 2000,
          theme: "dark",
        });
        setShowModal(false); // Close modal after successful update
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Close modal handler
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* Table  genres */}
      <table className="table mt-3" style={{ tableLayout: "fixed" }}>
        <thead className="table-danger" style={{ position: "sticky", top: 0 }}>
          <tr>
            
            <th scope="col">#</th>
            <th scope="col">Genre Name</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {GenreInfo.map((data, index) => {
            return (
              <tr key={index}>
                <th scope="row">{data.id}</th>
                <td>{data.gen_name}</td>
                <td>{data.gen_status}</td>
                <td>
                  <button
                    className="btn btn-outline-success mx-2"
                    onClick={() => handleEditClick(data)}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-outline-danger mx-2"
                    onClick={() => DeleteGenre(data.id, data.gen_name)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Modal for editing genre */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Genre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUpdateGenre}>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="genreName">
                Genre Name
              </label>
              <input
                type="text"
                id="genreName"
                className="form-control"
                value={updatedGenreName}
                onChange={(e) => setUpdatedGenreName(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="genreStatus">
                Status
              </label>
              <select
                id="genreStatus"
                className="form-select"
                value={updatedGenreStatus}
                onChange={(e) => setUpdatedGenreStatus(e.target.value)}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <center>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </center>
          </form>
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default GenreTable;
