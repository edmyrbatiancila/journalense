import Authenticated from "@/Layouts/AuthenticatedLayout";
import { JournalEntry } from "@/types/journal-entries/IJournal";
import { displayTitle, formatDate } from "@/utils/functionIndex";
import { Head, Link, router } from "@inertiajs/react";
import { motion } from "motion/react";
import { useState } from "react";

import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Separator } from "@/Components/ui/separator";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/Components/ui/alert-dialog";

interface ShowProps {
    journal: JournalEntry;
}

export default function Show({ journal }: ShowProps) {
    const [isDeleting, setIsDeleting] = useState(false);

    const title = displayTitle(journal);
    const content = journal.content?.trim();

    const deleteJournal = () => {
        setIsDeleting(true);

        router.delete(route("journals.destroy", journal.id), {
            preserveScroll: true,
            onFinish: () => setIsDeleting(false),
        });
    };

    return (
        <Authenticated
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Journal Details
                </h2>
            }
        >
            <Head title={title} />

            <div className="py-8 sm:py-12">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <Button variant="ghost" asChild className="w-fit px-0">
                                <Link href={route("journals.index")}>
                                    Back to archive
                                </Link>
                            </Button>

                            <div className="grid grid-cols-2 gap-3 sm:flex">
                                <Button 
                                    variant="outline" 
                                    className="w-full sm:w-auto"
                                    asChild
                                >
                                    <Link href={route("journals.edit", journal.id)}>
                                        Edit
                                    </Link>
                                </Button>

                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            disabled={isDeleting}
                                            className="w-full sm:w-auto"
                                        >
                                            Delete
                                        </Button>
                                    </AlertDialogTrigger>

                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>
                                                Delete this journal entry?
                                            </AlertDialogTitle>

                                            <AlertDialogDescription>
                                                This action cannot be undone. This journal entry will be
                                                permanently removed from your archive.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>

                                        <AlertDialogFooter>
                                            <AlertDialogCancel disabled={isDeleting}>
                                                Cancel
                                            </AlertDialogCancel>

                                            <AlertDialogAction
                                                disabled={isDeleting}
                                                onClick={deleteJournal}
                                                className="bg-red-600 text-white hover:bg-red-700"
                                            >
                                                {isDeleting ? "Deleting..." : "Delete entry"}
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>

                        <Card className="overflow-hidden rounded-lg border-gray-200 bg-white shadow-sm">
                            <CardHeader className="space-y-4">
                                <div className="flex flex-wrap items-center gap-2">
                                    {journal.is_draft && (
                                        <Badge variant="secondary">
                                            Draft
                                        </Badge>
                                    )}

                                    {journal.mood && (
                                        <Badge
                                            variant="outline"
                                            className="capitalize"
                                        >
                                            {journal.mood}
                                        </Badge>
                                    )}
                                </div>

                                <div>
                                    <CardTitle className="break-words text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl">
                                        {title}
                                    </CardTitle>

                                    <CardDescription className="mt-2">
                                        Written on {formatDate(journal.entry_date)}
                                    </CardDescription>
                                </div>
                            </CardHeader>

                            <Separator />

                            <CardContent className="space-y-8 p-4 sm:p-6">
                                <motion.section
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1, duration: 0.25 }}
                                >
                                    {content ? (
                                        <div className="break-words whitespace-pre-wrap text-base leading-8 text-gray-800">
                                            {content}
                                        </div>
                                    ) : (
                                        <div className="rounded-md border border-dashed border-gray-300 p-6 text-center">
                                            <p className="text-sm font-medium text-gray-900">
                                                No content yet
                                            </p>

                                            <p className="mt-1 text-sm text-gray-600">
                                                This entry is still waiting for your thoughts.
                                            </p>
                                        </div>
                                    )}
                                </motion.section>

                                <div className="rounded-md bg-gray-50 p-4">
                                    <dl className="grid gap-4 text-sm sm:grid-cols-2">
                                        <div>
                                            <dt className="font-medium text-gray-900">
                                                Created
                                            </dt>
                                            <dd className="mt-1 text-gray-600">
                                                {formatDate(journal.created_at)}
                                            </dd>
                                        </div>

                                        <div>
                                            <dt className="font-medium text-gray-900">
                                                Last updated
                                            </dt>
                                            <dd className="mt-1 text-gray-600">
                                                {formatDate(journal.updated_at)}
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </Authenticated>
    );
}