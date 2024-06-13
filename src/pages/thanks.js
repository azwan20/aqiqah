import Navbar from "./navbar";

export default function Thankss() {
    const nama = [
        "Bapak Jamaluddin",
        "Ibu Maimunah ",
        "Dr. Fatahillah",
        "Ibu Hajar",
        "Keluarga Ambongi",
        "Kedua mempelai",
    ]
    return (
        <>
            <div className="px-3">
                <section className="d-flex w-100 align-items-center justify-content-center">
                    <img className="imgStat" src="/imgLogo.png" />
                </section>
                <section className="mb-5 px-2 fw-bolder">
                    <p className="fw-bolder m-0">Merupakan suatu kebahagiaan dan kehormatan apabila bapak/ibu saudara(i) berkenan untuk hadir dan memberikan do’a restu kepada kami kedua mempelai</p>
                </section>
                <section>
                    <h3 className="mb-3" style={{color: '#0C359E'}}>HORMAT  KAMI</h3>
                    <span className="my-4">
                        {nama.map((item, index) => (
                            <span key={item} className="my-0" style={{ color: '#581D35' }}>
                                <p className="my-0">{item}</p>
                            </span>
                        ))}
                    </span>
                </section>
            </div>
        </>
    )
}