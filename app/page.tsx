import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Content />
    </div>
  );
}
