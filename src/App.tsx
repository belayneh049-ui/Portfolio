import profilePic from './assets/profile.png';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="text-xl font-bold tracking-tighter text-indigo-500">BELAYNEH.T</span>
            <div className="flex gap-6 text-xs font-bold tracking-widest text-slate-500">
              <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">HOME</button>
              <button onClick={() => scrollToSection('work')} className="hover:text-white transition-colors">PROJECTS</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">CONTACT</button>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section id="home" className="max-w-6xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-indigo-400 font-mono text-sm mb-4 tracking-widest uppercase italic">
              Junior Frontend Developer
            </h2>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              BUILDING WITH <br /> PRECISION.
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-md">
              Currently an <span className="text-white font-semibold">Accounting Student</span> graduating in 2027.
              I combine analytical thinking with <span className="text-white">React and TypeScript</span>.
            </p>
            <button
              onClick={() => scrollToSection('work')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-indigo-500/20"
            >
              See My Projects
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-indigo-500 rounded-2xl blur opacity-20"></div>
              <img
                src={profilePic}
                alt="Belayneh"
                className="relative w-64 h-80 object-cover rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="max-w-6xl mx-auto px-6 py-12 border-t border-white/5">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              'HTML5',
              'CSS3',
              'JavaScript',
              'React',
              'TypeScript',
              'Tailwind CSS',
              'Git/GitHub'
            ].map(skill => (
              <span
                key={skill}
                className="px-4 py-1.5 bg-slate-900 border border-white/5 rounded text-xs font-semibold text-slate-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
          <h3 className="text-xl font-bold mb-8">Featured Project</h3>
          <div className="bg-slate-900/40 p-10 rounded-2xl border border-white/5">
            <h4 className="text-2xl font-bold mb-3">Task Manager Pro</h4>
            <p className="text-slate-400 mb-6 max-w-2xl">
              A Redux-based task manager showing real-world state handling.
            </p>
            <a
              href="https://github.com/belayneh049-ui/task-manager-redux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 font-bold hover:text-indigo-300"
            >
              View Source →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5 text-center">
          <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
          <p className="text-slate-400">
            Email: <a href="mailto:belayneh049@gmail.com" className="text-white">belayneh049@gmail.com</a>
          </p>
          <p className="mt-20 text-[10px] text-slate-700 uppercase tracking-widest">
            Built by Belayneh Takele • 2026
          </p>
        </footer>

      </div>
    </>
  );
}

export default App;
