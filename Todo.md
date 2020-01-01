# Plan of attack

## Open Questions
 - Can I use JSS instead of SASS/LESS?
 - There is no preview of the expanded openNow filter, what does that look like
 - Does client side filtering mean

 ### Set up git repos for two projects
- Front-end application
- Back-end proxy

## Tooling and Technologies
Typescript
Webpack/Babel
React ErrorBoundary w/ Sentry Reporting
Testing with Jest
Storybook
Code-splitting and Async Loading
PWA with Workbox and ServiceWorkers
LightHouse

## Steps

### DevOps
- [x] Init git repo
- [ ] Add .gitignore
- [ ] Install Webpack and Babel
- [ ] Install Typescript
- [ ] Install Jest
- [ ] install Storybook
- [ ] Create `common`, `production` and `development` webpack.config
  - [ ] Include JSS handling
  - [ ] Code-splitting (prefetching, preloading, splitChunks, Dynamic Imports)
  - [ ] Caching (hashes, runtimeChunk, cacheGroups)
  - [ ] Tree-Shaking (side-effects)
  - [ ] Production with merge, mode, npm scripts, minification, source-map, minifyCSS, Media Query Plugin, Long-term caching


## Back-end
- [ ] set up proxy
- [ ] intall express, body-parser, graphql, node-env-run nodemon npm-run-all - [ ] express-pino-logger pino-colada
- [ ] create an `.env` file and gitignore
- [ ] create a `server/index.js`
- [ ] add `proxy` key
- [ ] add the `run-p` to script
- [ ] create graphql server for search ()
- [ ] create categories endpoint (GET https://api.yelp.com/v3/categories)

## Front-end
- [ ] Create index.html, index.js
- [ ] Add Testing with Jest
- [ ] Add react deps, react-dom, react-jss, react-redux, redux, reach-router
- [ ] Create pending tests in tests
- [ ] Render entry-point
- [ ] Normalize and reset CSS in index.css
- [ ] Create a serviceworker for caching styles and data (performance)
- [ ] Create folder structure

## Components

ListLayout (business search 'las vegas')
  PageHeader
  SubHeader
  FilterBar
    Select (openNow, local onSelect)
    Select (price, local onSelect)
    Select (Categories, server graphql search onSelect)
    Button
  ListSection
    ListHeader
    ListItems
      RestaurantItem
        CoverImage
        Category
        Rating (compact)
        PriceRange
        OpenStatus
        RestaurantName
        DetailsLink
    LoadMore

DetailsLayout (fetch business details and reviewIds)
  PageHeader
  Rating (large)
  LocationView
    Map
    Address
  Gallery
  ReviewSection
    ReviewCount
    ReviewList
      ReviewCard
        Reviewer
          Avatar
          Name
        ReviewDate
        Rating (compact)
        RatingText

## Development Considerations

I looked into using `Next.js` as my discussion with xx got me excited about looking into it but I decided that for this exercise I would opt for a set-up that rolled-up since I know you are evaluating my ability to scaffold and architect an app rather than using `pre-config'd` options like `create-react-app`.  I felt that `Next.js` was too much framework with opinions baked into its folder structure, obscuring the underlying tooling. Instead, I will be going more minimalist and configuring an express server with a graph-ql middleware.  This aspect of the application 

I opted to use TypeScript even though I have not used it before.  I know it is something you do on the team, and I wanted to at least be exposed prior to working with you.  I hope taking this risk to learn something new as part of a take home wasn't a bad decision, I know there is a lot to learn.

I have a preference to do BDD, and have worked with Mocha/Chai in the past.  And while testing wasn't requested, it is a practice that I expect to do in my next gig.  It has proved to slow my velocity down a bit since I haven't worked with tooling in a while so I am learning in the process. Anyway, I want to set-up Storybook so I decided to give Jest a go since it appears the integration for visual testing solutions like Chromata are better.  I can't imagine it will be all that different from Mocha/Chai/Enzyme, but I wanted to provide context about why I chose that tooling.

I considered a couple un-requested aspects to this project like setting up Chromata too, since I haven't seen that work, but I don't want to shell out the money for the service.  I am however going to explore React `<ErrorBoundary />` with sentry.io

Thanks for the opportunity to learn GraphQL and set up a graphQL endpoint.  Again, I haven't used it on projects before this, though I was excited about the Relay project early-on.

It terms of styling, I opted to go with JSS.  It was unclear whether I could use JSS, but I am assuming that the `no frameworks` to mean using things like `bootstrap`, `material-ui`, and `glamour`.  I would opt for CSS/SASS modules or JSS, and since I haven't been able to use JSS in production it is an opportunity to learn something new. It is also exciting to be able to pass arguments to create dynamic styles.

I will also take the time to understand production build settings.  I will set up the repo to use code-splitting and async loading.  I will set up caching and use a serviceworker for basic PWA functionality.

## Folder Structure

I tend to prefer modular organization within components to group related resources together.  I do implement top-level directories for shared resources that are used across the application.

 - contexts
    - these are defined at the top-level, but likely consumed via an enhancer to maximize code reusability
 - components
    - each component will have it's own module and will have the following files:
        - index.js
        - Component.js
        - Component.enhancer.js
        - Component.handlers.js
        - Component.constants.js
        - Component.spec.js
        - Component.styles.js
        - Component.hooks.js
 - enhancers
    - top-level HOCs that get used throughout the app.
        - data layer / GraphQL API (request to business/search api with "Las Vegas" for "location")
        - sentry logging
        - layouts
 - helpers
    - filters and data transformers
 - constants
    - enums, lists of options, etc
 - store
    - for top-level shareable state modules.  Each module that uses a reducer will have an immutable data structure
        - index
        - actions - namespaced constants
        - actionCreators - functions returning Actions or 
        - helpers - functions called on within actionCreators
        - reducer - state accumulator riding an immutable data structure
 - styles
    - as each component module has it's own styles, this is for common styles shared by many components.  Likely to be used along with an enhancer
 - tests
    - each component module and top-level directory will have a `spec` file, this directory will be the home for:
        - fixtures
        - config
        - integration tests
  - interfaces
    - since I will be using TypeScript, I will keep all DataTypes that are defined for the appliation in one place
  - server
    - keep the grapQL server here