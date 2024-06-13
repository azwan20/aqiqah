import Navbar from "./navbar";

export default function Salam() {
    return (
        <>
            <div className="salam">
                <section>
                    <img className="imgStat" src="/imgLogo.png" />
                </section>
                <section className="pb-0 mb-3">
                    <h3>AKAD NIKAH</h3>
                    <p>Minggu, 02 Juni 2024</p>
                    <p>Pukul 18:00</p>
                    <p>Jl. Perintis Kemerdekaan No. 9, Makassar</p>
                </section>
                <section className="pt-0 mt-5">
                    <h3>RESEPSI</h3>
                    <p>Selasa, 04 Juni 2024</p>
                    <p>Pukul 08:00</p>
                    <p>Gammara Hotal Lt. 2</p>
                </section>
                <section className="d-flex gap-2 mt-3">
                    <div>00 <br /> Hari</div>
                    <div>00 <br /> Jam</div>
                    <div>00 <br /> MENIT</div>
                    <div>00 <br /> DETIK</div>
                </section>
            </div>
        </>
    )
}