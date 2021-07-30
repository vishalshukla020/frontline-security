import { ImageList, ImageListItem } from "@material-ui/core";
import Image from "next/image";

const imageData = [
  {
    id: 1,
    src: "/1.jpeg",
    alt: "gallery image",
  },
  {
    id: 2,
    src: "/2.jpeg",
    alt: "gallery image",
  },
  {
    id: 3,
    src: "/3.jpeg",
    alt: "gallery image",
  },
  {
    id: 4,
    src: "/4.jpg",
    alt: "gallery image",
  },
  {
    id: 5,
    src: "/5.jpeg",
    alt: "gallery image",
  },
  {
    id: 6,
    src: "/6.jpeg",
    alt: "gallery image",
  },
  {
    id: 7,
    src: "/7.jpeg",
    alt: "gallery image",
  },
];

export default function Gallery() {
  return (
    <section className="gallery container">
      {imageData.map((item) => (
        <div key={item.id} className="gallery-item">
          <Image
            src={item.src}
            alt={item.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </section>
  );
}
