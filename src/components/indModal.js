import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const IndModal = ({ closeModal, isOpen, handleSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  
  const handleFormSubmit = (event) => {
    console.log("handlge submit", name, description, goal);
    handleSubmit(name, description, goal);
    closeModal();
    setName("");
    setDescription("");
    setGoal("");
    event.preventDefault();
  };
 
  return (
    <Modal show={isOpen} onHide={closeModal}>
      <Modal.Header className="bg-dark text-white" closeButton>
        <Modal.Title>Create New Indicator</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="title">Name</label>
            <input
              className="form-control"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              placeholder="Enter your description"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Daily Goal</label>
            <input
              className="form-control"
              id="goal"
              type="number"
              name="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Enter the daiy goal"
              required
            />
          </div>
          <div>
            <hr />
            <button className="btn auth-btn-b mt-3" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <h5>INDICATORS FORM</h5>
      </Modal.Footer>
    </Modal>
  );
};

export default IndModal;
