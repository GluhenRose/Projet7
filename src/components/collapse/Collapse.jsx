import { useState } from "react";
import "./Collapse.css";
import arrow from "../../assets/arrow.png";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
         <img
          src={arrow}
          alt="flèche"
          className={`arrow ${isOpen ? "open" : ""}`}
        />
      </button>

      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
