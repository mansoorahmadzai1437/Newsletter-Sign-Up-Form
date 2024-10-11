import { Button } from "./Button";

export function SubmittedView({ email, onDismiss }) {
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
