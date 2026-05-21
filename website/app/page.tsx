import MainHeader from "@/components/main_header";
import MainFooter from "@/components/main_footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="flex-1 bg-white dark:bg-zinc-950">
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-normal text-teal-700 dark:text-teal-300">
              Open prompt library
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-zinc-950 sm:text-5xl dark:text-zinc-50">
              Reusable AI agent prompts with examples that show the work.
            </h1>
            <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Collect, test, and improve prompt templates through practical
              examples and transparent results.
            </p>
          </div>
        </section>
      </main>
      <MainFooter />
    </div>
  );
}
