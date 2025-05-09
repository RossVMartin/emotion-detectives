<script>
	import { prompts } from '$lib/prompts.js';

	import { onMount } from 'svelte';
	import { debounce } from '$lib/utils.js';

	let onboarding = true;
	let revealAnswers = false;

	const rounds = 5;
	let game;

	function initialiseGameObject() {
		game = {
			prompts: [],
			promptIndexes: [],
			round: 0,
			answers: []
		};

		revealAnswers = false;
	}

	initialiseGameObject();

	function handleStartGame() {
		initialiseGameObject();
		for (let i = 0; i < rounds; i++) {
			let index = null;
			while (index === null || game.promptIndexes.includes(index)) {
				index = Math.floor(Math.random() * prompts.length);
			}
			game.prompts.push(prompts[index]);
			game.promptIndexes.push(index);
		}

		game.round = 0;
		onboarding = false;
	}

	function selectAnswer(choice) {
		const correct = choice === game.prompts[game.round].answer;
		game.answers.push(correct);
		revealAnswers = true;
	}
</script>

<div
	class="relative flex min-h-screen w-full flex-col items-center justify-center gap-2 overflow-y-auto bg-gradient-to-br from-sky-900 via-indigo-900 to-black p-4 text-white"
>
	{#if onboarding}
		<!-- Glass panel -->
		<div
			class="flex flex-col rounded-xl border border-white/20 bg-white/10 p-8 shadow-lg backdrop-blur-xl"
		>
			<h1 class="w-full text-center text-4xl font-bold">Emotion Detectives</h1>
			<button
				on:click={handleStartGame}
				class="mt-6 rounded-lg bg-white/10 px-6 py-3 text-lg font-semibold text-white shadow-md ring-1 ring-white/20 backdrop-blur-md transition duration-300 hover:bg-white/20 hover:shadow-xl hover:ring-white/30"
			>
				Start Game
			</button>
			<p class="mt-4 max-w-prose text-sm text-white/80">
				Note: This is not a self-help tool and everyone's experiences are different. There are no
				real 'right' or 'wrong' answers here.
			</p>
		</div>
	{:else}
		<div
			class="flex flex-col rounded-xl border border-white/20 bg-white/10 p-8 shadow-lg backdrop-blur-xl"
		>
			<h1 class="w-full text-center text-4xl font-bold">Round {game.round + 1}</h1>
			<p class="mt-4 max-w-prose text-xl text-white/90">
				{game.prompts[game.round].prompt}
			</p>
		</div>
		<p class="mt-4 max-w-prose text-2xl font-bold text-white/90">
			Which emotion is being described here?
		</p>
		<div class="mt-4 flex w-fit flex-wrap gap-4">
			{#each game.prompts[game.round].choices as choice}
				<button
					disabled={revealAnswers}
					on:click={() => {
						selectAnswer(choice);
					}}
					class="rounded-lg px-6 py-3 text-lg font-semibold text-white shadow-md ring-1 backdrop-blur-md transition duration-300 hover:bg-white/20 hover:shadow-xl {revealAnswers
						? choice === game.prompts[game.round].answer
							? 'bg-green-500/20 ring-green-400/20 hover:bg-green-600/40'
							: 'bg-red-500/20 ring-red-400/20 hover:bg-red-600/40'
						: 'bg-white/10 ring-white/20 hover:bg-white/20 hover:ring-white/30'}">{choice}</button
				>
			{/each}
		</div>
		{#if revealAnswers}
			<div
				class="mt-4 flex flex-col items-center justify-center rounded-xl border border-white/20 bg-white/10 p-8 shadow-lg backdrop-blur-xl"
			>
				<h1 class="mb-4 w-full text-center text-2xl font-bold">
					{game.answers[game.round] ? 'Correct' : 'Incorrect'}
				</h1>
				<p class="text-lg text-white/90">
					{game.prompts[game.round].notes}
				</p>
				{#if game.round === game.prompts.length - 1}
					<button
						on:click={() => {
							onboarding = true;
						}}
						class="mt-4 w-fit rounded-lg bg-white/10 px-6 py-3 text-lg font-semibold text-white shadow-md ring-1 ring-white/20 backdrop-blur-md transition duration-300 hover:bg-white/20 hover:shadow-xl hover:ring-white/30"
						>Play Again</button
					>
				{:else}
					<button
						on:click={() => {
							game.round++;
							revealAnswers = false;
						}}
						class="mt-4 w-fit rounded-lg bg-white/10 px-6 py-3 text-lg font-semibold text-white shadow-md ring-1 ring-white/20 backdrop-blur-md transition duration-300 hover:bg-white/20 hover:shadow-xl hover:ring-white/30"
						>Next Round</button
					>
				{/if}
			</div>
		{/if}
	{/if}
</div>

<style></style>
