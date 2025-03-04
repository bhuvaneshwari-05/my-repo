import "./Home.css";
import background from "../assets/image.png"; // Add your chosen background image

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <div className="home-content">
        <h1>My Portfolio</h1>
        <p>Welcome! I am a passionate engineering student exploring new technologies</p>
        <div className="buttons">
          <button className="btn">Explore Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
