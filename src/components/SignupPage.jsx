import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";

function SignupPage() {
  const [form, setForm] = useState({ email: "", fullName: "", username: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/");
  };

  return (
      <div className="container">
      <div className="signup-card">

        <img src="/insta4.jpeg" alt="Instagram" className="logo" />

        <p className="signup-subtitle">
          Sign up to see photos and videos from your friends.
        </p>

        <div className="fb-signup">
          <FaFacebookSquare /> Log in with Facebook
        </div>

        <div className="divider"><span>OR</span></div>
        <div className="input-btn">
          <input type="text" placeholder="Mobile number or email" />
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </div>

        <button className="signup-btn">Sign up</button>

        <p className="terms">
          By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
        </p>

        {/* <div className="signup-box">
            Have an account? <Link to="/login">Login</Link>
          </div> */}

        {/* GET APP */}
        <div className="get-app">
        </div>
      </div>
      <div className="signup-box">
        Have an account? <Link to="/">Login</Link>
      </div>

     <footer className="footer">
        <div className="links">
          <a href="#">Meta</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
          <a href="#">Help</a>
          <a href="#">API</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Locations</a>
          <a href="#">Instagram Lite</a>
          <a href="#">Threads</a>
          <a href="#">Contact</a>
          <a href="#">uploading and non-users</a>
          <a href="#">Meta Verified</a>
        </div>
        <div className="copyright">© 2024 Instagram from Meta</div>
      </footer>
    </div>
  );
}

export default SignupPage;

