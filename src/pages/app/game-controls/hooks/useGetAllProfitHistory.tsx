// // import { useGetRequest } from "@//hooks/useGetRequest";
// import { usePagination } from "@/components/Pagination/hooks";
// import { createColumnHelper } from "@tanstack/react-table";
// import moment from "moment";

// type ProfitHistory = {
//   id: string;
//   gameReference: string;
//   playerId: string;
//   userRoll: number;
//   compRoll: number;
//   stake: number;
//   profit: number;
//   currency: string;
//   playedAt: string;
// };

// export const useGetAllProfitsHistory = () => {
//   const columnHelper = createColumnHelper<ProfitHistory>();

//   const {
//     limit,
//     onPaginationChange,
//     skip,
//     pagination,
//     field,
//     onSortingChange,
//     order,
//     sorting,
//   } = usePagination();

//   // TODO
//   const fakeService = async () => {
//     return {
//       histories: [],
//     };
//   };

//   const { isLoading, data } = useGetRequest({
//     service: fakeService,
//     payload: {
//       sort: field,
//       order: order === "ASC" ? "ASC" : "DESC",
//       limit,
//       page: skip + 1,
//     },
//     tag: "ProfitHistoryTable",
//   });

//   const columnDef = [
//     columnHelper.accessor((_, idx) => skip * limit + idx + 1, {
//       id: "serial",
//       header: () => <span>S/N</span>,
//       cell: (info) => <span>{info.getValue()}</span>,
//     }),
//     columnHelper.accessor("gameReference", {
//       header: () => <span>Games Reference</span>,
//       cell: (info) => <span>{info.getValue()}</span>,
//     }),
//     columnHelper.accessor("playerId", {
//       header: () => <span>Player ID</span>,
//       cell: (info) => <span>{info.getValue()}</span>,
//     }),
//     columnHelper.accessor("userRoll", {
//       header: () => <span>User Roll</span>,
//       cell: (info) => <span>{info.getValue()}</span>,
//     }),
//     columnHelper.accessor("compRoll", {
//       header: () => <span>Comp.Roll</span>,
//       cell: (info) => <span>{info.getValue()}</span>,
//     }),
//     columnHelper.accessor("stake", {
//       header: () => <span>Stake</span>,
//       cell: (info) => <span>{info.getValue().toLocaleString()}</span>,
//     }),
//     columnHelper.accessor("profit", {
//       header: () => <span>Profit/Loss</span>,
//       cell: (info) => {
//         const row = info.row.original;
//         const value = info.getValue();
//         return (
//           <span className={value >= 0 ? "text-green-500" : "text-red-500"}>
//             {row.currency} {value.toLocaleString()}
//           </span>
//         );
//       },
//     }),
//     columnHelper.accessor("playedAt", {
//       header: () => <span>Played at</span>,
//       cell: (info) => <span>{moment(info.getValue()).format("LLL")}</span>,
//     }),
//   ];

//   return {
//     data: data?.histories ?? [],
//     columnDef,
//     pagination,
//     sorting,
//     onSortingChange,
//     onPaginationChange,
//     isLoading,
//   };
// };
