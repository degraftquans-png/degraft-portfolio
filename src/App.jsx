export default function App() {
  return (
    <main className="min-h-screen bg-[#e6f2ff] text-black font-sans">
      {/* NAV */}
      <nav className="flex justify-between p-6 md:p-10 font-bold tracking-tight">
        <span>QUANS & CO</span>
        <a href="#contact" className="border border-black px-4 py-1 rounded-full text-sm">CONNECT WITH US</a>
      </nav>

      {/* HERO - COMPANY STYLE */}
      <section className="px-6 md:px-10 mt-10 md:mt-20">
        <h1 className="text-[13vw] md:text-[9vw] font-black leading-[0.85] tracking-tighter uppercase">
          WEBSITE<br/>DEVELOPER<br/>IN ACCRA
        </h1>
        <p className="mt-6 max-w-md text-gray-600">
          Quans & Co is a creative studio in Accra. We help Ghanaian and international brands stand out with bold logos, packaging, beautiful business websites and social content. Available for new projects.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="https://wa.me/233243707232" target="_blank" className="bg-[#25D366] text-white px-5 py-2 rounded-full text-sm font-bold">WHATSAPP US</a>
          <div className="flex gap-2">
            <div className="w-14 h-14 bg-black rounded-2xl"></div>
            <div className="w-14 h-14 bg-[#ffeb3b] rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="work" className="mt-20 px-6 md:px-10 grid md:grid-cols-3 gap-4">
        <div className="bg-white border p-6 rounded-2xl"><h3 className="font-bold">01 Brand & Design</h3><p className="text-sm text-gray-500 mt-2">Logos, flyers, packaging that sells</p></div>
        <div className="bg-white border p-6 rounded-2xl"><h3 className="font-bold">02 Website Development</h3><p className="text-sm text-gray-500 mt-2">Fast, modern websites for businesses in Ghana</p></div>
        <div className="bg-white border p-6 rounded-2xl"><h3 className="font-bold">03 Data & Excel</h3><p className="text-sm text-gray-500 mt-2">Dashboards and analysis that drive growth</p></div>
      </section>

      <footer id="contact" className="mt-24 bg-black text-white p-10 md:p-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black">QUANS & CO</h2>
        <p className="mt-4 text-white/60">Creative Studio — Accra, Ghana</p>
<a href="https://wa.me/233243707232" target="_blank" className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold mt-6 inline-block">Chat on WhatsApp</a>        <p className="mt-12 text-white/30 text-sm">© 2026 Quans & Co. All rights reserved.</p>
      </footer>
    </main>
  )
}