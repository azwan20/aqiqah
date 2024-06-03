export default function Maps() {
    return (
        <>
            <div className="maps">
                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="mx-auto mb-3" src="/ikon.png" width={80} />
                <section data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" style={{ display: 'flex', height: '40%', width: '100%' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.66469871444!2d119.40186047525785!3d-5.157540652112246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf1d4363e11805%3A0x12c787d64976dbed!2sGammara%20Hotel%20Makassar!5e0!3m2!1sid!2sid!4v1717410255424!5m2!1sid!2sid"
                        style={{ border: '0', flex: '1 1 0%', borderRadius: '10px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </section>

                <span data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
                    <p>Gedung Abracadabra</p>
                    <p>Lt. 2 Balroom</p>
                    <p>Jl. Serigala No. 13</p>
                </span>
            </div>
        </>
    )
}