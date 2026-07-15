export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-sm text-white uppercase border-b border-white/10">
      <div className="max-w-375 mx-auto px-6 md:px-16 lg:px-24 h-20 flex items-center justify-between">
        <div className="flex flex-row items-center gap-4 text-4xl font-black tracking-wider cursor-pointer">
          <span>Márcio Simioni</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <li className="cursor-pointer hover:text-orange-500 transition-colors">
            <a href="#">Início</a>
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors">
            <a href="#empresas">Para Empresas</a>
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors">
            Sobre
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors">
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
