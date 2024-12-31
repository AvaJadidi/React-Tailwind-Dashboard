function ToggleSwitch({ Lable, isOn, onToggle }) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-gray-300">{Lable}</span>
      <button
        className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors focus:outline-none ${
          isOn ? "bg-indigo-600" : "bg-gray-600"
        }`}
      >
        <span
          className={` inline-block size-4 transform transition-transform bg-white rounded-full ${
            isOn ? "translate-x-6" : "translate-x-1"
          }`}
          onClick={onToggle}
        />
      </button>
    </div>
  );
}

export default ToggleSwitch;
