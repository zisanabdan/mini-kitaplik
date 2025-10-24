function Yazi({ kitap, favoriler, handleFavori }) {
  const favorideMi = favoriler.some((f) => f.id === kitap.id);

  return (
    <>
      <li className="kitap-karti">
        <span>
          <strong>{kitap.baslik}</strong> – {kitap.yazar} ({kitap.kategori})
        </span>
        <button
          onClick={() => handleFavori(kitap)}
          className={favorideMi ? "btn-favori" : "btn-ekle"}
        >
          {favorideMi ? "★ Favoride" : "☆ Favori Ekle"}
        </button>
      </li>
    </>
  );
}

export default Yazi;
