function Topbar() {
  return (
    <div className="flex items-center justify-between px-16 py-3 border-b">
      <div className="flex items-center gap-8">
        <a
          href="/"
          className="text-3xl font-semibold text-red-500 cursor-pointer"
        >
          ASG
        </a>
        <div className="flex items-center gap-6">
          <div className="text-md font-semibold text-gray-600 hover:text-gray-900 cursor-pointer duration-200">
            Home
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
