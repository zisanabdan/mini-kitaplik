function Arama({ arama, setArama }) {
  return (
    <>
      <input
        type="text"
        placeholder="Başlık veya yazar ara..."
        value={arama}
        onChange={(e) => setArama(e.target.value)}
        className="arama-input"
      />
    </>
  );
}

export default Arama;
