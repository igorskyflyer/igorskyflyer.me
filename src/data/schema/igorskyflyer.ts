import { getLocalIsoTimestamp } from '@functions/posts.ts'

export const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': 'https://igorskyflyer.me/igorskyflyer/#profile',
  url: 'https://igorskyflyer.me/igorskyflyer',
  dateCreated: '2024-07-08T02:00:22+02:00',
  dateModified: getLocalIsoTimestamp(),
  name: 'Igor Dimitrijević — Profile',
  description:
    'Official profile of Igor Dimitrijević (igorskyflyer), Senior Software Engineer specializing in compilers, DX tooling, and performance-first architecture.',
  inLanguage: 'en',
  keywords: [
    'Igor Dimitrijević',
    'igorskyflyer',
    'Senior Software Engineer',
    'compiler construction',
    'Abstract Syntax Tree',
    'Domain-Specific Language',
    'Aria ad-block compiler',
    'ADBT language',
    'AdVoid',
    'Open in Browser extension',
    'scrollend polyfill',
    'Commoji semantic tagging',
    'VS Code extension development',
    'Developer Experience (DX)',
    'performance-first architecture',
    'JavaScript polyfills',
    'TypeScript',
    'Node.js',
    'Astro'
  ],
  about: { '@id': 'https://igorskyflyer.me/igorskyflyer/#igor' },
  primaryImageOfPage: 'https://igorskyflyer.me/assets/author/igorskyflyer.webp',
  hasPart: [
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://github.com/aria-toolkit/aria-cli',
      name: 'Aria',
      description:
        'An ad-block templates compiler designed to parse and compile ADBT files into usable filter lists using a custom AST engine.',
      applicationCategory: 'DeveloperTool',
      operatingSystem: 'Windows, macOS, Linux',
      softwareVersion: 'latest',
      creator: { '@id': 'https://igorskyflyer.me/igorskyflyer/#igor' },
      url: 'https://github.com/aria-toolkit/aria-cli',
      programmingLanguage: {
        '@type': 'ComputerLanguage',
        name: 'TypeScript',
        url: 'https://www.typescriptlang.org'
      },
      runtimePlatform: 'Node.js',
      keywords: ['ad-block', 'compiler', 'ADBT', 'filter lists', 'AST engine'],
      inLanguage: 'en',
      license: 'https://opensource.org/licenses/MIT',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        ratingCount: '1'
      }
    },
    {
      '@type': 'CreativeWork',
      '@id': 'https://github.com/adbt-lang',
      name: 'ADBT',
      description:
        'A custom templating language and file format (.adbt) specification for writing ad-block templates.',
      genre: 'Technical Specification',
      creator: { '@id': 'https://igorskyflyer.me/igorskyflyer/#igor' },
      url: 'https://github.com/adbt-lang',
      keywords: [
        'ADBT',
        'ad-block',
        'templating language',
        'specification',
        'domain-specific language'
      ],
      inLanguage: 'en',
      license: 'https://opensource.org/licenses/MIT'
    },
    {
      '@type': 'SoftwareSourceCode',
      '@id': 'https://github.com/the-advoid',
      name: 'AdVoid',
      description:
        'A curated set of efficient ad-block filter lists designed to block intrusive ads across platforms.',
      creator: { '@id': 'https://igorskyflyer.me/igorskyflyer/#igor' },
      url: 'https://github.com/the-advoid',
      codeRepository: 'https://github.com/the-advoid',
      keywords: [
        'ad-block filters',
        'privacy tools',
        'content blocking',
        'AdVoid',
        'igorskyflyer'
      ],
      inLanguage: 'en',
      license: 'https://opensource.org/licenses/MIT'
    },
    {
      '@type': 'CreativeWork',
      '@id': 'https://github.com/igorskyflyer/commoji',
      name: 'Commoji',
      description:
        'A semantic commit tagging system leveraging visual psychology to standardize developer intent and context.',
      genre: 'Technical Specification',
      creator: { '@id': 'https://igorskyflyer.me/igorskyflyer/#igor' },
      url: 'https://github.com/igorskyflyer/commoji',
      keywords: ['psychology', 'semantics', 'Git', 'convention'],
      inLanguage: 'en',
      license: 'https://opensource.org/licenses/MIT'
    },
    {
      '@type': 'SoftwareSourceCode',
      '@id': 'https://github.com/igorskyflyer/npm-scrollend-polyfill',
      name: 'Scrollend Polyfill',
      description:
        'A performant and lightweight JavaScript polyfill for the scrollend event, enabling consistent behavior across browsers.',
      creator: { '@id': 'https://igorskyflyer.me/igorskyflyer/#igor' },
      url: 'https://github.com/igorskyflyer/npm-scrollend-polyfill',
      codeRepository: 'https://github.com/igorskyflyer/npm-scrollend-polyfill',
      programmingLanguage: {
        '@type': 'ComputerLanguage',
        name: 'JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      runtimePlatform: 'Web Browser',
      keywords: [
        'JavaScript',
        'polyfill',
        'scrollend',
        'event',
        'igorskyflyer'
      ],
      interactionStatistic: {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/UseAction',
        userInteractionCount: 962000,
        name: 'Monthly requests'
      },
      applicationCategory: 'DeveloperTool',
      inLanguage: 'en',
      license: 'https://opensource.org/licenses/MIT'
    },
    {
      '@type': 'SoftwareApplication',
      '@id':
        'https://marketplace.visualstudio.com/items?itemName=igordvlpr.open-in-browser',
      name: 'Open in Browser',
      applicationCategory: 'DeveloperTool',
      operatingSystem: 'Windows, macOS, Linux',
      description:
        'A popular Visual Studio Code extension that allows developers to open HTML files directly in their default browser with a single click.',
      creator: { '@id': 'https://igorskyflyer.me/igorskyflyer/#igor' },
      url: 'https://marketplace.visualstudio.com/items?itemName=igordvlpr.open-in-browser',
      softwareVersion: 'latest',
      keywords: [
        'VS Code',
        'extension',
        'Open in Browser',
        'HTML',
        'developer tools',
        'igorskyflyer'
      ],
      interactionStatistic: {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/DownloadAction',
        userInteractionCount: 325000
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.5',
        ratingCount: '10'
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      },
      inLanguage: 'en',
      license: 'https://opensource.org/licenses/MIT'
    },
    {
      '@type': 'SoftwareApplication',
      '@id':
        'https://marketplace.visualstudio.com/items?itemName=igordvlpr.kai-theme',
      name: 'Kai',
      applicationCategory: 'DeveloperTool',
      operatingSystem: 'Windows, macOS, Linux',
      description:
        'A sleek and minimal Visual Studio Code theme designed to reduce visual clutter and enhance focus.',
      creator: { '@id': 'https://igorskyflyer.me/igorskyflyer/#igor' },
      url: 'https://marketplace.visualstudio.com/items?itemName=igordvlpr.kai-theme',
      softwareVersion: 'latest',
      keywords: [
        'VS Code',
        'theme',
        'Kai',
        'developer experience',
        'igorskyflyer',
        'minimal UI'
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        ratingCount: '3'
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      },
      inLanguage: 'en',
      license: 'https://opensource.org/licenses/MIT'
    },
    {
      '@type': 'Book',
      name: 'Technical Book (In progress)',
      creativeWorkStatus: 'https://schema.org/InDevelopment',
      inLanguage: 'en',
      description:
        'Authoring a comprehensive guide on systemic software architecture and developer experience.',
      author: { '@id': 'https://igorskyflyer.me/igorskyflyer/#igor' }
    }
  ],
  mainEntity: {
    '@id': 'https://igorskyflyer.me/igorskyflyer/#igor',
    '@type': 'Person',
    mainEntityOfPage: {
      '@id': 'https://igorskyflyer.me/igorskyflyer/#profile'
    },
    name: 'Igor Dimitrijević',
    givenName: 'Igor',
    familyName: 'Dimitrijević',
    additionalName: 'igorskyflyer',
    alternateName: ['igorskyflyer', 'Igor Dimitrijević', 'Игор Димитријевић'],
    jobTitle: 'Senior Software Engineer',
    gender: 'https://schema.org/Male',
    honorificPrefix: 'Mr.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: { '@type': 'Country', name: 'Serbia' }
    },
    birthDate: '1993-08-27',
    birthPlace: {
      '@type': 'Place',
      name: 'Kraljevo',
      address: {
        '@type': 'PostalAddress',
        addressCountry: { '@type': 'Country', name: 'Serbia' }
      }
    },
    nationality: { '@type': 'Country', name: 'Serbia' },
    disambiguatingDescription:
      'Senior Software Engineer and open-source maintainer specializing in compilers and DX tooling; not the Serbian footballer.',
    description:
      'Senior Software Engineer with 18+ years of experience in full-stack development and systems architecture. Specializing in compiler construction, AST engines, and developer tools. Proven track record in delivering high-performance solutions for global clients and contributing to large-scale open-source ecosystems.',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Faculty of Technical Sciences Čačak, University of Kragujevac',
      url: 'https://www.ftn.kg.ac.rs',
      description:
        'Bachelor of Science in Information Technology (Honours), specializing in Software Engineering'
    },
    award: [
      {
        '@type': 'Award',
        name: 'XTGem XTBoard Contest — Winner (Best Website)',
        description: 'Awarded igordimitrijevic.com domain for skywap.xtgem.com',
        url: 'https://web.archive.org/web/20091012000000*/skywap.xtgem.com',
        datePublished: '2009'
      }
    ],
    knowsAbout: [
      {
        '@type': 'Thing',
        name: 'Abstract Syntax Tree',
        sameAs: 'https://en.wikipedia.org/wiki/Abstract_syntax_tree'
      },
      {
        '@type': 'Thing',
        name: 'Compiler Construction',
        sameAs: 'https://en.wikipedia.org/wiki/Compiler'
      },
      {
        '@type': 'Thing',
        name: 'Domain-Specific Language',
        sameAs: 'https://en.wikipedia.org/wiki/Domain-specific_language'
      },
      {
        '@type': 'Thing',
        name: 'Software Architecture',
        sameAs: 'https://en.wikipedia.org/wiki/Software_architecture'
      },
      {
        '@type': 'Thing',
        name: 'Astro (web framework)',
        sameAs: 'https://en.wikipedia.org/wiki/Astro_(web_framework)'
      },
      {
        '@type': 'Thing',
        name: 'TypeScript',
        sameAs: 'https://en.wikipedia.org/wiki/TypeScript'
      },
      {
        '@type': 'Thing',
        name: 'Node.js',
        sameAs: 'https://en.wikipedia.org/wiki/Node.js'
      },
      {
        '@type': 'Thing',
        name: 'Full-stack development',
        sameAs: 'https://en.wikipedia.org/wiki/Full-stack_development'
      },
      {
        '@type': 'Thing',
        name: 'Developer Experience',
        sameAs: 'https://en.wikipedia.org/wiki/Developer_experience'
      },
      {
        '@type': 'Thing',
        name: 'Polyfill (programming)',
        sameAs: 'https://en.wikipedia.org/wiki/Polyfill_(programming)'
      }
    ],
    knowsLanguage: [
      { '@type': 'Language', name: 'Serbian', alternateName: 'sr' },
      { '@type': 'Language', name: 'Croatian', alternateName: 'hr' },
      { '@type': 'Language', name: 'Montenegrin', alternateName: 'cnr' },
      { '@type': 'Language', name: 'Bosnian', alternateName: 'bs' },
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'Spanish', alternateName: 'es' },
      { '@type': 'Language', name: 'French', alternateName: 'fr' }
    ],
    brand: {
      '@type': 'Brand',
      name: 'igorskyflyer',
      logo: 'https://igorskyflyer.me/logo.png',
      url: 'https://igorskyflyer.me'
    },
    worksFor: [
      { '@type': 'Organization', name: 'SissiS', url: 'https://sissis.com' },
      { '@type': 'Organization', name: 'Sensomed', url: 'https://sensomed.eu' },
      {
        '@type': 'Organization',
        name: 'Independent / Self-employed',
        url: 'https://igorskyflyer.me'
      }
    ],
    url: 'https://igorskyflyer.me',
    image: {
      '@type': 'ImageObject',
      url: 'https://igorskyflyer.me/assets/author/igorskyflyer.webp',
      width: 270,
      height: 270
    },
    sameAs: [
      'https://www.google.com/search?kgmid=/g/11kc3sl0nv',
      'https://github.com/igorskyflyer',
      'https://www.linkedin.com/in/igorskyflyer',
      'https://orcid.org/0009-0002-6906-1621',
      'https://www.npmjs.com/~igorskyflyer',
      'https://instagram.com/igorskyflyer',
      'https://g.dev/igorskyflyer',
      'https://app.pluralsight.com/profile/igorskyflyer',
      'https://stackoverflow.com/users/3864203/igorskyflyer',
      'https://npmx.dev/~igorskyflyer',
      'https://sifa.id/p/igorskyflyer.me',
      'https://bsky.app/profile/igorskyflyer.me',
      'https://www.tiktok.com/@igorskyflyer',
      'https://youtube.com/@igorskyflyer',
      'https://dribbble.com/igorskyflyer',
      'https://www.threads.net/@igorskyflyer',
      'https://x.com/igorskyflyer',
      'https://beacons.ai/igorskyflyer',
      'https://en.liberapay.com/igorskyflyer',
      'https://benable.com/igorskyflyer',
      'https://codepen.io/igorskyflyer',
      'https://hackerone.com/igorskyflyer',
      'https://marketplace.visualstudio.com/publishers/igordvlpr',
      'https://ko-fi.com/igorskyflyer',
      'https://crowdin.com/profile/igorskyflyer',
      'https://cssbattle.dev/player/igorskyflyer',
      'https://www.freelancer.com/u/IgorSkyFlyer93',
      'https://alternativeto.net/user/igorskyflyer',
      'https://kick.com/igorskyflyer',
      'https://www.twitch.tv/igorskyflyer',
      'https://leetcode.com/u/igorskyflyer',
      'https://packagist.org/users/igorskyflyer',
      'https://www.reddit.com/user/igorskyflyer',
      'https://www.sololearn.com/en/profile/6324186',
      'https://greasyfork.org/en/users/1002054-igorskyflyer',
      'https://jsr.io/user/96f794cf-0c58-4845-9ff1-4bc3087a12d1',
      'https://grokipedia.com/page/Igor_Dimitrijevi%C4%87_software_engineer'
    ],
    identifier: [
      {
        '@type': 'PropertyValue',
        propertyID: 'ORCID',
        value: '0009-0002-6906-1621',
        url: 'https://orcid.org/0009-0002-6906-1621'
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'GitHub',
        value: 'igorskyflyer',
        url: 'https://github.com/igorskyflyer'
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'npm',
        value: 'igorskyflyer',
        url: 'https://www.npmjs.com/~igorskyflyer'
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'JSR',
        value: 'igorskyflyer',
        url: 'https://jsr.io/user/96f794cf-0c58-4845-9ff1-4bc3087a12d1'
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'StackOverflow',
        value: '3864203',
        url: 'https://stackoverflow.com/users/3864203/igorskyflyer'
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'Grokipedia',
        value: 'Igor_Dimitrijevi%C4%87_software_engineer',
        url: 'https://grokipedia.com/page/Igor_Dimitrijevi%C4%87_software_engineer'
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Business',
      url: 'https://igorskyflyer.me/contact',
      areaServed: 'Worldwide',
      availableLanguage: ['en', 'sr', 'hr', 'bs', 'cnr', 'es']
    }
  }
} as const
