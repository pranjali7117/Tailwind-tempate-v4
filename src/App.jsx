import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 font-inter text-neutral-700">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent-100 to-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-secondary-100 to-accent-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              <span className="text-neutral-800">Tailwind CSS</span>
              <br />
              <span className="bg-gradient-to-r from-[#1a365d] to-[#f59e0b] bg-clip-text text-transparent">v4 Demo</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              A modern setup with Vite and Tailwind CSS v4 featuring custom colors, gradients, and utilities.
            </p>
          </div>

          {/* Demo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Primary Card */}
            <div className="card-elevated p-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1a365d] to-[#1e40af] shadow-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">P</span>
              </div>
              <h3 className="text-xl font-display font-bold text-neutral-800 mb-3">Primary Colors</h3>
              <p className="text-neutral-600 mb-4">Custom primary color palette with gradient support.</p>
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-primary-500 rounded"></div>
                <div className="w-4 h-4 bg-primary-600 rounded"></div>
                <div className="w-4 h-4 bg-primary-700 rounded"></div>
              </div>
            </div>

            {/* Secondary Card */}
            <div className="card-elevated p-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] shadow-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-display font-bold text-neutral-800 mb-3">Secondary Colors</h3>
              <p className="text-neutral-600 mb-4">Amber gold palette for wealth and prosperity themes.</p>
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-secondary-500 rounded"></div>
                <div className="w-4 h-4 bg-secondary-600 rounded"></div>
                <div className="w-4 h-4 bg-secondary-700 rounded"></div>
              </div>
            </div>

            {/* Accent Card */}
            <div className="card-elevated p-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#10b981] to-[#059669] shadow-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <h3 className="text-xl font-display font-bold text-neutral-800 mb-3">Accent Colors</h3>
              <p className="text-neutral-600 mb-4">Emerald green for growth and success indicators.</p>
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-accent-500 rounded"></div>
                <div className="w-4 h-4 bg-accent-600 rounded"></div>
                <div className="w-4 h-4 bg-accent-700 rounded"></div>
              </div>
            </div>
          </div>

          {/* Buttons Demo */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="btn-primary">
              Primary Button
            </button>
            <button className="btn-secondary">
              Secondary Button
            </button>
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-8 py-4 bg-gradient-to-r from-[#10b981] to-[#059669] text-white font-semibold text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Count is {count}
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-2xl font-mono font-bold text-primary-600">v4</div>
              <div className="text-sm text-neutral-600">Tailwind Version</div>
            </div>
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-2xl font-mono font-bold text-secondary-600">⚡</div>
              <div className="text-sm text-neutral-600">Vite Powered</div>
            </div>
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-2xl font-mono font-bold text-accent-600">🎨</div>
              <div className="text-sm text-neutral-600">Custom Colors</div>
            </div>
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-2xl font-mono font-bold text-neutral-600">✨</div>
              <div className="text-sm text-neutral-600">Gradients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
