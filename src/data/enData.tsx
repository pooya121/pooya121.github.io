import { DataModel } from './type'

export const data: DataModel = {
  generalInfoCardData: {
    fullName: 'Pooya Badiee',
    formattedMobile: '+98 933 100 5618',
    skypeLabel: 'skype',
    skype: 'live:pooya121',
    emailLabel: 'Email',
    email: 'pooya.badiee76@gmail.com',
    mobileLabel: 'Mobile',
    mobile: '+989331005618',
    jobPosition: 'Front-End Developer',
  },
  keySkillsCardData: {
    skills: [
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Sass',
      'Less',
      'JSS',
      'React',
      'Next.js',
      'Redux',
      'Redux-Saga',
      'Material-UI',
      'Ant-Design',
      'Jest',
      'Cypress',
      'GraphQL',
      'webpack',
      'Scrum',
      'Git',
      'Mobx',
      'PM2',
    ],
    title: 'Key skills',
  },
  languagesCardData: {
    title: 'Languages',
    languages: [
      { name: 'English', status: 'advance' },
      { name: 'German', status: 'learning (basic)' },
      { name: 'Farsi', status: 'native' },
    ],
  },
  skillsSummaryCardData: {
    title: 'Skills summary',
    points: [
      <>
        <strong>3</strong> years of experience in <strong>UI/UX</strong>{' '}
        developing web applications and interactive software products using{' '}
        <strong> HTML, CSS, TypeScript, JavaScript</strong> and{' '}
        <strong>React</strong>
      </>,
      <>
        Experienced in developing <strong>Responsive</strong> and{' '}
        <strong>mobile-friendly</strong> web apps with <strong>PWA</strong>{' '}
        support.
      </>,
      <>
        Hands-on experience with <strong>RESTful</strong> and{' '}
        <strong>GraphQL</strong> web services
      </>,
      <>
        Experience and good understanding of <strong>Unit</strong> and{' '}
        <strong>E2E</strong> testing
      </>,
      <>Good Team work skills. Being able to work well as part of a team</>,
      <>
        Experience with server side and static rendering in{' '}
        <strong>Next.js</strong>
      </>,
      <>
        Experience writing <strong>utility scripts</strong> with{' '}
        <strong>Node.js</strong>
      </>,
    ],
  },
  experienceCardData: {
    items: [],
  },
}
