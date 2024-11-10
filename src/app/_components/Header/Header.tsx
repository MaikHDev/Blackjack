import Image from "next/image";
import Link from "next/link";

export const navigation = [
  { name: "Friends", href: "/friends" },
  { name: "Quick join", href: "/quick-join" },
];

export function Header() {
  return (
    <div className={"flex w-full justify-center"}>
      <header className="flex h-20 w-full max-w-7xl items-center justify-between px-20 text-white">
        <Link href={"/"}>
          <span className={"text-xl"}>21 Hub</span>
        </Link>

        <nav className={"right-0 flex gap-5"}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={"rounded-sm p-3 hover:opacity-90"}
            >
              {item.name}
            </Link>
          ))}

          <div className={"flex items-center gap-1 p-3"}>
            <span>$1000</span>
            <Image
              src="/poker-chip.svg"
              alt="Poker Chip"
              width={28}
              height={28}
            />
          </div>

          <div className={"flex items-center gap-1 p-3"}>
            <Image
              className={"rounded-full"}
              src="/64.png"
              alt="User Profile"
              width={28}
              height={28}
            />
          </div>
        </nav>
      </header>
    </div>
  );
}
