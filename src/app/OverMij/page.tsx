import { Metadata } from 'next';
import Image from "next/image";
import raimon from "/public/images/raimon100.webp"; // Persoonlijke afbeelding importeren

export const metadata: Metadata = {
  title: 'Over | Raimonvibe',
  description: 'Lees meer over Raimon en zijn digitale reis waarbij hij technologie met creativiteit combineert.',
};

export default function OverMij() {
  return (
    <div>
      <main>
        <div className="header">
          <div className="spacing2"></div>
          <Image
            className="common-properties common-properties-left2"
            src={raimon}
            alt="Een selfie van Raimon"
            width={100}
            height={100}
            priority
          />
          <article>
            <div>
              <h1>Hallo, ik ben Raimon</h1>
              <p>
              Tijdens mijn digitale reis heb ik technologie gecombineerd met creativiteit, en unieke ontwerpen gecreëerd die de grenzen van het mogelijke verleggen. Deze positieve mindset helpt me om mijn ware potentieel te realiseren, zonder gehinderd te worden door de verwachtingen van anderen. Mijn uitdagingen hebben mijn persoonlijke en professionele groei niet in de weg gestaan. Ik geloof sterk dat iedereen, ondanks obstakels, hun dromen kan bereiken met vastberadenheid en steun. Ik waardeer je begrip en interesse in mijn verhaal enorm. Ik hoop dat het je inspireert om obstakels te overwinnen en je volledige potentieel te ontdekken tijdens je eigen reis.
              </p>
            </div>
          </article>
        </div>
      </main>
      <div className="spacing"></div>

      <div className="spacing"></div>
    </div>
  );
}

// Social media links met FontAwesome-iconen
// Copyright notice met dynamisch jaar
// Knop om naar de top van de pagina te scrollen
