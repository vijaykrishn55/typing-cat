import KeyboardAltRoundedIcon from "@mui/icons-material/KeyboardAltRounded";
import Account from "./Account";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        TYPE CAT 
        <KeyboardAltRoundedIcon style={{ fontSize: "2rem" }} />
      </div>
      <Account/>
    </div>
  );
};

export default Header;
