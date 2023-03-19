import PhotoAlbum from "react-photo-album";

import image1 from "../assets/collagePhotoes/IMG1.jpg";
import image2 from "../assets/collagePhotoes/IMG2.jpg";
import image3 from "../assets/collagePhotoes/IMG3.jpg";
import image4 from "../assets/collagePhotoes/IMG4.jpg";
import image5 from "../assets/collagePhotoes/IMG5.jpg";
import image6 from "../assets/collagePhotoes/IMG6.jpg";

const photos = [
  {
    src: image1,
    width: 900,
    height: 600,
  },
  {
    src: image6,
    width: 900,
    height: 1200,
  },
  {
    src: image2,
    width: 600,
    height: 900,
  },
  {
    src: image3,
    width: 900,
    height: 600,
  },
  {
    src: image5,
    width: 800,
    height: 600,
  },
  {
    src: image4,
    width: 600,
    height: 900,
  },

  // { src: "/images/image2.jpg", width: 1600, height: 900 },
];

export default function PhotoGallery() {
  return (
    <>
      <div className="text">
        <h3>Gallery</h3>
        <div>Clicks that will make you smile</div>
      </div>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        key="sumit"
        rowConstraints={{ maxPhotos: 2 }}
      />
    </>
  );
}

// "../assets/background.jpg"
