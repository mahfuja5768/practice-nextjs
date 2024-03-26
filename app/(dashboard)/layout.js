export const metadata = {
  title: "DashboardLayout Page",
  description: "This is our DashboardLayout page",
};


export default function DashboardLayout({ children }) {
    // throw new Error("Error occured in dashboard layout page");
  return (
    <>
      <div>
        <ul className="flex gap-5 my-4">
          <li>Analytics</li>
          <li>Settings</li>
        </ul>

        {children}
      </div>
    </>
  );
}
