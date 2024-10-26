import { Metadata } from 'next'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const metadata: Metadata = {
  title: 'Juridische Kennisgeving | Raimonvibe',
  description: 'Juridische kennisgeving en gebruiksvoorwaarden voor de website van Raimonvibe.',
};

export default function JuridischeKennisgeving() {
  const huidigJaar = new Date().getFullYear();

  return (
    <div>
      <main>
        <div style={{ marginLeft: '10px' }}>
          <div className='spacing2'></div>
          <h1 className='left-align'>raimonvibe</h1>
          <p>Laatst bijgewerkt: Oktober 2024</p>
          <p>
            Welkom bij raimonvibe. Door onze website te gebruiken, gaat u akkoord met de
            voorwaarden die in deze juridische kennisgeving worden uiteengezet.
          </p>
          <p>
            Lees de juridische kennisgeving zorgvuldig door voordat u onze website gebruikt.
            Als u vragen heeft, neem dan contact met ons op.
          </p>

          <h2 className='left-align'>Juridische Kennisgeving</h2>
          <p>
            De informatie op deze website is bedoeld voor algemene
            informatiedoeleinden. Hoewel we ernaar streven om ervoor te zorgen dat de
            informatie op deze website nauwkeurig en up-to-date is, geven we geen
            garanties, expliciet of impliciet, over de volledigheid, juistheid, betrouwbaarheid, geschiktheid of
            beschikbaarheid met betrekking tot de website of de informatie,
            producten, diensten of gerelateerde grafische inhoud op de website
            voor enig doel. Het vertrouwen dat u in dergelijke informatie stelt is
            daarom geheel op eigen risico.
          </p>
          <p>
            Raimonvibe kan niet aansprakelijk worden gesteld voor enig verlies of schade,
            inclusief maar niet beperkt tot directe of indirecte, gevolgschade of
            incidentele schade, voortvloeiend uit of in verband met het gebruik van
            deze website.
          </p>
          <p>
            Deze website kan links bevatten naar websites van derden die
            niet onder de controle van Raimonvibe vallen. Wij hebben geen controle over de
            aard, inhoud en beschikbaarheid van die sites, en de
            opname van links impliceert niet noodzakelijkerwijs een goedkeuring
            of aanbeveling van de standpunten die erin worden uitgedrukt.
          </p>
          <p>
            We streven ernaar om deze website soepel te laten draaien. Echter,
            Raimonvibe aanvaardt geen verantwoordelijkheid voor, en is niet aansprakelijk
            voor, de tijdelijke onbeschikbaarheid van de website als gevolg van technische
            problemen buiten onze controle.
          </p>

          <h3 className='left-align'>Neem contact met ons op:</h3>
          <p>Email: info@raimonvibe.com</p>
          <p>Website: https://www.raimonvibe.nl</p>

          <p>
            Door gebruik te maken van onze website, accepteert u onze gebruiksvoorwaarden en ons privacybeleid.
            De informatie op deze website is bedoeld voor algemene
            informatiedoeleinden en is niet bedoeld als juridisch advies. Wij garanderen
            niet de nauwkeurigheid, volledigheid of betrouwbaarheid van de informatie
            op deze website en zijn niet aansprakelijk voor fouten
            of omissies.
          </p>
          <p>
            Copyright © {huidigJaar} raimonvibe. Alle rechten voorbehouden.
          </p>
        </div>
      </main>
    </div>
  );
}
