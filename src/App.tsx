import profilePic from './assets/profile.png';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
          <h2 className="text-indigo-400 font-mono text-sm mb-4 tracking-widest uppercase italic">Junior Frontend Developer</h2>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">BUILDING WITH <br/> PRECISION.</h1>
          <p className="text-lg text-slate-400 mb-8 max-w-md">
            Currently an **Accounting Student** graduating in 2027. I combine analytical financial thinking with 
            <span className="text-white"> React and TypeScript</span> to build clean, functional web applications.
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
            <img src={profilePic} alt="Belayneh" className="relative w-64 h-80 object-cover rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* Skills / Toolbox */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-white/5">
        <div className="flex flex-wrap gap-2 justify-center">
          {['HTML5', 'CSS3', 'JavaScript', 'ES6+', 'React', 'React Hooks', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Git/GitHub'].map((skill) => (
            <span key={skill} className="px-4 py-1.5 bg-slate-900 border border-white/5 rounded text-xs font-semibold text-slate-400">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-indigo-500"></span> 01. Featured Project
        </h3>
        <div className="bg-slate-900/40 p-10 rounded-2xl border border-white/5">
          <h4 className="text-2xl font-bold mb-3">Task Manager Pro</h4>
          <p className="text-slate-400 mb-6 leading-relaxed max-w-2xl">
            A real-world application built to master **Global State Management**. 
            This project showcases my ability to handle complex data flows, 
            ensuring that application state remains as balanced as an accounting ledger.
          </p>
          <a href="https://github.com/belayneh049-ui/task-manager-redux" target="_blank" className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
            View Source on GitHub →
          </a>
        </div>
      </section>

      {/* Final Footer Section */}
<footer id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5 text-center">
  <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
  <div className="space-y-4">
    <p className="text-slate-400">
      Email: <a href="mailto:belayneh049@gmail.com" className="text-white hover:text-indigo-400 transition-colors">belayneh049@gmail.com</a>
    </p>
    <p className="text-slate-400">
      Phone: <a href="tel:+251960102249" className="text-white hover:text-indigo-400 underline decoration-indigo-500/50">+251 960 102 249</a>
    </p>
    
    <div className="flex justify-center flex-wrap gap-8 mt-8">
      <a href="https://t.me/belay0321" target="_blank" className="text-sm font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Telegram</a>
      <a href="https://facebook.com/belay0321" target="_blank" className="text-sm font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Facebook</a>
      <a href="https://instagram.com/belay0321" target="_blank" className="text-sm font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Instagram</a>
      <a href="https://github.com/belayneh049-ui" target="_blank" className="text-sm font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">GitHub</a>
    </div>
  </div>
  <p className="mt-20 text-[10px] text-slate-700 tracking-[0.2em] uppercase">Built by Belayneh Takele • 2026</p>
</footer>