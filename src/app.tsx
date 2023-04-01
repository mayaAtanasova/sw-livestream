import Chat from "./components/Chat/Chat";
import Stream from "./components/Stream/Stream";
import background from "./assets/hero_bkg.png";
import "./app.css";

export function App() {
  return (
    <>
    <h2>Welcome to the Livestream</h2>
    <div className="container">
      <Stream />
      <Chat />
    </div>
    <img className="bkg" src={background} alt="" />
    </>
  )
}
