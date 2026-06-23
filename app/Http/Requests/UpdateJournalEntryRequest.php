<?php

namespace App\Http\Requests;

use App\Models\JournalEntry;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateJournalEntryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $journal = $this->route('journal');

        return $journal instanceof JournalEntry
            && $this->user()->is($journal->user);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => [
                Rule::requiredIf(fn (): bool => ! $this->boolean('is_draft')),
                'nullable',
                'string',
                'max:255',
            ],
            'content' => [
                Rule::requiredIf(fn (): bool => ! $this->boolean('is_draft')),
                'nullable',
                'string',
            ],
            'mood' => ['nullable', 'string', 'max:50'],
            'entry_date' => ['required', 'date'],
            'is_draft' => ['required', 'boolean'],
        ];
    }
}
