import { useState } from "react";
import validator from "validator";

export default function App() {
  const [view, setView] = useState("form");
  const [email, setEmail] = useState("");
  const [wrongEmail, setWrongEmail] = useState(false);

  function handleEmailValueChange(e) {
    setWrongEmail(false);
    setEmail(e.target.value);
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    if (email === "" || !validator.isEmail(email)) {
      setWrongEmail(true);
    } else {
      setView("submitted");
    }
  }

  function handleDismissMessage() {
    setEmail("");
    setView("form");
  }

  return (
    // Background Container
    <div className="bg-DarkSlateGrey font-Roboto">
      {/* Card Container */}
      {view === "form" ? (
        <FormView
          onFormSubmit={handleFormSubmission}
          email={email}
          onWriteEmail={handleEmailValueChange}
          wrongEmail={wrongEmail}
        />
      ) : (
        <SubmittedView email={email} onDismiss={handleDismissMessage} />
      )}
    </div>
  );
}

function FormView({ onFormSubmit, email, onWriteEmail, wrongEmail }) {
  return (
    <div className="flex flex-col bg-White">
      {/* Image */}
      <img
        src="/illustration-sign-up-mobile.svg"
        alt="Illustration"
        className="w-full"
      />

      {/* Content */}
      <div className="px-6 flex flex-col space-y-7 py-10">
        {/* Title */}
        <h1 className="text-[40px] font-bold text-DarkSlateGrey">
          Stay updated!
        </h1>

        {/* Paragraph */}
        <p className="text-DarkSlateGrey">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        {/* List */}
        <div className="flex flex-col space-y-3">
          <ListItem>Product discovery and building what matters</ListItem>
          <ListItem>Measuring to ensure updates are a success</ListItem>
          <ListItem>And much more!</ListItem>
        </div>

        {/* Email Input */}
        <form className="flex flex-col space-y-6 pt-3" onSubmit={onFormSubmit}>
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold">Email address</label>
              {wrongEmail && <ErrorMessage />}
            </div>
            <input
              value={email}
              onChange={onWriteEmail}
              type="text"
              className={`${
                wrongEmail
                  ? "border-Tomato bg-Tomato bg-opacity-15 placeholder:text-Tomato text-Tomato"
                  : "border-Grey text-DarkSlateGrey"
              } border p-4 px-6 rounded-lg active:border-CharcoalGrey`}
              placeholder="email@company.com"
            />
          </div>
          <Button>Subscribe to monthly newsletter</Button>
        </form>
      </div>
    </div>
  );
}

function SubmittedView({ email, onDismiss }) {
  return (
    <div className="bg-White h-screen px-6">
      {/* Content */}
      <div className="flex flex-col space-y-8 pt-40">
        {/* Icon */}
        <img src="icon-success.svg" alt="Icon" className="w-[4.5rem]" />
        {/* Title */}
        <h1 className="text-DarkSlateGrey font-bold text-[2.65rem] leading-none">
          Thanks for subscribing!
        </h1>
        {/* Paragraph */}
        <p>
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription.
        </p>
      </div>

      {/* Dismiss Button */}
      <form onSubmit={onDismiss}>
        <Button classes={"fixed bottom-10 right-6 left-6 w-auto "}>
          Dismiss message
        </Button>
      </form>
    </div>
  );
}

function ListItem({ children }) {
  return (
    <div className="flex space-x-5 items-start">
      <img src="icon-list.svg" alt="icon" className="w-6" />
      <p className="text-DarkSlateGrey">{children}</p>
    </div>
  );
}

function Button({ children, classes }) {
  return (
    <button
      className={`${classes} bg-DarkSlateGrey text-White w-full p-4 rounded-lg hover:bg-gradient-to-r md:hover:from-rose-400 md:hover:via-Tomato md:hover:to-Tomato md:hover:shadow-ButtonShadow active:bg-gradient-to-r active:from-rose-400 active:via-Tomato active:to-Tomato active:shadow-ButtonShadow`}
    >
      {children}
    </button>
  );
}

function ErrorMessage({ classes }) {
  return (
    <span className="classes font-bold text-sm text-Tomato">
      Valid email required
    </span>
  );
}
