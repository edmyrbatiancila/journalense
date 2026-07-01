import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PaginatedJournalEntries } from "@/types/journal-entries/IJournal";
import { displayExcerpt, displayTitle, formatDate } from "@/utils/functionIndex";
import { Head, Link } from "@inertiajs/react";

interface IndexProps {
    journals: PaginatedJournalEntries;
}

export default function Index({ journals }: IndexProps) {
    return (
        <Authenticated
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Journal Entries
                </h2>
            }
        >
            <Head title="Journal Entries" />

            <div className="py-8 sm:py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow-sm sm:rounded-lg sm:p-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">
                                    Your Journal Archive
                                </h3>

                                <p className="mt-1 text-sm text-gray-600">
                                    Browse your recent reflections and drafts
                                </p>
                            </div>

                            <Link
                                href={ route("journals.create") }
                                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                            >
                                New Entry
                            </Link>
                        </div>

                        {journals.data.length === 0 ? (
                            <div className="mt-8 rounded-md border border-dashed border-gray-300 p-8 text-center">
                                <h3 className="text-base font-medium text-gray-900">
                                    No journal entries yet
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    Start your first entry and it will appear here.
                                </p>

                                <Link
                                    href={route("journals.create")}
                                    className="mt-4 inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Create Entry
                                </Link>
                            </div>
                        ) : (
                            <div className="mt-8 space-y-4">
                                {journals.data.map((journal) => (
                                    <article
                                        key={journal.id}
                                        className="rounded-md border border-gray-200 p-5 transition hover:border-gray-300"
                                    >
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                            <div className="min-w-0">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <h3 className="break-words text-lg font-semibold text-gray-900">
                                                        {displayTitle(journal)}
                                                    </h3>

                                                    {journal.is_draft && (
                                                        <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                                            Draft
                                                        </span>
                                                    )}

                                                    {journal.mood && (
                                                        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium capitalize text-gray-700">
                                                            {journal.mood}
                                                        </span>
                                                    )}
                                                </div>

                                                <p className="mt-1 text-sm text-gray-500">
                                                    {formatDate(journal.entry_date)}
                                                </p>

                                                <p className="mt-3 text-sm leading-6 text-gray-700">
                                                    {displayExcerpt(journal.content)}
                                                </p>
                                            </div>

                                            <div className="flex shrink-0 gap-4 pt-1 sm:pt-0">
                                                <Link
                                                    href={route("journals.show", journal.id)}
                                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-900"
                                                >
                                                    View
                                                </Link>

                                                <Link
                                                    href={route("journals.edit", journal.id)}
                                                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                                                >
                                                    Edit
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}

                        {journals.links.length > 3 && (
                            <div className="mt-8 flex flex-wrap gap-2">
                                {journals.links.map((link, index) =>
                                    link.url ? (
                                        <Link
                                            key={`${link.label}-${index}`}
                                            href={link.url}
                                            preserveScroll
                                            className={`rounded-md border px-3 py-2 text-sm ${
                                                link.active
                                                    ? "border-gray-800 bg-gray-800 text-white"
                                                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                                            }`}
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                        />
                                    ) : (
                                        <span
                                            key={`${link.label}-${index}`}
                                            className="rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-400"
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                        />
                                    ),
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}