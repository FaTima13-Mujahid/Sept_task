// import React from 'react'

// const UpdateTodo = () => {
//   return (
//     <div>
//       {" "}
//       {/* Modal for Updating Todo */}
//       {isModalOpen && (
//         <div
//           className="modal show"
//           style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
//         >
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Update To-do</h5>
//                 <button
//                   type="button"
//                   className="close"
//                   onClick={() => setIsModalOpen(false)}
//                 >
//                   <span>&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={updateTodo}>
//                   <div className="form-outline mb-4">
//                     <label className="form-label" htmlFor="todoName">
//                       To-do Name
//                     </label>
//                     <input
//                       type="text"
//                       id="todoName"
//                       className="form-control"
//                       value={Name}
//                       onChange={(e) => setName(e.target.value)}
//                     />
//                   </div>

//                   <div className="form-outline mb-4">
//                     <label className="form-label" htmlFor="todoDescription">
//                       To-do Description
//                     </label>
//                     <textarea
//                       id="todoDescription"
//                       className="form-control"
//                       rows="3"
//                       value={Description}
//                       onChange={(e) => setDescription(e.target.value)}
//                     />
//                   </div>

//                   <div className="form-outline mb-4">
//                     <label className="form-label" htmlFor="todoDate">
//                       To-do Date
//                     </label>
//                     <input
//                       type="date"
//                       id="todoDate"
//                       className="form-control"
//                       value={Date}
//                       onChange={(e) => setDate(e.target.value)}
//                     />
//                   </div>

//                   <div className="form-outline mb-4">
//                     <label className="form-label" htmlFor="genreSelect">
//                       Select Genre
//                     </label>
//                     <select
//                       className="form-select form-select-lg mb-3"
//                       aria-label=".form-select-lg example"
//                       value={Genre}
//                       onChange={(e) => setGenre(e.target.value)}
//                     >
//                       <option value="">Select Genre</option>
//                       {Fetchgenre.map((data, index) => (
//                         <option key={index} value={data.gen_name}>
//                           {data.gen_name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div className="form-outline mb-4">
//                     <label className="form-label" htmlFor="statusSelect">
//                       To-do Status
//                     </label>
//                     <select
//                       id="statusSelect"
//                       className="form-select form-select-lg mb-3"
//                       aria-label=".form-select-lg example"
//                       value={Status}
//                       onChange={(e) => setStatus(e.target.value)}
//                     >
//                       <option value="">Select Status</option>
//                       <option value="Pending">Pending</option>
//                       <option value="Completed">Completed</option>
//                       <option value="In Progress">In Progress</option>
//                     </select>
//                   </div>

//                   <center>
//                     <button type="submit" className="btn btn-success btn-lg">
//                       Update To-do
//                     </button>
//                   </center>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UpdateTodo