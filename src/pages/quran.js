import Navbar from "./navbar";

export default function Quran() {
    return (
        <>
            <div className="quran">
                <img src="https://akcdn.detik.net.id/community/media/visual/2020/03/17/2dea2ce0-842e-467c-bb89-0bbe43eb2ef0.jpeg?q=90&w=480" width={100} />
                <div className="d-flex flex-column ms-3 px-5 justify-content-center align-items-center" style={{ paddingTop: '300px' }}>
                    <section className="mb-3">
                        <p className="fw-bold lh-lg">Baarokalaahu laka wabaaroka 'alaika wajama'a bainakumaa fii khoirin.</p>
                    </section>
                    <section>
                        <p>Artinya: "Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, dan semoga Allah menyatukan kalian dalam kebaikan."</p>
                    </section>
                </div>
            </div>
        </>
    )
}