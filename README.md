# Commands

## `npm run d[ev]`

Like [`npm run b[uild]`](#npm-run-build) + [`npm run p[review]`](#npm-run-preview), but updates when code changes & does not output a build

## `npm run b[uild]`

Builds the project into `./dist`.

## `npm run p[review]`

Previews the build in `./dist` (must [build](#npm-run-build) first. use [`npm run bp`](#npm-run-bp) for convenience).

## `npm run bp`

Shorthand for <code>[npm run b[uild]](#npm-run-build) && [npm run p[review]](#npm-run-preview)</code>.

# Notes

-   [`npm run d[ev]`](#npm-run-dev) is best for development
-   [`npm run bp`](#npm-run-bp) is best for previewing the current build before release.
