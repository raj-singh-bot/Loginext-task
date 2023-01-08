import React from "react";
import Modal from "react-bootstrap/Modal";
import { Field, Form, Formik } from "formik";
import { UserData } from "../../context/UserProvider";
import "./style.css";

const PopupModal = (props) => {
  const { data, setData } = UserData();
  //   console.log(data);
  //   const defaultValues = {
  //     name: props.item.name,
  //     email: props.item.email,
  //     phone: props.item.phone,
  //     website: props.item.website,
  //   };

  //   const handleSubmit = (values) => {
  //     const updateData = data.map((item) => {
  //       if (item.id === props.item.id) {
  //         return { ...values };
  //       }
  //       return item;
  //     });
  //     setData(updateData);
  //     props.setModalShow(false);
  //   };

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Basic Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Formik initialValues={defaultValues} onSubmit={handleSubmit}>
          <Form>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <label
                htmlFor="name"
                style={{ marginRight: "10px", width: "15%" }}
              >
                Name:
              </label>
              <Field
                name="name"
                placeholder="Enter Your First Name"
                type="text"
                className="form-control"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <label
                htmlFor="email"
                style={{ marginRight: "10px", width: "15%" }}
              >
                Email
              </label>
              <Field
                name="email"
                placeholder="Enter Your Email "
                type="text"
                className="form-control"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <label
                htmlFor="phone"
                style={{ marginRight: "10px", width: "15%" }}
              >
                Phone
              </label>
              <Field
                name="phone"
                placeholder="Enter Your Phone"
                type="text"
                className="form-control"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <label
                htmlFor="website"
                style={{ marginRight: "10px", width: "15%" }}
              >
                Website
              </label>
              <Field
                name="website"
                placeholder="Enter Your website"
                type="text"
                className="form-control"
              />
            </div>
            <div style={{ textAlign: "end" }}>
              <button
                onClick={() => props.setModalShow(false)}
                className="cmnBtn"
              >
                Cancel
              </button>
              <button type="submit" className="cmnBtn2">
                Ok
              </button>
            </div>
          </Form>
        </Formik> */}
        {props.children}
      </Modal.Body>
    </Modal>
  );
};

export default PopupModal;
