import Image from "next/image";
import Link from "next/link";

const officers = [
  { name: "Vanisha Gupta", role: "President", image: "/officers/vanisha.png" },
  { name: "Pranav Karra", role: "Vice President", image: "/officers/pranav.png" },
  { name: "Ian Yee", role: "Treasurer", image: "/officers/ian.png" },
  { name: "Krishna Pagrut", role: "Technical Lead", image: "/officers/krishna.png" },
  { name: "Manit Garg", role: "Event Planner", image: "/officers/manit.png" },
  { name: "Pihu Agarwal", role: "Secretary", image: "/officers/pihu.png" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div className="max-w-5xl w-full bg-white">
        <nav className="bg-white shadow-md">
          <div className="px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Image
                  src="/psu.png"
                  alt="Penn State Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <span className="text-xl font-bold text-gray-800">ML @ Penn State</span>
              </div>
              <div className="space-x-4">
                <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
                <Link href="#officers" className="text-gray-600 hover:text-blue-600 transition-colors">Officers</Link>
                <Link href="#events" className="text-gray-600 hover:text-blue-600 transition-colors">Events</Link>
                <Link href="#blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <div className="relative h-[400px]">
            <Image
              src="/background.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Machine Learning Club</h1>
                <p className="text-xl mb-8">Built to make you extraordinarily productive in AI and ML.</p>
                <Link href="https://app.youform.com/forms/euegcuxu" target="_blank" className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition-colors">
                  Join Us
                </Link>
              </div>
            </div>
          </div>

          <div className="px-4 py-16">
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
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-xl font-semibold text-gray-800">Introduction to Neural Networks Workshop</h3>
                <p className="text-gray-600">Date: October 15, 2023 | Location: IST Building, Room 210</p>
              </div>
            </section>

            <section id="blog" className="mb-16">
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
            </section>
          </div>
        </main>

        <footer className="bg-gray-100 text-gray-600 text-center p-4">
          <p>&copy; 2023 ML Club @ Penn State. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}