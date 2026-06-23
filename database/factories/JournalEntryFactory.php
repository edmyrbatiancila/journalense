<?php

namespace Database\Factories;

use App\Models\JournalEntry;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<JournalEntry>
 */
class JournalEntryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'title' => fake()->sentence(6),
            'content' => fake()->paragraph(3, true),
            'mood' => fake()->randomElement([
                'happy',
                'calm',
                'neutral',
                'sad',
                'stressed',
            ]),
            'entry_date' => fake()->dateTimeBetween('-1 year', 'now'),
            'is_draft' => false,
        ];
    }

    public function draft(): static
    {
        return $this->state(fn (array $attributes) => [
            'title' => null,
            'content' => null,
            'mood' => null,
            'is_draft' => true,
        ]);
    }
}
