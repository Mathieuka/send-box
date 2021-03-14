// https://tailwindcss.com/docs/guides/nextjs
const homePage = {
    gridTemplateRows: {
        'home-body': '60px 1fr',
    },
    gridTemplateColumns: {
        'home-header': '70px 1fr',
    },
};

const userSettingsPage = {
    gridTemplateColumns: {
        'user-settings-layout': '30% 1fr',
    },
};

module.exports = {
    // purge: [
    //     './pages/**/*.{js,ts,jsx,tsx}',
    //     './components/**/*.{js,ts,jsx,tsx}',
    // ],
    purge: false,
    darkMode: false,
    theme: {
        extend: {
            gridTemplateRows: {
                ...homePage.gridTemplateRows,
            },
            gridTemplateColumns: {
                ...homePage.gridTemplateColumns,
                ...userSettingsPage.gridTemplateColumns,
            },
            minWidth: {
                '20rem': '20rem',
            },
            screens: {
                '2xl-min': { max: '1535px' },
                'xl-min': { max: '1279px' },
                'lg-min': { max: '1023px' },
                'md-min': { max: '767px' },
                'sm-min': { max: '639px' },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
