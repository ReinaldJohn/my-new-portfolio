const projInfo = [
  {
    name: "Pascal Burke Insurance Brokerage Main Website",
    link: "https://pbibins.com/",
    image: "./images/proj1.png",
    description:
      "Main website of my previous company. This is an insurance brokerage company based in US. It's built with WordPress and Elementor with some custom code inside.",
    tech: [
      { name: "wp", image: "./images/wp.png" },
      { name: "elementor", image: "./images/elementor.png" },
    ],
  },
  {
    name: "PrimeVirtual",
    link: "https://primevirtual.net/",
    image: "./images/proj2.png",
    description:
      "Other website of my previous company for virtual assistants that offers services and manpower for some business, more likely B2B Outsourcing.",
    tech: [
      { name: "wp", image: "./images/wp.png" },
      { name: "elementor", image: "./images/elementor.png" },
    ],
  },
  {
    name: "PBIBINS Get a Quote Form",
    link: "https://quote.pbibins.com/",
    image: "./images/proj3.png",
    description:
      "Form for interested clients to cater their insurance for their business needs and will send email to the agents on our company based on the information they provided.",
    tech: [
      { name: "laravel", image: "./images/laravel.png" },
      { name: "bs", image: "./images/bs.png" },
      { name: "jquery", image: "./images/jquery.png" },
      { name: "mysql", image: "./images/elementor.png" },
    ],
  },
  {
    name: "Simple Vue Expense Tracker",
    link: "https://vue-expense-tracker-sigma.vercel.app/",
    image: "./images/proj4.png",
    description:
      "Simple Vue Expense Tracker that has CRUD functionality and LocalStorage API",
    tech: [
      { name: "vue", image: "./images/vue.png" },
      { name: "html", image: "./images/html.png" },
      { name: "css", image: "./images/css.png" },
      { name: "localstorage", image: "./images/localstorage.jpg" },
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="lg:p-24 sm:p-12 flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <h6 className="text-lg md:text-xl text-gray-400 text-center">
          Projects I&apos;ve Built
        </h6>

        {projInfo.map((project, i) => (
          <div
            key={i}
            className="md:flex md:flex-col gap-8 border border-white bg-white text-black rounded-lg max-w-6xl p-8 hover:scale-105 transition transform ease-in-out"
          >
            <div className="flex md:flex-row sm:flex-col md:items-center md:justify-center">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover rounded-lg max-w-full max-h-full"
              />
            </div>
            <div className="flex flex-col gap-4 p-2">
              <h6 className="text-lg md:text-2xl text-gray-600 font-bold">
                {project.name}
              </h6>
              <a
                href={project.link}
                target="_blank"
                className="self-start p-2 text-sm rounded-lg bg-pink-500 hover:bg-pink-400 transition-all text-white"
              >
                Visit Website
              </a>
              <p className="text-lg md:text-lg lg:text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex justify-center items-start">
                {project.tech.map((techItem, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center p-4 hover:scale-105 transition transform ease-in-out"
                  >
                    <img
                      src={techItem.image}
                      alt={techItem.name}
                      className="h-12"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
