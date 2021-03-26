import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="auth-wrapper">
      <div style={{ textAlign: "center" }}>
        <h3>Register</h3>
      </div>
      <form>
        <label>E-mail</label>
        <input
          name="email"
          type="email"
          // ref={register({ required: true, maxLength: 10 })}
        />
        {/* {errors.exampleRequired && <p>This field is required</p>} */}
        <label>Name</label>
        <input
          name="name"
          // ref={register({ required: true, maxLength: 10 })}
        />
        {/* {errors.exampleRequired && <p>This field is required</p>} */}
        <label>Password</label>
        <input
          name="password"
          type="password"
          // ref={register({ required: true, maxLength: 10 })}
        />
        {/* {errors.exampleRequired && <p>This field is required</p>} */}
        <label>Password confirm</label>
        <input
          name="password"
          type="password"
          // ref={register({ required: true, maxLength: 10 })}
        />
        {/* {errors.exampleRequired && <p>This field is required</p>} */}
        <input type="submit" />
        <Link style={{ color: "gray", textDecoration: "none" }} to="login">
          이미 아이디가 있다면..
        </Link>
      </form>
    </div>
  );
}
