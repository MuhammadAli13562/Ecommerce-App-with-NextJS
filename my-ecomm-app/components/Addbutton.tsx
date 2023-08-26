"use client";

export default function AddButton() {
  function handleAdd() {
    alert("Sorry not signed In");
  }

  return (
    <button
      className="bg-yellow-400 hover:bg-gradient-to-t from-orange-500 to-yellow-300 transition-colors duration-1000 h-8 rounded-xl shadow-lg"
      onClick={handleAdd}
    >
      Add to Cart
    </button>
  );
}
