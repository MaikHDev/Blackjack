"use client";

import { Card } from "@/app/_components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Home() {
  const maxPlayers = 6;
  const [minimumStakes, setMinimumStakes] = useState(500);
  const [isPrivate, setIsPrivate] = useState(false);
  const columns = ["Table name", "Players", "Minimum bet", "Status"];
  const rows = [
    {
      tableName: "Magicpickle",
      players: "4/6",
      minimumBet: "500",
      status: "public",
    },
    {
      tableName: "kaas",
      players: "2/5",
      minimumBet: "1500",
      status: "private",
    },
    {
      tableName: "konijn",
      players: "1/3",
      minimumBet: "50000",
      status: "private",
    },
    {
      tableName: "papier",
      players: "6/6",
      minimumBet: "100",
      status: "public",
    },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md space-y-6 p-6">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableHead
                    key={column}
                    className={cn(column === "Table name" && "w-[150px]")}
                  >
                    {column}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow key={row.tableName}>
                  <TableHead
                    className={cn(row.tableName === "tableName" && "w-[150px]")}
                  >
                    {row.tableName}
                  </TableHead>
                  <TableHead>{row.players}</TableHead>
                  <TableHead>${row.minimumBet}</TableHead>
                  <TableHead
                    className={cn(row.status === "private" && "text-red-500")}
                  >
                    {row.status}
                  </TableHead>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </main>
  );
}
