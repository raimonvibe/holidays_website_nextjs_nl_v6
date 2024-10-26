import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV | Raimonvibe',
  description: 'Bekijk het professionele cv van Raimonvibe.',
};

const resumePath = '/images/resume.pdf';

export default function CurriculumVitae() {
  return (
    <div>
      <a href={resumePath} target="_blank" rel="noopener noreferrer">
        <div id="pdf-container">
          <iframe
            src={resumePath}
            title="CV PDF"  // Voegt een titel toe voor toegankelijkheid
            width="100%"
            height="600px"
            style={{ border: 'none' }}
            loading="lazy"
            aria-label="CV PDF van Raimonvibe"
          ></iframe>
        </div>
      </a>
      <div className="spacing"></div>
      <div className="spacing"></div>
    </div>
  );
}
