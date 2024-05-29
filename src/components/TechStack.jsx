const techStackImages = [
  "./images/html.png",
  "./images/css.png",
  "./images/php.png",
  "./images/laravel.png",
  "./images/js.png",
  "./images/jquery.png",
  "./images/react.png",
  "./images/vue.png",
  "./images/bs.png",
  "./images/tailwind.png",
  "./images/github.png",
  "./images/mysql.png",
  "./images/wp.png",
  "./images/elementor.png",
  "./images/npm.png",
  "./images/composer.png",
  "./images/vite.png",
  "./images/seo.jpg",
];

const TechStack = () => {
  return (
    <section className="lg:p-24 sm:p-12 flex justify-center items-center mb-2 sm:mb-8">
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl">
          <div className="flex flex-col gap-8 max-w-6xl w-full">
            <h6 className="text-lg md:text-xl text-gray-400 text-center">
              Current Tech Stack
            </h6>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
              {techStackImages.map((image, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center border border-white rounded-md p-4 bg-white hover:scale-105 transition transform ease-in-out"
                >
                  <img
                    src={image}
                    alt={`Image + ${i}`}
                    className="h-16 md:h-20 lg:h-24"
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

export default TechStack;
