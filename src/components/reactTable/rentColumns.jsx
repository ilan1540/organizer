import {
  createColumnHelper,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const columns = [
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

export const salaryColumns = [
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
  columnHelper.accessor("broto", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  >ברוטו</div>
      </span>
    ),
  }),
  columnHelper.accessor("gmavid", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  >גמל מעביד</div>
      </span>
    ),
  }),
  columnHelper.accessor("pmavid", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  >פיצויים מעביד</div>
      </span>
    ),
    }),
   columnHelper.accessor("hismavid", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  >קרן השתלמות מעביד</div>
      </span>
    ),
   }), 
   columnHelper.accessor("blmavid", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  >ביטוח לאומי מעביד</div>
      </span>
    ),
   }),
   columnHelper.accessor("totalmavid", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  >סך עלות מעביד</div>
      </span>
    ),
    }),
 columnHelper.accessor("tax", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  >מס הכנסה</div>
      </span>
    ),
 }),
 columnHelper.accessor("bl", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  > ביטוח לאומי</div>
      </span>
    ),
 }),
 columnHelper.accessor("br", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  > מס בריאות</div>
      </span>
    ),
 }),
 columnHelper.accessor("genel", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  >ניכוי גמל</div>
      </span>
    ),
 }),
 columnHelper.accessor("histlmot", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  >קרן השתלמות</div>
      </span>
    ),
 }),
 columnHelper.accessor("neto", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  > שכר נטו</div>
      </span>
    ),
 }),
 columnHelper.accessor("pratim", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <div className="mr-2" size={16}  > פרטים</div>
      </span>
    ),
    }),
]
