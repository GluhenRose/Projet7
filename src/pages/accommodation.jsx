import { useParams, Navigate } from "react-router-dom";
import data from "../data/data.json";
import Carousel from "../components/carousel/Carousel";
import Collapse from "../components/collapse/Collapse";

import starActive from "../assets/star-active.png";
import starInactive from "../assets/star-inactive.png";

function Accommodation() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  const rating = Number(logement.rating);

  return (
    <main className="accommodation">
      <Carousel pictures={logement.pictures} />

      <div className="accommodation-info">
        <div className="accommodation-left">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>

          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="accommodation-right">
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>

          <div className="rating">
            {[1,2,3,4,5].map(star => (
               <img
                key={star}
                src={star <= rating ? starActive : starInactive}
                alt={star <= rating ? "étoile pleine" : "étoile vide"}
                className="star"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="accommodation-collapse">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((eq, index) => (
              <li key={index}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </main>
  );
}

export default Accommodation;
