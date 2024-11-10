import Link from "next/link";

export const quickLinks = [
  { name: "Create table", href: "/create-table" },
  { name: "Quick join table", href: "/quick-join" },
  { name: "See all tables", href: "/table-list" },
];

export function QuickLinks() {
  return (
    <div className={"flex justify-center gap-10"}>
      {quickLinks.map((item) => {
        return (
          <div key={item.name}>
            <Link
              href={item.href}
              className={"w-max rounded-xl px-4 py-3 shadow-md"}
            >
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}