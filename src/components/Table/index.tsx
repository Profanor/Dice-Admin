/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import EllipsesLoader from "../Ellipses/index";
import Pagination from "../Pagination";

interface IProps<T> {
  columnDef: ColumnDef<T, any>[];
  data: T[];
  isLoading?: boolean;
  totalPages?: number;
  onPaginationChange?: any;
  onSortingChange?: any;
  pagination?: {
    pageIndex: number;
    pageSize: number;
  };
  sorting?: { id: string; desc: boolean }[];
}

const Table = <T,>({
  columnDef,
  data,
  isLoading,
  pagination,
  totalPages = 1,
  onPaginationChange,
  onSortingChange,
  sorting,
}: IProps<T>) => {
  const table = useReactTable({
    manualPagination: true,
    manualSorting: true,
    onPaginationChange,
    state: {
      pagination,
      sorting,
    },
    pageCount: totalPages,
    columns: columnDef,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange,
  });
  const headers = table.getFlatHeaders();
  const rows = table.getRowModel().rows;
  return (
    <div className="overflow-x-auto rounded-xl overflow-hidden border border-gray-200 bg-white p-2">
      {isLoading ? (
        <div className="h-[30vh] flex items-center justify-center">
          <EllipsesLoader contentContainerStyle="bg-primary" />
        </div>
      ) : (
        <>
          <table className="table table-zebra table-sm w-full">
            <thead>
              <tr className="border-b border-b-gray-200">
                {headers.map((header) => {
                  const direction = header.column.getIsSorted();
                  const arrow = {
                    asc: "🔼",
                    desc: "🔽",
                  };
                  const sortIndicator = direction && arrow[direction];
                  return (
                    <th key={header.id}>
                      {header.isPlaceholder ? null : (
                        <div
                          aria-hidden="true"
                          aria-label="toggle"
                          className="flex gap-4"
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {direction && <span>{sortIndicator}</span>}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  className="border-b border-b-gray-200 last-of-type:border-none hover:bg-gray-200/10 transition-colors duration-200 ease-in-out cursor-pointer"
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell, index) => {
                    return index === 0 ? (
                      <th key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </th>
                    ) : (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-8">
            <Pagination table={table} />
          </div>
        </>
      )}
    </div>
  );
};

export default Table;
