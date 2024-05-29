const images = [
  "./images/laravel.png",
  "./images/react.png",
  "./images/vue.png",
  "./images/mysql.png",
  "./images/tailwind.png",
];

const Hero = () => {
  return (
    <section className="lg:p-24 sm:p-12 flex justify-center items-center">
      <div className="flex justify-center max-w-6xl">
        <div className="flex flex-col items-center lg:flex-row gap-8 p-8 max-w-6xl">
          <div className="flex items-center justify-center lg:justify-start flex-shrink-0">
            <div className="w-72 h-96 flex items-center justify-center">
              <img
                src="./images/rj.jpg"
                alt="Profile Picture"
                className="object-cover rounded-full max-w-full max-h-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 max-w-xl text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Reinald John Vibar
            </h1>
            <h2 className="text-lg md:text-xl font-bold">
              Full Stack PHP Developer
            </h2>
            <p className="text-sm md:text-md lg:text-lg sm:text-center lg:text-start leading-relaxed">
              Experienced with Laravel, ReactJS, PHP, MySQL, TailwindCSS,
              Bootstrap, and WordPress (Elementor), I am a full stack web
              developer. My focus is on creating dynamic online apps that
              prioritize functionality and user experience, and I have
              experience with both front-end and back-end programming.
            </p>
            <div className="flex justify-start sm:items-center lg:items-start">
              {images.map((image, index) => (
                <div
                  className="flex justify-center items-center p-2 hover:scale-105 transition transform ease-in-out"
                  key={index}
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
