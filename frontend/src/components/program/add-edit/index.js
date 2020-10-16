import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";

function AddEdit() {
  const [programDetails, setProgramDetails] = useState({
    programName: "",
  });
  const schema = yup.object({
    programName: yup.string().required("Required"),
  });

  function handleChange(e) {
    debugger;
    const { id, type, value } = e.target;
    switch (type) {
      case "text":
        setProgramDetails({ ...programDetails, [id]: value });
        break;
      case "file":
        setProgramDetails({
          ...programDetails,
          [id]: [...programDetails.programImages, value],
        });
        break;
      default:
        break;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Program</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <button type="button" className="btn btn-sm">
            Add Program
          </button>
        </div>
      </div>

      <Formik validationSchema={schema}>
        {() => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Program Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Program Name"
                id="programName"
                onChange={(e) => handleChange(e)}
                required
              />
              {/* {schema.touched.programName && schema.errors.programName ? (
                <div>{schema.errors.programName}</div>
              ) : null} */}
              <Form.Control.Feedback type="valid">
                You did it!
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" onClick={(e) => handleSubmit(e)}>
              Add Program
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddEdit;
