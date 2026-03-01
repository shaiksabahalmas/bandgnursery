import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../assets/gallery1.webp";
import img2 from "../assets/gallery2.webp";
import img3 from "../assets/gallery3.webp";
import img4 from "../assets/gallery4.webp";
import img5 from "../assets/gallery5.webp";
import img6 from "../assets/gallery6.webp";

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="bg-neutral-background min-h-screen flex items-center py-16">
      <div className="max-w-6xl mx-auto w-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4">
          📸 Our Gallery
        </h1>
        <p className="text-lg text-neutral-text mb-12 max-w-3xl mx-auto">
          Peek into our world of laughter, play, and creativity at Kindle Kids Nursery.
        </p>

        <div className="mx-auto w-full max-w-4xl relative">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="rounded-2xl shadow-lg"
            style={{ maxHeight: "550px" }}
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="aspect-[16/9] max-h-[550px] relative">
                  <img
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover rounded-2xl block"
                  />

                  {/* Optional overlay gradient for better button visibility */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black/20 to-black/10 pointer-events-none"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Swiper navigation buttons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-3 pointer-events-none">
            <button className="swiper-button-prev bg-white/90 text-primary-dark w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-white/100 pointer-events-auto transition">
              ◀
            </button>
            <button className="swiper-button-next bg-white/90 text-primary-dark w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-white/100 pointer-events-auto transition">
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
