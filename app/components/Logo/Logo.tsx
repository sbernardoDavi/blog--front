import Image from "next/image";
import logo from "../../assets/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-center">
      <div className="logo-box">
        <Image src={logo} alt="Logo LADP" unoptimized />
      </div>
    </div>
  );
};

export default Logo;
