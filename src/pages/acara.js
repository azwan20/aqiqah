export default function Acara() {
    return (
        <>
            <div className="acara">
                <img data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="mx-auto mb-3" src="/ikon.png" width={80} />
                <h5 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="text-black my-4">ACARA</h5>
                <span data-aos="fade-up"
                    data-aos-duration="3000" className="my-4">
                    <p>Senin, 08 Juli 2024</p>
                    <p>08:00 - Selesai</p>
                    <p>Jl. Poros ambon maluku,</p>
                    <p>Aambon, maluku</p>
                    <p>Nusa Tenggara Barat</p>
                </span>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="d-flex justify-content-between">
                    <section>
                        <p>00</p>
                        <p>HARI</p>
                    </section>
                    <section>
                        <p>00</p>
                        <p>JAM</p>
                    </section>
                    <section>
                        <p>00</p>
                        <p>MENIT</p>
                    </section>
                    <section>
                        <p>00</p>
                        <p>DETIK</p>
                    </section>
                </div>
            </div>
        </>
    )
}