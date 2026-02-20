import Header from './components/Header';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        {/* You can add more sections here later! */}
        <section className="py-20 px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-50">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            We are dedicated to providing innovative solutions that empower individuals and businesses. Our commitment to quality and customer satisfaction drives everything we do.
          </p>
        </section>
      </main>
      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} My Simple Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
