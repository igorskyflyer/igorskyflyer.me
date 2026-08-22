// Author: Igor Dimitrijević (@igorskyflyer)

import { IActivityItem } from '@interfaces/activities/IActivityItem.ts'

export const activities: IActivityItem[] = [
  {
    category: 'certification',
    date: '2026-08-01',
    title: 'Earned Cisco Introduction to Cybersecurity Certification',
    titleLink:
      'https://www.credly.com/badges/055328d9-6684-47ec-9c87-ee037ab89948',
    details: [
      {
        text: 'This introductory course takes you inside the world of cybersecurity. You will learn cybersecurity basics to protect your personal digital life and gain insights into the biggest security challenges companies, governments, and educational institutions face today.',
      },
    ],
  },
  {
    category: 'release',
    date: '2026-07-04',
    title: 'Published a new UserScript: Unmute Images on GitHub',
    titleLink:
      'https://github.com/igorskyflyer/userscript-github-unmute-images',
    details: [
      { text: 'Removes the muted background color from images on GitHub.' },
    ],
  },
  {
    category: 'package',
    date: '2026-07-28',
    title: 'Published new releases of npm packages',
    details: [
      {
        text: 'Biome config - v3.0.3',
        link: 'https://github.com/igorskyflyer/npm-biome-config/releases/tag/v3.0.3',
      },
      {
        text: 'TSConfig - v2.0.1',
        link: 'https://github.com/igorskyflyer/npm-tsconfig/releases/tag/v2.0.1',
      },
      {
        text: 'astro-component - v1.1.1',
        link: 'https://github.com/igorskyflyer/npm-astro-component/releases/tag/v1.1.1',
      },
      {
        text: 'astro-render-component - v2.0.2',
        link: 'https://github.com/igorskyflyer/npm-astro-render-component/releases/tag/v2.0.2',
      },
    ],
  },
  {
    category: 'identity',
    date: '2026-07-04',
    title: 'Became a Verified Entity on Google /g/11kc3sl0nv',
    titleLink: 'https://www.google.com/search?kgmid=/g/11kc3sl0nv',
  },
  {
    category: 'contribution',
    date: '2026-05-16',
    title: 'Worked on UniGetUI',
    details: [
      {
        text: 'Fixed a bug with scoped npm packages containing a dot symbol',
        links: [
          {
            text: '#4007',
            url: 'https://github.com/Devolutions/UniGetUI/issues/4007',
          },
        ],
      },
      {
        text: 'Fixed UI ⇔ state mismatch for upgradable packages in Avalonia/legacy modes',
        links: [
          {
            text: '#4793',
            url: 'https://github.com/Devolutions/UniGetUI/issues/4793',
          },
          {
            text: '#4009',
            url: 'https://github.com/Devolutions/UniGetUI/issues/4009',
          },
        ],
      },
      {
        text: 'Revised and fixed the Serbian translation',
        links: [
          {
            text: '#4590',
            url: 'https://github.com/Devolutions/UniGetUI/issues/4590',
          },
        ],
      },
    ],
  },
  {
    category: 'repository',
    date: '2026-03-26',
    title: 'Created repository: igorskyflyer/dotfiles',
    details: [
      {
        text: 'A curated index of all published @igorskyflyer configuration packages; crafted for a seamless DX',
        links: [
          {
            text: '@igorskyflyer/dotfiles',
            url: 'https://github.com/igorskyflyer/dotfiles',
          },
        ],
      },
    ],
  },
  {
    category: 'release',
    date: '2026-03-19',
    title: 'Released v3.0.0 of Commoji',
    details: [
      {
        text: 'A psychology-based emoji commit convention that reduces cognitive load and turns Git history into a visually scannable log',
        links: [
          {
            text: 'v3.0.0 release notes',
            url: 'https://github.com/igorskyflyer/commoji/releases/tag/v3.0.0',
          },
        ],
      },
    ],
  },
  {
    category: 'package',
    date: '2025-08-21',
    title: 'Executing scope-migration (91% completed)',
    details: [
      {
        text: 'Migrating packages from @igor.dvlpr to @igorskyflyer and adapting all npm packages to security requirements',
        links: [
          {
            text: '@igor.dvlpr',
            url: 'https://www.npmjs.com/~igor.dvlpr',
          },
          {
            text: '@igorskyflyer',
            url: 'https://www.npmjs.com/~igorskyflyer',
          },
          {
            text: 'Official tracker',
            url: 'https://github.com/igorskyflyer/project-nextwave/milestone/1',
          },
        ],
      },
    ],
  },
  {
    category: 'contribution',
    date: '2026-07-16',
    title: 'VS Code shipped native ESM support for extensions',
    titleLink: 'https://github.com/microsoft/vscode/milestone/435',
    details: [
      {
        text: 'Early advocacy and highly-upvoted proposal from Aug 2021 came to fruition as Microsoft officially migrated to and shipped native ESM support for extensions in VS Code v1.129.0',
        links: [
          {
            text: 'v1.129.0 milestone',
            url: 'https://github.com/microsoft/vscode/milestone/435',
          },
        ],
      },
    ],
  },
  {
    category: 'contribution',
    date: '2026-07-14',
    title: 'Contributed Spanish translation to npmx.dev',
    titleLink: 'https://github.com/npmx-dev/npmx.dev/pull/3040',
    details: [
      {
        text: 'Completed and fixed the Spanish translation of the platform, released in v0.17.1',
        links: [
          {
            text: 'PR #3040',
            url: 'https://github.com/npmx-dev/npmx.dev/pull/3040',
          },
          {
            text: 'v0.17.1 release',
            url: 'https://github.com/npmx-dev/npmx.dev/releases/tag/v0.17.1',
          },
        ],
      },
    ],
  },
  {
    category: 'publication',
    date: '2026-07-14',
    title: 'Published LinkedIn article on pnpm v11.12.0 self-update issue',
    titleLink:
      'https://www.linkedin.com/pulse/pnpm-11120-self-update-crash-cannot-use-operator-fix-dimitrijevi%25C4%2587-wpchf/',
    details: [
      {
        text: 'Documented and provided a fix for a pnpm v11.12.0 self-update crash',
      },
    ],
  },
] as const
