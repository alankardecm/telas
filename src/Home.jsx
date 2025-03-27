import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-[#1B3B5F] text-white px-3 py-1 rounded-full font-bold text-lg">AM</div>
          <span className="text-2xl font-semibold">AM <span className="text-[#2D9C79]">Consultoria</span></span>
        </div>
        <a href="https://wa.me/5519996309592" target="_blank" className="bg-[#2D9C79] text-white px-4 py-2 rounded-xl font-medium hover:bg-[#24916e]">Fale Conosco</a>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 text-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">Transforme seus dados em decisões inteligentes</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">Consultoria especializada em Power BI, Estratégia de Dados e Dashboards para Pequenas Empresas, ISPs e Startups.</p>
        <a href="https://wa.me/5519996309592" target="_blank" className="bg-[#1B3B5F] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#16314f]">Fale com um especialista</a>
      </section>

      {/* Sobre */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Nossa Missão e Valores</h2>
        <p className="mb-4">Ajudar pequenas empresas, ISPs e startups a crescerem de forma estratégica e inteligente por meio de soluções em Business Intelligence, promovendo clareza, performance e visão orientada por dados.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Sabedoria aplicada aos negócios</li>
          <li>Clareza nos dados e decisões</li>
          <li>Comprometimento com resultados</li>
          <li>Inovação constante</li>
          <li>Gratidão, humildade e evolução</li>
        </ul>
      </section>

      {/* Serviços */}
      <section className="px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Serviços</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Power BI</h3>
            <p>Dashboards interativos, conectando múltiplas fontes de dados.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">ETL</h3>
            <p>Automatização de processos de extração, transformação e carga de dados.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Estratégia de Dados</h3>
            <p>Diagnóstico, planejamento e acompanhamento estratégico.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Dashboards Personalizados</h3>
            <p>Criação de dashboards sob medida para análise de desempenho e KPIs.</p>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Blog</h2>
        <p className="text-gray-600">Em breve: artigos sobre BI, Power BI, estudos de caso e tendências em dados.</p>
      </section>

      {/* Contato */}
      <section className="px-6 py-12 bg-[#1B3B5F] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
        <p className="mb-4">Estamos prontos para ajudar sua empresa a crescer com inteligência.</p>
        <a href="https://wa.me/5519996309592" target="_blank" className="bg-[#2D9C79] px-6 py-3 rounded-xl font-medium hover:bg-[#27a377]">Fale pelo WhatsApp</a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} AM Consultoria. Todos os direitos reservados.
      </footer>
    </div>
  );
}