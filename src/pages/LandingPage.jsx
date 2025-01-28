import Navbar from '../components/Navbar'

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section más compacta */}
      <div className="relative bg-gradient-to-b from-green-50 to-white">
        <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-green-800 leading-tight">
                Servicios Especiales, Colectivos y Turísticos
              </h1>
              <p className="text-lg text-gray-600">
                Brindamos servicios de transporte de calidad, seguros y confiables para todas tus necesidades.
              </p>
              <div className="flex gap-4 pt-2">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300">
                  ¡Reserva Ahora!
                </button>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold py-2 px-6 rounded-full shadow-lg transition duration-300">
                  Contáctanos
                </button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -inset-2 bg-green-600/10 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Imagen de fondo"
                className="relative rounded-xl shadow-xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section más compacto */}
      <div className="py-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Servicio Rápido</h3>
              <p className="text-gray-600">Puntualidad y eficiencia garantizada en cada servicio</p>
            </div>

            {/* Feature 2 */}
            <div className="group p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Seguridad Total</h3>
              <p className="text-gray-600">Tu seguridad es nuestra máxima prioridad</p>
            </div>

            {/* Feature 3 */}
            <div className="group p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">Experiencia y confort excepcional</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage