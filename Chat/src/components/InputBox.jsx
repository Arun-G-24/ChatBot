import Qa from "./Qa";

function InputBox({ text, setText, sendMessage, suggestions, onSuggestionClick }) {
  return (
    <>
    <div className="p-2 border-t">

      <Qa suggestions={suggestions} onSelect={onSuggestionClick} />
      </div>

    <div className="p-2 border-t flex gap-2">
      <input
          value={text}

         onChange={(e) => setText(e.target.value)}
          placeholder="Type here..."
          className="flex-1 border px-3 py-2 rounded"


        />
        <button
        onClick={sendMessage}
          className="bg-blue-500 text-white px-4 rounded cursor-pointer shadow-blue-500/50 shrink-0"
        >
          Send
        </button>
      </div>
    </>
  );
}

export default InputBox;
