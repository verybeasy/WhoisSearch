export default function Card(props) {
  return (
    <div
      className='flex flex-col justify-center items-center mb-5 rounded-lg border-slate-700 border border-solid box-shadow'
    >
      <div 
        className='font-bold text-[18px] text-center w-full rounded-t-md bg-slate-700 border-b border-solid border-slate-700'
      >
        {props.header}
      </div>
      {props.children}
    </div>
  );
}