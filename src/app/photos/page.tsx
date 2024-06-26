'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

import NavBar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import { getImages, splitArray } from '@/utils';

export default function Page() {

    const [images, setImages] = useState<any>([]);

    useEffect(() => {
      const fetchImages = async () => {
          try {
              const allImages = await getImages();
              const splitImagesArray = splitArray(allImages);
              setImages(splitImagesArray);
          } catch (error) {
              console.error('Error fetching images: ', error);
          }
        };
        
        fetchImages();
    }, []);
    
    return (
      <div className="flex flex-col min-h-screen">
          <NavBar />
          <Hero text="Photos" imageUrl="/bowl.jpg" height="small" />
          <main className="flex-grow text-primary-darker mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between">
                <div className="md:w-[49.6%] w-full">
                    {images[0] && images[0].map((image, index) => (
                        <div key={index} className="rounded-lg mb-4 bg-slate-200">
                            <Image
                                className="rounded-t-lg"
                                src={'https:' + image.fields.photo.fields.file.url}
                                width={image.fields.photo.fields.file.details.image.width}
                                height={image.fields.photo.fields.file.details.image.height}
                                alt={image.fields.photo.fields.title}
                                layout="responsive"
                                loading="lazy"
                            ></Image>
                            <div className="p-2">
                                <h4 className="font-bold">{image.fields.photo.fields.title}</h4>
                                <p>{image.fields.photo.fields.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="md:w-[49.6%] w-full">
                    {images[1] && images[1].map((image, index) => (
                        <div key={index} className="rounded-lg mb-4 bg-slate-200">
                            <Image
                            className="rounded-t-lg"
                                src={'https:' + image.fields.photo.fields.file.url}
                                width={image.fields.photo.fields.file.details.image.width}
                                height={image.fields.photo.fields.file.details.image.height}
                                alt={image.fields.photo.fields.title}
                                layout="responsive"
                                loading="lazy"
                            ></Image>
                            <div className="p-2">
                                <h4 className="font-bold">{image.fields.photo.fields.title}</h4>
                                <p>{image.fields.photo.fields.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </main>
          <Footer />
      </div>
    );
}