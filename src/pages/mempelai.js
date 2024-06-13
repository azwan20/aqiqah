import Navbar from "./navbar";

export default function Mempelai() {
    return (
        <>
            <div className="mempelai">
            <section>
                <img className="imgStat" src="/imgLogo.png" />
            </section>
                <section>
                    <div className="image">
                        <img src="https://i.pinimg.com/736x/21/49/bc/2149bcf949adaf0121f4fe6ccad6cd84.jpg" />
                    </div>
                    <h3 style={{ fontSize: '24px' }}>Muh. Fitrah Asfar, S.Kom, M.TA</h3>
                    <p>Putra Bapak Ir. Abdullah Asfar & ibu Hamidah, S.Kes</p>
                </section>
                <section>
                    <h3 className="my-3">&</h3>
                </section>
                <section>
                    <h3 style={{ fontSize: '24px' }}>Sitti Fitri Nur Anjani, S.Far</h3>
                    <p>Putra Bapak Dr. Ilham & ibu Zulaika, SH</p>
                    <div className="image">
                        <img src="https://vncojewellery.com/artikel/wp-content/uploads/2023/10/Eddy-Betty-1.jpg" />
                    </div>
                </section>
            </div>
        </>
    )
}