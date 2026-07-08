export const projects = [
    {
        slug: 'tzpayy',
        title: 'Tzpayy — Next-Gen Crypto & Digital Payments',
        category: 'Fintech',
        link: 'https://tzpayy.com/',
        image: '/images/tzpayy.png',
        problem:
            'Fragmented and slow digital payment systems often fail to bridge the gap between traditional currency and the evolving crypto economy.',
        solution:
            'Engineered a robust fintech platform for seamless USDT trading and digital service procurement, prioritizing security and lightning-fast execution.',
        outcome:
            'Successfully launched a scalable payment ecosystem that simplifies complex crypto transactions into a user-friendly, high-trust experience.',
        techStack: ['Next.js', 'Node.js', 'API Integration', 'Payments', 'MongoDB'],
        features: [
            'Buy & sell USDT',
            'Instant data purchase',
            'Secure transaction system',
            'User dashboard & wallet tracking',
            'Service hub integration',
        ],
        color: '#6C3CE9',
    },
    {
        slug: 'my-waali',
        title: 'MyWaali — Enterprise Admin & Financial SaaS',
        category: 'SaaS',
        link: 'https://my-waali.vercel.app/',
        image: '/images/my-waali.png',
        problem:
            'Modern enterprises struggle with fragmented operational data, leading to visibility gaps in financial flows and user management.',
        solution:
            'Developed a centralized SaaS command center that unifies transaction monitoring, user governance, and real-time analytics into a single source of truth.',
        outcome:
            'Transformed operational efficiency through data-driven transparency, empowering administrators with precision control over complex financial workflows.',
        techStack: ['Next.js', 'Node.js', 'MongoDB', 'Admin Dashboard', 'Analytics'],
        features: [
            'Advanced admin dashboard',
            'User & role management',
            'Transaction monitoring',
            'System analytics & logs',
            'Config & control panels',
        ],
        color: '#10B981',
    },
    {
        slug: 'nexa-homes',
        title: 'Nexa — Premium Real Estate Platform',
        category: 'SaaS',
        link: 'https://nexa-homes-five.vercel.app/',
        image: '/images/nexa-homes.png',
        problem:
            'Homebuyers struggle with static property listings, lacked immersive searches, and slow booking responses.',
        solution:
            'Engineered a high-performance modern real estate portal with search indexing, rich property visualizers, and digital booking pipelines.',
        outcome:
            'Reduced client acquisition lag, providing real estate agents and clients a seamless digital property acquisition channel.',
        techStack: ['Next.js', 'React', 'TailwindCSS', 'Property Search', 'Real Estate'],
        features: [
            'Interactive search filter',
            'Vibrant property gallery',
            'Instant listing details',
            'Scheduling & home tour bookings',
            'Agent connect portal',
        ],
        color: '#8B5CF6',
    },
    {
        slug: 'mobile-games',
        title: 'Mobile Gaming Suite — Hyper-Casual Android Games',
        category: 'Mobile App',
        gameLinks: [
            { name: 'Aurashift', url: 'https://play.google.com/store/apps/details?id=com.stdev.aurashift&pcampaignid=web_share' },
            { name: 'Color Rush', url: 'https://play.google.com/store/apps/details?id=com.uniqueyahya.colorrush&pcampaignid=web_share' },
            { name: 'Snake Rush', url: 'https://play.google.com/store/apps/details?id=com.uniqueyahya.snakerush&pcampaignid=web_share' },
        ],
        problem:
            'Designing and publishing polished, hyper-casual games on the Google Play Store with responsive physics and smooth gameplay hooks.',
        solution:
            'Developed three engaging mobile games—Aurashift, Color Rush, and Snake Rush—using optimized physics models, intuitive touch inputs, and native store publishing.',
        outcome:
            'Successfully shipped three live titles on the store, establishing scalable mechanics and monetization-ready feedback loops.',
        techStack: ['Android', 'Game Design', 'Interactive Mechanics', 'Play Store'],
        features: [
            'Aurashift: Multi-directional reflex puzzle game',
            'Color Rush: Speed-matching visual reaction arcade',
            'Snake Rush: High-action movement collision mechanics',
            'Fluid mobile layouts & device responsiveness',
            'Stored leaderboard scores & clean state',
        ],
        color: '#EC4899',
    },
];
