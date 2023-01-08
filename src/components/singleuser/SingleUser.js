import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import {
  AiFillHeart,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineHeart,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import PopupModal from "../Modal/PopupModal";
import "./style.css";
import { UserData } from "../../context/UserProvider";
import { Field, Form, Formik } from "formik";

const SingleUser = ({ item }) => {
  const [active, setActive] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const { data, setData } = UserData();

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    setDeleteShow(false);
  };
  const defaultValues = {
    name: item.name,
    email: item.email,
    phone: item.phone,
    website: item.website,
  };

  const handleSubmit = (values) => {
    const updateData = data.map((data) => {
      if (data.id === item.id) {
        return { ...values };
      }
      return data;
    });
    setData(updateData);
    setModalShow(false);
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const handleCloseDeleteModal = () => {
    setDeleteShow(false);
  };

  return (
    <Col md="3">
      <Card style={{ margin: "15px 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            padding: "10px 0",
          }}
        >
          <Card.Img
            variant="top"
            style={{
              width: "200px",
              height: "200px",
            }}
            src={`https://avatars.dicebear.com/v2/avataaars/${item.name}.svg?options[mood][]=happy`}
          />
        </div>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            <AiOutlineMail fontSize={20} style={{ marginRight: "10px" }} />{" "}
            {item.email}
          </Card.Text>
          <Card.Text>
            <AiOutlinePhone fontSize={20} style={{ marginRight: "10px" }} />{" "}
            {item.phone}
          </Card.Text>
          <Card.Text>
            <BsGlobe fontSize={20} style={{ marginRight: "10px" }} />{" "}
            {item.website}
          </Card.Text>
        </Card.Body>
        <ul className="actionList">
          <li>
            <button onClick={() => setActive(!active)}>
              {active ? (
                <AiFillHeart fontSize={20} color="red" />
              ) : (
                <AiOutlineHeart fontSize={20} color="red" />
              )}
            </button>
          </li>
          <li>
            <PopupModal show={modalShow} handleClose={handleClose} item={item}>
              <Formik initialValues={defaultValues} onSubmit={handleSubmit}>
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
                      onClick={() => setModalShow(false)}
                      className="cmnBtn"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="cmnBtn2">
                      Ok
                    </button>
                  </div>
                </Form>
              </Formik>
            </PopupModal>
            <button onClick={() => setModalShow(true)}>
              <AiOutlineEdit fontSize={20} />
            </button>
          </li>
          <li>
            <PopupModal show={deleteShow} handleClose={handleCloseDeleteModal}>
              <p>Are you sure you want to delete this item?</p>
              <div style={{ textAlign: "end" }}>
                <button onClick={() => setDeleteShow(false)} className="cmnBtn">
                  Cancel
                </button>
                <button
                  className="cmnBtn2"
                  onClick={() => handleDelete(item.id)}
                >
                  Yes
                </button>
              </div>
            </PopupModal>
            <button onClick={() => setDeleteShow(true)}>
              <AiOutlineDelete fontSize={20} />
            </button>
          </li>
        </ul>
      </Card>
    </Col>
  );
};

export default SingleUser;
