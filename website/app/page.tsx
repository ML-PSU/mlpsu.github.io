import Image from "next/image";
import Link from "next/link";

const officers = [
  { name: "Vanisha Gupta", role: "President", image: "/waves.gif" },
  { name: "Pranav Karra", role: "Vice President", image: "/waves.gif" },
  { name: "Ian Yee", role: "Treasurer", image: "/waves.gif" },
  { name: "Krishna Pagrut", role: "Technical Lead", image: "/waves.gif" },
  { name: "Manit Garg", role: "Event Planner", image: "/waves.gif" },
  { name: "Pihu Agarwal", role: "Secretary", image: "/waves.gif" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex justify-center py-4">
      <div className="max-w-6xl w-full bg-white rounded-lg overflow-hidden shadow-lg">
        <nav className="bg-black px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/psu.png"
                alt="Penn State Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-bold text-white">ML @ Penn State</span>
            </div>
            <div className="flex space-x-2">
              {/* <Link href="#about" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">About</Link> */}
              {/* <Link href="#officers" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">Officers</Link> */}
              <Link href="#events" className="px-4 py-2 bg-[#7e00fc] text-white rounded-md hover:bg-red-600 transition-colors">Events</Link>
              <Link href="#positions" className="px-4 py-2 bg-[#7e00fc] text-white rounded-md hover:bg-red-600 transition-colors">Positions</Link>
              {/* <Link href="#blog" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">Blog</Link> */}
              <Link href="https://app.youform.com/forms/euegcuxu" target="_blank" className="px-4 py-2 bg-[#7e00fc] text-white rounded-md hover:bg-red-600 transition-colors">Join Us</Link>
            </div>
          </div>
        </nav>

        <main>
          <div className="relative h-[400px]">
            <Image
              src="/waves.gif"
              alt="Dynamic Background"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-8xl font-bold mb-4">ML@PSU</h1>
                <p className="text-xl mb-8">A community for real machine learning enthusiasts.</p>
                <Link href="https://app.youform.com/forms/euegcuxu" target="_blank" className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition-colors">
                  Join Us
                </Link>
              </div>
            </div>
          </div>

          <div className="px-6 py-16">
            <section id="about" className="mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
              <p className="text-gray-600">
                ML Club @ Penn State is focused on research and implementations in the field of machine learning. We welcome students of all experience levels, from beginners to those who have published ML papers.
              </p>
            </section>

            <section id="officers" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Officers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {officers.map((officer) => (
                  <div key={officer.role} className="text-center">
                    <Image
                      src={officer.image}
                      alt={officer.name}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="font-bold text-gray-800">{officer.name}</h3>
                    <p className="text-gray-600">{officer.role}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="events" className="mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
              {/* <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-xl font-semibold text-gray-800">Introduction to Neural Networks Workshop</h3>
                <p className="text-gray-600">Date: October 15, 2023 | Location: IST Building, Room 210</p>
              </div> */}
            </section>

            {/* <section id="blog" className="mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Latest Blog Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="text-xl font-semibold text-gray-800">Getting Started with TensorFlow</h3>
                  <p className="text-gray-600">Learn the basics of TensorFlow and build your first neural network.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="text-xl font-semibold text-gray-800">The Future of AI in Healthcare</h3>
                  <p className="text-gray-600">Exploring the potential impact of AI on medical diagnosis and treatment.</p>
                </div>
              </div>
            </section> */}
          </div>
        </main>

        <footer className="bg-gray-100 text-gray-600 text-center p-4">
          <p>&copy; 2023 ML Club @ Penn State. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}