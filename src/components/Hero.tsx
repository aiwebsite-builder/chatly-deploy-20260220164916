import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 to-purple-950 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')]"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Welcome to <span className="text-emerald-400">My Simple Website</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          A clean, modern, and responsive starting point for your next great idea.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out flex items-center group">
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </button>
          <button className="bg-transparent border border-gray-400 text-gray-200 hover:border-emerald-400 hover:text-emerald-400 font-semibold py-3 px-8 rounded-full transition-all duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
