export function ListItem({ children }) {
  return (
    <div className="flex space-x-5 items-start">
      <img src="icon-list.svg" alt="icon" className="w-6" />
      <p className="text-DarkSlateGrey">{children}</p>
    </div>
  );
}
