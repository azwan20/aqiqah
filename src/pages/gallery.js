export default function Gallery() {
    return (
        <>
            <div className="gallery">
                <section>
                    <img className="imgStat" src="/imgLogo.png" />
                </section>
                <section>
                    <h3>Our Gallery</h3>
                </section>
                <section className="d-flex px-4 py-2 gap-3 ">
                    {[0, 1, 2].map((index) => (
                        <div key={index}></div>
                    ))}
                </section>
                <section className="d-flex px-4 py-2 gap-3 ">
                    {[0, 1, 2].map((index) => (
                        <div key={index}></div>
                    ))}
                </section>
                <section className="d-flex px-4 py-2 gap-3 ">
                    {[0, 1, 2].map((index) => (
                        <div key={index}></div>
                    ))}
                </section>
            </div>
        </>
    )
}