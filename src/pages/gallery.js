import { useState } from "react"

export default function Gallery() {

    const [hide, setHide] = useState(false);

    const handleHide = () => {
        setHide(!hide);
    }

    return (
        <>
            <div className={`gallery d-flex justify-content-evenly flex-column ${hide ? "padding" : ""}`}>
                <img data-aos="fade-up" className="mx-auto mb-3" src="/ikon.png" width={80} />
                <h5 data-aos-anchor-placement="bottom-bottom" className="mt-2 mb-5">GALLERY, UCAPAN & DOA</h5>
                <span className="d-flex" style={{ width: '100%' }}>
                    <span className="me-2" style={{ width: '100%' }}>
                        <section data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"></section>
                        <section data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"></section>
                        <section data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"></section>
                        <section data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"></section>
                    </span>
                    <span className="" style={{ width: '100%' }}>
                        <section data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500" style={{ height: '125px' }}></section>
                        <section data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500" style={{ height: '125px' }}></section>
                    </span>
                </span>
                <span>
                    <section data-aos="fade-up"
                        data-aos-duration="3000"></section>
                </span>
                <button data-aos="fade-up"
                    data-aos-duration="3000" onClick={handleHide}>Kirim Ucapan</button>
                {hide && (
                    <div className="greet">
                        <div className="inputUcapan mb-5">
                            <div>
                                <section data-aos="fade-up" className="mb-2">
                                    <div className="d-flex justify-content-between">
                                        <p>Azwan :</p>
                                        <button>Hadir</button>
                                    </div>
                                    <span>
                                        <p style={{ fontSize: '13px' }}>Selamat, smoga Sakinah mawaddatan Marahmah</p>
                                        <p style={{ fontSize: '10px', color: '#581D35' }}>Mei, 27 2024 10:19</p>
                                    </span>
                                </section>
                                <section data-aos="fade-up">
                                    <div className="d-flex justify-content-between">
                                        <p>Azwan :</p>
                                        <button>Hadir</button>
                                    </div>
                                    <span>
                                        <p style={{ fontSize: '13px' }}>Selamat, smoga Sakinah mawaddatan Marahmah</p>
                                        <p style={{ fontSize: '10px', color: '#581D35' }}>Mei, 27 2024 10:19</p>
                                    </span>
                                </section>
                            </div>
                            <section data-aos="fade-up" className="inputan d-flex" style={{ flexDirection: 'column' }}>
                                <h5 style={{ margin: 'auto' }}>Form Ucapan</h5>
                                <input type="text" placeholder="Nama tamu" />
                                <select>
                                    <option value="">Kehadiran</option>
                                    <option value="Hadir">Hadir</option>
                                    <option value="Tidak Hadir">Tidak Hadir</option>
                                </select>
                                <textarea placeholder="Komentar / ucapan"></textarea>
                            </section>
                        </div>
                        <svg onClick={handleHide} width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.75 31.875L22.5 25.125L29.25 31.875L31.875 29.25L25.125 22.5L31.875 15.75L29.25 13.125L22.5 19.875L15.75 13.125L13.125 15.75L19.875 22.5L13.125 29.25L15.75 31.875ZM22.5 41.25C19.9063 41.25 17.4688 40.7575 15.1875 39.7725C12.9063 38.7875 10.9219 37.4519 9.23438 35.7656C7.54688 34.0794 6.21125 32.095 5.2275 29.8125C4.24375 27.53 3.75125 25.0925 3.75 22.5C3.74875 19.9075 4.24125 17.47 5.2275 15.1875C6.21375 12.905 7.54938 10.9206 9.23438 9.23438C10.9194 7.54813 12.9038 6.2125 15.1875 5.2275C17.4713 4.2425 19.9088 3.75 22.5 3.75C25.0913 3.75 27.5288 4.2425 29.8125 5.2275C32.0963 6.2125 34.0806 7.54813 35.7656 9.23438C37.4506 10.9206 38.7869 12.905 39.7744 15.1875C40.7619 17.47 41.2538 19.9075 41.25 22.5C41.2463 25.0925 40.7538 27.53 39.7725 29.8125C38.7913 32.095 37.4556 34.0794 35.7656 35.7656C34.0756 37.4519 32.0913 38.7881 29.8125 39.7744C27.5338 40.7606 25.0963 41.2525 22.5 41.25Z" fill="#581D35" />
                        </svg>

                    </div>
                )}
            </div>
        </>
    )
}