'use client';

import Image from "next/image";
import { useEffect } from 'react';
import blog from "/public/images/blog.webp";
import youtube from "/public/images/youtube.webp";
import developer from "/public/images/developer.webp";
import { createMultipleSnowflakes } from '../../script';

export default function Diensten() {
  useEffect(() => {
    const socialButtons = document.querySelectorAll('.Social');
    socialButtons.forEach(button => {
      (button as HTMLElement).addEventListener('mouseenter', () => createMultipleSnowflakes(button as HTMLElement));
    });

    // Cleanup functie
    return () => {
      socialButtons.forEach(button => {
        (button as HTMLElement).removeEventListener('mouseenter', () => createMultipleSnowflakes(button as HTMLElement));
      });
    };
  }, []);

  return (
    <div>
      <main>
        <section className="middle-container">
          <Image
            className="common-properties common-properties-right"
            src={developer}
            alt="Illustratie van een softwareontwikkelaar die op een computer werkt."
            width={500}
            height={300}
            priority
          />
          <article>
            <div>
              <h1>Software Engineering Oplossingen</h1>
              <p>
                Met mijn ervaring in software engineering heb ik eigentijdse, gebruiksvriendelijke websites gecreëerd met behulp van beproefde technieken. Ik bied ook gecodeerdeocumentatiediensten aan om duidelijkheid te scheppen en beginnende ontwikkelaars te helpen het proces beter te begrijpen. Ik ben actief op Upwork en Fiverr en streef ernaar werk van hoge kwaliteit te leveren met precisie en aandacht voor detail.
              </p>
              <div className="spacing"></div>
              <span>
                <p>Bekijk mijn freelance profiel op:</p>
                <strong>
                  <a
                    className="Social"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.upwork.com/freelancers/~01db073e93aefd8fac"
                  >
                    Upwork
                  </a>
                </strong>
                <br></br>
                <div className="spacing"></div>
                <strong>
                  <a
                    className="Social"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nl.fiverr.com/raimonvibe"
                  >
                    Fiverr
                  </a>
                </strong>
              </span>
              <div className="spacing3"></div>
            </div>
          </article>
        </section>
        <section className="middle-container2">
          <div>
            <Image
              className="common-properties common-properties-left"
              src={blog}
              alt="Illustratie van een blogomgeving met een laptop en notitieblok."
              width={500}
              height={300}
            />
            <article>
              <div>
                <h1>Blogs over mijn Studies</h1>
                <p>
                  Op Medium deel ik diepgaande artikelen over mijn ervaringen en leerprocessen in online codeer-bootcamps, inclusief projectvoorbeelden en scripts. Daarnaast schrijf ik gepassioneerd over 3D-printen, waarin ik mijn unieke ontwerpproces, publicatiestappen en motivatie voor deze innovatieve technologie toelicht. Als content creator op YouTube deel ik ook mijn ervaringen en kennis op een toegankelijke manier. Dit is slechts een glimp van de diversiteit op mijn Medium-blog, waar ik je uitnodig meer te ontdekken over mijn professionele en creatieve reis in de boeiende wereld van technologie en design.
                </p>
                <p>Bekijk mijn blogposts op:</p>
                <strong>
                  <a
                    className="Social left-align"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://medium.com/@raimonvibe"
                  >
                    Medium
                  </a>
                </strong>
                <div className="spacing"></div>
              </div>
            </article>
          </div>
        </section>

        <section className="middle-container">
          <Image
            className="common-properties common-properties-right"
            src={youtube}
            alt="Illustratie van een video-omgeving met een camera en bewerkingsapparatuur."
            width={500}
            height={300}
          />
          <article>
            <div>
              <h1>YouTube Creator</h1>
              <p>
                Mijn YouTube-kanaal biedt niet alleen instructievideo's over het maken van 3D-modellen, maar verkent ook de fascinerende wereld van AI-technologie en de technische aspecten van het starten van een online bedrijf. Ik deel inzichten over de software die cruciaal is voor mijn bedrijf en bied een waardevolle bron van kennis voor iedereen die geïnteresseerd is in technologie en online ondernemerschap.
              </p>
              <div className="spacing"></div>
              <span>
                <p>Bekijk mijn YouTube-kanaal op:</p>
                <strong>
                  <a
                    className="Social"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos"
                  >
                    YouTube
                  </a>
                </strong>
              </span>
              <div className="spacing3"></div>
            </div>
          </article>
        </section>
      </main>

      <div className="spacing"></div>
    </div>
  );
}