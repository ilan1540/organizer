import React from 'react'
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, flexRender, getFilteredRowModel, } from '@tanstack/react-table'

export const TableCrediteCard = ({ data }) => {  

  const columns = [
    {
     accessorKey: 'cardNo', 
     header: 'מס כרטיס',
     cell: (props) => <p>{props.getValue()}</p>,
      enableColumnFilter: true,
      sortingFn: 'alphanumeric',
    },
{
     accessorKey: 'billingDate', 
  header: 'תאריך חיוב',
     cell: (props) => <p>{props.getValue() }</p>
    },
{
     accessorKey: 'buyDate', 
  header: 'תאריך רכישה', 
     cell: (props) => <p>{props.getValue() }</p>
    },
    {
     accessorKey: 'storeName', 
      header: 'שם בית עסק', 
     cell: (props) => <p>{props.getValue() }</p>
    },
    {
     accessorKey: 'totalPurch', 
      header: 'סכום רכישה',
     cell: (props) => <p>{props.getValue() }</p>
    },
    {
     accessorKey: 'originCurr', 
      header: 'מטבע מקור', 
     cell: (props) => <p>{props.getValue() }</p>
    },
    {
     accessorKey: 'debitAmount', 
      header: 'סכום חיוב', 
     cell: (props) => <p>{props.getValue() }</p>
    },
    {
     accessorKey: 'debitCurr', 
      header: 'מטבע חיוב', 
     cell: (props) => <p>{props.getValue() }</p>
    },
    {
     accessorKey: 'moreDetailses', 
      header: 'פרטים נוספים', 
     cell: (props) => <p>{props.getValue() }</p>
    },

  ]

  const table = useReactTable({
  columns,
    data,
   
   // state:{columnFilters},
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    
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
  )
}
