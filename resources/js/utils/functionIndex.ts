import { JournalEntry } from "@/types/journal-entries/IJournal";

export function todayDate() {
    const today = new Date();

    return [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, '0'),
        String(today.getDate()).padStart(2, '0',)
    ].join('-');
}

export function formatDate(value: string) {
    return new Intl.DateTimeFormat("en", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date(value.slice(0, 10)));
}

export function displayTitle(journal: JournalEntry) {
    if (journal.title) {
        return journal.title;
    }

    return journal.is_draft ? "Untitled Draft" : "Untitled Entry";
}

export function displayExcerpt(content: string | null) {
    if (!content) {
        return "No content yet.";
    }

    return content.length > 140 ? `${content.slice(0, 140)}...` : content;
}