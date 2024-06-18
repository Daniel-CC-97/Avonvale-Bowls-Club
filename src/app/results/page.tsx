'use client'

import { useState, useEffect } from 'react';
import Result from "../components/result";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { getGames } from '../../utils';
import Hero from '../components/hero';

export default function Page() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const games = await getGames();
      const filteredResults = games.filter(game => game.fields.result);
      setResults(filteredResults);
      };
      
      fetchGames();
      }, []);
      
  return (

    <div className="flex flex-col min-h-screen">
        <NavBar />
        <Hero text="Results" imageUrl="/bowl.jpg" height="small" />
        <main className="flex-grow mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex flex-col w-full gap-2">
                {results.map((result, index) => (
                    <Result key={index} result={result} />
                ))}
            </div>
        </main>
        <Footer />
    </div>
  );
}