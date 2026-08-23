export default function App() {
  return (
    <main className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      <nav className="flex justify-between items-center px-6 md:px-20 py-6 sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-zinc-100">
        <h1 className="font-black tracking-tighter text-xl">QUANS & CO</h1>
        <a href="#work" className="text-sm font-medium hover:opacity-60">Work</a>
      </nav>

      <section className="px-6 md:px-20 pt-16 md:pt-24 pb-12">
        <h1 className="text-[13vw] md:text-[7vw] font-black tracking-tighter leading-[0.85]">
          WEBSITE<br/>DEVELOPER<br/>IN ACCRA
        </h1>
        <p className="mt-8 max-w-xl text-zinc-500 text-lg">
          I help Ghanaian brands stand out with bold logos, packaging, and social content. Available for new projects.
        </p>
      </section>

      <section id="work" className="px-6 md:px-20 pb-20">
        <h2 className="text-2xl font-bold mb-6">Selected Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="h-[420px] rounded-[32px] bg-zinc-900 text-white p-8 flex flex-col justify-end">
            <h3 className="font-bold">AfroBite Logo</h3><p className="text-xs opacity-60">Restaurant branding - Accra</p>
          </div>
          <div className="h-[420px] rounded-[32px] bg-[#e7ff5a] p-8 flex flex-col justify-end">
            <h3 className="font-bold">Sneaker Pop-up</h3><p className="text-xs opacity-60">Event posters</p>
          </div>
          <div className="h-[420px] rounded-[32px] bg-zinc-100 p-8 flex flex-col justify-end">
            <h3 className="font-bold">Kokro Surf</h3><p className="text-xs opacity-60">Beachwear identity</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="px-6 md:px-20 py-20 bg-black text-white rounded-t-[40px]">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">LET'S WORK</h2>
        <a href="mailto:quans@email.com" className="inline-block mt-6 bg-white text-black px-8 py-4 rounded-full font-bold">quans@email.com</a>
        <p className="mt-12 text-white/40 text-sm">© 2026 QUANS & CO — Accra, Ghana</p>
      </footer>
    </main>
  );
}