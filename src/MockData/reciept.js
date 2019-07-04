export const reciept = [
	{
		id: 0,
		name: 'hamburger',
		price: '800',
        imageSrc: 'https://via.placeholder.com/256',
        amount: 1,
		setItem: false,
    },
    {
		id: 1,
		name: 'hamburger set',
		price: '1200',
        imageSrc: 'https://via.placeholder.com/256',
        amount: 1,
        setItem: true,
        setContents: [
            {
                side: 'chips',
                drink: 'cola',
            },
        ],
    },
]