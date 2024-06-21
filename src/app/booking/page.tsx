'use client'

import NavBar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import { useState } from "react";

// Define your Page component
export default function Page() {
    const [timesLoaded, setTimesLoaded] = useState(0);

    // Heights for mobile and desktop
    const mobileDefaultHeight = "1450";
    const mobileSubmittedHeight = "400";
    const desktopDefaultHeight = "1370";
    const desktopSubmittedHeight = "300";

    // Function to determine height based on viewport size
    const getIframeHeight = () => {
        if (window.innerWidth < 768) { // Mobile devices
            return timesLoaded > 1 ? mobileSubmittedHeight : mobileDefaultHeight;
        } else { // Desktop devices
            return timesLoaded > 1 ? desktopSubmittedHeight : desktopDefaultHeight;
        }
    };

    // Event handler when iframe loads
    const handleIframeLoad = () => {
        setTimesLoaded(timesLoaded + 1);
    };

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
                    height={getIframeHeight()}
                    className="w-full"
                    onLoad={handleIframeLoad}
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
