import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faCartShopping, faSitemap, faLaptopCode, faCode, faGlobe } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'Kansen | Raimonvibe',
  description: 'Ontdek mijn professionele reis en inzichten die ik heb opgedaan door samen te werken met gerenommeerde bedrijven uit verschillende sectoren.',
};

export default function Perspectieven() {
  return (
    <div>
    <main>
        <div className="middle-container2">
          <article>
            <h1>Mijn Professionele Reis en Perspectieven</h1>
            <p>Gedurende mijn carrière heb ik waardevolle inzichten opgedaan door verbindingen te leggen met een reeks gerenommeerde bedrijven uit diverse sectoren. Deze kansen zijn voortgekomen uit organisaties die waarde hechten aan innovatie, technologie en creatief probleemoplossend vermogen—kwaliteiten die aansluiten bij mijn professionele doelen.</p>
            <h1>Ontdek de Bedrijven Waarmee Ik in Contact Ben Geweest:</h1>

            <section>
              <h3>
                <FontAwesomeIcon icon={faCartShopping as IconDefinition} className="opportunity-icon" /> E-commerce en Cloudgebaseerde Oplossingen
              </h3>
              <ul>
                <li><a className="opportunity" href="https://commercetools.com/" target="_blank" rel="noopener noreferrer">Commercetools</a></li>
                <li><a className="opportunity" href="https://payever.careers/" target="_blank" rel="noopener noreferrer">Payever</a></li>
              </ul>
            </section>

            <section>
              <h3>
                <FontAwesomeIcon icon={faSitemap as IconDefinition} className="opportunity-icon" /> IT Consultancy en Ontwikkeling
              </h3>
              <ul>
                <li><a className="opportunity" href="https://www.tcs.com/careers" target="_blank" rel="noopener noreferrer">Tata Consultancy Services</a></li>
                <li><a className="opportunity" href="https://careers.cognizant.com/nl/nl" target="_blank" rel="noopener noreferrer">Cognizant</a></li>
                <li><a className="opportunity" href="https://q-logic.nl/" target="_blank" rel="noopener noreferrer">Qlogic</a></li>
                <li><a className="opportunity" href="https://www.alten.nl/" target="_blank" rel="noopener noreferrer">Alten</a></li>
                <li><a className="opportunity" href="https://avanceservices.com/" target="_blank" rel="noopener noreferrer">Avance Consulting</a></li>
              </ul>
            </section>

            <section>
              <h3>
                <FontAwesomeIcon icon={faLaptopCode as IconDefinition} className="opportunity-icon" /> Cross-Platform en Mobiele Ontwikkeling
              </h3>
              <ul>
                <li><a className="opportunity" href="https://akkodis.com/" target="_blank" rel="noopener noreferrer">Akkodis</a></li>
                <li><a className="opportunity" href="https://www.parallelconsulting.com/" target="_blank" rel="noopener noreferrer">Parallel Consulting</a></li>
              </ul>
            </section>

            <section>
              <h3>
                <FontAwesomeIcon icon={faCode as IconDefinition} className="opportunity-icon" /> Talentontwikkeling en IT-diensten
              </h3>
              <ul>
                <li><a className="opportunity" href="https://vitas.nl/young-talent" target="_blank" rel="noopener noreferrer">VITAS Young Talent</a></li>
                <li><a className="opportunity" href="https://cloudstaff.com/" target="_blank" rel="noopener noreferrer">Cloudstaff</a></li>
                <li><a className="opportunity" href="https://vividresourcing.com/" target="_blank" rel="noopener noreferrer">Vivid Resourcing</a></li>
                <li><a className="opportunity" href="https://www.telusdigital.com/" target="_blank" rel="noopener noreferrer">Telus Digital</a></li>
              </ul>
            </section>
          </article>
        </div>
      
        <div className="middle-container2">
          <article>
            <p>Deze inzichten hebben mij geholpen mijn professionele vaardigheden verder te ontwikkelen door inzicht te krijgen in verschillende sectoren. Van e-commerce tot IT-consultancy, en van cross-platform ontwikkeling tot talentontwikkeling, deze kansen hebben mij geleid op een pad van continu leren en vaardigheidsontwikkeling. Elke kans heeft bijgedragen aan het verfijnen van mijn expertise en het aanpassen aan nieuwe uitdagingen in het voortdurend evoluerende technologische landschap.</p>

            <p>Ik ben dankbaar voor de kansen om in contact te komen met bedrijven die mijn vaardigheden en potentieel erkennen. Deze inzichten hebben niet alleen mijn professionele groei bevorderd, maar hebben ook een gevoel van voldoening en tevredenheid gebracht. Het is inspirerend om samen te werken met organisaties die mijn passie voor technologie en innovatie delen, en dit heeft veel professionele voldoening gebracht. Deze kansen hebben mij in staat gesteld om betekenisvolle bijdragen te leveren terwijl ik samen groeide met toonaangevende bedrijven in de industrie.</p>

            <p>De omgeving die door deze inzichten is gecreëerd, is er een van dynamische groei en potentieel. Terwijl ik deze kansen benaderde, kwam ik uitdagingen tegen die mij dwongen om te innoveren en kritisch na te denken. De paden die door deze bedrijven zijn uitgestippeld, hebben mij door verschillende sectoren geleid, elk met zijn eigen complexiteiten en beloningen. Deze reis heeft een ecosysteem van voortdurende verbetering gecreëerd, waarin elke nieuwe uitdaging een opstap is naar verder succes. De diversiteit in deze kansen heeft niet alleen mijn vaardigheden verrijkt, maar ook mijn perspectief verbreed, waardoor ik de onderlinge verbondenheid van verschillende vakgebieden ben gaan zien en hoe ze bijdragen aan het grotere geheel van technologie en ontwikkeling.</p>

            <p><em>Let op: hoewel ik via verschillende kansen met deze bedrijven in contact ben gekomen, impliceert deze pagina geen formele goedkeuring of partnerschap.</em></p>

            <h2>
              <FontAwesomeIcon icon={faGlobe as IconDefinition} className="opportunity-icon" /> Een Dynamisch Netwerk
            </h2>
            <p>De kansen die worden aangeboden weerspiegelen de diverse reeks vaardigheden en ervaringen die ik meebreng. Ik word voortdurend geïnspireerd door de innovaties in deze sectoren en kijk uit naar verdere kansen om bij te dragen en te groeien.</p>
          </article>
        </div>
      </main>
    </div>
  );
}
