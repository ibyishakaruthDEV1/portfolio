import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">ibyishaka</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            A Next.js Developer based in Kigali, Rwanda.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition">
            View My Work
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                <p className="text-gray-600 mb-4">A responsive web app built with Next.js.</p>
                <button className="text-primary hover:underline">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="bg-gray-300 h-64 rounded-lg">
                <img src="images/q1.jpg" alt="" className='round-full' width={400} height={100} />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 mb-4">
                I'm a passionate developer specializing in Next.js, React, and Tailwind CSS.
              </p>
              <p className="text-gray-700">
                With 3+ years of experience, I build fast, SEO-friendly websites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
          <form className="max-w-md mx-auto space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg" />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
            <textarea placeholder="Message"  className="w-full p-3 border rounded-lg"></textarea>
            <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}