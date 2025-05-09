export const prompts = [
	{
		prompt:
			"Your chest feels tight, and your breathing is shallow. You're waiting to hear about something important, and the longer it takes, the more restless you become.",
		choices: ['Anxiety', 'Excitement', 'Frustration'],
		answer: 'Anxiety',
		notes:
			'Anxiety often presents with physical tension and restlessness when anticipating an outcome.',
		emotionCategory: 'Anticipation',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			'You feel your cheeks flush, your mouth dries up, and your mind starts replaying a conversation you had earlier where you think you said something foolish.',
		choices: ['Embarrassment', 'Regret', 'Guilt'],
		answer: 'Embarrassment',
		notes: 'Embarrassment often involves social self-awareness and physical signs like blushing.',
		emotionCategory: 'Interpersonal',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			'You’re standing in the kitchen, but you’ve forgotten what you came in for. You feel foggy, unmotivated, and your limbs feel unusually heavy.',
		choices: ['Fatigue', 'Sadness', 'Disinterest'],
		answer: 'Fatigue',
		notes:
			'Fatigue can affect both mental clarity and physical energy, sometimes mimicking low mood.',
		emotionCategory: 'Physical Sensations',
		redHerring: false,
		difficulty: 'Easy',
		source: 'chatgpt'
	},
	{
		prompt:
			'You notice you’re clenching your jaw and your stomach feels tense. You’ve been interrupted repeatedly during a task and everything is taking longer than it should.',
		choices: ['Annoyance', 'Stress', 'Determination'],
		answer: 'Annoyance',
		notes: 'Annoyance often builds gradually in response to repeated small frustrations.',
		emotionCategory: 'Frustration/Irritation',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			'You feel a dull ache in your back, your eyes are sore, and you’ve been sitting for hours staring at a screen.',
		choices: ['Exhaustion', 'Frustration', 'Bad Posture'],
		answer: 'Bad Posture',
		notes: 'Sometimes sensations aren’t tied to emotions at all.',
		emotionCategory: 'Misattribution',
		redHerring: true,
		difficulty: 'Easy',
		source: 'chatgpt'
	},
	{
		prompt:
			"You feel light, alert, and find yourself smiling at small things. Music seems better than usual, and you're in the mood to text people you care about.",
		choices: ['Joy', 'Relief', 'Excitement'],
		answer: 'Joy',
		notes: 'Joy can show up as lightness and an urge to connect or share the feeling with others.',
		emotionCategory: 'Positive',
		redHerring: false,
		difficulty: 'Easy',
		source: 'chatgpt'
	},
	{
		prompt:
			'You feel a burst of energy, like you could run a marathon, but your hands are a bit shaky and your heart is racing. You just received very good news.',
		choices: ['Excitement', 'Anxiety', 'Shock'],
		answer: 'Excitement',
		notes:
			'Excitement and anxiety can feel physically similar but differ in context and interpretation.',
		emotionCategory: 'Surprise/Awe',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			'You’re lying in bed wide awake at 3AM. Your heart feels heavy and you’re replaying past decisions, unsure if you can fix anything.',
		choices: ['Guilt', 'Sadness', 'Regret'],
		answer: 'Regret',
		notes: 'Regret often involves reflection on past choices and a desire to undo or fix them.',
		emotionCategory: 'Memory/Reflection',
		redHerring: false,
		difficulty: 'Hard',
		source: 'chatgpt'
	},
	{
		prompt:
			"Your skin feels clammy, your hands are trembling slightly, and you're sure people are watching you walk into the room.",
		choices: ['Self-consciousness', 'Panic', 'Curiosity'],
		answer: 'Self-consciousness',
		notes:
			'Self-consciousness can cause acute awareness of one’s actions and how they’re perceived.',
		emotionCategory: 'Interpersonal',
		redHerring: false,
		difficulty: 'Hard',
		source: 'chatgpt'
	},
	{
		prompt:
			"You're staring out of the window, unable to start your task. You feel numb, and time seems to pass without meaning.",
		choices: ['Boredom', 'Depression', 'Daydreaming'],
		answer: 'Boredom',
		notes:
			"Boredom often feels like emotional flatness and restlessness, especially when there's nothing engaging around.",
		emotionCategory: 'Boredom/Stillness',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			'Your hands feel cold and your shoulders are slightly raised. You keep checking the time and can’t focus on anything else until you get that one message back.',
		choices: ['Anxiety', 'Anticipation', 'Hope'],
		answer: 'Anticipation',
		notes:
			'Anticipation often has physical overlap with anxiety, but the underlying emotion is more focused on awaiting something specific.',
		emotionCategory: 'Anticipation',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			"You notice your body is energised and you're talking slightly faster than usual. You've just been praised in front of others for something you worked hard on.",
		choices: ['Pride', 'Happiness', 'Relief'],
		answer: 'Pride',
		notes:
			'Pride is often tied to a sense of achievement and public validation, with a lift in mood and energy.',
		emotionCategory: 'Positive',
		redHerring: false,
		difficulty: 'Easy',
		source: 'chatgpt'
	},
	{
		prompt:
			'Your stomach drops and a wave of heat runs over your face. You just realised you completely forgot a close friend’s birthday.',
		choices: ['Embarrassment', 'Guilt', 'Panic'],
		answer: 'Guilt',
		notes:
			'Guilt is a moral emotion, often triggered by a sense of having let someone down, especially someone important.',
		emotionCategory: 'Interpersonal',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			"You feel unusually alert and your muscles are slightly tensed. You're walking alone and keep glancing behind you without thinking.",
		choices: ['Fear', 'Paranoia', 'Hyper-awareness'],
		answer: 'Fear',
		notes:
			'Fear often triggers vigilance and physical readiness in unfamiliar or uncertain situations.',
		emotionCategory: 'Threat Response',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			'Your mouth is watering slightly and you can’t stop thinking about that one takeaway meal. You’re trying to concentrate, but you keep picturing it.',
		choices: ['Craving', 'Excitement', 'Hunger'],
		answer: 'Craving',
		notes:
			'Craving can feel both emotional and physical, especially when focused on a specific reward.',
		emotionCategory: 'Misattribution',
		redHerring: true,
		difficulty: 'Easy',
		source: 'chatgpt'
	},
	{
		prompt:
			'You feel stuck. You’ve got the energy to move, but no task feels worth starting. You cycle through options, but nothing seems meaningful.',
		choices: ['Apathy', 'Sadness', 'Indecisiveness'],
		answer: 'Apathy',
		notes:
			'Apathy is a lack of motivation or interest, even in the presence of available options or energy.',
		emotionCategory: 'Stillness/Avoidance',
		redHerring: false,
		difficulty: 'Hard',
		source: 'chatgpt'
	},
	{
		prompt:
			'You’re fiddling with a pen, tapping your foot, and glancing at the door. You’ve got somewhere to be, but someone’s keeping you waiting.',
		choices: ['Impatience', 'Irritation', 'Boredom'],
		answer: 'Impatience',
		notes:
			'Impatience is often a blend of restlessness and urgency, especially when others are delaying your plans.',
		emotionCategory: 'Frustration/Irritation',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			'You feel calm, your muscles are relaxed, and you’ve just finished a long day of work. There’s nothing else demanding your attention.',
		choices: ['Contentment', 'Relief', 'Satisfaction'],
		answer: 'Relief',
		notes: 'Relief often comes after tension or effort has been resolved or completed.',
		emotionCategory: 'Release/Resolution',
		redHerring: false,
		difficulty: 'Easy',
		source: 'chatgpt'
	},
	{
		prompt:
			'You’re standing in the middle of a crowd, yet you feel separate from everyone else. You feel distant, like you’re watching yourself from the outside.',
		choices: ['Loneliness', 'Detachment', 'Confusion'],
		answer: 'Detachment',
		notes:
			'Detachment may involve emotional distancing even in social contexts, often tied to dissociation or overwhelm.',
		emotionCategory: 'Disconnection',
		redHerring: false,
		difficulty: 'Hard',
		source: 'chatgpt'
	},
	{
		prompt:
			'Your ears perk up, eyes widen slightly, and you feel drawn in. You’ve just overheard something completely unexpected.',
		choices: ['Curiosity', 'Suspicion', 'Excitement'],
		answer: 'Curiosity',
		notes:
			'Curiosity draws attention and mental focus, especially in response to new or surprising information.',
		emotionCategory: 'Engagement/Interest',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			'Your jaw is tight, and you notice you’ve been clenching your fists without meaning to. A small issue keeps replaying in your mind, over and over.',
		choices: ['Frustration', 'Rage', 'Overthinking'],
		answer: 'Frustration',
		notes:
			'Frustration often presents as tension and repetitive thoughts about unresolved annoyances.',
		emotionCategory: 'Frustration/Irritation',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			'You feel hollow, like something is missing. Even happy music or favourite foods don’t register. Everything feels distant and muted.',
		choices: ['Depression', 'Disappointment', 'Fatigue'],
		answer: 'Depression',
		notes:
			'Depression can involve emotional numbness and a lack of response to things that normally bring pleasure.',
		emotionCategory: 'Low Mood',
		redHerring: false,
		difficulty: 'Hard',
		source: 'chatgpt'
	},
	{
		prompt:
			'Your body is light, and you’ve been humming to yourself all day. It’s sunny out, and things feel just right, even if nothing special has happened.',
		choices: ['Contentment', 'Joy', 'Gratitude'],
		answer: 'Contentment',
		notes:
			'Contentment is a subtle, steady sense of satisfaction, not necessarily tied to any single event.',
		emotionCategory: 'Positive',
		redHerring: false,
		difficulty: 'Easy',
		source: 'chatgpt'
	},
	{
		prompt:
			'Your breathing is shallow and rapid, and your palms are clammy. You’re seconds from delivering a speech to a room full of people.',
		choices: ['Nervousness', 'Fear', 'Excitement'],
		answer: 'Nervousness',
		notes:
			'Nervousness includes physical symptoms of fear, but often in anticipation of a specific social task or performance.',
		emotionCategory: 'Social/Performance',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			"You feel a bit dull mentally, like you're walking through fog. You’re not sad, but also not really present or interested in anything.",
		choices: ['Boredom', 'Lethargy', 'Dissociation'],
		answer: 'Boredom',
		notes: 'Boredom is often a flat, low-stimulation state where nothing feels engaging.',
		emotionCategory: 'Stillness/Avoidance',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			'Your heart is beating hard and fast, and you feel slightly short of breath. You’re sitting still, but suddenly thinking about everything that could go wrong.',
		choices: ['Anxiety', 'Excitement', 'Cardio Exercise'],
		answer: 'Anxiety',
		notes:
			'Anxiety often includes strong physical arousal with no external movement, tied to worrying thoughts.',
		emotionCategory: 'Threat Response',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			"You're on edge and keep replaying a small awkward moment from earlier, even though no one else likely noticed it.",
		choices: ['Embarrassment', 'Shame', 'Hyperfocus'],
		answer: 'Embarrassment',
		notes:
			'Embarrassment can feel all-consuming even when the event is minor or unnoticed by others.',
		emotionCategory: 'Social/Performance',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			'You’re fidgety and pacing around the room. You feel like you should be doing something, but you’re not sure what, and it’s making you irritated.',
		choices: ['Restlessness', 'Frustration', 'Confusion'],
		answer: 'Restlessness',
		notes:
			'Restlessness is a physical agitation without a clear direction, often masking other feelings underneath.',
		emotionCategory: 'Misattribution',
		redHerring: true,
		difficulty: 'Normal',
		source: 'chatgpt'
	},
	{
		prompt:
			"You're smiling and nodding in a conversation, but you feel a twinge in your stomach and a voice in your head says, 'Something’s off.'",
		choices: ['Discomfort', 'Politeness', 'Mistrust'],
		answer: 'Discomfort',
		notes:
			'Discomfort often appears subtly, especially in social situations where you may ignore it to keep the peace.',
		emotionCategory: 'Subtle Signals',
		redHerring: false,
		difficulty: 'Hard',
		source: 'chatgpt'
	},
	{
		prompt:
			'You suddenly feel energised and purposeful. You’ve just finished watching a video about someone overcoming huge odds.',
		choices: ['Inspiration', 'Excitement', 'Admiration'],
		answer: 'Inspiration',
		notes:
			'Inspiration comes from seeing potential or greatness and wanting to rise to it yourself.',
		emotionCategory: 'Positive',
		redHerring: false,
		difficulty: 'Normal',
		source: 'chatgpt'
	}
];
