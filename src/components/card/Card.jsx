import { Link } from "react-router-dom";
import "./Card.css";

function Card({ id, title, cover }) {
  return (
    <Link to={`/accommodation/${id}`} className="card">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </Link>
  )
}

export default Card
