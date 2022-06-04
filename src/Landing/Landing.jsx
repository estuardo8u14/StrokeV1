import { Link } from "react-router-dom";

function LandingPageButton() {
  return (
    <Link to="/login" class="nav-link">
      <button class="btn1 btn-primary">
        <span style={{ "font-size": "24px", fontFamily: "El Messiri" }}>
          Inicia sesión
        </span>
      </button>
    </Link>
  );
}

function LandingPageButton2() {
  return (
    <Link to="/register" class="nav-link">
      <button class="btn1 btn-primary">
        <span style={{ "font-size": "24px", fontFamily: "El Messiri" }}>
          Registrate
        </span>
      </button>
    </Link>
  );
}

function LandingFrameMessage() {
  const style = {
    margin: "auto",
    padding: "10% 35% 10% 15%",
    color: "white",
  };

  return (
    <html>
      <div style={style}>
        <div style={{ "font-size": "96px", fontFamily: "El Messiri" }}>
          STROKE
        </div>
        <div style={{ "font-size": "36px", fontFamily: "El Messiri" }}>
          Herrameinta para el diagnostico y tratamiento de isquemia cerebral
          transitoria
        </div>
        <br />
        <LandingPageButton />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <LandingPageButton2 />
      </div>
    </html>
  );
}

function LandingFrame() {
  const style = {
    "background-image": `url("images/background.jpg")`,
    "background-repeat": "no-repeat",
    "background-size": "cover",
    position: "absolute",
    height: "100%",
    width: "100%",
  };

  return (
    <div style={style}>
      <LandingFrameMessage />
    </div>
  );
}

function Landing() {
  return (
    <div>
      <LandingFrame />
    </div>
  );
}

export default Landing;
