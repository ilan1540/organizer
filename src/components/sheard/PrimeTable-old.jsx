import {useState} from 'react'
import {
   getCoreRowModel, getPaginationRowModel, getSortedRowModel,  getFilteredRowModel,
  ColumnDef,
  flexRender,
  SortingFn,
  SortingState,
  useReactTable,
 } from '@tanstack/react-table'

export const Table = ({ data }) => {
  const [sorting, setSorting] = useState([])

  const columns = [
    {
     accessorKey: 'month', 
     header: 'תאריך',
     cell: (props) => <p>{props.getValue()}</p>,
      enableColumnFilter: true,
      sortingFn: 'alphanumeric',
      enableSorting: true,
    },
{
     accessorKey: 'date', 
     header: 'תאריך',
     cell: (props) => <p>{props.getValue()}</p>,
      enableColumnFilter: true,
     // sortingFn: 'alphanumeric',
      invertSorting: true,
    },


{
     accessorKey: 'pratim', 
  header: 'פרטים',
  cell: (props) => <p>{props.getValue()}</p>,
     sortDescFirst: true,
    },
{
     accessorKey: 'neto', 
  header: 'סכום', 
     cell: (props) => <p>{props.getValue() }</p>
    },
    
  ]

  //custom sorting logic for one of our enum columns
const sortStatusFn = (rowA, rowB, _columnId) => {
  const statusA = rowA.original.status
  const statusB = rowB.original.status
  const statusOrder = ['single', 'complicated', 'relationship']
  return statusOrder.indexOf(statusA) - statusOrder.indexOf(statusB)
}



const table = useReactTable({
   columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), //client-side sorting
    onSortingChange: setSorting, //optionally control sorting state in your own scope for easy access
     sortingFns: {
      sortStatusFn, //or provide our custom sorting function globally for all columns to be able to use
     },
    //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
    state: {
      sorting,
    },
    // autoResetPageIndex: false, // turn off page index reset when sorting or filtering - default on/true
    // enableMultiSort: false, //Don't allow shift key to sort multiple columns - default on/true
    // enableSorting: false, // - default on/true
    // enableSortingRemoval: false, //Don't allow - default on/true
    // isMultiSortEvent: (e) => true, //Make all clicks multi-sort - default requires `shift` key
    // maxMultiSortColCount: 3, // only allow 3 columns to be sorted at once - default is Infinity
  
  },
  
  )
console.log(data)

  console.log(table.getState()) //access the entire internal state
  console.log(table.getState().rowSelection) //access just the row selection state

 return (
    <div className='flex'
    >
      <table className='table-auto'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => <tr className='mt-10' key={headerGroup.id}>
            {headerGroup.headers.map(header => <th className='p-1' key={header.id}
            
                       
            >{header.column.columnDef.header}</th>)}            
          </tr>)}
        </thead>
        
          {data && data ? (
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) =>
                    <td key={cell.id}  className='p-1'>
                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>)}
                </tr>
              ))}
          </tbody>) : (null)}
        
      </table>
     
    </div>
  )
}


/*
<div className='flex'
    >
      <table className='table-auto'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => <tr className='mt-10' key={headerGroup.id}>
            {headerGroup.headers.map(header => <th className='p-1' key={header.id}>{header.column.columnDef.header}</th>)}            
          </tr>)}
        </thead>
        
          {data && data ? (
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}
                >
                  {row.getVisibleCells().map((cell) =>
                    <td key={cell.id} className='p-1'>
                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>)}
                </tr>
              ))}
          </tbody>) : (null)}
        
      </table>
     
    </div>
*/