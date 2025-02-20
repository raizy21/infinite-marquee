const Marquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gray-900 py-4">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {/* Duplicating content for smooth looping */}
        <span className="text-white text-2xl font-bold mx-4">
          🚀 Smooth Infinite Marquee |
        </span>
        <span className="text-white text-2xl font-bold mx-4">
          🌍 TailwindCSS & React |
        </span>
        <span className="text-white text-2xl font-bold mx-4">
          ⚡ Fully Responsive |
        </span>
        <span className="text-white text-2xl font-bold mx-4">
          🎉 Looping Animation |
        </span>

        {/* Duplicate content to make it seamless */}
        <span className="text-white text-2xl font-bold mx-4">
          🚀 Smooth Infinite Marquee |
        </span>
        <span className="text-white text-2xl font-bold mx-4">
          🌍 TailwindCSS & React |
        </span>
        <span className="text-white text-2xl font-bold mx-4">
          ⚡ Fully Responsive |
        </span>
        <span className="text-white text-2xl font-bold mx-4">
          🎉 Looping Animation |
        </span>
      </div>
    </div>
  );
};

export default Marquee;
