import { Metadata } from 'next';
import Image from 'next/image';
import '@/styles/webshop.css';

export const metadata: Metadata = {
  title: 'Webwinkel - Unieke Items',
  description: 'Ontdek onze collectie unieke en stijlvolle producten.',
};

const products = [
  {
    name: 'Coral en Arctic Muismat',
    description: 'Dompel jezelf onder in de serene schoonheid van het Coral en Arctic ontwerp met deze hoogwaardige muismat. Perfect voor elke werkplek, combineert het functionaliteit met verbluffende visuals.',
    price: '€33,67',
    imageUrl: 'https://ih1.redbubble.net/image.5581773207.7023/ur,desk_mat_flatlay_prop,wide_portrait,750x1000.u2.jpg',
    link: 'https://www.redbubble.com/i/mouse-pad/Coral-and-Arctic-by-raimonvibe/162587023.GAP22'
  },
  {
    name: 'Floral Serenity Klok',
    description: 'Breng sereniteit in je huis met deze prachtige klok.',
    price: '€31,52',
    imageUrl: 'https://ih1.redbubble.net/image.5581764635.6742/clkc,white,white,1000x1250-pad,750x1000,f8f8f8.u2.jpg',
    link: 'https://www.redbubble.com/i/clock/Floral-Serenity-by-raimonvibe/162586742.7PFC0'
  },
  {
    name: 'Striking Waves iPhone Portemonnee',
    description: 'Omarm moderne elegantie met de Striking Waves iPhone Portemonnee, met een dynamisch patroon van vloeiende lijnen in zwart, geel en wit. Duurzaam en stijlvol, maakt het hoogwaardige materiaal en de veilige elastische band van deze portemonnee het een must-have accessoire voor elke modebewuste persoon.',
    price: '€30,22',
    imageUrl: 'https://ih1.redbubble.net/image.5605051240.3895/wallet,1000x,iphone_6s_wallet-pad,750x1000,f8f8f8.jpg',
    link: 'https://www.redbubble.com/i/iphone-case/Dynamic-Flow-by-raimonvibe/163313895.TALA6'
  },
  {
    name: 'Blossom Whispers Huisdierdeken',
    description: 'Wikkel je harige vriend in de zachte omhelzing van deze charmante huisdierdeken, perfect om warmte en stijl toe te voegen aan de favoriete plek van je huisdier.',
    price: '€16,87',
    imageUrl: 'https://ih1.redbubble.net/image.5619580803.3680/ur,pet_blanket_small_flatlay_prop,wide_portrait,750x1000.jpg',
    link: 'https://www.redbubble.com/i/pet-blanket/Blossom-Whispers-by-raimonvibe/163763680.T97H3'
  },
  {
    name: 'ChocoRose Elegance Reistas',
    description: 'Reis in stijl met de ChocoRose Elegance reistas. Deze elegante reistas heeft een verfijnd ontwerp met rijke chocolade- en rozetinten, perfect voor weekendjes weg of dagelijks gebruik. Duurzaam en ruim, combineert het functionaliteit met mode.',
    price: '€53,98',
    imageUrl: 'https://ih1.redbubble.net/image.5581716169.5047/ur,duffle_bag_large_front,wide_portrait,750x1000.u3.jpg',
    link: 'https://www.redbubble.com/i/duffle-bag/ChocoRose-Elegance-by-raimonvibe/162585047.TZ9LO'
  },
  {
    name: 'Vibrant Swirls Badmat',
    description: 'Transformeer je badkamer met de Vibrant Swirls Badmat, met een prachtig ontwerp van dynamische wervelingen in zwart, geel en wit. Gemaakt van zachte, hoogwaardige materialen, voegt deze badmat niet alleen een vleugje moderne elegantie toe, maar biedt ook comfort en duurzaamheid, waardoor het een essentiële toevoeging is aan elk stijlvol huis.',
    price: '€18,79',
    imageUrl: 'https://ih1.redbubble.net/image.5605091778.5075/ur,bathmat_context_small,wide_portrait,750x1000.1.jpg',
    link: 'https://www.redbubble.com/i/bath-mat/Lavender-Mist-by-raimonvibe/163315075.EVFTZ'
  },
  {
    name: 'Nature\'s Verdant Embrace Klok',
    description: 'Een klok die de rust van de natuur in je huis brengt.',
    price: '€31,52',
    imageUrl: 'https://ih1.redbubble.net/image.5584176657.6827/clkc,white,white,1000x1250-pad,750x1000,f8f8f8.u2.jpg',
    link: 'https://www.redbubble.com/i/clock/Nature-s-Verdant-Embrace-by-raimonvibe/162586827.7PFC0'
  },
  {
    name: 'Floral Serenity Mok',
    description: 'Geniet van je favoriete drankje met de serene schoonheid van het Floral Serenity ontwerp. Deze mok heeft een prachtig bloemenpatroon, perfect om een vleugje elegantie toe te voegen aan je drinkwarencollectie.',
    price: '€16,60',
    imageUrl: 'https://ih1.redbubble.net/image.5581764622.6742/mug,tall,x1000,right-pad,750x1000,f8f8f8.u2.jpg',
    link: 'https://www.redbubble.com/i/mug/Floral-Serenity-by-raimonvibe/162586742.W3OIY'
  },
  {
    name: 'Coral en Arctic Huisdierenbandana',
    description: 'Versier je huisdier met de levendige en koele tinten van het Coral en Arctic ontwerp. Deze stijlvolle en comfortabele huisdierenbandana is perfect om een vleugje persoonlijkheid toe te voegen aan je harige vriend.',
    price: '€11,53',
    imageUrl: 'https://ih1.redbubble.net/image.5581774697.7023/ur,pet_bandana_size_comparison,tall_portrait,750x1000.u2.jpg',
    link: 'https://www.redbubble.com/i/pet-bandana/Coral-and-Arctic-by-raimonvibe/162587023.4ZW7E'
  }
];

export default function Webwinkel() {
  return (
    <>
      <a href="https://www.redbubble.com/people/raimonvibe/shop" target="_blank" rel="noopener noreferrer" className="shop-link">
        <span className="arrow">&#x21DD;</span>
        <h5>Alleen Unieke Items!</h5>
      </a>
      <div className="webshop">
        {products.map((product, index) => (
          <div key={index} className="product">
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={750}
                height={1000}
                className="product-image"
                priority={index < 2}
              />
            </a>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
