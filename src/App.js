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
    <div className="bg-CharcoalGrey font-Roboto md:flex md:flex-col md:justify-center md:items-center md:h-screen">
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
    <div className="flex flex-col bg-White md:flex-row-reverse md:p-4 md:rounded-3xl">
      {/* Image */}
      <img
        src="/illustration-sign-up-mobile.svg"
        alt="Illustration"
        className="w-full md:hidden"
      />

      <img
        src="/illustration-sign-up-desktop.svg"
        alt="Illustration"
        className="hidden md:block"
      />

      {/* Content */}
      <div className="px-6 flex flex-col space-y-7 py-10 md:justify-center md:px-12 md:space-y-4">
        {/* Title */}
        <h1 className="text-[40px] md:text-[3.5rem] font-bold text-DarkSlateGrey">
          Stay updated!
        </h1>

        {/* Paragraph */}
        <p className="text-DarkSlateGrey md:w-96">
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
              <label className="text-xs font-bold">Email address</label>
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
              } border p-4 px-6 rounded-lg active:border-CharcoalGrey focus:outline-DarkSlateGrey
              active:outline-DarkSlateGrey cursor-pointer`}
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
    <div className="bg-White h-screen px-6 md:h-auto md:rounded-3xl md:p-14 md:w-[31rem]">
      {/* Content */}
      <div className="flex flex-col space-y-8 pt-40 md:pt-0 md:space-y-5">
        {/* Icon */}
        <img
          src="icon-success.svg"
          alt="Icon"
          className="w-[4.5rem] md:w-[4rem]"
        />
        {/* Title */}
        <h1 className="text-DarkSlateGrey font-bold text-[2.65rem] md:text-[3.5rem] leading-none">
          Thanks for subscribing!
        </h1>
        {/* Paragraph */}
        <p className="text-DarkSlateGrey">
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription.
        </p>
      </div>

      {/* Dismiss Button */}
      <form onSubmit={onDismiss}>
        <Button
          classes={
            "fixed bottom-10 right-6 left-6 md:static md:mt-10 md:w-full"
          }
        >
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
      className={`bg-DarkSlateGrey text-White p-4 rounded-lg hover:bg-gradient-to-r md:hover:from-rose-400 md:hover:via-Tomato md:hover:to-Tomato md:hover:shadow-ButtonShadow active:bg-gradient-to-r active:from-rose-400 active:via-Tomato active:to-Tomato active:shadow-ButtonShadow ${classes}`}
    >
      {children}
    </button>
  );
}

function ErrorMessage({ classes }) {
  return (
    <span className="classes font-bold text-xs text-Tomato">
      Valid email required
    </span>
  );
}
