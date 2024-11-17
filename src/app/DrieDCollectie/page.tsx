'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { createMultipleSnowflakes } from '../../script';

import cat from '/public/images/Cat-v3-final.webp';
import horse from '/public/images/horse.webp';
import female from '/public/images/female-v4.webp';
import male from '/public/images/male.webp';
import buddha from '/public/images/buddha.webp';
import owl_bowl from '/public/images/owl-bowl.webp';
import alien from '/public/images/alien.webp';
import butterfly from '/public/images/butterfly.webp';
import roses from '/public/images/roses.webp';
import unicorn from '/public/images/unicorn.webp';
import cat2 from '/public/images/cat v6 final.webp';
import deer from '/public/images/deer.webp';
import monkeys from '/public/images/monkeys.webp';
import earrings from '/public/images/earrings.webp';
import christmas_drinkcoaster from '/public/images/christmas_drinkcoaster.webp';
import moose from '/public/images/moose.webp';

const ThreeDBibliotheek: React.FC = () => {
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
      <div className="spacing"></div>
      <div className="middle-container">
        <Image
          className="common-properties common-properties-left"
          src={earrings}
          alt="3D-modelleringsomgeving"
          width={500}
          height={300}
          priority={true}
        />
        <article>
          <div>
            <h1 className="exclusive-text">
              Gepersonaliseerde 3D Oorbellen Op Bestelling
            </h1>
            <p>
              Ben je geïnteresseerd in unieke, op maat gemaakte 3D-oorbellen? Ik
              ben gespecialiseerd in het ontwerpen van op maat gemaakte 3D-modellen
              die perfect bij jouw stijl passen. Als je een persoonlijk en uniek
              ontwerp wilt laten maken, breng ik graag jouw ideeën tot leven. Aarzel
              niet om contact op te nemen voor een maatwerkontwerp. Voor meer informatie
              of om contact op te nemen, bezoek mijn{" "}
              <a className="custom-link" href="/Contact" aria-label="Bezoek de contactpagina">
                contactpagina
              </a>
              , waar je mijn e-mailadres kunt vinden.
            </p>
            <div className="spacing3"></div>
          </div>
        </article>
      </div>
      <main>
  <div className="spacing"></div>
  <br />
  <h3 className="sellfy-text">Webshop:</h3>
  <a className="Social buy-spacing" target="_blank" rel="noreferrer" href="https://zaap.bio/raimonvibe" aria-label="Bezoek de 3D-webshop van Raimonvibe">
    3D
  </a>

  <div className="spacing"></div>
<div className="middle-container">
  <Image className="model-left" src={moose} alt="Een set oorbellen met een elandenthema voor de winter." width={500} height={300} />
  <article>
    <div>
      <h1 className="exclusive-text">🦌 Elanden Oorbellen Winter Set</h1>
      <p>Vier het winterseizoen met deze charmante set oorbellen met elandenthema. Perfect voor gezellige vibes en feestelijke outfits. De download bevat drie unieke ontwerpen.</p>
      <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/jewelry/moose-earrings-set-winter-themed-3d-model-jewelry" data-text="Nu downloaden" aria-label="Download gratis elanden oorbellen 3D-model">
        Gratis!
      </a>
      <div className="spacing3"></div>
    </div>
  </article>
</div>
        
  <div className="spacing"></div>
  <div className="middle-container">
    <Image className="model-right" src={christmas_drinkcoaster} alt="Een kerstonderzetter, perfect voor de feestdagen!" width={500} height={300} />
    <article>
      <div>
        <h1 className="exclusive-text">☃️ Kerst Onderzetter</h1>
        <p>Een prachtige kerstonderzetter met "Merry Christmas" en feestelijke details zoals hulstbladeren en sneeuwvlokken ❄️. Bescherm je tafel met stijl en breng een vleugje kerstvreugde in huis!</p>
        <a className="sellfy-buy-button Social left-align align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/home/christmas-drink-coaster" data-text="Nu downloaden" aria-label="Download gratis kerst onderzetter 3D-model">
          Gratis!
        </a>
        <div className="spacing3"></div>
      </div>
    </article>
  </div>

  <div className="spacing"></div>
  <div className="middle-container">
    <Image className="model-left" src={monkeys} alt="Een onderzetter met een apendesign." width={500} height={300} />
    <article>
      <div>
        <h1 className="exclusive-text">🐵 Apen Onderzetter</h1>
        <p>Een prachtige set onderzetters met een apendesign. De download bevat twee bestanden.</p>
        <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://zaap.bio/raimonvibe/3d-model-monkey-drinkcoaster-" data-text="Nu downloaden" aria-label="Download gratis apen onderzetter 3D-model">
          Gratis!
        </a>
        <div className="spacing3"></div>
      </div>
    </article>
  </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-right" src={deer} alt="Een kerst hertenornament, heel grappig!" width={500} height={300} />
          <article>
            <div>
              <h1 className="exclusive-text">☃️ Ornament</h1>
              <p>Een kerst hertenornament. Ideaal voor Kerst ☃️. Geef je kerstboom een vrolijke uitstraling met deze prachtige decoratie!</p>
              <a className="sellfy-buy-button Social left-align align" target="_blank" rel="noreferrer" href="https://zaap.bio/raimonvibe/3d-model-christas-deer-ornament-" data-text="Nu kopen" aria-label="Download gratis kerst hertenornament 3D-model">
                Gratis!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>



        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-left" src={cat2} alt="Een prachtig 3D-model van een oorbel in de vorm van een kat" width={500} height={300} />
          <article>
            <div>
              <h1 className="exclusive-text">😺 oorbellen</h1>
              <p>Een unieke oorbel in de vorm van een kat. De kat heeft een mooie lange staart. Perfect voor die speciale iemand of als cadeau aan jezelf.</p>
              <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/jewelry/cat-earrings-v6-raimonvibe" data-text="Nu kopen" aria-label="Koop katten oorbellen 3D-model">
              €0,50,-
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-right" src={unicorn} alt="Een eenhoorn sleutelhanger." width={500} height={300} />
          <article>
            <div>
              <h1 className="exclusive-text">🦄 sleutelhanger</h1>
              <p>Voeg een vleugje magie toe aan je sleutels met deze schattige 3D-geprinte eenhoorn sleutelhanger! 🦄 Het is het perfecte accessoire voor eenhoornliefhebbers overal.</p>
              <a className="sellfy-buy-button Social left-align align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/home/unicorn-keychain-raimonvibe" data-text="Nu kopen" aria-label="Download gratis eenhoorn sleutelhanger 3D-model">
              Gratis!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-left" src={roses} alt="Een set rozen oorbellen" width={500} height={300} />
          <article>
            <div>
              <h1 className="exclusive-text">🌹 oorbellen</h1>
              <p>Voeg een vleugje natuur-geïnspireerde elegantie toe aan je stijl met deze prachtige 3D-geprinte rozen oorbellen. 🌹 Het ontwerp bevat twee verschillende rozenpatronen.</p>
              <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/jewelry/roses-earrings" data-text="Nu kopen" aria-label="Download gratis rozen oorbellen 3D-model">
              Gratis!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-right" src={butterfly} alt="Dit is een oorbel in de vorm van een vlinder" width={500} height={300} />
          <article>
            <div>
              <h1 className="exclusive-text">🦋 oorbel</h1>
              <p>Voeg een speciaal tintje toe aan je look met deze delicate 3D-geprinte vlinder oorbellen. 🦋 Het ingewikkelde ontwerp vangt de elegantie van een vlinder in vlucht, perfect voor iedereen die van natuur-geïnspireerde sieraden houdt.</p>
              <a className="sellfy-buy-button Social left-align align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/jewelry/butterfly-earrings-raimonvibe" data-text="Nu kopen" aria-label="Download gratis vlinder oorbellen 3D-model">
              Gratis!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-left" src={alien} alt="Dit is een sleutelhanger met een alien vorm" width={500} height={300} />
          <article>
            <div>
              <h1>👽 Sleutelhanger</h1>
              <p>Dit is een sleutelhanger in de vorm van een alien. Print het in je favoriete kleur of materiaal.</p>
              <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/home/alien-keychain-raimonvibe" data-text="Nu kopen" aria-label="Download gratis alien sleutelhanger 3D-model">
              Gratis!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image
            className="model-right"
            src={owl_bowl}
            alt="Kom met een uilenpatroon aan de onderkant"
            width={500}
            height={300}
          />
          <article>
            <div>
              <h1>🦉 Kom</h1>
              <p>Deze kom is trendy en tegelijkertijd handig. Gebruik deze kom om je sleutels, portemonnee, kantoorgereedschap, enz. op te bergen. De onderkant van de kom heeft een uilenpatroon. Houd de kom voor jezelf of geef het aan iemand (speciaal). De kom heeft ook een voronoi-patroon.</p>
              <a className="sellfy-buy-button Social left-align align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/home/tray-owl-voronoi" data-text="Nu kopen" aria-label="Koop uilen kom 3D-model">
              €0,50,-
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-left" src={buddha} alt="Inspirerende Buddha onderzetter" width={500} height={300} />
          <article>
            <div>
              <h1>Buddha onderzetter</h1>
              <p>Style je huis met deze inspirerende Buddha onderzetter. Ideaal als cadeau voor je geliefden of voor jezelf.</p>
              <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/home/buddha-coaster" data-text="Nu kopen">
              Gratis!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-right" src={male} alt="Prachtige mannelijke torso met voronoi patroon" width={500} height={300} />
          <article>
            <div>
              <h1>Mannelijke Torso</h1>
              <p>Prachtige mannelijke torso met voronoi-patroon. Een stijlvolle decoratie voor op je boekenplank. Perfect voor iemand speciaal of als cadeau voor jezelf.</p>
              <a className="sellfy-buy-button Social left-align align" target="_blank" rel="noreferrer" href="https://zaap.bio/raimonvibe/3d-model-male-torso-voronoi-pattern-" data-text="Nu kopen">
                Gratis!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-left" src={female} alt="Prachtige vrouwelijke torso met voronoi patroon" width={500} height={300} />
          <article>
            <div>
            <h1>Vrouwelijke Torso</h1>
            <p>Prachtige vrouwelijke torso met voronoi-patroon. Een stijlvolle decoratie voor op je plank. Perfect voor iemand speciaal of als cadeau voor jezelf.</p>
              <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://zaap.bio/raimonvibe/3d-model-elegant-female-torso-with-voronoi-pattern" data-text="Nu kopen">
              Bestel $1,-
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-right" src={horse} alt="Een prachtig 3D-model een sleutelhanger in de vorm van een paard" width={500} height={300} />
          <article>
            <div>
              <h1>🐎 sleutelhanger</h1>
              <p>Een unieke sleutelhanger in de vorm van een paard met geometrische vormen. Perfect voor iemand speciaal of als cadeau voor jezelf.</p>
              <a className="sellfy-buy-button Social left-align align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/home/geometrical-horse-keychain" data-text="Nu kopen">
              Gratis!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-left" src={cat} alt="Een prachtig 3D-model een oorbel in de vorm van een kat" width={500} height={300} />
          <article>
            <div>
              <h1>🐈‍⬛ oorbellen (v3)</h1>
              <p>Een unieke oorbel in de vorm van een kat. Perfect voor die speciale iemand of als cadeau aan jezelf.</p>
              <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/jewelry/cat-v3-earrings" data-text="Nu kopen">
                Bestel $0.50,-
              </a>
              <div className="spacing3"></div>
              <div className="spacing3"></div>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default DrieDCollectie;
