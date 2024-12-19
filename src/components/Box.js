import "@/app/globals.css";

export default function Box({ children }) {
  return (
    <div 
      className='flex flex-col items-center w-full'
    >
      {children}
    </div>
  );
}