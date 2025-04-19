const cal = "/assets/images/calendar.svg";

export default function WeekSelector() {
  return (
    <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-3 rounded-md text-sm transition-colors">
      <img src={cal} alt="Calendar" className="w-5 h-5" />
      <span>This week</span>
    </button>
  );
}
