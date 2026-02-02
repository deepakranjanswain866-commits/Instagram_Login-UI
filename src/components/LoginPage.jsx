import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Enable button only if both fields have input (min 1 char for demo)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsValid(email.length > 0 && password.length >= 6);
  }, [email, password]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!isValid) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Logging in with: \nUser: ${email}`);
      // Add actual authentication logic here
    }, 1500);
  };

  return (
    <div className="container">
      <div className="main-content">
        {/* Left Side - Phone Image (Hidden on mobile via CSS) */}
        <div className="phone-mockup">
          <img 
            src="https://i.dailymail.co.uk/1s/2020/11/12/15/35601848-8942361-image-m-6_1605195508301.jpg" 
            alt="App Preview" 
          />
        </div>

        {/* Right Side - Login Box */}
        <div className="login-wrapper">
          <div className="box login-box">
            <div className="logo-container">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" 
                alt="Instagram" 
                className="logo"
              />
            </div>

            <form onSubmit={handleLogin} className="login-form">
              <div className="input-group">
                <input
                  type="text"
                  required
                  className={email ? 'has-value' : ''}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Phone number, username, or email</label>
              </div>

              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className={password ? 'has-value' : ''}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>
                {password && (
                  <button 
                    type="button" 
                    className="show-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                )}
              </div>

              <button 
                type="submit" 
                className={`login-btn ${isValid ? 'active' : ''}`}
                disabled={!isValid || isLoading}
              >
                {isLoading ? 'Logging in...' : 'Log in'}
              </button>

              <div className="divider">
                <div className="line"></div>
                <div className="or">OR</div>
                <div className="line"></div>
              </div>

              <a href="#" className="facebook-login">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
    alt="Facebook"
    className="fb-icon"
  />
  Log in with Facebook
</a>

              
              <a href="#" className="forgot-password">Forgot password?</a>
            </form>
          </div>

          <div className="box signup-box">
            <p>Don't have an account? <Link to={'/signup'}>Signup</Link></p>
            
          </div>

          <div className="app-download">
            <p>Get the app.</p>
            <div className="store-links">

              <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt="Get it on Google Play"
              className="h-10"
            />
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              alt="Get it from Microsoft"
              className="h-10"
            />
            </div>
          </div>
        </div>
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
};

export default LoginPage;