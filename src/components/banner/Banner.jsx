import "./Banner.css";
import bannerImg from "../../assets/banner-img.png"
import aboutBanner from "../../assets/about-banner.png";

function Banner({ variant }) {
  const background = variant === "about" ? aboutBanner : bannerImg;

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${background})` }}
    >
      {variant !== "about" && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  );
}

export default Banner;