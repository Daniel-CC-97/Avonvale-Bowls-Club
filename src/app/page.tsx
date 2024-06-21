import Image from 'next/image';
import { membershipText } from './data/homepage-text';

import NavBar from './components/navbar';
import Footer from './components/footer';
import Hero from './components/hero';

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <Hero text="Avonvale Bowls Club" imageUrl="/hero-image.png" height='large'></Hero>

      {/* Main Content */}
      <main className="max-w-7xl flex-grow mx-auto px-2 sm:px-6 lg:px-8">
        <section>
          <div className="text-primary-darker rounded-lg">
            <p>Avonvale Bowling Club is a very friendly and successful club, and we are going from strength to strength and are always looking for new members.</p>
            <br/>
            <p>The Green and Clubhouse are located by Netham Park, Avonvale Road, Bristol (behind the Board Mills Club).</p>
            <br/>
            <p>We have an excellent clubhouse which includes a well-stocked bar. It is used for social events during the summer and winter. There is a separate clubhouse where the changing rooms are located.</p>
            <br/>
            <p>Bowling is a great way to exercise and has many benefits for your health as well as being a great social activity. New members are always welcome, with or without bowls experience! Why not come along and give it a try? We are a very friendly club and play on average 4 friendly matches a week all over Bristol and places further afield. We also compete regularly in local and national competitions.</p>
            <br/>
            <p>Monday is Club Night where members come down to practice and play and they will be more than happy to help anyone who is interested in joining or just wants to come along to see what it is like. </p>
            <br/>
            <p>Feel free to browse our website and, if you cannot find what you are looking for, feel free to get in touch <a className="font-bold text-secondary-darker" href="mailto:avonvalebowling@outlook.com">(Contact Us link)</a> for more information.</p>
          </div>
          <div className="text-primary-darker text-xl font-bold bg-gradient-to-tr from-secondary-lighter to-secondary-darker p-2 mt-4 lg:mt-8 lg:p-4 rounded-lg">
            <p>{membershipText}</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
