import Button from "@/app/components/Button";
import React from "react";
export const metadata = {
  title: "Analytics Page",
  description: "This is our Analytics page",
};

export default function Analytics() {
  // throw new Error("Error occured in Analytics page");
  return (
    <div>
      <h2>analytics page</h2>
      <Button>Go to Setting page</Button>
    </div>
  );
}
