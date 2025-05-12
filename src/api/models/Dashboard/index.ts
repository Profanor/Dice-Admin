export type DashboardStatsResponse = {
    summary: {
      name: string;
      value: string;
    }[];
    charts: {
      group: string;
      color?: string;
      data: {
        label: string;
        value: number;
      }[];
    }[];
    barChart: {
      labels: string[];
      datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
        tension: number;
      }[];
    };
  };
  