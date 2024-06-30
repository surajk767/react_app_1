//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <div className="outerDiv">
       <h2>Get Started Now</h2>
       <h6>Enter your credentials to access your account</h6>
        
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
          <label className="label">Name</label><br/>
          <input className="input" type="text" id="name" Placeholder="Enter your name" /><br/>
          <label className="label">Email</label><br/>
          <input className="input"type="email" id="email" Placeholder="Enter your email Id "/><br/>
          <label className="label">Password</label><br/>
          <input className="input"type="password" id="password" Placeholder="Enter your password"/><br/>
     
          

        </form>
      </div>
  
    </div>
  );
}

export default App;

//dribbble.com
