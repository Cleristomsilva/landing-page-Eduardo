import React from 'react';
// Adicionei ArrowRight na importação
import { Phone, Mail, MapPin, HardHat, Ruler, CheckCircle, ArrowRight, Plane as Drone, Map } from 'lucide-react';
// --- IMPORTAÇÕES DE IMAGENS LOCAIS (Corrigido para .jpg) ---
import engenharia1 from './assets/engenharia1.jpg';
import engenharia2 from './assets/engenharia2.jpg';
import topografia1 from './assets/topografia1.jpg';
import topografia2 from './assets/topografia2.jpg';
import logo_eduardo2 from './assets/logo_eduardo2.png';


export default function App() {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5522999612651"; 

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* --- HERO SECTION ATUALIZADA (NOME SEM QUEBRA) --- */}
      <header className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Imagem de Fundo com Parallax Suave */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=2000&auto=format&fit=crop" 
            alt="Arquitetura Contemporânea"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          {/* Overlay em Degradê para Melhorar a Leitura */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900"></div>
        </div>

        {/* Conteúdo Centralizado */}
        <div className="relative z-10 text-center px-1 max-w-4xl">
          {/* O Nome dele em Destaque Absoluto (Tamanho 9xl no desktop, 5xl no mobile) */}
{/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 tracking-tighter leading-none bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent px-4">
  Eduardo Schetinni
</h1> */}




 <img 
          src={logo_eduardo2} 
          alt="Obra de engenharia 1" 
          className=" object-cover  "
        />         
          {/* O Subtítulo refinado */}
          <h2 className="text-2xl md:text-5xl font-bold mb-6 text-white tracking-tight uppercase">
            Engenharia <span className="text-yellow-400">&</span> Topografia
          </h2>
          
          <p className="text-xl md:text-2xl mb-6 text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Serviço Técnico em Engenharia e Topografia
          </p>
          
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center items-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-semibold py-4 px-10 rounded-xl transition duration-300 shadow-xl shadow-yellow-500/20 text-lg">
              Solicitar Orçamento
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </header>


{/* --- SEÇÃO SERVIÇOS TÉCNICOS (Fundo Cinza e Imagens) --- */}
{/* --- SEÇÃO SERVIÇOS TÉCNICOS (Fundo Cinza, Imagens Normalizadas) --- */}
<section className="bg-slate-200 py-12 px-4 border-y border-slate-200 ">
  <div className="max-w-6xl mx-auto">
    
    {/* Título Centralizado */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Serviços Especializados na Área</h2>
      <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-2 rounded-full"></div>
    </div>
    
    {/* Grid de Serviços (Layout Mosaico Alternado) */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* 1. ENGENHARIA CIVIL - Bloco de Texto (Branco) */}
      <div className="order-2 md:order-1 p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition duration-300">
        <HardHat className="text-blue-600 mb-6" size={48} />
        <h3 className="text-2xl font-bold mb-3 text-slate-950 tracking-tight">Engenharia Civil & Topografia</h3>
        <p className="text-slate-600 leading-relaxed text-lg font-light">
          Mapeamento de terrenos, construções e medições topograficas em geral.
        </p>
      </div>
      
      {/* 1. ENGENHARIA CIVIL - Bloco de Imagens (Normalizadas) */}
      <div className="order-1 md:order-2 grid grid-cols-2 gap-4 items-end">
        <img 
          src={engenharia1} 
          alt="Obra de engenharia 1" 
          className="rounded-xl shadow-xl w-full h-60 object-cover border-4 border-white hover:scale-105 transition duration-500"
        />
        <img 
          src={engenharia2} 
          alt="Obra de engenharia 2" 
          className="rounded-xl shadow-xl w-full h-60 object-cover mt-8 border-4 border-white hover:scale-105 transition duration-500"
        />
      </div>

      {/* 2. TOPOGRAFIA - Bloco de Imagens (Efeito Mosaico) */}
      <div className="order-3 grid grid-cols-2 gap-4 items-start">
        <img 
          src={topografia1} 
          alt="Levantamento topográfico 1" 
          className="rounded-xl shadow-xl w-full h-50 object-cover border-4 border-white hover:scale-105 transition duration-500"
        />
        <img 
          src={topografia2} 
          alt="Levantamento topográfico 2" 
          className="rounded-xl shadow-xl w-full h-50 object-cover  border-4 border-white hover:scale-105 transition duration-500"
        />
      </div>
      
      {/* 2. TOPOGRAFIA - Bloco de Texto (Branco) */}
      <div className="order-4 p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition duration-300">
        <div className="flex gap-4 mb-6 text-blue-600">
          <Drone size={48} />
          <Map size={48} />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-slate-950 tracking-tight">Topografia de ponta - Drone & GPS RTK</h3>
        <p className="text-slate-600 leading-relaxed text-lg font-light">
          Levantamentos de precisão milimétrica e mapeamento aéreo detalhado. Geração de ortofotos e georreferenciamento para projetos complexos.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Por que nós? */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Diferencial</h2>
          <div className="space-y-4 text-left">
            {[ "Projetos em conformidade com as normas técnicas", 
               "Uso de tecnologia BIM para visualização 3D",
              //  "Gestão rigorosa de cronograma e custos",
               "Atendimento personalizado e suporte total"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-green-500" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final (WhatsApp) */}
      <footer className="py-20 text-center bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-6">Deseja um orçamento?</h2>
        <p className="mb-8 text-gray-400">Clique no botão abaixo para falar diretamente comigo no WhatsApp.</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-105">
          <Phone size={20} />
          Falar no WhatsApp agora
        </a>
      </footer>
    </div>
  );
}