import Paper from "@mui/material/Paper";
import { Button, TextField } from "@material-ui/core";

import validationStyle from "../../../static/styles/validation.module.scss";
import { NavLink } from "react-router-dom";
import { ROUTES_NAMES } from "../../../routes/routesNames";

export const LoginForm = ({ form }) => {
  return (
    <Paper className={validationStyle.paper} elevation={5}>
      <form
        className={validationStyle.authorizationForm}
        onSubmit={form.handleSubmit}
      >
        <h1>SIGN IN</h1>

        <TextField
          className={validationStyle.textField}
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={form.values.email}
          onChange={form.handleChange}
          error={form.touched.email && Boolean(form.errors.email)}
          helperText={form.touched.email && form.errors.email}
        />
        <TextField
          className={validationStyle.textField}
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={form.values.password}
          onChange={form.handleChange}
          error={form.touched.password && Boolean(form.errors.password)}
          helperText={form.touched.password && form.errors.password}
        />
        <Button
          className={validationStyle.button}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Log in
        </Button>
        <NavLink
          className={validationStyle.link}
          to={ROUTES_NAMES.REGISTRATION}
        >
          <Button
            className={validationStyle.button}
            color="primary"
            variant="contained"
            fullWidth
          >
            REGISTER
          </Button>
        </NavLink>
      </form>
    </Paper>
  );
};