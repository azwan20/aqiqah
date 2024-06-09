export default function Homes({handleNavbar}) {
    return(
        <>
            <div className="homes">
                <h5 className="text-uppercase grid" data-aos="flip-right">undangan tasyakuran aqiqah</h5>
                <div className="imgHome my-3" data-aos="flip-up">
                    <img src="https://www.gap.com/Asset_Archive/GPWeb/content/0030/014/459/assets/mob/SU235172_GapBaby_img_MOB.jpg" width={100} />
                </div>
                <img className="forHome" src="/forHome.png" />
                <h4 className="my-5" data-aos="flip-up">Muhammad Hilmi Nor Fauzy</h4>
                <span data-aos="flip-right">
                    <p>Kepada Yth.</p>
                    <p>Bapak/Ibu</p>
                    <h5 className="mt-4">Fitrah Asfar S.kom</h5>
                </span>
                <button onClick={handleNavbar}>Buka Undangan</button>
            </div>
        </>
    )
}
