import PhotoAlbum from "react-photo-album";
import image1 from "../assets/IMG1.jpg";
import image2 from "../assets/IMG2.jpg";
import image3 from "../assets/IMG3.jpg";
import image4 from "../assets/IMG4.jpg";
import image5 from "../assets/IMG5.jpg";
import image6 from "../assets/IMG6.jpg";

const photos = [
  {
    src: image1,
    width: 800,
    height: 600,
  },
  {
    src: image2,
    width: 800,
    height: 600,
  },
  {
    src: image3,
    width: 800,
    height: 600,
  },
  {
    src: image4,
    width: 800,
    height: 600,
  },
  {
    src: image5,
    width: 800,
    height: 600,
  },

  // { src: "/images/image2.jpg", width: 1600, height: 900 },
];

export default function PhotoGallery() {
  return <PhotoAlbum layout="columns" photos={photos} key="sumit" />;
}

// "../assets/background.jpg"
