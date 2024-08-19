const Disc = ({ value }) => {
  const style = value === 1 ? 'bg-blue-500 hover:bg-blue-600 border-blue-700' : value === 2 ? 'bg-red-500 hover:bg-red-600 border-red-700' : 'bg-gray-800';
  const hoverColor = value === 0 ? 'hover:bg-slate-300' : '';


  return (
      <div className={`w-10 h-10 xs:w-14 xs:h-14 sm:w-20 sm:h-20 rounded-full ${style} border-2 border-gray-700 my-1 ${hoverColor}`}></div>
  );
};
// w-10 h-10
export default Disc;
