import Image from "next/image";
import logoLadp from "../../assets/logo-ladp.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-center">
      <div className="logo-box">
        <Image src={logoLadp} alt="Logo LADP" />
      </div>
    </div>
  );
};

export default Logo;
