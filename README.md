# Spartan Protocol Blog front-end (themeing repo)

Live on: https://blog.spartanprotocol.org/

![image](https://user-images.githubusercontent.com/26967164/132273854-6ff90c97-d89e-4e84-a035-16053e3a04be.png)

This repo houses the theming files for the Spartan Protocol blog. Built off the Gatsby Starter Ghost package.
A starter template to build lightning fast websites with [Ghost](https://ghost.org) & [Gatsby](https://gatsbyjs.org)

This does not hold the actual article/media content; only the structure. The articles are fed in thru a public feed/API so anyone is welcome to hook into that community Ghost feed and provide their own versions of this blog for redundancy or their own personal flair. Otherwise as always we welcome community contrinution to help improve this repo.

Reach out in the Telegram to get involved and/or make a PR of any changes to this repo.

&nbsp;

# Install & Run

Pull this repo to your GitHub Desktop (or CLI) local install.
Open the project in Visual Studio (or your preferred editor)
Run 'yarn' in the console to install all deps.
Run 'gatsby develop' in the console to spin up as local version of the front end to visually see and test any changes as you code.

You now have a Gatsby site pulling content from headless Ghost. Feel free to play around with the theme files and make a PR to help shape the Spartan protocol blog.

# That's it! Info below is not really relevant to most contributors

# GHOST SPECIFIC INFO BELOW:

To use your own install, you will need to edit the `.ghost.json` config file with your credentials. Change the `apiUrl` value to the URL of your Ghost site. For Ghost(Pro) customers, this is the Ghost URL ending in `.ghost.io`, and for people using the self-hosted version of Ghost, it's the same URL used to access your site.

Next, update the `contentApiKey` value to a key associated with the Ghost site (or leave as is to pull the SP articles). A key can be provided by creating an integration within Ghost Admin. Navigate to Integrations and click "Add new integration". Name the integration appropriately and click create.

Finally, configure your desired URL in `siteConfig.js`, so links (e. g. canonical links) are generated correctly. You can also update other default values, such as `postsPerPage` in this file.

To use this starter without issues, your Ghost installation needs to be at least on version `2.10.0`.

The default Ghost version that is used for this starter is `3.x`. If your Ghost installation is on a lower version, you will need to pass in a `version` property in your `.ghost.json` settings:

**Ghost >=2.10.0 <3.0.0**
```json
{
    "apiUrl": "https://gatsby.ghost.io",
    "contentApiKey": "9cc5c67c358edfdd81455149d0",
    "version": "v2"
}
```

**Ghost >=3.0.0**
```json
{
    "apiUrl": "https://gatsby.ghost.io",
    "contentApiKey": "9cc5c67c358edfdd81455149d0"
}
```

&nbsp;

# Deploying with Netlify

The starter contains three config files specifically for deploying with Netlify. A `netlify.toml` file for build settings, a `/static/_headers` file with default security headers set for all routes, and `/static/_redirects` to set Netlify custom domain redirects.

To deploy to your Netlify account, hit the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/TryGhost/gatsby-starter-ghost)

Content API Keys are generally not considered to be sensitive information, they exist so that they can be changed in the event of abuse; so most people commit it directly to their `.ghost.json` config file. If you prefer to keep this information out of your repository you can remove this config and set [Netlify ENV variables](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables) for production builds instead.

Once deployed, you can set up a [Ghost + Netlify Integration](https://docs.ghost.org/integrations/netlify/) to use deploy hooks from Ghost to trigger Netlify rebuilds. That way, any time data changes in Ghost, your site will rebuild on Netlify.

&nbsp;

# Optimising

You can disable the default Ghost Handlebars Theme front-end by enabling the `Make this site private` flag within your Ghost settings. This enables password protection in front of the Ghost install and sets `<meta name="robots" content="noindex" />` so your Gatsby front-end becomes the source of truth for SEO.

&nbsp;

# Extra options

```bash
# Run a production build, locally
gatsby build

# Serve a production build, locally
gatsby serve
```

Gatsby `develop` uses the `development` config in `.ghost.json` - while Gatsby `build` uses the `production` config.

&nbsp;

# Copyright & License

Copyright (c) 2013-2021 Ghost Foundation - Released under the [MIT license](LICENSE).
