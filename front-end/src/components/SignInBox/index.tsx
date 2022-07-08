import { Link } from "react-router-dom";
import "./index.css";

function SignInBox() {
  return (
    <div className="wrapper">
      <form className="signin--form">
        <div className="signin--textfield">
          <input type="text" required />
          <span className="signin--textfield-highlight"></span>
          <span className="signin--textfield-bar"></span>
          <label>email</label>
        </div>

        <div className="signin--textfield">
          <input type="text" required />
          <span className="signin--textfield-highlight"></span>
          <span className="signin--textfield-bar"></span>
          <label>password</label>
        </div>
        <button className="signin--button">SIGN IN</button>
        <div className="signin--link-to-sign-up">
          <Link to="/signup">
            If you don't already have an account, you can create one by clicking
            here !
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInBox;
