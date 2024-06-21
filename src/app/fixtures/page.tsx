'use client'

import { useState, useEffect } from 'react';
import Fixture from "../components/fixture";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { getGames } from '../../utils';
import Hero from '../components/hero';
import AnimateWrapper from '../components/animatedComponent';

interface FixtureType {
    fields: {
        dateAndTime: string; // Assuming dateAndTime is a string in ISO format like "2024-06-21T13:00+01:00"
        teams: [string, string]; // Assuming teams is an array of two strings
        gameType: string;
        venue: string;
        competition: string;
    };
}

const competitions = [
  'Saturday Friendlies',
  'Sunday Friendlies',
  'Midweek Friendlies',
  'Floodlit League',
  'Bristol North East League Dragons',
  'Bristol North East League Blues',
  'Friday Triples League',
  'Glos County League'
];

export default function Page() {
  const [fixtures, setFixtures] = useState<any[]>([]);
  const [selectedCompetition, setSelectedCompetition] = useState<string>("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const games = await getGames();
        const filteredFixtures = games.filter((game: any) => !game.fields.result);
        setFixtures(filteredFixtures);
      } catch (error) {
        console.error('Error fetching games: ', error);
      }
    };

    fetchGames();
  }, []);

  const filteredFixtures = selectedCompetition 
    ? fixtures.filter(fixture => fixture.fields.competition === selectedCompetition)
    : fixtures;

  // Sort the filtered fixtures by date
  const sortedFixtures = filteredFixtures.sort((a, b) => new Date(a.fields.dateAndTime).getTime() - new Date(b.fields.dateAndTime).getTime());

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Hero text="Fixtures" imageUrl="/bowl.jpg" height="small" />
      <main className="flex-grow mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="my-4">
          <label htmlFor="competition-select" className="block text-sm font-medium text-primary">Filter by Competition</label>
          <select
            id="competition-select"
            className="mt-1 block w-full bg-primary text-secondary-vibrant pl-3 pr-10 py-2 text-lg border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            value={selectedCompetition}
            onChange={(e) => setSelectedCompetition(e.target.value)}
          >
            <option value="">All Competitions</option>
            {competitions.map((competition, index) => (
              <option key={index} value={competition}>{competition}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full gap-2">
          {sortedFixtures.map((fixture, index) => (
            <AnimateWrapper>
              <Fixture key={index} fixture={fixture} />
            </AnimateWrapper>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

