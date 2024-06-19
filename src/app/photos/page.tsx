'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

import NavBar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import { getImages } from '@/utils';

export default function Page() {

    const [images, setImages] = useState<any>([]);

    useEffect(() => {
      const fetchImages = async () => {
          try {
              const allImages = await getImages();
              setImages(allImages);
          } catch (error) {
              console.error('Error fetching images: ', error);
          }
        };
        
        fetchImages();
        }, []);

        console.log('images: ', images)
        
    return (
  
      <div className="flex flex-col min-h-screen">
          <NavBar />
          <Hero text="Photos" imageUrl="/bowl.jpg" height="small" />
          <main className="flex-grow text-primary-darker mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
                {images.map((image, index) => (
                    <div className="lg:w-[49.6%]">
                        <Image
                            key={index}
                            className="rounded-lg"
                            src={'https:' + image.fields.photo.fields.file.url}
                            width={image.fields.photo.fields.file.details.image.width}
                            height={image.fields.photo.fields.file.details.image.height}
                            alt={image.fields.photo.fields.title}
                            layout="responsive"
                            loading="lazy"
                        ></Image>
                    </div>
                ))}
            </div>
          </main>
          <Footer />
      </div>
    );
  }