import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import api from "../services/api";
import { useAuth } from "../context/authContext";

import "../styles/Login.css";

export default function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);


  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");

    setLoading(true);


    try {

      const res = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );


      login(res.data);


      navigate("/dashboard");

    }

    catch (err) {

      console.log(err);

      setError(

        err.response?.data?.message ||

        "Login failed"

      );

    }

    finally {

      setLoading(false);

    }

  };


  return (

    <div className="login-container">

      <div className="login-card">

        <button

          className="back-button"

          onClick={() => navigate("/")}

        >

          ← Back

        </button>


        <h1>

          Welcome Back

        </h1>


        <p className="login-subtitle">

          Sign in to continue tracking

          your job applications.

        </p>


        <form

          className="login-form"

          onSubmit={handleLogin}

        >


          <div className="input-group">

            <label>

              Email

            </label>

            <input

              type="email"

              placeholder="Enter your email"

              value={email}

              onChange={(e) =>

                setEmail(e.target.value)

              }

              required

            />

          </div>


          <div className="input-group">

            <label>

              Password

            </label>

            <input

              type="password"

              placeholder="Enter your password"

              value={password}

              onChange={(e) =>

                setPassword(e.target.value)

              }

              required

            />

          </div>


          {

            error &&

            (

              <p className="error-message">

                {error}

              </p>

            )

          }


          <button

            className="login-button"

            type="submit"

            disabled={loading}

          >

            {

              loading

                ?

                "Signing in..."

                :

                "Sign In"

            }

          </button>


        </form>


        <div className="login-footer">

          Don't have an account?

          <Link to="/register">

            Register

          </Link>

        </div>


      </div>

    </div>

  );

}