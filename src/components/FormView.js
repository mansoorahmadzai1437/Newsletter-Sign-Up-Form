import { ErrorMessage } from "./ErrorMessage";
import { Button } from "./Button";
import { ListItem } from "./ListItem";

export function FormView({ onFormSubmit, email, onWriteEmail, wrongEmail }) {
  return (
    <div className="flex flex-col bg-White md:flex-row-reverse md:p-4 md:rounded-3xl">
      {/* Image */}
      <img
        src="illustration-sign-up-mobile.svg"
        alt="Illustration"
        className="w-full md:hidden"
      />

      <img
        src="illustration-sign-up-desktop.svg"
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
