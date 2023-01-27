import { Link } from "react-router-dom";
import LogoApp from "/src/assets/images/ecommerce_favicon.jpg";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={LogoApp} alt="Logo ecommerce" width="60" />
      </Link>
    </div>
  );
}

export default Logo;
