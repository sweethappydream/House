/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default function HouseList() {
  const [list, setList] = useState(Array<any>);
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [filter, setFilter] = useState("");
  const [totalCount, setTotalCount] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  // Debouncing
  useEffect(() => {
    getData();
  }, [pageNum, pageSize, filter]);

  const getData = async () => {
    const data = (
      await axios.get(
        `${process.env.REACT_APP_PROXY}/list?pageNum=${pageNum}&pageSize=${pageSize}&filter=${filter}`
      )
    ).data;
    console.log(data.rows[1].units);
    setList(data.rows);
    setTotalCount(data.count);
  };

  const handlePageClick = (e: any) => {
    const selectedPage = e.selected;
    setPageNum(selectedPage + 1);
  };

  return (
    <div className=" mx-1">
      <div className="mt-4 flex justify-between bg-slate-400  items-center">
        <form className=" border-none p-7 w-1/3">
          <input
            className="nosubmit"
            type="search"
            placeholder="Search..."
            onChange={(e) => setFilter(e.target.value)}
          />
        </form>
        <div className="">
          <div className="flex justify-center">
            <input
              defaultValue={5}
              ref={inputRef}
              className=" border-2 pl-3 rounded-xl"
              placeholder="Records per Page"
            />
            <button
              type="submit"
              className=" bg-slate-600 h-9 w-16 hover:bg-slate-900 rounded-md"
              onClick={() => {
                if (inputRef.current !== null)
                  setPageSize(Number.parseInt(inputRef.current.value));
              }}
            >
              {" "}
              Set{" "}
            </button>
          </div>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(totalCount / pageSize)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={pageSize}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
      <div className=" flex-col items-center justify-center">
        {list.map((item) => (
          <div className="flex justify-center items-center">
            <div>
              <p className="text-md">{item.name}</p>
              <img className="img" src={item.picture} alt={item.id} />
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">Type</th>
                  <th scope="col" className="py-3 px-6">Average sqft</th>
                  <th scope="col" className="py-3 px-6">Range</th>
                </tr>
              </thead>
              <tbody>
                {item.units.map((unit: any) => (
                  <tr key={unit.type} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">{unit.type}</td>
                    <td className="py-4 px-6">{unit.sqft}</td>
                    <td className="py-4 px-6">
                      {unit.minOccupancy} - {unit.maxOccupancy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          // <table key={item.id}>
          //   <tbody>
          //     <tr>
          //       <td>{item.name}</td>
          //       <td></td>
          //     </tr>
          //     <tr>
          //       <td>
          //         <img className="img" src={item.picture} alt={item.id} />
          //       </td>
          //       <td>
          //         <table>
          //           <tbody>
          //             {item.units.map((unit: any) => (
          //               <tr key={unit.type}>
          //                 <td className="">{unit.type}</td>
          //                 <td>{unit.sqft}</td>
          //                 <td>
          //                   {unit.minOccupancy} - {unit.maxOccupancy}
          //                 </td>
          //               </tr>
          //             ))}
          //           </tbody>
          //         </table>
          //       </td>
          //     </tr>
          //   </tbody>
          // </table>
        ))}
      </div>
    </div>
  );
}
