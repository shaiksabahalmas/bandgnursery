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
    <div className="bg-brand-soft min-h-screen">

      {/* HERO */}
      <section className="relative bg-brand-hero text-white pt-24 pb-32 px-6 text-center"> 

        <div className="max-w-4xl mx-auto">

          <h1 className="font-heading text-5xl mb-4">
            Our Gallery
          </h1>

          <p className="font-body text-lg opacity-80">
            A glimpse into joyful moments, creativity, and everyday learning
            experiences at Kindle Kids.
          </p>

        </div>

        {/* Wave divider */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 320">
            <path
              fill="#F4EFE6"
              d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,197.3C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,320L0,320Z"
            ></path>
          </svg>
        </div>

      </section>



      {/* GALLERY SLIDER */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="font-heading text-4xl text-brand-dark mb-6">
            Moments of Joy & Learning
          </h2>

          <p className="font-body text-brand-warm max-w-2xl mx-auto mb-16">
            Our nursery is filled with laughter, discovery, and creativity.
            Here are some beautiful moments from our classrooms and play areas.
          </p>


          {/* Swiper */}
          <div className="relative max-w-4xl mx-auto">

            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              className="rounded-2xl shadow-2xl"
            >

              {images.map((src, idx) => (

                <SwiperSlide key={idx}>

                  <div className="aspect-[16/9] relative">

                    <img
                      src={src}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />

                    {/* soft overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-black/10"></div>

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>

          </div>

        </div>

      </section>

    </div>
  );
}