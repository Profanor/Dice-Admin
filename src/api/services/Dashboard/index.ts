import { endpoints } from "@/api/configs/endpoints";
import { DashboardStatsResponse } from "@/api/models/Dashboard";
import { BaseService } from "../Base/BaseService";

class DashboardServiceMethods extends BaseService {
  getDashboardStats() {
    return this.get<DashboardStatsResponse>(endpoints.dashboardStats);
  }
}
const DashboardService = new DashboardServiceMethods();
export default DashboardService;