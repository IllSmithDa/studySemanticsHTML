import { useState } from "react";
import "./MobileNavButton.scss";

export default function MobileNavButton() {
  const [ menuState, setMenuState] = useState<boolean>(false);
  const handleOnClick = () => {
    const element1 = document.getElementById("line1")?.classList;
    if (element1) {
      if (menuState) {
        const element1 = document.getElementById("line1")?.classList;
        element1?.add("line1")
        element1?.remove("default-line");
        const element2 = document.getElementById("line2")?.classList;
        element2?.add("line2")
        element2?.remove("default-line");
        const element3 = document.getElementById("line3")?.classList;
        element3?.add("line3")
        element3?.remove("default-line");
        setMenuState(false);
      } else {
        element1?.remove("line1")
        element1?.add("default-line");
        const element2 = document.getElementById("line2")?.classList;
        element2?.remove("line2")
        element2?.add("default-line");
        const element3 = document.getElementById("line3")?.classList;
        element3?.remove("line3")
        element3?.add("default-line");
        setMenuState(true);
      } 
    }
  }
  return (
    <div id="hamburger-menu" className="hamburger-menu" onClick={handleOnClick}>
      <hr id="line1" className="default-line" />  
      <hr id="line2" className="default-line" />
      <hr id="line3" className="default-line" />
    </div>

  )
}