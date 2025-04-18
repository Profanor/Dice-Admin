import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoute";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
