import Yazi from "./Yazi";

function Liste({ kitaplar, favoriler, handleFavori }) {
  return (
    <>
      <ul className="liste">
        {kitaplar.map((kitap) => (
          <Yazi
            key={kitap.id}
            kitap={kitap}
            favoriler={favoriler}
            handleFavori={handleFavori}
          />
        ))}
      </ul>
    </>
  );
}

export default Liste;
