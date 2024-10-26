'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { createMultipleSnowflakes } from '../../script';

function Contact() {
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
        <div className="header">
          <Image
            className="common-properties common-properties-left"
            src="/images/post_box.webp"
            alt="Illustratie van een brievenbus."
            width={500}
            height={300}
          />
          <br />
          <br />
          <article>
            <div>
              <h1>Contact</h1>
              <p>
                Als je vragen hebt over de diensten die ik aanbied, stuur me dan een bericht.
                Ik zal zo snel mogelijk reageren.
              </p>
              <div className="spacing3"></div>
              <a className="Social" href="mailto:info@raimonvibe.com">
                Contact
              </a>
            </div>
          </article>
        </div>

        <div className="middle-container">
          <Image
            className="common-properties common-properties-right"
            src="/images/idea.webp"
            alt="Illustratie van een gloeilamp die in een lampenkap wordt geschroefd"
            width={500}
            height={300}
          />
          <article>
            <div>
              <h1>Als je ideeën hebt.</h1>
              <p>
                Feedback verzamelen van cliënten is een manier om te laten zien dat ik hun mening waardeer.
                Door mijn cliënten om feedback te vragen, communiceer ik dat hun meningen belangrijk voor me zijn.
                Ik betrek hen bij het vormgeven van mijn bedrijf, zodat ze zich meer verbonden voelen met mijn onderneming.
                Door naar hun stem te luisteren, kan ik een duurzame band met hen opbouwen.
              </p>
              <p>"We horen graag van je."</p>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>
      </main>

      <div className="spacing"></div>
    </div>
  );
}

export default Contact;