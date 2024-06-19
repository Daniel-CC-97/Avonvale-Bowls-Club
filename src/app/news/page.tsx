'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

import NavBar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import { getNews } from '@/utils';
import NewsBlock from '../components/newsBlock';

export default function Page() {

    const [news, setNews] = useState<any>([]);

    useEffect(() => {
      const fetchNews = async () => {
          try {
              const allNews = await getNews();
              setNews(allNews);
          } catch (error) {
              console.error('Error fetching news: ', error);
          }
        };
        
        fetchNews();
        }, []);
        
    return (
  
      <div className="flex flex-col min-h-screen">
          <NavBar />
          <Hero text="News" imageUrl="/bowl.jpg" height="small" />
          <main className="flex-grow text-primary-darker mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2">
                {news.map((newsEntry, index) => (
                    <NewsBlock key={index} newsTitle={newsEntry.fields.title} newsContent={newsEntry.fields.body.content} createdAtDate={newsEntry.sys.createdAt}></NewsBlock>
                ))}
            </div>
          </main>
          <Footer />
      </div>
    );
  }