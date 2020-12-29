# TW UAE Frontend Templates

## General coding 'rules'

We are using editorconfig, eslint and prettier to keep the code consistent. Their configuration is on this repository and should be used by all developers as this repo resources will be copied over to another repository. Following these 'rules' will prevent us having massive PRs and git conflicts.

The same `gitignore` file was copied over to this repository. No editions should be needed, unless it's something specific for the files compilation (see [CSS and JS compilation](#css-and-js-compilation) section).

### NPM

We've copied the original `package.json` file over to this repository and removed environment specific commands to avoid noise. This should mimic our original environment (UAE specifically) and allow us to copy the resources over without any issues. Running `npm install` should be enough to get the the same bare bones functionality working but some commands won't work due to this different environment. The original compilation won't work as we are using webpack mix (default on Laravel) therefore, the compilation will need to be configured for this repo (see [CSS and JS compilation](#css-and-js-compilation) section).

**OBS:** in case you need to install new packages to compile JS and CSS, please, specify them below to help us judge what is (or isn't) necessary on the original environment. Feel free to edit `package.json` and include repo specific commands. Unless specifically required, we will ignore changes when migrating the resources to the original repository.

### CSS and JS compilation

The files should compile to `public/twuae/css` and `public/twuae/js`. It doesn't matter what's used for compilation on this repository, as long as JS compiles to ES5 and SCSS compiles _with_ browser prefixes (don't hardcode them on the SCSS files, please).

### Browser Support

JS and CSS should work on IE11+, Edge 17 and 17 and latest 2 versions of the big browsers: Chrome, Firefox, Edge (Chromium based), Safari and Opera. On mobile, Chrome and Safari should be supported as well.

## Pages

Full pages have been saved via browser on the `pages` directory. The markup should be exactly the same of what's rendered by Laravel. This will allow you to concentrate only on the templating part of the project without the overhead of setting docker containers up and getting the latest DB dumps frequently.

### List of pages/templates

-   `pages/` Home page
-   `pages/news` Category list/landing template
-   `pages/news/travel-agents` Subcategory list/landing template
-   `pages/news/single` Articles single template
-   `pages/destinations` Destinations list/landing template (pending filter bits)
-   `pages/destinations/single` Destinations single template
-   `pages/media` Photos & Videos (media) list/landing template
-   `pages/media/single` Photos & Videos single template (pending photo lightbox)
-   `pages/podcasts` Podcasts list/landing template
-   `pages/podcasts/single` Podcasts single template
-   `pages/webcasts` Webcasts list/landing template
-   `pages/webcasts/single` Webcasts single template
-   `pages/about-us` Static (simple page) template
-   `pages/restart-recovery` Hub list/landing template
-   `pages/events` Events list/landing template
-   `pages/events/create` Create Event template (needs some form tweaks)
-   `pages/latest-edition` Latest Edition template
-   `pages/edition-archive` Edition Archive template
-   `pages/supplements-and-special-editions` Supplements & Special Editions template
-   `pages/features-list` Features List template
-   `pages/our-team` Our Team template
-   `pages/our-team/single` Our Team (and authors) single template
-   `pages/profile` Profile template

## Specific JS and CSS files per page

For performance reasons, we've opted to load different JS and CSS files per page alongside main files which contain global styles and functionality.

## SCSS

The files are under `resources/twuae` and rely on `resources/core`. **Please, don't touch `resources/core` as this is shared with other projects outside the scope of this one.**

### No Frontend Frameworks

Due to past performance issues, we've opted out of frameworks like Bootstrap, Foundation, Material Design, Bulma etc. We are currently using flex whenever possible for some grid displays to accommodate the provided custom designs. This also allow us to easily adapt to RTL display out of the box.

There's a necessary IE11 hack where `max-width` needs to be set whenever `flex` or `flex-basis` is set in place.

There's no concept of column grid on the designs, elements were basically customised to a pixel level (not necessarily to a percentage or columns). We've tried to keep the build as close to the designs as possible, only fixing gutter/padding/margin issues when necessary to keep consistency among templates.

Each component has – as a general rule of thumb – an scss file where their fundamental aspect is defined. In case a component is used in more than one template and has differences among them, the overwrites happen on a page specific scss file basis.

## JavaScript

Currently a mixture of vanilla js (with ES6 features) and jQuery. We've reused some jQuery bits from other projects but we are going to gradually remove it. Please, just add vanilla js from now on.

## Images

Currently, images are not being preprocessed so they need to be manually optimised and added to `public/twuae/img` directory. Most of the images will be added via CMS but icons and logos will probably be hosted on this directory (unless specified differently).
