export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ea6e8df95bfa461e763bf22',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5g3xmwm6',
                  apiId: '6e67d72a-1d01-4911-bd09-39d70b4cde36'
                },
                {
                  buildHookId: '5ea6e8df95bfa4017763c103',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ajda35ua',
                  apiId: '0718f4ce-ab5a-481e-acf0-27c58e78e866'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/harveybanham-cloud/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ajda35ua.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
