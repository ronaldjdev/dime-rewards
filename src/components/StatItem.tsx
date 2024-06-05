const StatItem = ({ value, label }) => {
  return (
    <div className="w-14">
      <div className="text-white text-xl font-bold">{value}</div>
      <div className="text-slate-400 text-xs font-bold uppercase">{label}</div>
    </div>
  );
};

export default StatItem;