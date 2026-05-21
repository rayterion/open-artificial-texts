import Link from "next/link";

const footerSections = [
  {
    title: "Library",
    links: [{ label: "Prompts", href: "/prompts" }],
  },
];

export default function MainFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 sm:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Link
            href="/"
            className="text-base font-semibold text-zinc-950 transition-colors hover:text-teal-700 dark:text-zinc-50 dark:hover:text-teal-300"
          >
            Open Artificial Texts
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-6">
            A practical library of reusable prompt templates, real results, and
            notes for improving AI agent work.
          </p>
        </div>

        {footerSections.map((section) => (
          <div key={section.title}>
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {section.title}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-teal-700 dark:hover:text-teal-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-zinc-200 px-6 py-4 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
        Copyright {new Date().getFullYear()} Open Artificial Texts. Built for
        the community.
      </div>
    </footer>
  );
}
