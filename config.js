// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: '',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good Morning!',
  greetingAfternoon: 'Getting some work done?',
  greetingEvening: 'Probably tweaking the system...',
  greetingNight: 'Going to bed any time soon?!',

  // Weather
  weatherKey: '2ba19a64218b4ddcaba1b0b7673a22d8',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '36.855340',
  defaultLongitude: '10.281650',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.protonmail.com/',
    },
    {
      id: '3',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    { id: '4',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://libredd.it',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'image',

  // Links
  lists: {
    firstList: [
      {
        name: 'To be used.',
        link: 'https://brave.com',
      },
    ],
    secondList: [
      {
        name: 'Figma',
        link: 'https://figma.com/',
      },
      {
        name: 'Unsplash',
        link: 'https://unsplash.com',
      },
    ],
  },
};
