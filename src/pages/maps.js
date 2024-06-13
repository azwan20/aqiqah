import Link from "next/link";
import Navbar from "./navbar";

export default function Maps() {
    return (
        <>
            <div className="maps">
                <section className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.592886112729!2d119.43022507466058!3d-5.1689998948083815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee2b66bf04dbb%3A0x1fed8c8d21d796ce!2sCLARO%20HOTEL%20MAKASSAR!5e0!3m2!1sid!2sid!4v1718272108004!5m2!1sid!2sid"
                        style={{ border: '0', flex: '1 1 0%', borderRadius: '10px', width: '-webkit-fill-available', height: '-webkit-fill-available' }}
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>
                <section>
                    <p>Hotel Amsterdam</p>
                    <p>Jl. Jendral Sudirman, No. 10</p>
                    <p>Ambon, Maluku</p>
                </section>
                <Link href="https://maps.app.goo.gl/jXpHTxpWjjzeAfa98">
                    <button>Petunjuk Lokasi</button>
                </Link>

            </div>
        </>
    )
}