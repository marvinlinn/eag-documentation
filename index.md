---
title: Home
layout: home
nav_order: 1
---

# EAG Documentation & Procedures
{: .fs-9 }

Welcome to EAG documentation! This website hosts a wealth of procedures and processes for the Experimental Astrophysics Group.
{: .fs-6 .fw-300 }

[Get started now](#contribution-guidelines){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[Source Repository](https://github.com/marvinlinn/eag-documentation){: .btn .btn-outline .fs-5 .mb-4 .mb-md-0 }

---

## Overview
{: .fw-700 }

This webpage is built using Jekyll, a static site generator. The static HTML/CSS/JavaScript is generated from plain text Markdown (.md) files and the [Just the Docs](https://just-the-docs.com/) theme. 

## Contribution Guidelines
{: .fw-700 }

Currently, this webpage is hosted on a temporary repository[^1] due to the unavailability of GitLab Pages on the SSL self-hosted instance of GitLab. The source files for most webpages can be found in `./src`. 

### Creating New Procedures

When creating a procedure and/or document, create a new Markdown file in the `./src` folder. If you are creating multiple pages within the documentation, please create a folder with the markdown files for the procedure/document inside. 

{: .note }
When Jekyll is building the website, it will automatically scrape through each folder to find appropriately formatted Markdown files. To enact a page hierarchy, please reference [this page](https://just-the-docs.com/docs/navigation-structure/#pages-with-children) in the Just the Docs documentation to format it appropriately.

While there are numerous ways you can format the pages, a template is provided. Feel free to copy this template and/or other pages in order to appropriately format process manuals and procedures.

I highly reccomend taking advantage of [Just the Docs' Docuumentation](https://just-the-docs.com/) to configure your page. There are a variety of formatting and tools that can be used to create effective procedures and documentation!

### Updating Procedures

Feel free to update procedures as seen fit. Upon revision, ensure to update the "Last Updated" section in the header of the page. This will help us keep track of versioning and modifications. Otherwise, have free reign in modifying procedures!


## Building and previewing the site locally
{: .fw-700 }

Assuming [Jekyll](https://jekyllrb.com/docs/installation/) and [Bundler](https://bundler.io/guides/getting_started.html) are installed on your computer:

1.  Change your working directory to the root directory of your site.

2.  Run `bundle install`.

3.  Run `bundle exec jekyll serve` to build your site and preview it at `localhost:4000`.

    The built site is stored in the directory `_site`.

## Contributers
{: .fw-700 }

**Spring 2024** (V1.0): Marvin Lin, Sara Kofman, Andrew Ji

----

[^1]: Currently, it is hosted on Marvin Lin's personal GitHub account with a subdomain of his personal website.
