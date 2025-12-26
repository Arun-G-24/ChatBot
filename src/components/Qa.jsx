function Qa({ suggestions, onSelect }) {
  return (
    <div className="flex gap-2 overflow-x-auto whitespace-nowrap  ">

      {suggestions.map(x=>(
    <button
          key={x}
           onClick={() => onSelect(x)}
          className="px-4 h-9 text-sm bg-gray-200 text-black rounded-full hover:bg-blue-600 hover:text-white whitespace-nowrap"
   
          title={x}
        >
 {x}
        </button>
      ))}
    </div>
  );
}

export default Qa;
