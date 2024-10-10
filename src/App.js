import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");

  function handleEmailValueChange(e) {
    setEmail(e.target.value);
  }

  return (
    // Background Container
    <div className="bg-DarkSlateGrey font-Roboto">
      {/* Card Container */}
      <div className="flex flex-col bg-White">
        {/* Image */}
        <img
          src="/illustration-sign-up-mobile.svg"
          alt="Illustration"
          className="w-full rounded-b-md"
        />

        {/* Content */}
        <div className="px-6 flex flex-col space-y-7 py-9">
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
          <form className="flex flex-col space-y-6 pt-3">
            <div className="flex flex-col space-y-3">
              <label className="text-sm font-bold">Email address</label>
              <input
                value={email}
                onChange={handleEmailValueChange}
                type="text"
                className="border border-Grey p-4 px-6 rounded-lg active:border-CharcoalGrey"
                placeholder="email@company.com"
              />
            </div>
            <Button>Subscribe to monthly newsletter</Button>
          </form>
        </div>
      </div>
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

function Button({ children }) {
  return (
    <button className="bg-DarkSlateGrey text-White w-full p-4 rounded-lg hover:bg-gradient-to-r hover:from-rose-400 hover:via-Tomato hover:to-Tomato hover:shadow-ButtonShadow">
      {children}
    </button>
  );
}
