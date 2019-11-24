export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dda24c892e2f82f512842bc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3ycroqy5',
                  apiId: '5f0af56e-199f-4450-8004-3ce12cf9bfd3'
                },
                {
                  buildHookId: '5dda24c8c9724a7de8f6185c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-46qkdxt6',
                  apiId: '3388cefb-5992-487d-9aa0-07ccec7760a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gushinyakov/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-46qkdxt6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
