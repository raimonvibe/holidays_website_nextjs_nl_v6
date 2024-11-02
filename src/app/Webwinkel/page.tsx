import { Metadata } from 'next';
import Image from 'next/image';
import '@/styles/webshop.css';

export const metadata: Metadata = {
  title: 'Webwinkel - Unieke Items',
  description: 'Ontdek onze collectie unieke en stijlvolle producten.',
};


const products = [
 
  {
    name: 'Scarlet Blossom Harmony Samsung Galaxy hoesje',
    description: 'Scarlet Blossom Harmony is een levendig Samsung-hoesje met rijke, rode bloemenpatronen die een elegante, stijlvolle uitstraling aan je telefoon geven.',
    price: '€27,49',
    imageUrl: 'https://ih1.redbubble.net/image.5661040887.5339/icr,samsung_galaxy_s24_soft,back,a,x1000-bg,f8f8f8.jpg',
    link: 'https://www.redbubble.com/i/samsung-case/Scarlet-Blossom-Harmony-by-raimonvibe/163265339.HS2RU'
  },
  {
    name: 'Floral Serenity Douchegordijn',
    description: 'Floral Serenity Douchegordijn is een rustgevend, door de natuur geïnspireerd douchegordijnontwerp, perfect om een serene sfeer toe te voegen aan elke badkamer.',
    price: '€74,23',
    imageUrl: 'https://ih1.redbubble.net/image.5685533254.6742/ur,shower_curtain_closed_context,wide_portrait,750x1000.1u2.jpg',
    link: 'https://www.redbubble.com/i/shower-curtain/Floral-Serenity-by-raimonvibe/162586742.YH6LW'
  },
  {
    name: 'ChocoRose Elegance Reistas',
    description: 'Reis in stijl met de ChocoRose Elegance reistas. Deze elegante reistas heeft een verfijnd ontwerp met rijke chocolade- en rozetinten, perfect voor weekendjes weg of dagelijks gebruik. Duurzaam en ruim, combineert het functionaliteit met mode.',
    price: '€53,98',
    imageUrl: 'https://ih1.redbubble.net/image.5581716169.5047/ur,duffle_bag_large_front,wide_portrait,750x1000.u3.jpg',
    link: 'https://www.redbubble.com/i/duffle-bag/ChocoRose-Elegance-by-raimonvibe/162585047.TZ9LO'
  },
 
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
