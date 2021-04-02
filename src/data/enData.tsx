import { DataModel } from './type'

export const data: DataModel = {
  head: {
    title: 'Pooya Badiee',
    description: 'Pooya Badiee, a Front-end developer',
  },
  generalInfo: {
    fullName: 'Pooya Badiee',
    formattedMobile: '+98 933 100 5618',
    skypeLabel: 'Skype',
    skype: 'live:pooya121',
    emailLabel: 'Email',
    email: 'pooya.badiee76@gmail.com',
    mobileLabel: 'Mobile',
    mobile: '+989331005618',
    jobPosition: 'Front-End Developer',
  },
  keySkills: {
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
  languages: {
    title: 'Languages',
    languages: [
      { name: 'English', status: 'advance' },
      { name: 'German', status: 'learning (basic)' },
      { name: 'Farsi', status: 'native' },
    ],
  },
  skillsSummary: {
    title: 'Skills summary',
    points: [
      <>
        <strong>3</strong> years of experience in <strong>UI/UX</strong> developing web applications and interactive
        software products using <strong> HTML, CSS, TypeScript, JavaScript</strong> and <strong>React</strong>
      </>,
      <>
        Experienced in developing <strong>Responsive</strong> and <strong>mobile-friendly</strong> web apps with{' '}
        <strong>PWA</strong> support.
      </>,
      <>
        Hands-on experience with <strong>RESTful</strong> and <strong>GraphQL</strong> web services
      </>,
      <>
        Experience and good understanding of <strong>Unit</strong> and <strong>E2E</strong> testing
      </>,
      <>Good Team work skills. Being able to work well as part of a team</>,
      <>
        Experience with server side and static rendering in <strong>Next.js</strong>
      </>,
      <>
        Experience writing <strong>utility scripts</strong> with <strong>Node.js</strong>
      </>,
    ],
  },
  experience: {
    title: 'Professional Experience',
    noEndDateText: 'Present',
    items: [
      {
        title: 'Techclass',
        position: 'React Developer',
        startDate: 'March 2020',
        ISOStartDate: '2020-02-29T20:30:00.000Z',
        location: 'Remote - Finland',
        url: 'https://techclass.com/',
        description: (
          <>
            Techclass is an <strong>LMS</strong> startup with clients from universities like <strong>Laurea</strong> and{' '}
            <strong>Metropolia</strong> and in a partnership with <strong>Microsoft</strong>.
          </>
        ),
        points: [
          <>
            planned and developed <strong>unit tests</strong> and worked with the team to cover <strong>50%</strong> of
            the project including <strong>edge-case scenarios</strong>
          </>,
          <>
            Made improvements to <strong>developer experience</strong> such as creating project specific snippets and
            improving first load time in developer mode and fixing fast refresh
          </>,
          <>Provided node scripts such as getting test reports or extracting translation from API code</>,
          <>
            Worked in an <strong>Agile-driven</strong> environment to effectively maintain project timelines and utilize
            available resources.
          </>,
        ],
        techStack: [
          'Typescript',
          'React',
          'Redux-saga',
          'Cypress',
          'Graphql',
          'Jest',
          'React-testing-library',
          'Material-UI',
          'Azure DevOps',
          'Git',
          'Docker',
          'Figma',
        ],
      },
      {
        title: 'Yeganeh',
        position: 'React Developer',
        startDate: 'November 2018',
        endDate: 'March 2020',
        ISOStartDate: '2018-10-31T20:30:00.000Z',
        ISOEndDate: '2020-02-29T20:30:00.000Z',
        location: 'Tehran - Iran',
        url: 'https://yeganehsoft.com/',
        totalTime: '1 year and 5 months',
        description: (
          <>
            Yeganeh is a software company providing apps like <strong>EDMS</strong> and <strong>secretariat</strong>
          </>
        ),
        points: [
          <>
            Worked in a scrum environment with <strong>Azure Devops</strong>
          </>,
          <>Reduced the projects complexity by splitting the initial react app to smaller packages</>,
          <>Developed complex UI components like form generator and online file system UI and tree structure</>,
        ],
        techStack: ['Typescript', 'React', 'Mobx', 'SASS', 'LESS', 'Ant-Design', 'PWA', 'REST', 'Git', 'Azure DevOps'],
      },
      {
        title: 'Barayand',
        position: 'Front-End Developer',
        startDate: 'May 2017',
        endDate: 'October 2018',
        ISOEndDate: '2018-09-30T20:30:00.000Z',
        ISOStartDate: '2017-04-30T19:30:00.000Z',
        location: 'Tehran - Iran',
        url: 'https://barayand.net/',
        totalTime: '1 year and 7 months',
        description: 'Barayand is a Software Company focusing on developing websites.',
        points: [
          <>
            Developed UIs of more than <strong>20</strong> websites. Most of them were based on Photoshop files
          </>,
          <>
            Updated the structure from using basic <strong>CSS</strong> to use <strong>SASS</strong> and{' '}
            <strong>PostCSS</strong>
          </>,
          <>
            Improved javascript performance. Stopped using jQuery and used vanilla javascript to improve the bundle
            size. used tools like <strong>webpack</strong> and <strong>uglify.js</strong> to improve the first time to
            interactive
          </>,
        ],
        techStack: ['HTML', 'SASS', 'javascript', 'webpack'],
      },
    ],
  },
}
