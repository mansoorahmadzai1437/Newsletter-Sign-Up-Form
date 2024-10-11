import { useState } from "react";
import validator from "validator";
import { FormView } from "./components/FormView";
import { SubmittedView } from "./components/SubmittedView";

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
