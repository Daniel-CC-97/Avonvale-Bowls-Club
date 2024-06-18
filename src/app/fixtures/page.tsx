'use client'

import { useState, useEffect } from 'react';
import Fixture from "../components/fixture";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { getGames } from '../../utils';
import Hero from '../components/hero';

export default function Page() {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const games = await getGames();
      const filteredFixtures = games.filter(game => !game.fields.result);
      setFixtures(filteredFixtures);
      };
      
      fetchGames();
      }, []);
      
      return (
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <Hero text="Fixtures" imageUrl="/bowl.jpg" height="small" />
          <main className="flex-grow mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex flex-col w-full gap-2">
              {fixtures.map((fixture, index) => (
                <Fixture key={index} fixture={fixture} />
              ))}
            </div>
          </main>
          <Footer />
        </div>
      );
}