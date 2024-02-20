import { Button, DarkThemeToggle, Flowbite } from "flowbite-react";

export default function Home() {
  return (
    <Flowbite>
      <main className="flex min-h-screen flex-col items-center p-24">
        <Button className="bg-red-500 hover:bg-black">Click me</Button>
        <DarkThemeToggle />
        <p>test</p>
      </main>
    </Flowbite>
  );
}
