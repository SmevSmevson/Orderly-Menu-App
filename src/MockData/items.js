export const items = [
	// just creating some mock data id rules so we don't create duplicate ids (hopefully)
	// ids will be automated in the futute
	//mains ids 0 - 99
	{
		id: 0,
		name: 'hamburger set',
		price: '1200',
		imageSrc: 'https://via.placeholder.com/256',
		description: 'lorem',
		allergies: ['meat'],
		nutrition: [
			{category: 'calories', amount: '500kCal'},
			{category: 'fat', amount: '100g'},
		],
		setItem: true,
		setMenus: [
			{category: 'sides', items: [
				100,
				101
			]},
			{category: 'drinks', items: [
				300,
				301,
				302
			]}
		],
		higlight: false,
		badgeSrc: '',
	},
	{
		id: 1,
		name: 'cheeseburger set',
		price: '1300',
		imageSrc: 'https://via.placeholder.com/256',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloribus eaque reiciendis eligendi ipsum consequatur nam. Labore beatae quaerat, facere nemo facilis ad quibusdam amet, mollitia tenetur possimus, ipsum molestias.',
		allergies: ['meat', 'dairy'],
		nutrition: [
			{category: 'calories', amount: '500kCal'},
			{category: 'fat', amount: '100g'},
		],
		setItem: true,
		setMenus: [
			{category: 'sides', items: [
				100,
				101
			]},
			{category: 'drinks', items: [
				300,
				301,
				302
			]}
		],
		higlight: false,
		badgeSrc: 'https://via.placeholder.com/64',
	},
	{
		id: 2,
		name: 'chille cheesburger set',
		price: '1400',
		imageSrc: 'https://via.placeholder.com/256',
		description: 'lorem',
		allergies: ['meat', 'dairy'],
		nutrition: [
			{category: 'calories', amount: '500kCal'},
			{category: 'fat', amount: '100g'},
		],
		setItem: true,
		setMenus: [
			{category: 'sides', items: [
				100,
				101
			]},
			{category: 'drinks', items: [
				300,
				301,
				302
			]}
		],
		higlight: true,
		badgeSrc: 'https://via.placeholder.com/64',
	},
	{
		id: 3,
		name: 'hamburger',
		price: '800',
		imageSrc: 'https://via.placeholder.com/256',
		description: 'lorem',
		allergies: ['meat'],
		nutrition: [
			{category: 'calories', amount: '500kCal'},
			{category: 'fat', amount: '100g'},
		],
		setItem: false,
		higlight: false,
		badgeSrc: 'https://via.placeholder.com/64',
	},
	{
		id: 4,
		name: 'cheeseburger',
		price: '900',
		imageSrc: 'https://via.placeholder.com/256',
		description: 'lorem',
		allergies: ['meat', 'dairy'],
		nutrition: [
			{category: 'calories', amount: '500kCal'},
			{category: 'fat', amount: '100g'},
		],
		setItem: false,
		higlight: false,
		badgeSrc: 'https://via.placeholder.com/64',
	},
	{
		id: 5,
		name: 'chille cheesburger',
		price: '1000',
		imageSrc: 'https://via.placeholder.com/256',
		description: 'lorem',
		allergies: ['meat', 'dairy'],
		nutrition: [
			{category: 'calories', amount: '500kCal'},
			{category: 'fat', amount: '100g'},
		],
		setItem: false,
		higlight: false,
		badgeSrc: 'https://via.placeholder.com/64',
	},
	{
		id: 6,
		name: 'tofuburger',
		price: '800',
		imageSrc: 'https://via.placeholder.com/256',
		description: 'lorem',
		allergies: [],
		nutrition: [
			{category: 'calories', amount: '500kCal'},
			{category: 'fat', amount: '100g'},
		],
		setItem: false,
		higlight: false,
		badgeSrc: 'https://via.placeholder.com/64',
	},
	{
		id: 7,
		name: 'tofuburger set',
		price: '1000',
		imageSrc: 'https://via.placeholder.com/256',
		description: 'lorem',
		allergies: [],
		nutrition: [
			{category: 'calories', amount: '500kCal'},
			{category: 'fat', amount: '100g'},
		],
		setItem: true,
		setMenus: [
			{category: 'sides', items: [
				100,
				101
			]},
			{category: 'drinks', items: [
				300,
				301,
				302
			]}
		],
		higlight: false,
		badgeSrc: 'https://via.placeholder.com/64',
	},
	//sides ids 100-199
	{
		id: 100,
		name: 'fries',
		price: '250',
		imageSrc: 'https://via.placeholder.com/256',
		description: 'lorem',
		allergies: [],
		nutrition: [
			{category: 'calories', amount: '50kCal'},
			{category: 'fat', amount: '10g'},
		],
		setItem: false,
		higlight: false,
	},
	{
		id: 101,
		name: 'onion rings',
		price: '250',
		imageSrc: 'https://via.placeholder.com/256',
		description: 'lorem',
		allergies: [],
		nutrition: [
			{category: 'calories', amount: '50kCal'},
			{category: 'fat', amount: '10g'},
		],
		setItem: false,
		higlight: false,
	},
	//desserts ids 200-299
	//drinks ids 300-399
	{
		id: 300,
		name: 'cola',
		price: '250',
		imageSrc: 'https://via.placeholder.com/256',
		description: 'lorem',
		allergies: [],
		nutrition: [
			{category: 'calories', amount: '50kCal'},
			{category: 'fat', amount: '10g'},
		],
		setItem: false,
		higlight: false,
	},
	{
		id: 301,
		name: 'orange',
		price: '250',
		imageSrc: 'https://via.placeholder.com/256',
		description: 'lorem',
		allergies: [],
		nutrition: [
			{category: 'calories', amount: '50kCal'},
			{category: 'fat', amount: '10g'},
		],
		setItem: false,
		higlight: false,
	},
	{
		id: 302,
		name: 'coffee',
		price: '250',
		imageSrc: 'https://via.placeholder.com/256',
		description: 'lorem',
		allergies: [],
		nutrition: [
			{category: 'calories', amount: '50kCal'},
			{category: 'fat', amount: '10g'},
		],
		setItem: false,
		higlight: false,
	},
]
