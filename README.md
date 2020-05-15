mrd9483: This is a freshly created next.js install with bulma plugin. Once everything is set up, the only way I can get this to work is to go into node_modules and change util.scss under react-bulma-components > src > components.

Without it, I get:

`./node_modules/react-bulma-components/src/components/button/button.sass
@import "_variables.sass"
^
      File to import not found or unreadable: _variables.sass.
      in /Users/matthewdoyle/Dev/react-bulma-component-test/node_modules/react-bulma-components/src/components/utils.sass (line 3, column 1)`
      
----

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
