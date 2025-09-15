// page.tsx
"use client";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div className="w-xl min-h-screen mx-auto border-r-border border-l-border border">
      <Navbar />
      <div className="flex flex-col p-4 gap-4">
        <Card>
          <CardHeader>
            <h1 className="text-2xl font-bold">Card title</h1>
          </CardHeader>
          <CardContent>
            <img src="https://placehold.co/600x400/EEE/31343C" className="w-full h-full mb-4" alt="" />
            <Button>Read more...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h1 className="text-2xl font-bold">Card title</h1>
          </CardHeader>
          <CardContent>
            <img src="https://placehold.co/600x400/EEE/31343C" className="w-full h-full mb-4" alt="" />
            <Button>Read more...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h1 className="text-2xl font-bold">Card title</h1>
          </CardHeader>
          <CardContent>
            <img src="https://placehold.co/600x400/EEE/31343C" className="w-full h-full mb-4" alt="" />
            <Button>Read more...</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
 