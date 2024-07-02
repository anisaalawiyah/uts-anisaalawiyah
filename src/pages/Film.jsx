import { Plus, X, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Trash2, Edit, Info, Heart } from "lucide-react"; // pastikan untuk mengimpor ikon dari lucide-react

let initialData = [
  {
    id: 1,
    Judul: "Shamza Fruy",
    Genre: "aksi",
    Durasi: "1 jam",
    tahunRilis: "2023",
    image:
      "https://hotelier.id/studi/wp-content/uploads/2023/04/Shazam-Fury-of-the-Gods.jpg",
      sinopsis: "The Meg menceritakan pertarungan antara manusia dan hewan misterius berukuran raksasa dari bawah lautSinopsis Film The Meg, Misi Penyelamatan Ilmuwan dari Ganasnya Megalodon"
    },
  {
    id: 2,
    Judul: "The big 4",
    Genre: "aksi",
    Durasi: "2 jam",
    tahunRilis: "2023",
    image:
      "https://hotelier.id/studi/wp-content/uploads/2023/04/The-Big-4.jpg",
      sinopsis: "The Meg menceritakan pertarungan antara manusia dan hewan misterius berukuran raksasa dari bawah lautSinopsis Film The Meg, Misi Penyelamatan Ilmuwan dari Ganasnya Megalodon"
    },
  {
    id: 3,
    Judul: "Megan",
    Genre: "Horor",
    Durasi: "2 jam",
    tahunRilis: "2022",
    image:
      "https://hotelier.id/studi/wp-content/uploads/2023/04/M3GAN.jpeg",
    sinopsis: "The Meg menceritakan pertarungan antara manusia dan hewan misterius berukuran raksasa dari bawah lautSinopsis Film The Meg, Misi Penyelamatan Ilmuwan dari Ganasnya Megalodon"
  },         



  {
    id: 4,
    Judul: "Nope",
    Genre: "Horor",
    Durasi: "2 jam",
    tahunRilis: "2022",
    image:
      "https://hotelier.id/studi/wp-content/uploads/2023/04/Nope.jpg",
      sinopsis: "The Meg menceritakan pertarungan antara manusia dan hewan misterius berukuran raksasa dari bawah lautSinopsis Film The Meg, Misi Penyelamatan Ilmuwan dari Ganasnya Megalodon"
    },
];

export default function Film() {
  const [Films, setFilms] = useState(
    localStorage.getItem("F")
      ? JSON.parse(localStorage.getItem("F"))
      : initialData
  );
  const [update, setUpdate] = useState(null);
  const [addFilms, setAddFilms] = useState({ Judul: "", Genre: "", Durasi: "", tahunRilis: "", image: "", sinopsis: "" });
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [isAddFilmModalOpen, setIsAddFilmModalOpen] = useState(false);
  const [likedFilms, setLikedFilms] = useState([]); 
  const [filterGenre, setFilterGenre] = useState("All");


  useEffect(() => {
    localStorage.setItem("F", JSON.stringify(Films));
  }, [Films]);

  const filterData = Films
  .sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortBy] < b[sortBy] ? -1 : 1;
    } else {
      return a[sortBy] > b[sortBy] ? -1 : 1;
    }
  })
  .filter((i) => {
    return (
      i.Judul.toLowerCase().includes(search.toLowerCase()) &&
      (filterGenre === "All" || i.Genre === filterGenre)
    );
  });

   

  function handleAdd(e) {
    e.preventDefault();
    setFilms([
      ...Films,
      {
        id: Films.length + 1,
        Judul: addFilms.Judul,
        Genre: addFilms.Genre,
        Durasi: addFilms.Durasi,
        tahunRilis: addFilms.tahunRilis,
        image: addFilms.image,
        sinopsis: addFilms.sinopsis,
      },
    ]);
    setAddFilms({ Judul: "", Genre: "", Durasi: "", tahunRilis: "", image: "", sinopsis: "" });
    setIsAddFilmModalOpen(false);
  }

  function handleUpdate() {
    setFilms(Films.map((f) => (f.id !== update.id ? f : update)));
    setUpdate(null);
  }

  function handleDelete(id) {
    if (window.confirm("Apakah anda yakin ingin menghapusnya?")) {
      setFilms(Films.filter((s) => s.id !== id));
    }
  }

  const handleClick = (film) => {
    alert(`Judul: ${film.Judul}\nGenre: ${film.Genre}\nDurasi: ${film.Durasi}\nTahun Rilis: ${film.tahunRilis}\nSinopsis:${film.sinopsis}`);
  };

  const handleLike = (id) => {
    setLikedFilms((prevLikedFilms) => {
      if (prevLikedFilms.includes(id)) {
        return prevLikedFilms.filter((likedId) => likedId !== id);
      } else {
        return [...prevLikedFilms, id];
      }
    });
  };
  const handleFilterChange = (e) => {
    setFilterGenre(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-10 m-4">
      <header className="mb-4 flex justify-between items-center">
        <div className="relative flex items-center w-full">
          <input
            type="text"
            placeholder="Cari film..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
            <Search />
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <label htmlFor="sortBy" className="text-lg font-bold">
          </label>
          <div className="flex items-center space-x-2">
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="id">Normal</option>
              <option value="Judul">Judul</option>
              <option value="tahunRilis">Tahun Rilis</option>
            </select>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            <div className="flex items-center space-x-6">
          <label htmlFor="filterGenre" className="text-lg font-bold">
          </label>
          <select
            id="filterGenre"
            value={filterGenre}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="All">Semua</option>
            <option value="horor">horor</option>
            <option value="aksi">aksi</option>
          </select>
        </div>
          </div>
        </div>
        <button
          onClick={() => setIsAddFilmModalOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600"
        >
          <Plus />
        </button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterData.map((p) => (
          <div key={p.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex items-center justify-center h-48">
              <img src={p.image} alt={p.Judul} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col justify-between">
              <div>
                <p className="text-lg font-bold mb-2">{p.Judul}</p>
                <p className="text-gray-600">{p.tahunRilis}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-3 items-center">
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-red-600 hover:text-red-800 transition duration-400 ease-in-out transform hover:scale-110"
                    title="Delete"
                  >
                    <Trash2 className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setUpdate(p)}
                    className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-110"
                    title="Edit"
                  >
                    <Edit className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleClick(p)}
                    className="text-yellow-600 hover:text-yellow-800 transition duration-300 ease-in-out transform hover:scale-110"
                    title="Message"
                  >
                    <Info className="w-6 h-6" />
                  </button>
                  <button
  onClick={() => handleLike(p.id)}
  className={`transition duration-300 ease-in-out transform hover:scale-110 ${
    likedFilms.includes(p.id)
      ? "bg-red-600 text-white"
      : "bg-white text-pink-600 hover:text-pink-800"
  } rounded-full p-2`}
  title="Like"
>
  <Heart className="w-6 h-6" />
</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {update && (
      <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate();
      }}
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
    >
      <div className="bg-white p-6 rounded shadow-lg w-1/3 relative">
        <button
          onClick={() => setUpdate(null)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X />
        </button>
        <h2 className="text-lg font-bold mb-4">Update Film</h2>
        <div className="mb-2 flex items-center">
          <label htmlFor="updateJudul" className="block text-sm font-bold mb-1 mr-2">
            Judul:
          </label>
          <input
            type="text"
            id="updateJudul"
            value={update.Judul}
            onChange={(e) => setUpdate({ ...update, Judul: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-2 flex items-center">
          <label htmlFor="updateGenre" className="block text-sm font-bold mb-1 mr-2">
            Genre:
          </label>
          <input
            type="text"
            id="updateGenre"
            value={update.Genre}
            onChange={(e) => setUpdate({ ...update, Genre: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-2 flex items-center">
          <label htmlFor="updateDurasi" className="block text-sm font-bold mb-1 mr-2">
            Durasi:
          </label>
          <input
            type="text"
            id="updateDurasi"
            value={update.Durasi}
            onChange={(e) => setUpdate({ ...update, Durasi: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-2 flex items-center">
          <label htmlFor="updateTahunRilis" className="block text-sm font-bold mb-1 mr-2">
            TahunRilis:
          </label>
          <input
            type="text"
            id="updateTahunRilis"
            value={update.tahunRilis}
            onChange={(e) => setUpdate({ ...update, tahunRilis: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-2 flex items-center">
          <label htmlFor="updateImage" className="block text-sm font-bold mb-1 mr-2">
            Gambar:
          </label>
          <input
            type="url"
            id="updateImage"
            value={update.image}
            onChange={(e) => setUpdate({ ...update, image: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-2 flex items-center">
          <label htmlFor="updateSinopsis" className="block text-sm font-bold mb-1 mr-2">
            Sinopsis:
          </label>
          <textarea
            id="updateSinopsis"
            value={update.sinopsis}
            onChange={(e) => setUpdate({ ...update, sinopsis: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-600"
        >
          Update
        </button>
      </div>
    </form>
    
      )}

{isAddFilmModalOpen && (
  <form
    onSubmit={handleAdd}
    className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
  >
    <div className="bg-white p-6 rounded shadow-lg w-1/3 relative">
      <button
        onClick={() => setIsAddFilmModalOpen(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <X />
      </button>
      <h2 className="text-lg font-bold mb-4">Tambah Film Baru</h2>
      <div className="mb-2 flex items-center">
        <label htmlFor="newJudul" className="block text-sm font-bold mb-1 mr-2">
          Judul:
        </label>
        <input
          type="text"
          id="newJudul"
          value={addFilms.Judul}
          onChange={(e) => setAddFilms({ ...addFilms, Judul: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-2 flex items-center">
        <label htmlFor="newGenre" className="block text-sm font-bold mb-1 mr-2">
          Genre:
        </label>
        <input
          type="text"
          id="newGenre"
          value={addFilms.Genre}
          onChange={(e) => setAddFilms({ ...addFilms, Genre: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-2 flex items-center">
        <label htmlFor="newDurasi" className="block text-sm font-bold mb-1 mr-2">
          Durasi:
        </label>
        <input
          type="text"
          id="newDurasi"
          value={addFilms.Durasi}
          onChange={(e) => setAddFilms({ ...addFilms, Durasi: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-2 flex items-center">
        <label htmlFor="newTahunRilis" className="block text-sm font-bold mb-1 mr-2">
          Tahun Rilis:
        </label>
        <input
          type="text"
          id="newTahunRilis"
          value={addFilms.tahunRilis}
          onChange={(e) => setAddFilms({ ...addFilms, tahunRilis: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-2 flex items-center">
        <label htmlFor="newImage" className="block text-sm font-bold mb-1 mr-2">
          Gambar URL:
        </label>
        <input
          type="url"
          id="newImage"
          value={addFilms.image}
          onChange={(e) => setAddFilms({ ...addFilms, image: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-2 flex items-center">
        <label htmlFor="newSinopsis" className="block text-sm font-bold mb-1 mr-2">
          Sinopsis:
        </label>
        <textarea
          id="newSinopsis"
          value={addFilms.sinopsis}
          onChange={(e) => setAddFilms({ ...addFilms, sinopsis: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-600"
      >
        Tambah
      </button>
    </div>
  </form>
)}

    
    </div>
  );
}