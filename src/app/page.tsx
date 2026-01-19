import Image from 'next/image';
import Link from 'next/link';
import InteractiveImage from '../components/InteractiveImage'; // Add this import

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      
      {/* First Four Images on Front Page */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <InteractiveImage src="/images/protect-the-cure.jpg" alt="Protect the Cure" text="Protect the Cure Workshops in Accra (Dec 5 2025) and Dakar (Dec 10 2025)" linkHref="/people" linkText="Read here about the workshops run by Impact Santé Afrique on helping West African countries prepare for the arrival of artemisinin-resistant malaria" />
        <InteractiveImage src="/images/logo.png" alt="Center of Pathogen Evolution" text="Center of Pathogen Evolution" linkHref="/people" linkText="Link 2" />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <InteractiveImage src="/images/logo.png" alt="Center of Pathogen Evolution" text="Center of Pathogen Evolution" linkHref="/people" linkText="Link 3" />
        <InteractiveImage src="/images/logo.png" alt="Center of Pathogen Evolution" text="Center of Pathogen Evolution" linkHref="/people" linkText="Link 4" />
      </section>

      {/* Pathogens and Evolutionary Questions Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
        </div>
        <div>
        </div>
      </section>
      
      {/* Intro with Image Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-4xl font-bold text-temple-red mb-6 pb-2 border-b-2 border-temple-red">Center of Pathogen Evolution at Temple University</h2>
          <p className="text-lg text-gray-700">
            We use computational, modeling, and interdisciplinary approaches to advance the understanding of pathogen evolution, inform strategies for disease prevention, treatment, and enhance public health preparedness.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/logo-large.png" // Assuming the image will be in public/images
            alt="Center of Pathogen Evolution"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Pathogens and Evolutionary Questions Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-3xl font-bold text-temple-red mb-6 pb-2 border-b-2 border-temple-red">Pathogens</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-1 list-temple-red font-light">
            <li>Cholera</li>
            <li>Influenza</li>
            <li>Malaria</li>
            <li>SARS-CoV-2</li>
            <li>E. faecalis</li>
            <li>Avian Flu</li>
            <li>HIV</li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-temple-red mb-6 pb-2 border-b-2 border-temple-red">Evolutionary Questions</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-1 list-temple-red font-light">
            <li>Drug Resistance Evol (malaria, E faecalis, HIV, Flu)</li>
            <li>Immune Escape Evolution</li>
            <li>Evolution of Diagnostic Evasion</li>
            <li>Recombination</li>
            <li>Origins of Malaria</li>
            <li>Origins of SARS-CoV-2</li>
            <li>Emergence / Host Adaption</li>
            <li>Within-Host Evolution</li>
          </ul>
        </div>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <h4 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h4>
          <p className="text-gray-600 mb-4">Learn about our core purpose and objectives.</p>
          <a href="/mission" className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Mission
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <h4 className="text-2xl font-bold text-gray-800 mb-3">News Center</h4>
          <p className="text-gray-600 mb-4">News</p>
          <a href="/news" className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            News
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <h4 className="text-2xl font-bold text-gray-800 mb-3">People</h4>
          <p className="text-gray-600 mb-4">CPE is co-directed by <a href="https://slkp.info" className="text-blue-600 hover:underline">Sergei Pond</a> and <a href="https://mol.ax" className="text-blue-600 hover:underline">Maciek Boni</a> and includes ZZ members from XX colleges and YY departments.</p>
          <a href="/team" className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            People
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <h4 className="text-2xl font-bold text-gray-800 mb-3">Tools</h4>
          <p className="text-gray-600 mb-4">A core strength of the Center is its comprehensive portfolio of software and modeling tools.</p>
          <Link href="/software/" className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Tools
          </Link>
        </div>
      </section>
    </div>
  );
}