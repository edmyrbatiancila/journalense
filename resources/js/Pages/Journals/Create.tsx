import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { JournalFormData } from "@/types/journal-entries/ICreate";
import { todayDate } from "@/utils/functionIndex";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Create() {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        transform
    } = useForm<JournalFormData>({
        title: '',
        content: '',
        mood: '',
        entry_date: todayDate(),
        is_draft: false,
    });

    const submit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const submitter = (e.nativeEvent as SubmitEvent)
            .submitter as HTMLButtonElement | null;

        const isDraft = submitter?.value === 'draft';

        transform((formData) => ({
            ...formData,
            is_draft: isDraft
        }));

        post(route('journals.store'), {
            preserveScroll: true,
            onFinish: () => transform((formData) => formData),
        });
    };

    return (
        <Authenticated
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    New Journal Entry
                </h2>
            }
        >
            <Head title="New Journal Entry" />

            <div className="py-12">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-6 shadow-sm sm:rounded-lg">
                        <form onSubmit={ submit } className="space-y-6">
                            <div>
                                <InputLabel htmlFor="title" value="Title" />

                                <TextInput 
                                    id="title"
                                    className="mt-1 block w-full"
                                    value={ data.title }
                                    onChange={(e) => setData('title', e.target.value)}
                                    isFocused
                                />

                                <InputError 
                                    className="mt-2"
                                    message={ errors.title }
                                />
                            </div>

                            <div>
                                <InputLabel 
                                    htmlFor="entry_date"
                                    value="Entry Date"
                                />

                                <TextInput 
                                    id="entry_date"
                                    type="date"
                                    className="mt-1 block w-full"
                                    value={data.entry_date}
                                    onChange={(e) =>
                                        setData('entry_date', e.target.value)
                                    }
                                    required
                                />

                                <InputError 
                                    className="mt-2"
                                    message={ errors.entry_date }
                                />
                            </div>

                            <div>
                                <InputLabel htmlFor="mood" value="Mood" />

                                <select 
                                    id="mood"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    value={data.mood}
                                    onChange={(e) => setData('mood', e.target.value)}
                                >
                                    <option value="">Select a mood</option>
                                    <option value="happy">Happy</option>
                                    <option value="calm">Calm</option>
                                    <option value="neutral">Neutral</option>
                                    <option value="sad">Sad</option>
                                    <option value="stressed">Stressed</option>
                                </select>

                                <InputError 
                                    className="mt-2"
                                    message={ errors.mood }
                                />
                            </div>

                            <div>
                                <InputLabel htmlFor="content" value="Content" />

                                <textarea 
                                    id="content"
                                    className="mt-1 block min-h-64 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    value={ data.content }
                                    onChange={(e) => setData('content', e.target.value)}
                                />

                                <InputError 
                                    className="mt-2"
                                    message={ errors.content }
                                />
                            </div>

                            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <Link
                                    href={ route('journals.index') }
                                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                                >
                                    Cancel
                                </Link>

                                <div className="flex gap-3">
                                    <SecondaryButton
                                        type="submit"
                                        name="intent"
                                        value="draft"
                                        disabled={ processing }
                                    >
                                        Save Draft
                                    </SecondaryButton>

                                    <PrimaryButton
                                        type="submit"
                                        name="intent"
                                        value="publish"
                                        disabled={ processing }
                                    >
                                        Save Entry
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}