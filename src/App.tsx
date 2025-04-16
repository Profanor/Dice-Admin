import AdminHeader from "./components/admin-header";
import LoginCard from "./components/login-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      <AdminHeader />
      <section className="flex-1 flex items-center justify-center px-4">
        <LoginCard />
      </section>
    </main>
  );
}
