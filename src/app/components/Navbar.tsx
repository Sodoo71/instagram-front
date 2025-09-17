import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="w-full flex justify-between p-4 border-b">
      <Button>
        <Menu />
      </Button>
      <Button onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? "🌙" : "☀️"}
      </Button>
    </div>
  );
};
