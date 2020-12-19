# TW UAE Frontend Templates

## Pages

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

## SCSS

The files are under `resources/twuae` and rely on `resources/core`. **Please, don't touch `resources/core` as this is shared with other projects outside the scope of this one.**

### No Frontend Frameworks

Due to past performance issues, we've opted out of frameworks like Bootstrap, Foundation, Material Design, Bulma etc. We are currently using flex whenever possible for some grid displays to accommodate the provided custom designs. This also allow us to easily adapt to RTL display out of the box.

There's a necessary IE11 hack where `max-width` needs to be set whenever `flex` or `flex-basis` is set in place.

## JavaScript

Currently a mixture of vanilla js (with ES6 features) and jQuery. We've reused some jQuery bits from other projects but we are going to gradually remove it. Please, just add vanilla js from now on.

## CSS and JS compilation

The files should compile to `public/twuae/css` and `public/twuae/js`.

## Browser Support

IE11+, Edge 17 and 17 and latest 2 versions of the big browsers: Chrome, Firefox, Edge (Chromium based), Safari and Opera. On mobile, Chrome and Safari should be supported as well.
