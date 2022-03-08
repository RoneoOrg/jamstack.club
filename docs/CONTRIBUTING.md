
## Prerequisites

Start with the [README](../README.md) for an overview.

## Develop Locally

Github stars, image thumbnails and last commit date are generated at build time when this site is deployed to Netlify. Basically the Netlify site runs `npm run deploy`

This site is built on [Hugo](https://gohugo.io/)

Development Server

```
hugo serve
```

Build Site

```
hugo
```

Generate Github stars, image screenshots etc

```
npm install
export GITHUB_TOKEN=XXX
npm run deploy
```

> Generating github data requires a Github Token. You can generate this token in your Github account at settings > developer settings > personal access tokens https://github.com/settings/tokens

## Submitting New Categories
Themes can be categorised with terms from these 4 taxonomies. `ssg`, `cms`, `css` and `archetype`

If you are adding a theme which uses an SSG or CMS which doesnt exist you will need to add it as part of your pull-request.

1. Create a new taxonomy term by creating the markdown file under `content/ssg/` or `content/cms`. For example let's say you wanted to add a new SSG called "Super Duper". Add a file under `content/ssg/super-duper/_index.md` and add the following frontmatter
```
---
title: "Super Duper"
icon: images/icons/super-duper.svg 
official_url: https://super-duper.org
---
```

2. Add the icon. You will need to upload an icon into `static/images/icons`. The icon should in SVG format under 3KB. If it's a PNG please make sure the size is 60x60px and the size is as small as possible (you should be able to keep it under 5KB)
3. Update the Javascript filter logic. Update the file `themes/jamstackthemes/assets/js/filter/filter-groups.js` and add `super-duper` to the ssg array.
