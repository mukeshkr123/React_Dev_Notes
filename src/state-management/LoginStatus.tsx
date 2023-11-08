import { useState, useReducer } from "react";
import loginReducer from "./reducers/loginReducer";

const LoginStatus = () => {
  const [user, dispatch] = useReducer(loginReducer, "");
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a
            onClick={() =>
              dispatch({
                type: "LOGOUT",
              })
            }
            href="#"
          >
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() =>
          dispatch({
            type: "LOGIN",
            username: "mukesh kumar",
          })
        }
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
