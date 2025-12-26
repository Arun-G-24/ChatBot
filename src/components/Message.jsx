import logo from "../assets/logo.png";

  function Message({ type, text }) {
   return (

    <div className={`flex ${type === "user"? "justify-end":"justify-start"}`}>
      {type === "bot" && 
      (
        <img src={logo}  className="w-7 h-7 mr-2 self-end" />
      )}
      <div
    className={`px-3 py-2 rounded-lg text-sm max-w-[75%] cursor-pointer wrap-break-words
        ${type === "user"
         ? "bg-blue-500 text-white"
          : "bg-gray-200 text-black"}`}
      >
      {text}
      </div>
    </div>
  );
}

export default Message;
