import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "store/actions/auth";
import { AUTH_REGISTER } from "core/constants/routes";
import CustomTextField from "core/components/form-elements/custom-text-field/CustomTextField";
import CustomButton from "core/components/form-elements/custom-button/CustomButton";
import AlertBlock from "core/components/alert-block/AlertBlock";

const Login = ({ login }) => {
  const [state, setState] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(state.email, state.password);
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
        <h3>Login</h3>
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
        To register new player{" "}
        <Link to={AUTH_REGISTER}>
          <strong>click here!</strong>
        </Link>
      </p>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(login(email, password)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
