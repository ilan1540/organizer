import {useState} from 'react'
import {
  createColumnHelper,
  flexRender,
 // getHeaderGroups,
  
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("month", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  >חודש</div>
      </span>
    ),
  }),
  columnHelper.accessor("date", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  >תאריך</div>
      </span>
    ),
  }),
  columnHelper.accessor("pratim", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  >פרטים</div>
      </span>
    ),
  }),
  columnHelper.accessor("neto", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  >סכום</div>
      </span>
    ),
  }),
]

export const ReactTable = ({data}) => {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  //  getCoreRowModel: getCoreRowModel(),

   // onSortingChange: setSorting,
  //  getSortedRowModel: getSortedRowModel(),
  //  getHeaderGroups: getHeaderGroups(),
   // onGlobalFilterChange: setGlobalFilter(),
  //  getFilteredRowModel: getFilteredRowModel(),
  })
 // console.log(table.getHeaderGroups());

  return (
    <div>ReactTable
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className='bg-gray-50'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} >
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className='px-3 py-2' >
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            )) }
          </thead>
          {data ? (
          <tbody className='bg-white divide-y divide-gray-200' >
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className='hover:bg-gray-50'>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {flexRender(cell.column.columnDef.cell,
                      cell.getContext())}
                  </td>
                ))}
              </tr>
            ) )
            }
          </tbody>
          ) :(null)}
       </table>
      </div>
    </div>
  )
}


/*
<table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (<tr key={headerGroup.id}>
              {headerGroup.map((header) => (<th key={header.id}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                
              </th>))}
            </tr>))}
          </thead>
        </table>
*/