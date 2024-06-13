import { useState } from "react";
import Navbar from "./navbar";

export default function Gift() {
    const [hide, setHide] = useState(false);

    const handleHide = () => {
        setHide(!hide);
    }
    return (
        <>
            <div className="gift">
                <section className="d-flex w-100 align-items-center">
                    <img className="imgStat" src="/imgLogo.png" />
                </section>
                <section>
                    <h4 className="mb-5" style={{color: '#0C359E'}}>Terima Kasih</h4>
                    <p className="fw-bolder">Nikah adalah sunnahku (tuntunanku). Maka barang siapa yang tidak suka dengan sunnahku (itu) bukanlah dia dari golonganku”. <br /> <br /> (HR. Ibnu Majah)</p>
                    <button onClick={handleHide} style={{ margin: '50px auto' }}>Kirim Ucapan</button>
                </section>
            </div>
            {hide && (
                <div className="containInput flex-column">
                    <section className="inputUcapan">
                        <div>
                            <section className="mb-2">
                                <div className="d-flex justify-content-between">
                                    <p>Azwan :</p>
                                    <button>Hadir</button>
                                </div>
                                <span>
                                    <p style={{ fontSize: '13px' }}>Selamat, smoga Sakinah mawaddatan Marahmah</p>
                                    <p style={{ fontSize: '10px', color: '#581D35' }}>Mei, 27 2024 10:19</p>
                                </span>
                            </section>
                            <section>
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
                        <section className="inputan d-flex" style={{ flexDirection: 'column' }}>
                            <h5 style={{ margin: 'auto' }}>Form Ucapan</h5>
                            <input type="text" placeholder="Nama tamu" />
                            <select>
                                <option value="">Kehadiran</option>
                                <option value="Hadir">Hadir</option>
                                <option value="Tidak Hadir">Tidak Hadir</option>
                            </select>
                            <textarea placeholder="Komentar / ucapan"></textarea>
                        </section>
                    </section>
                    <section className="mt-5">
                        <svg onClick={handleHide} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 35.4167L25 27.9167L32.5 35.4167L35.4167 32.5001L27.9167 25.0001L35.4167 17.5001L32.5 14.5834L25 22.0834L17.5 14.5834L14.5833 17.5001L22.0833 25.0001L14.5833 32.5001L17.5 35.4167ZM25 45.8334C22.118 45.8334 19.4097 45.2862 16.875 44.1917C14.3403 43.0973 12.1354 41.6133 10.2604 39.7397C8.38541 37.8661 6.90138 35.6612 5.80833 33.1251C4.71527 30.589 4.16805 27.8806 4.16666 25.0001C4.16527 22.1195 4.71249 19.4112 5.80833 16.8751C6.90416 14.339 8.38819 12.1341 10.2604 10.2605C12.1326 8.38689 14.3375 6.90286 16.875 5.80841C19.4125 4.71397 22.1208 4.16675 25 4.16675C27.8792 4.16675 30.5875 4.71397 33.125 5.80841C35.6625 6.90286 37.8674 8.38689 39.7396 10.2605C41.6118 12.1341 43.0965 14.339 44.1937 16.8751C45.291 19.4112 45.8375 22.1195 45.8333 25.0001C45.8292 27.8806 45.2819 30.589 44.1917 33.1251C43.1014 35.6612 41.6174 37.8661 39.7396 39.7397C37.8618 41.6133 35.6569 43.098 33.125 44.1938C30.593 45.2897 27.8847 45.8362 25 45.8334Z" fill="white" />
                        </svg>
                    </section>
                </div>
            )}
        </>
    )
}