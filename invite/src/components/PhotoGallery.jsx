import PhotoAlbum from "react-photo-album";

const photos = [
    { src: "../assets/background.jpg", width: 800, height: 600 },
    // { src: "/images/image2.jpg", width: 1600, height: 900 },
];

export default function PhotoGallery() {
    return <PhotoAlbum layout="rows" photos={photos} />;
}


// "../assets/background.jpg"