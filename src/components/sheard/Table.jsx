import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export const Table = ({ data,header }) => {
  const columns = [
  { field: 'month',
    header: 'חודש'},
  {field: 'date',
    header: 'תאריך'
  },
  {field: 'pratim',
    header: 'פרטים'
  },
  {field: 'neto',
    header: 'סכום'},
] 


  return (
<div className='flex justify-center  mt-8'>
      <DataTable className='showGridlines bg-white text-black font-semibold  rounded-2xl   p-1' value={data} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
      { header.map((rec)=> <Column className='p-1 w-32' key={rec.field}  sortable field={rec.field} header={rec.header} ></Column>)}
    </DataTable>
</div>
  )
}
