module.exports = {
  siteMetadata: {
    title: `Mon blog`,
    name: `Greg`,
    siteUrl: `https://novela.narative.co`,
    description: `Voici mon blog de développeur web traitant de sujets autour de la Jamstack, du développement web front-end ou back-end et de l'apprentissage du code`,
    hero: {
      heading: `Hey! Bienvenu sur mon blog qui parle du développement web et des technos du moment`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/CaloinGregory`,
      },
      {
        name: `github`,
        url: `https://github.com/gregchapauli`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/gregchapauli`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/grégory-c-a49b5b1aa`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gregsblog`,
        short_name: `gregsblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/gregslogo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
