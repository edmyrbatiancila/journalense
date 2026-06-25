export type JournalEntry = {
    id: number;
    title: string | null;
    content: string | null;
    mood: string | null;
    entry_date: string;
    is_draft: boolean;
    created_at: string;
    updated_at: string;
};

export type PaginationLink = {
    url: string | null;
    label: string;
    active: boolean;
};

export type PaginatedJournalEntries = {
    data: JournalEntry[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    from: number | null;
    to: number | null;
    total: number;
};