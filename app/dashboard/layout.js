export const metadata = {
  title: "DashboardLayout Page",
  description: "This is our DashboardLayout page",
};


export default function DashboardLayout({ children }) {
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
