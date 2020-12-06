export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcc9e31280d171ea0ce62ac',
                  title: 'Sanity Studio',
                  name: 'nextjs-landing-page-studio-ffcikg6v',
                  apiId: '8b6658f5-4f65-4b6a-a0dc-b5be01b5dc79'
                },
                {
                  buildHookId: '5fcc9e31c8d7e33908d715e2',
                  title: 'Landing pages Website',
                  name: 'nextjs-landing-page-web',
                  apiId: 'dbcf0ead-f957-4090-b227-9f0135cc98fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jaivrats/nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nextjs-landing-page-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
