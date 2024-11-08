'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { createMultipleSnowflakes } from '../../script';


import pre_programming from '/public/images/Pre-Programming.webp';
import html_css from '/public/images/HTML_CSS.webp';
import javascript1 from '/public/images/JavaScript1.webp';
import javascript2 from '/public/images/JavaScript2.webp';
import webdevelopment from '/public/images/WebDevelopment.webp';
import python from '/public/images/Python.webp';
import python_tableau from '/public/images/Python_Tableau.webp';
import flutter from '/public/images/Flutter.webp';
import java1 from '/public/images/Java1.webp';
import dsa from '/public/images/dsa.webp';
import assertive from '/public/images/assertive.webp';
import ai from '/public/images/ai.webp';
import criminology from '/public/images/criminology.webp';
import tensorflow from '/public/images/tensorflow.webp';
import git from '/public/images/git.webp';
import django from '/public/images/django-1.webp';
import cSharp from '/public/images/CSharp.webp';
import CSharpIntermediate from '/public/images/CSharpIntermediate.webp';
import csharpadvanced from '/public/images/csharpadvanced.webp';
import CSharpUnitTesting from '/public/images/CSharpUnitTesting.webp';
import javascript_mastery from '/public/images/javascript_mastery.webp';
import figma from '/public/images/figma.webp';
import nextjs1 from '/public/images/nextjs1.webp';
import docker from '/public/images/docker.webp';

const certificaten = [
  {
    name: "Pre-Programming",
    description: "In deze cursus leerde ik alles wat nodig is om te beginnen met programmeren, inclusief de geschiedenis van technologiegerelateerde onderwerpen.",
    image: pre_programming,
    link: "https://www.udemy.com/course/pre-programming-everything-you-need-to-know-before-you-code/",
    alt: "Mijn Pre-Programming-certificaat.",
    position: "left"
  },
  {
    name: "HTML5 & CSS3",
    description: "In deze cursusreeks leerde ik HTML5 en CSS3, de basisprogrammeertalen voor het bouwen van een website.",
    image: html_css,
    link: "https://codewithmosh.com/p/the-ultimate-html-css",
    alt: "Mijn HTML & CSS-certificaat",
    position: "right"
  },
  {
    name: "JavaScript 1",
    description: "In JavaScript Deel 1 leerde ik de basisprincipes van programmeren. Deze cursus behandelt fundamentele principes die van toepassing zijn op elke programmeertaal.",
    image: javascript1,
    link: "https://codewithmosh.com/p/javascript-basics-for-beginners",
    alt: "Mijn JavaScript 1-certificaat",
    position: "left"
  },
  {
    name: "JavaScript 2",
    description: "In JavaScript Deel 2 leerde ik meer geavanceerde programmeerconcepten. De cursusinhoud omvat Objectgeoriënteerd Programmeren.",
    image: javascript2,
    link: "https://codewithmosh.com/p/object-oriented-programming-in-javascript",
    alt: "Mijn JavaScript 2-certificaat",
    position: "right"
  },
  {
    name: "Webontwikkeling",
    description: "In deze uitgebreide Web Development bootcamp leerde ik hoe je een website programmeert, van de basis tot meer geavanceerde onderwerpen. Onderwerpen die aan bod komen zijn onder andere het ontwikkelen van dynamische websites met een database en authenticatiefuncties.",
    image: webdevelopment,
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    alt: "Mijn Web Development-certificaat",
    position: "left"
  },
  {
    name: "Python Mastery",
    description: "Deze cursus biedt een volledig overzicht van de toepassingen die kunnen worden gebouwd met de programmeertaal Python. Programmeren, webontwikkeling en machine learning worden allemaal behandeld.",
    image: python,
    link: "https://codewithmosh.com/p/python-programming-course-beginners",
    alt: "Mijn Python-certificaat",
    position: "right"
  },
  {
    name: "Python & Tableau",
    description: "In deze cursus leerde ik hoe je Python in combinatie met Tableau kunt gebruiken voor data-analyse en visualisatie.",
    image: python_tableau,
    link: "https://www.udemy.com/course/python-tableau/",
    alt: "Mijn Python & Tableau-certificaat",
    position: "left"
  },
  {
    name: "Flutter",
    description: "Flutter is een open-source UI-softwareontwikkelkit gemaakt door Google. Het wordt gebruikt voor het ontwikkelen van cross-platformtoepassingen voor Android, iOS, Linux, macOS, Windows, Google Fuchsia en het web vanuit één codebase.",
    image: flutter,
    link: "https://www.udemy.com/course/flutter-bootcamp-with-dart/",
    alt: "Mijn Flutter-certificaat",
    position: "right"
  },
  {
    name: "Java 1",
    description: "In Java 1 leerde ik de basisprincipes van programmeren in Java. Het is een krachtige taal, geschikt voor het ontwikkelen van grote toepassingen, en draait op een virtuele machine.",
    image: java1,
    link: "https://codewithmosh.com/p/ultimate-java-part-1",
    alt: "Mijn Java 1-certificaat",
    position: "left"
  },
  {
    name: "DSA",
    description: "Data Structuren zijn manieren om gegevens te organiseren en op te slaan, terwijl algoritmen sets van instructies zijn die worden gebruikt om problemen op te lossen of taken uit te voeren. Inzicht in beide is cruciaal voor het ontwerpen van efficiënte softwareoplossingen.",
    image: dsa,
    link: "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/",
    alt: "Mijn certificaat in Data Structuren & Algoritmen",
    position: "right"
  },
  {
    name: "Assertiviteit",
    description: "Deze cursus heeft me geholpen assertieve communicatievaardigheden te ontwikkelen, die essentieel zijn in zowel professionele als persoonlijke situaties.",
    image: assertive,
    link: "https://www.udemy.com/course/assertiveness-training-course/",
    alt: "Mijn Assertiviteit-certificaat",
    position: "left"
  },
  {
    name: "AI",
    description: "Deze cursus bood een uitgebreide introductie tot Kunstmatige Intelligentie, waaronder machine learning, neurale netwerken en deep learning.",
    image: ai,
    link: "https://www.udemy.com/course/artificial-intelligence-az/",
    alt: "Mijn AI-certificaat",
    position: "right"
  },
  {
    name: "Criminologie",
    description: "Deze cursus bood inzichten in de studie van criminaliteit, crimineel gedrag en rechtshandhaving, wat waardevolle perspectieven biedt voor softwareontwikkeling in beveiliging en compliance-gerelateerde toepassingen.",
    image: criminology,
    link: "https://www.udemy.com/course/criminology-made-easy/",
    alt: "Mijn Criminologie-certificaat",
    position: "left"
  },
  {
    name: "TensorFlow",
    description: "TensorFlow is een open-source softwarebibliotheek voor machine learning en kunstmatige intelligentie. In deze cursus leerde ik TensorFlow gebruiken voor het bouwen en trainen van machine learning-modellen.",
    image: tensorflow,
    link: "https://www.udemy.com/course/complete-guide-to-tensorflow-for-deep-learning-with-python/",
    alt: "Mijn TensorFlow-certificaat",
    position: "right"
  },
  {
    name: "Git",
    description: "Git is een gedistribueerd versiebeheersysteem. In deze cursus leerde ik hoe ik Git effectief kan gebruiken om codewijzigingen te beheren en samen te werken aan softwareprojecten.",
    image: git,
    link: "https://www.udemy.com/course/git-and-github-bootcamp/",
    alt: "Mijn Git-certificaat",
    position: "left"
  },
  {
    name: "Django Deel 1",
    description: "In het eerste deel van de 'Ultimate Django Series' dook ik in de essentiële onderdelen van webontwikkeling met Python en Django. Ik leerde hoe ik MySQL moest opzetten, databases beheren met Django-migraties, en Django-modellen gebruiken voor database-interacties.",
    image: django,
    link: "https://codewithmosh.com/p/the-ultimate-django-series",
    alt: "Mijn certificaat in Django Backend Development Deel 1",
    position: "right"
  },
  {
    name: "C#",
    description: "Na het voltooien van de 'C# Basics for Beginners'-cursus bij Code with Mosh, heb ik uitgebreide kennis opgedaan van programmeren met C# en het .NET Framework.",
    image: cSharp,
    link: "https://codewithmosh.com/p/csharp-basics-for-beginners",
    alt: "Mijn C# Basis-certificaat",
    position: "left"
  },
  {
    name: "C# Intermediate",
    description: "C# is een programmeertaal ontwikkeld door Microsoft voor het .NET-platform. In deze cursus leerde ik objectgeoriënteerd programmeren, inclusief klassen, overerving en polymorfisme.",
    image: CSharpIntermediate,
    link: "https://members.codewithmosh.com/p/object-oriented-programming-in-csharp",
    alt: "Mijn C# Intermediate-certificaat",
    position: "right"
  },
  {
    name: "C# Gevorderd",
    description: "De 'C# Gevorderd'-cursus van Mosh Hamedani gaat in op complexe onderwerpen zoals generics, delegates, events, lambda-uitdrukkingen, extensiemethoden, LINQ, async/await en dynamisch typen om de code-efficiëntie en flexibiliteit te verbeteren.",
    image: csharpadvanced,
    link: "https://codewithmosh.com/p/csharp-advanced",
    alt: "Mijn C# Gevorderd-certificaat",
    position: "left"
  },
  {
    name: "C# Unit Testing",
    description: "Met behulp van TestNinja leerde ik in deze cursus essentiële unit testing-technieken in C#, waaronder Test-Driven Development (TDD), dependency injection en mocking frameworks.",
    image: CSharpUnitTesting,
    link: "https://codewithmosh.com/p/unit-testing-for-csharp-developers",
    alt: "Mijn C# Unit Testing-certificaat",
    position: "right"
  },
  {
    name: "JavaScript Mastery",
    description: "Ik voltooide de JavaScript Mastery-cursus van The Code Dose, wat me hielp mijn kennis te verbeteren van zowel fundamentele als geavanceerde JavaScript-concepten.",
    image: javascript_mastery,
    link: "https://products.thecodedose.com/javascript-mastery",
    alt: "Mijn JavaScript Mastery-certificaat",
    position: "left"
  },
  {
    name: "Figma",
    description: "In deze cursus leerde ik Figma gebruiken om effectieve UX/UI-ontwerpen te maken, van concept tot prototype, om gebruikerservaringen te verbeteren en visueel aantrekkelijke interfaces te bouwen.",
    image: figma,
    link: "https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course",
    alt: "Mijn UI/UX-ontwerpcertificaat met Figma",
    position: "right"
  },
  {
  name: "Next.js",
  description: "In deze cursus leerde ik Next.js 13 met TypeScript gebruiken om schaalbare en snelle applicaties te bouwen, met technieken zoals server-side rendering, dynamische routing en API-routes.",
  image: nextjs1,
  link: "https://codewithmosh.com/p/ultimate-nextjs-series",
  alt: "Mijn certificaat voor het beheersen van Next.js 13 met TypeScript",
  position: "left"
  },
  {
    name: "Docker",
    description: "In deze cursus leerde ik de basis- en geavanceerde concepten van Docker, inclusief het opzetten van containers, het maken van Docker images en het beheren van applicaties in een containeromgeving. Deze kennis stelt me in staat om efficiënte, schaalbare en gestandaardiseerde ontwikkelingsomgevingen te creëren.",
    image: docker,
    link: "https://codewithmosh.com/p/the-ultimate-docker-course",
    alt: "Mijn Docker certificaat van Code with Mosh",
    position: "right"
  }
];


export default function Certificaten() {
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
        {certificaten.map((cert, index) => (
          <div key={index}>
            <div className="spacing"></div>
            <div className="middle-container">
              <Image
                className={`common-properties certificate-${cert.position}`}
                src={cert.image}
                alt={cert.alt}
                width={500}
                height={300}
              />
              <article>
                <div>
                  <h1 className="exclusive-text">{cert.name}</h1>
                  <p>{cert.description}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`Social ${cert.position === 'right' ? 'left-align' : ''} align`}
                  >
                    {cert.name}
                  </a>
                  <div className="spacing3"></div>
                </div>
              </article>
            </div>
          </div>
        ))}
      </main>
      <div className="spacing"></div>
    </div>
  );
}
