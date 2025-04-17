import AdminHeader from "./components/admin-header";
import LoginCard from "./components/login-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      <AdminHeader />
      <section className="flex-1 flex items-center justify-center px-4">
        <div className="flex flex-col items-center w-full max-w-md">
          <LoginCard />
          <p className="text-center text-sm mt-6 text-gray-600">
            Need help?{" "}
            <span className="text-[#2BADE7] cursor-pointer hover:underline">
              Contact us
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
