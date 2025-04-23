import { Table } from "@tanstack/react-table";

interface IProps<T> {
  right?: boolean;
  table: Table<T>;
}

const Pagination = <T,>({ right = true, table }: IProps<T>) => {
  const state = table.getState().pagination;
  const goLastPage = () => table.setPageIndex(table.getPageCount() - 1);
  return (
    <div
      className={`flex my-5 gap-8 text-sm ${
        right ? "flex-row-reverse" : "flex-row justify-start"
      }`}
    >
      <div className="join">
        <button
          className="join-item btn btn-outline w-18"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.setPageIndex(0)}
          type="button"
        >
          {"<<"}
        </button>
        <button
          className="join-item btn btn-outline w-18"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          type="button"
        >
          Prev
        </button>
        <button
          className="join-item btn btn-outline w-18"
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          type="button"
        >
          Next
        </button>
        <button
          className="join-item btn btn-outline w-18"
          disabled={!table.getCanNextPage()}
          onClick={goLastPage}
          type="button"
        >
          {">>"}
        </button>
      </div>
      <div className="flex items-center gap-4">
        {/* page info */}
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {state.pageIndex + 1} of {table.getPageCount()}
          </strong>
        </span>
        {/* input to skip to a specific page */}
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            className="input input-bordered w-20 input-sm mx-2"
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            type="number"
            value={state.pageIndex + 1}
          />
        </span>
        {/* select to input page size */}
        <select
          className="select select-sm select-bordered"
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          value={state.pageSize}
        >
          {[10, 15, 25].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
