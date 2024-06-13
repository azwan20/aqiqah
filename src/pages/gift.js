import Navbar from "./navbar";

export default function Thanks() {
    return (
        <>
            <div className="gift my-5">
                <section className="d-flex w-100 align-items-center justify-content-center">
                    <img className="imgStat" src="/imgLogo.png" />
                </section>
                <section>
                    <h4 className="fs-1" style={{ fontWeight: '900', color: '#0C359E' }}>Terima kasih</h4>
                    <p className="px-5">Terima kasih atas partisipasi kehadiran dan hadiah anda</p>
                    <button style={{ margin: '50px auto' }}>Kirim Hadiah</button>
                </section>
                <section className="d-flex justify-content-center align-items-center">
                    <div className="rek my-auto d-flex justify-content0center flex-column align-items-center">
                        <section className="mb-4 d-flex justify-content-center align-items-center">
                            BRI
                            <span>
                                <p style={{ fontSize: '13px' }}>556677864</p>
                                <p style={{ fontSize: '10px' }}>Hilmy Nor Fauzy</p>
                            </span>
                        </section>
                        <section className="mb-2 d-flex justify-content-center align-items-center">
                            BRI
                            <span>
                                <p style={{ fontSize: '13px' }}>556677864</p>
                                <p style={{ fontSize: '10px' }}>Hilmy Nor Fauzy</p>
                            </span>
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}