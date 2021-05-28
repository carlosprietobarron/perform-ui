import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

const MeasModal = ({ indId, closeModal, isOpen, handleSubmit }) => {
  const [day, setDay] = useState("");
  const [measure, setMeasure] = useState(0);
  const [notes, setNotes] = useState("");
  
  const handleFormSubmit = (event) => {
    console.log("handle submit", day, measure, notes, indId);
    handleSubmit(day, measure, notes, indId);
    closeModal();
    setDay("");
    setNotes("");
    setMeasure("");
    event.preventDefault();
  };

  const handleChange = () => {
    //const values = [...inputFields];
    
  };
  
  return (
    <Modal show={isOpen} onHide={closeModal}>
      <Modal.Header className="bg-dark text-white" closeButton>
        <Modal.Title>Create New Indicator</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="day">Day</label>
            <input
              className="form-control"
              id="day"
              type="date"
              name="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="measure">Ocurrencies</label>
            <input
              className="form-control"
              id="measure"
              type="number"
              name="measure"
              value={measure}
              onChange={(e) => setMeasure(e.target.value)}
              placeholder="Enter the daiy ocurrencies"
              required
            />
          </div>          
          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea
              className="form-control"
              id="notes"
              type="text"
              name="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows="3"
              placeholder="Take Notes in this space"
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
        <h5>MEASURES FORM</h5>
      </Modal.Footer>
    </Modal>
  );
};

export default MeasModal;
