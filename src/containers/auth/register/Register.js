import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "store/actions/auth";
import { setAlert } from "store/actions/general";
import { AUTH_LOGIN } from "core/constants/routes";
import CustomTextField from "core/components/form-elements/custom-text-field/CustomTextField";
import CustomButton from "core/components/form-elements/custom-button/CustomButton";
import AlertBlock from "core/components/alert-block/AlertBlock";

const Register = ({ register, setAlert }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password === state.password2) {
      register(state.email, state.password);
    } else {
      setAlert({
        show: true,
        severity: "error",
        message: "Passwords do not match",
      });
    }
  };

  const textFieldStyles = {
    borderColor: "#333",
    hoverBorderColor: "#111",
    focusedBorderColor: "#111",
    color: "#FFF",
    hoverColor: "#FFF",
    focusedColor: "#FFF",
    labelColor: "#333",
    marginBottom: "15px",
  };

  const submitButtonStyles = {};

  return (
    <>
      <form className="form transparent-box" onSubmit={handleSubmit}>
        <h3>Register New Player</h3>
        <AlertBlock />
        <CustomTextField
          value={state.email}
          label="E-Mail"
          variant="outlined"
          name="email"
          id="email"
          type="email"
          onChange={handleChange}
          autoComplete="off"
          required
          fullWidth
          css={textFieldStyles}
        />
        <CustomTextField
          value={state.password}
          label="Password"
          variant="outlined"
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          autoComplete="off"
          required
          fullWidth
          css={textFieldStyles}
        />
        <CustomTextField
          value={state.password2}
          label="Password Confirm"
          variant="outlined"
          id="password2"
          name="password2"
          type="password"
          onChange={handleChange}
          autoComplete="off"
          required
          fullWidth
          css={textFieldStyles}
        />
        <CustomButton
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          css={submitButtonStyles}
        >
          Log in
        </CustomButton>
      </form>
      <p className="ta_c">
        Already signed up?{" "}
        <Link to={AUTH_LOGIN}>
          <strong>Click here</strong>
        </Link>{" "}
        to sign in!
      </p>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setAlert: (alert) => dispatch(setAlert(alert)),
    register: (email, password) => dispatch(register(email, password)),
  };
}

export default connect(null, mapDispatchToProps)(Register);
