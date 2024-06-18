import Image from 'next/image';
import { text } from './data/homepage-text';

import NavBar from './components/navbar';
import StaticText from './components/static-text';
import Footer from './components/footer';
import Hero from './components/hero';

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <Hero text="Avonvale Bowls Club" imageUrl="/hero-image.png" height='large'></Hero>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <section>
          <StaticText text={text}></StaticText>
        </section>
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
