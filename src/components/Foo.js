export default function Foo({ cidrs, whois, query }) {
  const lines = Array.from(new Set(whois.split('\n')));

  return (
    <ul className='bg-slate-900 w-full rounded-b-md px-2 pt-1'>
      <li>
        <h1 className='font-bold w-fit mb-1'>CIDRs</h1>
        <pre className='text-[12px] whitespace-pre-wrap'>
          {cidrs.join(', ')}
        </pre>
      </li>
      <li>
        <h1 className='font-bold w-fit mb-1 mt-1'>Matches</h1>
        <pre key={query} className='max-full w-full text-[9.5px] whitespace-pre-wrap pb-2'>
          {lines.map((line, index) => {
            const i = line.toLowerCase().indexOf(query.toLowerCase());

            if (i > -1)
              return (
                <div 
                  key={index}
                  // className={`${index % 2 == 0 ? "bg-slate-700" : "bg-slate-800"}`}
                >
                  {line.slice(0, i)}
                  <mark key={i}>{line.slice(i, i + query.length)}</mark>
                  {line.slice(i + query.length)}
                </div>
              );
          })}
        </pre>
      </li>
    </ul>
  );
}