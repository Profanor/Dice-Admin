import { useQuery } from "@tanstack/react-query";
import { DashboardStatsResponse } from "@/api/models/Dashboard";
import DashboardService from "@/api/services/Dashboard";

export const useDashboardStats = () => {
  return useQuery<DashboardStatsResponse>({
    queryKey: ["dashboardStats"],
    queryFn: async () => {
      const data = await DashboardService.getDashboardStats();
      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
