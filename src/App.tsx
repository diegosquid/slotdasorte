import React from 'react';
import { SlotMachine } from './components/SlotMachine';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: 'url(https://raw.githubusercontent.com/stackblitz/stackblitz-bolt/main/assets/images/casino-bg.jpg)'
      }}
    >
      <div className="min-h-screen bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <img src="/logo.svg" alt="1win Casino" className="h-12 sm:h-16 mx-auto mb-6 sm:mb-8" />
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
                Slot da Sorte!
              </h1>
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
            </div>
            <p className="text-lg sm:text-xl text-gray-300">Tente a sorte e ganhe um incrível bônus de 500%!</p>
          </header>

          <main className="max-w-[320px] sm:max-w-xl md:max-w-2xl mx-auto">
            <SlotMachine />
            
            <div className="mt-16 text-center relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              
              <h2 className="text-3xl font-bold mb-8 inline-flex items-center gap-3">
                <span className="text-yellow-400">♠️</span>
                Como Jogar
                <span className="text-yellow-400">♦️</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                <div className="group bg-gradient-to-b from-white/10 to-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🎰</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">Passo 1</h3>
                    <p className="text-gray-300">Clique no botão para girar os slots</p>
                  </div>
                </div>
                <div className="group bg-gradient-to-b from-white/10 to-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🎲</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">Passo 2</h3>
                    <p className="text-gray-300">Aguarde os símbolos alinharem</p>
                  </div>
                </div>
                <div className="group bg-gradient-to-b from-white/10 to-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl">💰</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">Passo 3</h3>
                    <p className="text-gray-300">Resgate seu prêmio incrível!</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex justify-center gap-4">
                <span className="text-2xl text-yellow-400">♣️</span>
                <span className="text-2xl text-yellow-400">♥️</span>
                <span className="text-2xl text-yellow-400">♠️</span>
                <span className="text-2xl text-yellow-400">♦️</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;