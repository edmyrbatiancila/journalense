<?php

namespace App\Services\JournalEntry;

use App\Models\JournalEntry;
use Illuminate\Http\Request;

class JournalEntryServices
{
    public function ensureOwner(Request $request, JournalEntry $journal): void
    {
        abort_unless(
            $journal->user_id === $request->user()->id,
            403
        );
    }
}