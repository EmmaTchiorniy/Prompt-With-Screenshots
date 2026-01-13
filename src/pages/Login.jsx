import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <div className="absolute inset-0 z-0 bg-subtle-grid" aria-hidden="true" />
      <div
        className="pointer-events-none fixed bottom-0 right-0 z-0 h-[20vh] w-[60vw] bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-purple-500 opacity-90"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        aria-hidden="true"
      />

      <header className="relative z-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <Link
            to="/"
            className="font-display text-xl font-semibold tracking-tight text-slate-900"
          >
            stripe
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold text-[rgb(var(--accent))]"
          >
            Sign up &gt;
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex min-h-[calc(100vh-96px)] items-center justify-center px-6 py-12">
        <Card className="w-full max-w-xl border-slate-200/80 bg-white/95 shadow-soft backdrop-blur">
          <CardHeader className="space-y-3">
            <CardTitle className="font-display text-2xl font-semibold text-slate-900">
              Let's get you to the right place
            </CardTitle>
            <CardDescription className="text-base text-slate-600">
              We just need a few quick details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-3 md:grid-cols-[140px_1fr] md:items-center">
              <Label htmlFor="email" className="text-sm text-slate-700">
                Work email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="jane@example.com"
              />
            </div>
            <div className="grid gap-3 md:grid-cols-[140px_1fr] md:items-center">
              <Label htmlFor="country" className="text-sm text-slate-700">
                Country/Region
              </Label>
              <Select defaultValue="germany">
                <SelectTrigger id="country">
                  <SelectValue placeholder="Germany" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="germany">Germany</SelectItem>
                  <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                  <SelectItem value="united-states">United States</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end">
              <Button className="h-10 rounded-full bg-[rgb(var(--accent))] px-6 text-sm font-semibold shadow-sm hover:bg-[rgb(var(--accent-strong))]">
                Continue
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
