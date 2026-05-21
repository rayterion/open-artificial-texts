import Link from "next/link";

const navigationLinks = [
  { label: "Prompts", href: "#prompts" },
  {
    label: "Contribute",
    href: "https://github.com/rayterion/open-artificial-texts",
    target: "_blank",
    rel: "noopener noreferrer"
  },
];

export default function MainHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white/90 text-zinc-950 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90 dark:text-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-normal transition-colors hover:text-teal-700 dark:hover:text-teal-300"
        >
          Open Artificial Texts
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-2"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.target}
              rel={link.rel}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#submit"
            className="rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400"
          >
            Submit Prompt
          </Link>
        </nav>
      </div>
    </header>
  );
}
