'use client'

import NavBar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import { getOfficers } from "@/utils";

import { useEffect, useState } from 'react';
import Officer from "../components/officer";

export default function Page() {

    const [officers, setOfficers] = useState<any>([]);
    const [management, setManagement] = useState<any>([]);
    const [viceManagement, setViceManagement] = useState<any>([]);

    useEffect(() => {
      const fetchOfficers = async () => {
          try {
              const allOfficers = await getOfficers();
              const managementArray = allOfficers.filter(officer => officer.fields.roleType === 'Management Committee');
              const viceManagementArray = allOfficers.filter(officer => officer.fields.roleType === 'Vice Committee')
              const officersArray = allOfficers.filter(officer => officer.fields.roleType === 'Officer')
              setManagement(managementArray);
              setViceManagement(viceManagementArray)
              setOfficers(officersArray);
          } catch (error) {
              console.error('Error fetching officers: ', error);
          }
        };
        
        fetchOfficers();
        }, []);
        
    return (
  
      <div className="flex flex-col min-h-screen">
          <NavBar />
          <Hero text="Officers" imageUrl="/bowl.jpg" height="small" />
          <main className="flex-grow text-primary-darker mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
            <h2 className="font-bold text-xl mb-2">Management Committee</h2>
            <div className="flex flex-wrap gap-2">
                {management.map((manager, index) => (
                    <Officer key={index} officer={manager}></Officer>
                ))}
            </div>
            <h2 className="font-bold text-xl mb-2 mt-4">Vice Committee</h2>
            <div className="flex flex-wrap gap-2">
                {viceManagement.map((manager, index) => (
                    <Officer key={index} officer={manager}></Officer>
                ))}
            </div>
            <h2 className="font-bold text-xl mb-2 mt-4">Officers</h2>
            <div className="flex flex-wrap gap-2">
                {officers.map((officer, index) => (
                    <Officer key={index} officer={officer}></Officer>
                ))}
            </div>
          </main>
          <Footer />
      </div>
    );
  }