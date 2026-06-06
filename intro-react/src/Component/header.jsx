const Header = ({ setPage, page }) => {
  return (
    <header className="flex items-center justify-between py-4 px-8">
      <h1 className="text-3xl font-bold text-blue-600">Brandku</h1>
      <nav className="flex items-center gap-8">
        <button 
          onClick={() => setPage('beranda')} 
          className={`text-gray-700 hover:text-blue-600 transition-colors ${page === 'beranda' ? 'text-blue-600 font-bold' : ''}`}
        >
          Beranda
        </button>
        <button 
          onClick={() => setPage('produk')} 
          className={`text-gray-700 hover:text-blue-600 transition-colors ${page === 'produk' ? 'text-blue-600 font-bold' : ''}`}
        >
          Produk
        </button>
        <button 
          onClick={() => setPage('harga')} 
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Harga
        </button>
      </nav>
    </header>
  );
};

export default Header;