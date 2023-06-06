import CustomIcon from "../CustomIcon/CustomIcon";
import NavLink from "../NavLink/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import "./Header.scss";
import MobileNavButton from "../MobileNavButton/MobileNavButton";

export default function Header() {
  return (
    <header>
      <nav
        className="flex-horizontal header-bar"
      >
        <a className="snowflake-link custom-icon margin-x-reg" href="#"><CustomIcon iconName={faSnowflake} /></a>
        <NavLink label="Desktops" link="#" />
        <NavLink label="Laptops" link="#" />
        <NavLink label="Phones" link="#" />
        <NavLink label="Hardware" link="#" />
        <NavLink label="Software" link="#" />
        <NavLink label="Other" link="#" />
        <MobileNavButton />
      </nav>
    </header>
  )
}