import { QuickLinks } from "@/app/_components/QuickLinks";

export default async function Home() {
  return (
    <main className={"flex items-center justify-center text-white"}>
      <div className={"flex h-full flex-col gap-10"}>
        <h1 className={"mt-40 text-7xl"}>Welcome to 21 hub</h1>
        <div className={"mt-40"}>
          <QuickLinks />
        </div>
      </div>
    </main>
  );
}
