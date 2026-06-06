import { useState } from 'react';
import Header from "./Component/header";
import Hero from "./Component/hero";
import Features from "./Component/features";
import Footer from "./Component/footer";

const App = () => {
  const [page, setPage] = useState('beranda');

  return (
    <>
      {/*Header*/}
      <Header setPage={setPage} page={page} />
      
      <main>
        {/*Bagian Beranda*/}
        {page === 'beranda' && (
          <>
            <Hero />
            <Features />
          </>
        )}

        {/*Bagian Produk*/}
        {page === 'produk' && (
          <section className="py-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Daftar Produk Kami</h2>
            <p className="text-gray-600">Ini adalah halaman produk khusus aplikasi BrandKu.</p>
            {}
          </section>
        )}
        
        {/*Bagian Harga*/}
        {page === 'harga' && (
          <section className="py-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Paket Harga</h2>
            <p className="text-gray-600">Pilih paket yang paling sesuai dengan kebutuhan kamu.</p>
          </section>
        )}
        </main>

      <Footer />
    </>
  );
};

export default App;