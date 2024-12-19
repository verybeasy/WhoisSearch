export default function Footer() {
  return (
    <footer 
      className='flex flex-col items-center justify-center p-6 w-full h-[25px] bg-slate-900 text-[10px] border-slate-700 border-t box-shadow'
    >
      <p>
        Email: <a className='underline text-blue-400 hover:text-blue-500' href='mailto:hello@netdump.xyz'>hello@netdump.xyz</a>
      </p>
      <p>
        © Copyright {new Date().getFullYear()} NETDUMP. All rights reserved.
      </p>
    </footer> 
  );
}