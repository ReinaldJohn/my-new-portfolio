const AboutMe = () => {
  const handleViewCV = (e) => {
    e.preventDefault();
    // URL of your file on Dropbox
    const fileUrl =
      "https://www.dropbox.com/scl/fi/ulxbkzmebkszpujul473m/Reinald-John-Vibar-New-Resume.pdf?rlkey=by3ii2usxr7aqv8p3p68o7b6j&st=y32rxli3&dl=0";

    // Open the file URL in a new tab
    window.open(fileUrl, "_blank");
  };

  return (
    <section
      id="about"
      className="lg:p-24 sm:p-12 flex justify-center items-center"
    >
      <div className="flex justify-center w-full">
        <div className="flex flex-col lg:flex-row gap-8 p-8 max-w-6xl flex-col-reverse">
          <div className="flex flex-col justify-center sm:items-center lg:items-start gap-y-4 max-w-xl">
            <h6 className="text-lg md:text-xl text-center lg:text-left text-gray-400">
              About me
            </h6>

            <h3 className="text-2xl text-center md:text-3xl lg:text-4xl lg:text-left font-bold">
              Experienced Full Stack PHP Developer based from the Philippines
            </h3>

            <p className="text-sm text-center lg:text-left lg:text-lg leading-relaxed">
              I am a full-stack web developer skilled in Laravel, ReactJS, PHP,
              MySQL, TailwindCSS, Bootstrap, and WordPress (Elementor). I create
              dynamic, user-friendly web applications with a focus on both
              front-end and back-end development, ensuring scalable and visually
              appealing solutions through team collaboration and clean,
              efficient code.
            </p>

            <button
              onClick={handleViewCV}
              className="sm:self-center lg:self-start p-3 mt-4 rounded-full bg-sky-500 hover:bg-sky-400 transition-all"
            >
              Open My CV
            </button>
          </div>

          <div className="flex justify-center sm:justify-center lg:justify-end flex-shrink-0">
            <div className="w-96 h-124 flex items-center justify-center">
              <img
                src="./images/naruto.jpg"
                alt="Profile Picture"
                className="object-cover rounded-lg max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
