# juji.io site

A static site generator [Eleventy](https://11ty.dev) is in use to build this Web site. The template system uses [Nunjucks](https://mozilla.github.io/nunjucks/templating.html). The online editor for the blog is [Netlify CMS](https://www.netlifycms.org/).

## Local Setup

Install node.js

```
brew install node
```

## Running Server Locally

```
npm install 
npx @11ty/eleventy --serve
```

Browse to http://localhost:8080/ to view live update of the site.

## Writing Blog Online

Login to https://juji.io/admin using your Juji SSO credential and start writing.

## Build the Site Only

Necessary on production sever after pulled the latest

```
npx @11ty/eleventy 
```

