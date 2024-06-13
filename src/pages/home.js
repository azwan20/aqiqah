export default function Homes({ handleNavbar }) {
  // const [navbar, setNavbar] = useState(false);

  // const handleNavbar = () => {
  //   setNavbar(true);
  // }
  return (
    <>
      <div className="homes">
        <h1 data-aos="zoom-out-left">Undangan Pernikahan</h1>
        <section className="nama" data-aos="zoom-in">
          <h1>Fitrah</h1>
          <h1>&</h1>
          <h1>Fitri</h1>
        </section>
        <section data-aos="zoom-out-right">
          <p>Kepada Yth.</p>
          <p>Bapak/Ibu/Saudara(i)</p>
          <h5>Azwan Triyadi, S.Kom, MCF</h5>
          <button onClick={handleNavbar}>Buka Undangan</button>
        </section>
      </div>
    </>
  );
}
