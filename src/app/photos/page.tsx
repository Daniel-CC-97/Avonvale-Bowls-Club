"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import { getGalleries } from "@/utils";
import Masonry from "react-masonry-css";

const masonryStyles = {
  container: "w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
  item: "relative mb-6",
  imageWrapper: "relative w-full overflow-hidden bg-slate-200 rounded-t-lg",
  image: "object-cover w-full h-full",
};

export default function Page() {
  const [galleries, setGalleries] = useState<any>([]);

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const allGalleries = await getGalleries();
        setGalleries(allGalleries);
      } catch (error) {
        console.error("Error fetching images: ", error);
      }
    };
    fetchGalleries();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Hero text="Photos" imageUrl="/bowl.jpg" height="small" />
      <main className={masonryStyles.container}>
        {galleries &&
          galleries.map((images, index) => (
            <div key={index} className="mb-6">
              <h2 className="font-bold mb-4 text-lg">{images.fields.title}</h2>
              <Masonry
                breakpointCols={{ default: 3, 700: 2, 500: 1 }}
                className="flex"
                columnClassName="my-masonry-grid_column p-2"
              >
                {images.fields.images.map((image, index) => (
                  <div key={index} className={masonryStyles.item}>
                    <div className={masonryStyles.imageWrapper}>
                      <Image
                        className={masonryStyles.image}
                        src={"https:" + image.fields.file.url}
                        width={image.fields.file.details.image.width}
                        height={image.fields.file.details.image.height}
                        alt={image.fields.title}
                        layout="responsive" // Adjust image based on its container's aspect ratio
                      />
                    </div>
                    <div className="p-2 bg-slate-200 rounded-b-lg">
                      <h4 className="font-bold">{image.fields.title}</h4>
                      <p>{image.fields.description}</p>
                    </div>
                  </div>
                ))}
              </Masonry>
            </div>
          ))}
      </main>
      <Footer />
    </div>
  );
}
