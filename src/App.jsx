import React, { useState, useEffect } from "react";
import "./App.css";
import Arama from "./Arama";
import Liste from "./Liste";

function App() {
  const kitaplar = [
    { id: 1, baslik: "Yüzüklerin Efendisi", yazar: "J.R.R. Tolkien", kategori: "Fantastik" },
    { id: 2, baslik: "Sherlock Holmes", yazar: "Arthur Conan Doyle", kategori: "Polisiye" },
    { id: 3, baslik: "Bülbülü Öldürmek", yazar: "Harper Lee", kategori: "Roman" },
    { id: 4, baslik: "Uçurtma Avcısı", yazar: "Khaled Hosseini", kategori: "Dram" },
    { id: 5, baslik: "Notre Dame’ın Kamburu", yazar: "Victor Hugo", kategori: "Klasik" },
    { id: 6, baslik: "Medyum", yazar: "Stephen King", kategori: "Korku" },
    { id: 7, baslik: "İncognito", yazar: "David Eagleman", kategori: "Bilim" },
    { id: 8, baslik: "Beyin", yazar: "David Eagleman", kategori: "Bilim" },
    { id: 9, baslik: "Yaratıcı Tür", yazar: "David Eagleman & Anthony Brandt", kategori: "Bilim" },
    { id: 10, baslik: "Sapiens", yazar: "Yuval Noah Harari", kategori: "Bilim" },
    { id: 11, baslik: "İnsan Ne İle Yaşar", yazar: "Lev Tolstoy", kategori: "Klasik" },
    { id: 12, baslik: "Martin Eden", yazar: "Jack London", kategori: "Roman" },
    { id: 13, baslik: "Satranç", yazar: "Stefan Zweig", kategori: "Klasik" },
    { id: 14, baslik: "İstanbul Hatırası", yazar: "Ahmet Ümit", kategori: "Polisiye" },
    { id: 15, baslik: "Doğu Ekspresinde Cinayet", yazar: "Agatha Christie", kategori: "Polisiye" },
  ];

  const [arama, setArama] = useState("");
  const [kategori, setKategori] = useState("Tümü");
  const [favoriler, setFavoriler] = useState(
    JSON.parse(localStorage.getItem("favoriler")) || []
  );

  useEffect(() => {
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
  }, [favoriler]);

  const handleFavori = (kitap) => {
    if (favoriler.find((f) => f.id === kitap.id)) {
      setFavoriler(favoriler.filter((f) => f.id !== kitap.id));
    } else {
      setFavoriler([...favoriler, kitap]);
    }
  };

  const filtreliKitaplar = kitaplar.filter((k) => {
    const kategoriUygun = kategori === "Tümü" || k.kategori === kategori;
    const aramaUygun =
      k.baslik.toLowerCase().includes(arama.toLowerCase()) ||
      k.yazar.toLowerCase().includes(arama.toLowerCase());
    return kategoriUygun && aramaUygun;
  });

  return (
    <>
      <h1 className="baslik">📚 Mini Kitaplık</h1>

      <>
        <Arama arama={arama} setArama={setArama} />
        <select
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          className="dropdown"
        >
          <option>Tümü</option>
          <option>Roman</option>
          <option>Dram</option>
          <option>Klasik</option>
          <option>Fantastik</option>
          <option>Polisiye</option>
          <option>Korku</option>
          <option>Bilim</option>
        </select>
      </>

      <hr />

      <>
        <Liste
          kitaplar={filtreliKitaplar}
          favoriler={favoriler}
          handleFavori={handleFavori}
        />

        <section className="favoriler">
          <h3>💗 Favoriler ({favoriler.length})</h3>
          <ul>
            {favoriler.map((f) => (
              <li key={f.id}>
                {f.baslik}
                <button onClick={() => handleFavori(f)}>Kaldır</button>
              </li>
            ))}
          </ul>
        </section>
      </>
    </>
  );
}

export default App;
