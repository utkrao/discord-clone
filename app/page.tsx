import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">Discord Clone</p>
      <Button variant='ghost'>Click me</Button>
    </div>
  );
}
