'use client'

import NavBar from "../components/navbar"
import Hero from "../components/hero"
import Footer from "../components/footer"
import TextWithLineBreaks from "../components/textWithLineBreaks"
import { useEffect, useState } from "react"

import { getHistory } from "@/utils"

export default function Page() {

    const [history, setHistory] = useState<any[]>([]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const data = await getHistory();
                setHistory(data);
                console.log('data: ', data);
                
            } catch (error) {
                console.error('Error fetching history: ', error);
            }
          };
          
          fetchHistory();
          }, []);


    return(
        <div className="flex flex-col min-h-screen">
        <NavBar />
        <Hero text="History" imageUrl="/bowl.jpg" height="small" />
        <main className="max-w-7xl flex-grow mx-auto px-2 sm:px-6 lg:px-8">
            <section>
                {history.length > 0 && history[0]?.fields?.historyText && (
                    <TextWithLineBreaks text={history[0].fields.historyText}></TextWithLineBreaks>
                )}
            </section>
      </main>
      <Footer />
        </div>
    )
}
