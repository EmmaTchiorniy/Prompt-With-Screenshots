import { Link, NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const mainNavItems = ["Products", "Solutions", "Developers", "Resources"];

export default function PricingPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="absolute inset-0 -z-20 bg-slate-50" aria-hidden="true" />
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-40 top-10 h-[60%] w-[120%] rounded-[45%] bg-[conic-gradient(from_180deg_at_50%_50%,#fb7185,#f97316,#8b5cf6,#22d3ee,#fb7185)] opacity-90 blur-3xl" />
        <div className="absolute bottom-[-25%] left-[-10%] h-[50%] w-[120%] rounded-[40%] bg-[radial-gradient(ellipse_at_bottom,#38bdf8_0%,transparent_70%)] opacity-70 blur-2xl" />
        <div className="absolute right-[-15%] top-[35%] h-[45%] w-[55%] rounded-[40%] bg-[linear-gradient(120deg,#f472b6,transparent_70%)] opacity-70 blur-3xl" />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-subtle-grid opacity-70"
        aria-hidden="true"
      />

      <header className="relative z-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-10">
            <Link
              to="/"
              className="font-display text-xl font-semibold tracking-tight text-slate-900"
            >
              stripe
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
              {mainNavItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="transition-colors hover:text-slate-900"
                >
                  {item}
                </button>
              ))}
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  }`
                }
              >
                Pricing
              </NavLink>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <NavLink
              to="/login"
              className="text-slate-600 transition-colors hover:text-slate-900"
            >
              Sign in &gt;
            </NavLink>
            <Button className="rounded-full bg-[rgb(var(--accent))] px-5 text-sm font-semibold shadow-sm hover:bg-[rgb(var(--accent-strong))]">
              Contact sales
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-8">
          <div className="space-y-10">
            <h1 className="max-w-2xl text-balance font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
              Pricing built for businesses of all sizes
            </h1>

            <div className="grid gap-6 md:grid-cols-2">
              <Card
                id="standard"
                className="rounded-3xl border-slate-200/80 bg-white/95 shadow-soft backdrop-blur"
              >
                <CardContent className="grid gap-6 pt-6 md:grid-cols-[1.15fr_0.85fr]">
                  <div className="space-y-4">
                    <CardTitle className="font-display text-2xl font-semibold text-slate-900">
                      Standard
                    </CardTitle>
                    <p className="text-sm text-slate-500">
                      Access a complete payments platform with simple, pay as
                      you go pricing.
                    </p>
                    <Button className="rounded-full bg-[rgb(var(--accent))] px-6 text-sm font-semibold shadow-sm hover:bg-[rgb(var(--accent-strong))]">
                      Get started
                    </Button>
                  </div>
                  <div className="space-y-2 text-left md:text-right">
                    <div className="text-4xl font-semibold text-[rgb(var(--accent))]">
                      1.5% + 20p
                    </div>
                    <p className="text-xs text-slate-500">for UK cards</p>
                  </div>
                </CardContent>
              </Card>

              <Card
                id="custom"
                className="rounded-3xl border-slate-800 bg-slate-900 text-white shadow-xl"
              >
                <CardContent className="grid gap-6 pt-6 md:grid-cols-[1fr_1fr]">
                  <div className="space-y-4">
                    <CardTitle className="font-display text-2xl font-semibold text-white">
                      Custom
                    </CardTitle>
                    <p className="text-sm text-slate-300">
                      Design a custom package for large payments volume and
                      unique business models.
                    </p>
                    <Button className="rounded-full bg-sky-400 px-6 text-sm font-semibold text-slate-900 hover:bg-sky-300">
                      Contact sales
                    </Button>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-200">
                    {["IC+ pricing", "Volume discounts", "Country-specific rates"].map(
                      (feature) => (
                        <li
                          key={feature}
                          className="flex items-center justify-between rounded-xl border border-slate-800/70 bg-slate-800/70 px-4 py-3"
                        >
                          <span>{feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="rounded-full border border-slate-200/70 bg-white/90 px-6 py-2 shadow-lg backdrop-blur">
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#standard" className="text-slate-900">
              Standard pricing
            </a>
            <a href="#custom" className="text-slate-600 hover:text-slate-900">
              Custom pricing
            </a>
            <NavLink to="/faqs" className="text-slate-600 hover:text-slate-900">
              FAQs
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
