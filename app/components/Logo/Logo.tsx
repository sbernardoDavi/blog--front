import Image from "next/image";
import logoLadp1 from "../../assets/logo-ladp1.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-center">
      <div className="logo-box">
        <Image src={logoLadp1} alt="Logo LADP" unoptimized />
      </div>
    </div>
  );
};

export default Logo;
