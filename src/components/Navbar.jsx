import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Sescotur Logo" className="h-18" />
          <div className="flex space-x-6">
            <a href="#" className="text-green-700 hover:text-green-600">Inicio</a>
            <a href="#" className="text-green-700 hover:text-green-600">Servicios</a>
            <a href="#" className="text-green-700 hover:text-green-600">Nosotros</a>
            <a href="#" className="text-green-700 hover:text-green-600">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar