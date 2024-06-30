//import logo from './logo.svg';
import './App.css';
import kitten1 from './assest/kitten_2.jpeg'

function App() {
  return (
    <div >
      <div className="outerDiv">
        <div>
        <h2>Get Started Now</h2>
        <h5>Enter your credentials to access your account</h5>
          
          <div className="btnSide">
            <button className="topButton">Login with Google</button>
            <button className="topButton">Login with Apple</button>
          </div>
          {/* Line */}
        { <div className="lineFlex">
            <div className="line">
            </div>
            <spam>or</spam>
            <div className="line">
          </div>
          </div>}
          
          <form>
            <label className="label">Name</label><br/><br/>
            <input className="input" type="text" id="name" Placeholder="Enter your name" /><br/><br/>
            <label className="label">Email</label><br/>
            <input className="input"type="email" id="email" Placeholder="Enter your email Id "/><br/><br/>
            <label className="label">Password</label> <spam className="forgotPassword">Forgot Password</spam><br/><br/>
            <input className="input"type="password" id="password" Placeholder="Enter your password"/><br/><br/><br/>
            <input type="checkbox" id='agree'/> <label for='agree'>I agree to the Terms and policy</label><br/><br/><br/>
            <button className="loginBtn" ><h2>Login</h2></button><br/><br/><br/>
            <label>Have an account? <spam className="signIn">Sing In</spam></label><br/>
          </form>
        </div>
        <div >
          <img src={kitten1} className="imageTag" alt="" />
        </div>
      </div>
     
    </div>
  );
}

export default App;

//dribbble.com
