"use client";

import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Switch } from "@/app/_components/ui/switch";
import { X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [maxPlayers, setMaxPlayers] = useState(6);
  const [minimumStakes, setMinimumStakes] = useState(500);
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Creating your table</h2>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <Input placeholder="Table name" className="w-full" />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <label className="text-sm">Max players: {maxPlayers}</label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setMaxPlayers(Math.max(1, maxPlayers - 1))}
                >
                  -
                </Button>
                <span>{maxPlayers}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setMaxPlayers(Math.min(10, maxPlayers + 1))}
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Private table</span>
            <Switch checked={isPrivate} onCheckedChange={setIsPrivate} />
          </div>

          {isPrivate && (
            <Input
              type="password"
              placeholder="Table password"
              className="w-full"
            />
          )}

          <div className="space-y-1">
            <label className="text-sm">Minimum stakes: ${minimumStakes}</label>
            <input
              type="range"
              min="100"
              max="1000"
              value={minimumStakes}
              onChange={(e) => setMinimumStakes(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm">
              Select your table&#39;s background
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-emerald-800 rounded-lg cursor-pointer" />
              <div className="aspect-square bg-gray-100 rounded-lg cursor-pointer border-2 border-dashed border-gray-300" />
            </div>
          </div>

          <Button className="w-full">Create</Button>
        </div>
      </Card>
    </main>
  );
}
