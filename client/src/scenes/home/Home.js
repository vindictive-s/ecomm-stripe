import ShoppingList from "./ShoppingList";
import MainCarousel from "./MainCarousel";
import Subscribe from "./Subscribe";
import { CardMedia } from "@mui/material";
import video from "../../assets/video.mp4";

function Home() {
  return (
    <div className="home">
      <MainCarousel />
      <CardMedia
        component="video"
        src={video}
        controls
        height="600px"
        sx={{ backgroundColor: "black"}}
      />
      <ShoppingList />
      <Subscribe />
    </div>
  );
}

export default Home;
