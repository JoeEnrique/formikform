import React, { useState } from "react";
import { useFormik } from "formik";
import Logo from "../images/formlogo.png";

const initialValues = {
  emailField: "",
  pswField: "",
};

const onSubmit = (values) => {
  console.log("FORM VALUES: ", values);
  console.log(values.emailField);
  console.log(values.pswField);
};

const validate = (values) => {
  let errors = {};

  if (!values.emailField) {
    errors.emailField = "Field required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)
  ) {
    errors.emailField = "Username should be an email";
  }

  if (!values.pswField) {
    errors.pswField = "Field required";
  }

  return errors;
};

//MY REACT FORM *******************************************

function MyReactForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  var [formResult, updateResult] = useState("");

  function popResults() {
    updateResult(`Login Successful by: ${formik.values.emailField}`);
  }

  return (
    <div>
      <img src={Logo} alt="Logo" className="logo" id="imagepop"></img>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-block">
          <div className="form-control">
            <label htmlFor="emailField">E-Mail</label>
            <input
              type="email"
              id="emailField"
              name="emailField"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.emailField}
            ></input>
            {formik.touched.emailField && formik.errors.emailField ? (
              <div className="error">{formik.errors.emailField}</div>
            ) : null}
          </div>

          <div className="form-control">
            <label htmlFor="pswField">Password</label>
            <input
              type="text"
              id="pswField"
              name="pswField"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.pswField}
            ></input>
            {formik.touched.pswField && formik.errors.pswField ? (
              <div className="error">{formik.errors.pswField}</div>
            ) : null}
          </div>
          <button type="submit" onClick={popResults} id="submitBtn">
            Submit
          </button>
        </div>
      </form>
      <div id="results">{formResult}</div>
    </div>
  );
}

export default MyReactForm;
