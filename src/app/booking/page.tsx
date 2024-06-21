'use client'

import NavBar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import { useState } from "react";

// Define your Page component
export default function Page() {

    const [timesLoaded, setTimesLoaded] = useState(0);

    const mobileDefaultHeight = "1450"
    const mobileSumbittedHeight = "350"
    const desktopDefaultHeight = "1375"
    const desktopSubmittedHeight = "300"

  // Return your JSX for the Page component
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Hero text="Book a Rink" imageUrl="/bowl.jpg" height="small" />
      <main className="flex-grow text-primary-darker mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* Embed the Google Form iframe with an ID */}
        <iframe
          id="googleFormIframe"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdqUqVn476Iw70OFWCdil_4CvFolmlANfBM1LhCc8PGpQ005g/viewform?embedded=true"
          height={timesLoaded > 2 ? desktopSubmittedHeight : desktopDefaultHeight}
          className="w-full hidden lg:block"
          onLoad={() => {
            // Send a message to the iframe when it loads            
            setTimesLoaded(timesLoaded + 1)
          }}
        >
          Loading…
        </iframe>
        <iframe
          id="googleFormIframe"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdqUqVn476Iw70OFWCdil_4CvFolmlANfBM1LhCc8PGpQ005g/viewform?embedded=true"
          height={timesLoaded > 2 ? mobileSumbittedHeight : mobileDefaultHeight}
          className="w-full block lg:hidden"
          onLoad={() => {
            // Send a message to the iframe when it loads            
            setTimesLoaded(timesLoaded + 1)
          }}
        >
          Loading…
        </iframe>
        {/* Additional content or elements */}
        <div className="flex justify-center items-center mt-8">
          <a 
            href="https://docs.google.com/spreadsheets/d/1fPISSVADL4NumR3Adj9kk_v4vd4bytGSagg9eVLPWmI/edit?usp=sharing"
            target="_blank"
            className="bg-primary p-4 text-secondary-vibrant font-bold rounded-lg text-center text-2xl hover:bg-primary-lighter"
          >
            View Timetable Here
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}