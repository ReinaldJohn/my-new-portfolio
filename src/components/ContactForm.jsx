import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formErrors, setFormErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    // Check for empty required fields
    const errors = {};
    Object.entries(formValues).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
      } else if (key === "email" && !validateEmail(value)) {
        errors[key] = "Invalid Email.";
      } else {
        delete errors[key]; // Remove error message if field is filled
      }
    });

    // Update formErrors state
    setFormErrors(errors);

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      return;
    }

    const lastSubmissionTime = localStorage.getItem("lastSubmissionTime");
    const now = new Date().getTime();

    if (lastSubmissionTime && now - lastSubmissionTime < 24 * 60 * 60 * 1000) {
      toast.error("You can only submit the form once every 24 hours.");
      formRef.current.reset();
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!");
          formRef.current.reset();
          localStorage.setItem("lastSubmissionTime", now);
        },
        (error) => {
          setLoading(false);
          toast.error(`Failed to send message. ${error.text || error}`);
          formRef.current.reset();
        }
      );
  };

  return (
    <section id="contact">
      <div className="flex flex-col justify-center items-center gap-8 p-4 mt-8">
        <h6 className="text-lg md:text-xl text-gray-400 text-center">
          Contact Me
        </h6>
        <div className="flex flex-col items-center gap-8 border border-white bg-white text-black rounded-lg w-full max-w-6xl p-8">
          <form
            name="form"
            method="POST"
            className="w-full space-y-4"
            autoComplete="off"
            onSubmit={handleContactFormSubmit}
            ref={formRef}
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className={`border border-gray rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500 w-full ${
                  formErrors.name ? "border-red-500" : ""
                }`}
                placeholder="Enter your name"
                required
                onChange={(e) => {
                  const value = e.target.value.trim();
                  setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    name: value ? "" : "Name is required.",
                  }));
                }}
              />
              {formErrors.name && (
                <p className="text-red-500">{formErrors.name}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={`border border-gray rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500 w-full ${
                  formErrors.email ? "border-red-500" : ""
                }`}
                placeholder="Enter your email"
                required
                onChange={(e) => {
                  const value = e.target.value.trim();
                  setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    email: value ? "" : "Email is required.",
                  }));
                }}
              />
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-semibold">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className={`border border-gray rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500 w-full ${
                  formErrors.message ? "border-red-500" : ""
                }`}
                placeholder="Enter your message"
                style={{ resize: "none" }}
                required
                onChange={(e) => {
                  const value = e.target.value.trim();
                  setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    message: value ? "" : "Message is required.",
                  }));
                }}
              ></textarea>
              {formErrors.message && (
                <p className="text-red-500">{formErrors.message}</p>
              )}
            </div>

            <button
              type="submit"
              id="submit"
              className="self-start p-3 mt-4 rounded-md bg-sky-500 hover:bg-sky-400 text-white transition-all"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Flip
      />
    </section>
  );
};

export default ContactForm;
