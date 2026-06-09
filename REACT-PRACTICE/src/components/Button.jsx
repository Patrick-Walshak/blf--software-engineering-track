function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick} className="bg-[#b9ff66] px-6 py-3 rounded-lg">                                                                                                                                                                              {text}
    </button>
  );
}

export default Button;