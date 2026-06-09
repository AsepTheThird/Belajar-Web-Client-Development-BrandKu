const Features = () => {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/*Kartu 1*/}
        <article className="rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="bg-blue-400 h-24 rounded-t-xl"></div>
          <div className="bg-white p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Fitur Pertama</h3>
            <p className="text-gray-600">Deskripsi fitur pertama kamu di sini...</p>
          </div>
        </article>

        {/*Kartu 2*/}
        <article className="rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="bg-blue-400 h-24 rounded-t-xl"></div>
          <div className="bg-white p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Serba Otomatis</h3>
            <p className="text-gray-600">Cepat digunakan, karena dibantu dengan AI.</p>
          </div>
        </article>

        {/*Kartu 3*/}
        <article className="rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="bg-blue-400 h-24 rounded-t-xl"></div>
          <div className="bg-white p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Laporan Real Time</h3>
            <p className="text-gray-600">Bisa melihat semua laporan, baik dari yang terkini hingga yang lama.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Features;