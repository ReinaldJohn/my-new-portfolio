import "./App.css";
import {
  Navbar,
  Hero,
  AboutMe,
  TechStack,
  Projects,
  ContactForm,
  Footer,
} from "./components";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutMe />
        <TechStack />
        <Projects />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}

export default App;
