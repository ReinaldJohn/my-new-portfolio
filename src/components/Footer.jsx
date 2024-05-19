const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center gap-8">
        <h6 className="text-xl font-semibold">Reinald John Vibar</h6>
        <p className="text-center text-gray-400 max-w-lg">
          Full Stack Developer with expertise in Laravel, ReactJS, PHP, MySQL,
          TailwindCSS, Bootstrap, and WordPress. Creating dynamic and
          user-friendly web applications.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/nald.1618"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.351C0 23.406.595 24 1.325 24h11.49v-9.294H9.545v-3.622h3.269V8.413c0-3.23 1.973-4.988 4.856-4.988 1.377 0 2.561.102 2.906.148v3.371l-1.996.001c-1.564 0-1.865.744-1.865 1.834v2.406h3.728l-.486 3.622h-3.243V24h6.359c.73 0 1.325-.594 1.325-1.324V1.325C24 .595 23.405 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/reinald-john-vibar-274935182/"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0 4.881 0 3.5 1.11 1 2.5 1s2.48 1.119 2.48 2.5zM0 23.94h5V8.913H0V23.94zM7.56 8.913v15.027h4.8v-8.5c0-2.192 2.6-2.374 2.6 0v8.5h4.8V14.83c0-7.627-8.4-7.364-8.4 0v9.107h.001z" />
            </svg>
          </a>
          <a
            href="https://github.com/ReinaldJohn"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .296c-6.626 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.042-3.338.725-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.774.418-1.305.763-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.469-2.381 1.236-3.22-.124-.303-.536-1.527.116-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.005-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.296-1.23 3.296-1.23.653 1.649.241 2.873.118 3.176.77.839 1.235 1.911 1.235 3.22 0 4.606-2.807 5.62-5.479 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col md:flex-row sm:flex-row gap-4 text-gray-400">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Reinald John Vibar. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
