"use client";

import { useRouter } from "next/navigation";

const Button = ({ children,  }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard/settings");
  };
  return (
    <button

      onClick={handleClick}
      className=" bg-green-500 px-4 py-2 my-3"
    >
      {children}
    </button>
  );
};

export default Button;
