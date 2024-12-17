import Image from "next/image";
import breathe from "/public/images/breathe.webp";
import welcome from "/public/images/welcome.webp";

export const metadata = {
  title: 'Home | Raimonvibe',
  description: 'Welkom bij Raimonvibe - Het verleggen van de grenzen van digitale innovatie',
};

export default function Welkom() {
  return (
    <div>
      <main>
    

        <div className="header">
          <Image
            className="common-properties common-properties-left"
            src={welcome}
            alt="Welkom illustratie die de technologische focus van Raimonvibe weergeeft"
            priority
          />
          <article>
            <div>
              <h1>Over raimonvibe</h1>
              <p>
              Ongeveer drie jaar geleden heb ik raimonvibe opgericht, een onderzoeksbedrijf in het technologieveld, om diep in programmeren te duiken en de grenzen van digitale innovatie te verleggen. Ik heb een breed scala aan technologieën verkend en gewerkt met talen zoals Python, JavaScript, HTML en CSS, en Flutter Dart. Het bestuderen van zowel frontend- als backendoplossingen was fascinerend, met als doel een naadloze en efficiënte integratie te bereiken. Met krachtige frameworks zoals React, Django en Node.js, en databasesystemen zoals MongoDB en Mongoose, ben ik in staat geweest om robuuste applicaties te creëren.
              </p>
              <p>
              Het verdiepen in Data Science en Data Visualisatie heeft me in staat gesteld om complexe datasets om te zetten in heldere, inzichtelijke visuele rapporten. Het leren programmeren van AI met TensorFlow heeft nieuwe mogelijkheden geopend om concepten voor aangepaste AI-oplossingen te ontwikkelen die intelligente, datagestuurde besluitvorming ondersteunen. Het is geweldig hoe deze ervaringen niet alleen mijn professionele vaardigheden bevorderen, maar ook mijn probleemoplossend vermogen in het dagelijks leven versterken. Soms is discipline meer aanwezig op de ene dag dan op de andere, en dat is oké.
              </p>
            </div>
          </article>
        </div>
   

        <div className="middle-container">
          <Image
            className="common-properties common-properties-right"
            src={breathe}
            alt="Illustratie van een woonkamer die werk-privé balans vertegenwoordigt"
          />
          <article>
            <div>
              <h1>Technologische Impact</h1>
              <p>
              Bij raimonvibe richt ik me niet alleen op het ontwikkelen van technologie, maar ook op het begrijpen en innoveren ervan. Ik heb mijn onderzoeksinitiatieven uitgebreid met moderne servertechnologieën zoals VPS (Virtual Private Servers) om robuuste, schaalbare applicaties te hosten die wereldwijd toegankelijk zijn. Mijn vaardigheden met jQuery en het implementeren van realtime webapplicaties met Express hebben me in staat gesteld om responsieve en interactieve websites te bouwen die de gebruikerservaring verbeteren.
              </p>
              <p>
              Ik ben trots op mijn aanpak van voortdurende verbetering en leren, waarbij elk project een kans is om mijn vaardigheden te verdiepen en nieuwe technologieën te verkennen. Mijn doel is altijd om aan de voorhoede van technologische vooruitgang te staan en mijn bevindingen en ontwikkelingen met de bredere gemeenschap te delen, waardoor ik bijdraag aan de evolutie van de technologie-industrie.
              </p>
            </div>
          </article>
        </div>
        <div className="spacing"></div>
      </main>

      <div className="spacing"></div>
    </div>
  );
}
