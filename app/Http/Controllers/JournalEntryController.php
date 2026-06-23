<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreJournalEntryRequest;
use App\Http\Requests\UpdateJournalEntryRequest;
use App\Models\JournalEntry;
use App\Services\JournalEntry\JournalEntryServices;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class JournalEntryController extends Controller
{
    public function __construct(
        protected JournalEntryServices $journalEntryServices
    )
    {}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $journals = $request->user()
            ->journalEntries()
            ->latest('entry_date')
            ->latest('id')
            ->paginate(10)
            ->withQueryString()
        ;

        return Inertia::render('Journals/Index', [
            'journals' => $journals
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Journals/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreJournalEntryRequest $request): RedirectResponse
    {
        $journal = $request->user()
            ->journalEntries()
            ->create($request->validated());

        return to_route('journals.show', $journal)
            ->with('success', 'Journal entry created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, JournalEntry $journal): Response
    {
        $this->journalEntryServices->ensureOwner($request, $journal);

        return Inertia::render('Journals/Show', [
            'journal' => $journal
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, JournalEntry $journal): Response
    {
        $this->journalEntryServices->ensureOwner($request, $journal);

        return Inertia::render('Journals/Edit', [
            'journal' => $journal
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateJournalEntryRequest $request, JournalEntry $journal): RedirectResponse
    {
        $journal->update($request->validated());

        return to_route('journals.show', $journal)
            ->with('success', 'Journal entry updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, JournalEntry $journal): RedirectResponse
    {
        $this->journalEntryServices->ensureOwner($request, $journal);

        $journal->delete();

        return to_route('journals.index')
            ->with('success', 'Journal entry deleted successfully.');
    }
}
