import { Link } from "react-router-dom";
import Slider from "react-slick";

function Hero() {

  const slides = [
    {
      id: 1,
      image: "/hero-section-image/m2.jpg",
      title: "Fresh From the Farm",
      subtitle: "Pure milk, directly from happy cows",
      buttonText: "Shop Now",
      link: "/products",
    },
    {
      id: 2,
      image: "/hero-section-image/m3.jpg",
      title: "Goodness in Every Drop",
      subtitle: "Nutritious & natural dairy products",
      buttonText: "Explore",
      link: "/about",
    },
    {
      id: 3,
      image: "/hero-section-image/m5.jpg",
      title: "Tradition Meets Purity",
      subtitle: "Crafted with care for your family",
      buttonText: "Our Story",
      link: "/about",
    },
    {
      id: 4,
      image: "/hero-section-image/milk.jpg",
      title: "Nature’s Richness",
      subtitle: "Experience dairy the natural way",
      buttonText: "Get Started",
      link: "/contact",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  };

  return (
     <div className="relative w-full h-[calc(100vh-80px)]"> 
      {/* Adjust 80px if navbar height differs */}
      <Slider {...settings} className="h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[calc(100vh-80px)]">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">
              <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg font-serif text-yellow-300">
                {slide.title}
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-gray-100 max-w-2xl">
                {slide.subtitle}
              </p>
              <Link
                to={slide.link}
                className="mt-6 px-8 py-3 bg-green-600 hover:bg-green-700 transition rounded-full font-semibold shadow-lg"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Hero;
