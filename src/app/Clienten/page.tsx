import React from 'react';
import Image from 'next/image';
import collabs from "/public/images/gosolo.webp";
import techbullion from "/public/images/techbullion.webp";
import { StaticImageData } from 'next/image';

export const metadata = {
  title: 'Cliënten | Raimonvibe',
  description: 'Bekijk de publicaties en interviews van Raimon in online magazines.',
};

interface ClientFeatureProps {
  href: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
  className: string;
}

const ClientFeature: React.FC<ClientFeatureProps> = ({ href, imageSrc, imageAlt, title, description, className }) => (
  <div className="middle-container">
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      <Image
        className={`common-properties ${className}`}
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={300}
      />
    </a>
    <article>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="spacing3"></div>
      </div>
    </article>
  </div>
);

export default function Clienten() {
  const clientFeatures = [
    {
      href: "https://www.collabs.io/mag/raimonvibe/",
      imageSrc: collabs,
      imageAlt: "Mijn bedrijf in het online magazine Collabs",
      title: "Geïnterviewd door Collabs",
      description: "Ik werd geïnterviewd voor het online magazine Collabs. Ik was zeer verrast toen ik werd gevraagd om een verhaal over mijn bedrijf te schrijven. Lees mijn verhaal door op de afbeelding te klikken.",
      className: "common-properties-left"
    },
    {
      href: "https://techbullion.com/is-software-development-a-dead-end-job-after-age-35/",
      imageSrc: techbullion,
      imageAlt: "Mijn bedrijf in het online magazine TechBullion",
      title: "Fintech Magazine TechBullion",
      description: "Ik ben vereerd te kunnen delen dat ik recentelijk ben opgenomen in Fintech Magazine met mijn inzichten, gepubliceerd door TechBullion. Dit is een belangrijke mijlpaal in mijn reis en ik ben dankbaar voor de kans om mijn kennis te delen. Lees mijn verhaal door op de afbeelding te klikken.",
      className: "common-properties-right"
    }
  ];

  return (
    <div className="container">
      <main>
        {clientFeatures.map((feature, index) => (
          <React.Fragment key={index}>
            <ClientFeature {...feature} />
            {index < clientFeatures.length - 1 && <div className="spacing"></div>}
          </React.Fragment>
        ))}
      </main>
      <div className="spacing"></div>
    </div>
  );
}
