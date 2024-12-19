'use client'

import React, { Children, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import SearchBar from '@/components/SearchBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Box from '@/components/Box';
import Foo from '@/components/Foo';
import Card from '@/components/Card';

function RoundedBox({ items }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  return (
    <div className="flex flex-col">
      <ul className="text-slate-50 m-4 min-w-[275px]">
        {currentItems.map((item, index) => (
          <li
            key={index}
            className={`border-l border-r border-slate-500 p-2 
              ${index === 0 ? "rounded-t-md border-t" : ""}
              ${index < currentItems.length - 1 ? "border-b" : ""}
              ${index === currentItems.length - 1 ? "rounded-b-md border-b" : ""}
              ${index % 2 === 0 ? "bg-slate-950" : "bg-slate-950"}`}
          >
            CIDR : {item[0]}
          </li>
        ))}
      </ul>
      <div className="flex justify-evenly mt-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="text-blue-400 hover:underline"
          >
            {currentPage === 1 ? "": "<"}
          </button>
          <span className="text-slate-50">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="text-blue-400 hover:underline"
          >
            <FaArrowRight />
          </button>
      </div>
    </div>
  );
}

const whois_data = `

#
# ARIN WHOIS data and services are subject to the Terms of Use
# available at: https://www.arin.net/resources/registry/whois/tou/
#
# If you see inaccuracies in the results, please report at
# https://www.arin.net/resources/registry/whois/inaccuracy_reporting/
#
# Copyright 1997-2024, American Registry for Internet Numbers, Ltd.
#



# start

NetRange:       100.43.0.0 - 100.43.31.255
CIDR:           100.43.0.0/19
NetName:        APOGEE
NetHandle:      NET-100-43-0-0-1
Parent:         NET100 (NET-100-0-0-0-0)
NetType:        Direct Allocation
OriginAS:       AS174
Organization:   Apogee Telecom Inc. (APOG)
RegDate:        2011-12-02
Updated:        2011-12-02
Ref:            https://rdap.arin.net/registry/ip/100.43.0.0


OrgName:        Apogee Telecom Inc.
OrgId:          APOG
Address:        1905A Kramer Ln
City:           Austin
StateProv:      TX
PostalCode:     78758
Country:        US
RegDate:        2001-12-27
Updated:        2021-07-07
Ref:            https://rdap.arin.net/registry/entity/APOG


OrgTechHandle: RMA40-ARIN
OrgTechName:   Malone, Russell 
OrgTechPhone:  +1-512-478-8858 
OrgTechEmail:  rmalone@apogee.us
OrgTechRef:    https://rdap.arin.net/registry/entity/RMA40-ARIN

OrgTechHandle: TAMBU2-ARIN
OrgTechName:   Tambue, Kabasele 
OrgTechPhone:  +1-512-717-0706 
OrgTechEmail:  ktambue@apogee.us
OrgTechRef:    https://rdap.arin.net/registry/entity/TAMBU2-ARIN

OrgAbuseHandle: NETWO3525-ARIN
OrgAbuseName:   Network Abuse
OrgAbusePhone:  +1-512-478-8861 
OrgAbuseEmail:  abuse@apogeenet.net
OrgAbuseRef:    https://rdap.arin.net/registry/entity/NETWO3525-ARIN

# end


# start

NetRange:       100.43.0.0 - 100.43.1.255
CIDR:           100.43.0.0/23
NetName:        APOG-TAMUG
NetHandle:      NET-100-43-0-0-2
Parent:         APOGEE (NET-100-43-0-0-1)
NetType:        Reassigned
OriginAS:       
Customer:       APOG-TAMUG (C06952115)
RegDate:        2018-04-11
Updated:        2018-04-11
Ref:            https://rdap.arin.net/registry/ip/100.43.0.0


CustName:       APOG-TAMUG
Address:        200 Seawolf Pkwy
City:           Galveston
StateProv:      TX
PostalCode:     77554
Country:        US
RegDate:        2018-04-11
Updated:        2018-04-11
Ref:            https://rdap.arin.net/registry/entity/C06952115

OrgTechHandle: RMA40-ARIN
OrgTechName:   Malone, Russell 
OrgTechPhone:  +1-512-478-8858 
OrgTechEmail:  rmalone@apogee.us
OrgTechRef:    https://rdap.arin.net/registry/entity/RMA40-ARIN

OrgTechHandle: TAMBU2-ARIN
OrgTechName:   Tambue, Kabasele 
OrgTechPhone:  +1-512-717-0706 
OrgTechEmail:  ktambue@apogee.us
OrgTechRef:    https://rdap.arin.net/registry/entity/TAMBU2-ARIN

OrgAbuseHandle: NETWO3525-ARIN
OrgAbuseName:   Network Abuse
OrgAbusePhone:  +1-512-478-8861 
OrgAbuseEmail:  abuse@apogeenet.net
OrgAbuseRef:    https://rdap.arin.net/registry/entity/NETWO3525-ARIN

# end



#
# ARIN WHOIS data and services are subject to the Terms of Use
# available at: https://www.arin.net/resources/registry/whois/tou/
#
# If you see inaccuracies in the results, please report at
# https://www.arin.net/resources/registry/whois/inaccuracy_reporting/
#
# Copyright 1997-2024, American Registry for Internet Numbers, Ltd.
#
`;

const Link = ({href, children}) => (
  <div className='flex flex-row text-[14px] pb-1'>
    <FaArrowRight className='pt-1 mt-[1px] min-w-3 w-3'/>
    <a href={href}>{children}</a>
  </div>
);

function Pagination({ children, className }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const items = React.Children.toArray(children);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);
  
  const scrollToTop = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const gotoNextPage = () => {
    if (currentPage < totalPages) scrollToTop(currentPage + 1);
  };

  const gotoPrevPage = () => {
    if (currentPage > 1) scrollToTop(currentPage - 1);
  };

  const getPaginationRange = () => {
    const delta = 1; // Range around the current page
    const range = [];
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    // Push first page
    range.push(1);
    
    // Ellipsis before current range if needed
    if (left > 2) {
      range.push("...");
    }

    // Pages around current page
    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    // Ellipsis after current range if needed
    if (right < totalPages - 1) {
      range.push("...");
    }

    // Push last page
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  return (
    <div className={className}>
      <p className='p-1 w-fit mt-5 text-[13px]'>
        Showing 
      </p>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div 
        className={`
          flex flex-row gap-2 bg-slate-900 rounded-3xl box-shadow border border-slate-700 p-2
          ${totalPages === 1 ? 'hidden' : ''}`}
      >
        <button
          className='text-slate-50 hover:bg-slate-600 rounded-md p-1 justify-start items-start'
          onClick={gotoPrevPage}
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>

        <div className='mx-auto'>
        {getPaginationRange().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && scrollToTop(page)}
            className={`rounded-md  ${
              currentPage === page ? 'text-slate-50' : 'text-slate-400'
            }
            ${ page === '...' ? '' : 'px-1 hover:bg-slate-600'}`}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
        </div>

        <button
          className='text-slate-50 hover:bg-slate-600 rounded-md p-1'
          onClick={gotoNextPage}
          disabled={currentPage === totalPages}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

const recent_searches = ['foo', 'bar'];

export default function Home() {
  const [results, setResults] = useState([]);
  const [foobar, setFoobar] = useState('');
 
  const handleSearch = async (query) => {
    const response = await fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
  
    if (response.ok) {
      setFoobar(query);
      const data = await response.json();

      setResults(data.map((match, index) => [
        match['_source']['ip_address'],
        match['_source']['cidrs'],
        match['_source']['raw_whois']
      ]));
    }
  };

  return (
    <div className='flex flex-col h-full'>
      <Header/>
      <div className='p-10 mx-auto w-11/12 max-w-xl'>

        <SearchBar 
          onSearch={handleSearch}
          onClear={() => {setResults([])}}/>

        <Pagination
          className={results.length > 0 && foobar.length > 0 ? '' : 'hidden'}
        >
          {results.map((result, index) => (
            <Card header={result[0]} key={index}>
              <Foo
                cidrs={result[1]} 
                whois={result[2]}
                query={foobar}
            />
            </Card>
          ))}
        </Pagination>

        <div 
          className={`
            mt-5
            ${results.length === 0 ? '' : 'hidden'}`}
          >
          <Card header='Recent Searches'>
            <ul className='bg-slate-900 w-full rounded-b-md px-2 pt-1'>
              {recent_searches.map((query, index) => (
                <li key={index} className={index < recent_searches.length - 1 ? 'border-b border-slate-700' : ''}>
                  <Link key={index}>{query}</Link>
                </li>
              ))}
            </ul>
          </Card>

          <Card header='About'>
            <div className='p-2 bg-slate-900 text-[14px] rounded-b-md'>
              <p>This website provides a comprehensive search interface for exploring WHOIS data related to IP addresses.</p>
              <p>It is designed to help users identify the CIDR ranges associated with various Autonomous Systems (AS).</p>
              <p>Using scraped WHOIS data, the tool allows for keyword-based searching to filter results by organizations, locations, or other terms.</p>
            </div>
          </Card>
        </div>

      </div>
      <div className='flex-grow'/>
      <Footer/>
    </div>
  );
}


{/* <Card 
  cidrs={['100.43.0.0/23', '100.43.0.0/19, 100.43.0.0/23, 100.43.0.0/19, 100.43.0.0/23, 100.43.0.0/19, 100.43.0.0/23, 100.43.0.0/19']} 
  whois={[whois_data, whois_data]}
  query={'Org'}
/>
<Card 
  cidrs={['100.43.0.0/23', '100.43.0.0/19, 100.43.0.0/23, 100.43.0.0/19, 100.43.0.0/23, 100.43.0.0/19, 100.43.0.0/23, 100.43.0.0/19']} 
  whois={[whois_data, whois_data]}
  query={'Org'}
/>
<Card 
  cidrs={['100.43.0.0/23', '100.43.0.0/19, 100.43.0.0/23, 100.43.0.0/19, 100.43.0.0/23, 100.43.0.0/19, 100.43.0.0/23, 100.43.0.0/19']} 
  whois={[whois_data, whois_data]}
  query={'Org'}
/> */}

{/* <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border rounded mb-4"
      />
      <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded">
        Search
      </button>
      </div>

      <RoundedBox items={results}/>
      
      <div className="mt-4">
        {Object.keys(results).map(key => (
          <div key={key} className="p-2 border-b">
            <p>{key}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        {results.map((result, index) => (
          <div key={index} className="p-2 border-b">
            <p>{result}</p>
          </div>
        ))}
      </div> */}
  // const [query, setQuery] = useState('');
  // const [results, setResults] = useState([]);

  // const handleSearch = async () => {
  //   const response = await fetch('/api/search', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ query }),
  //   });

  //   if (response.ok) {
  //     const data = await response.json();

  //     const filtered_results = {};

  //     for (let index_x in data) {
  //       for (let index_y in data[index_x]._source.cidrs) {
  //         let cidr = data[index_x]._source.cidrs[index_y];

  //         if (cidr in filtered_results) {
  //           filtered_results[cidr].add(data[index_x]._source.raw_whois);
  //         } else {
  //           filtered_results[cidr] = new Set([data[index_x]._source.raw_whois]);
  //         }
  //       }
  //     }

  //     const foo = [];

  //     Object.keys(filtered_results).map(key => {
  //       foo.push([key, filtered_results[key]])
  //     })

  //     setResults(foo);
  //   }
  // };