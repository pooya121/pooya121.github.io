import { DataModel } from './type'

export const data: DataModel = {
  head: {
    title: 'Pooya Badiee',
    description: 'Pooya Badiee, a Full-stack developer',
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
      'Shopify',
      'Node.js',
    ],
    title: 'Key skills',
  },
  languages: {
    title: 'Languages',
    languages: [
      { name: 'English', status: 'advance' },
      // { name: 'German', status: 'learning (basic)' },
      { name: 'Farsi', status: 'native' },
    ],
  },
  skillsSummary: {
    title: 'Skills summary',
    points: [
      <>
        <strong>3</strong> years of experience in <strong>UI/UX</strong> developing web applications and interactive
        software products using <strong> HTML, CSS, TypeScript, JavaScript</strong>, and <strong>React</strong>
      </>,
      <>
        Experienced in developing <strong>Responsive</strong> and <strong>mobile-friendly</strong> web apps with{' '}
        <strong>PWA</strong> support.
      </>,
      <>
        Hands-on experience with <strong>RESTful</strong> and <strong>GraphQL</strong> web services
      </>,
      <>
        Experience and a good understanding of <strong>Unit</strong> and <strong>E2E</strong> testing
      </>,
      <>Good Teamwork skills. Being able to work well as part of a team</>,
      <>
        Experience with server-side and static rendering in <strong>Next.js</strong>
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
        title: 'Asredanesh',
        position: 'Full-stack developer',
        startDate: 'August 2021',
        ISOStartDate: '2021-07-31T19:30:00.000Z',
        location: 'Tehran - Iran, Remote to Canada',
        url: 'https://asredanesh.com/',
        description: (
          <>
            Asredanesh is an Iranian IT company that works on different technology-related solutions. While working
            here, I was assigned to work with{' '}
            <a href="https://www.sundays-company.com/" rel="noreferrer" target="_blank">
              Sundays Company
            </a>{' '}
            as my primary responsibility.
            <br />
            Sundays Company is a direct-to-consumer furniture company offering beautiful and unique furniture, it
            primarily focuses on its <strong>E-commerce</strong> that runs on <strong>Shopify</strong> as the main sale
            channel.
          </>
        ),
        points: [
          <>
            Modernized the development workflow from jQuery to more efficient tools like <strong>Typescript</strong>,{' '}
            <strong>Preact</strong>, and <strong>Web Components</strong>.
          </>,
          <>
            Improved Tooling by replacing the discontinued build with tools such as <strong>Rollup</strong>,{' '}
            <strong>SWC</strong> and Additional improvements that made the build times as high as <strong>10x</strong>{' '}
            faster.
          </>,
          <>Worked with different external teams to integrate the existing stores with other services</>,
          <>
            Implement services with <strong>Node.js</strong> that interact with the Shopify API, Such as:
            <ul>
              <li>
                A service that generates a pdf with react-pdf that pull data from <strong>Shopify</strong>
              </li>
              <li>Implementing a service that copies data from one store to another when data in one changes</li>
              <li>
                A service that calculates the ETA of the order and pushes the data to <strong>Shopify</strong> API{' '}
              </li>
            </ul>
          </>,
        ],
        techStack: ['Typescript', 'React', 'Preact', 'Shopify', 'SASS', 'Node.js'],
      },
      {
        title: 'Techclass',
        position: 'React Developer',
        startDate: 'March 2020',
        ISOStartDate: '2020-02-29T20:30:00.000Z',
        endDate: 'August 2021',
        ISOEndDate: '2021-07-31T19:30:00.000Z',
        location: 'Tehran - Iran, Remote to Finland',
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
        techStack: ['Typescript', 'React', 'Mobx', 'SASS', 'LESS', 'Ant-Design', 'PWA', 'REST', 'Azure DevOps'],
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
