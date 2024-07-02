

const Contact = () => {
  return (
    <div className=" bg-white min-h-screen flex items-center justify-center">
      <div className="bg-gradient-to-r from-sky-500 to-cyan-800  p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Contact</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Biodata</h2>
          <p className="mt-2"><strong>Nama:</strong> Anisa lawiyah</p>
          <p className="mt-2"><strong>Alamat:</strong> 1234 Elm Street, Springfield, IL 62704</p>
          <p className="mt-2"><strong>Email:</strong> anisaalawiyah814@gamil.com</p>
          <p className="mt-2"><strong>Telepon:</strong> (555) 123-4567</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Sosial Media</h2>
          <p className="mt-2"><strong>LinkedIn:</strong> <a href="#" className="text-blue-500">linkedin.com/in/johndoe</a></p>
          <p className="mt-2"><strong>GitHub:</strong> <a href="#" className="text-blue-500">github.com/johndoe</a></p>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Kirim Pesan</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
