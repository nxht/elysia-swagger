import scalarElysiaTheme from './theme'
import type { OpenAPIV3 } from 'openapi-types'
import type { ReferenceConfiguration } from '@scalar/api-reference'

export const ScalarRender = (
    info: OpenAPIV3.InfoObject,
    version: string,
    config: ReferenceConfiguration,
    cdn: string
) => `<!doctype html>
<html>
  <head>
    <title>${info.title}</title>
    <meta
        name="description"
        content="${info.description}"
    />
    <meta
        name="og:description"
        content="${info.description}"
    />
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1" />
    <style>
      body {
        margin: 0;
      }
    </style>
    <style>
      ${config.customCss ?? scalarElysiaTheme}
    </style>
  </head>
  <body>
    <script
      id="api-reference"
      data-url="${config.spec?.url}"
      data-configuration='${JSON.stringify(config)}'
    >
    </script>
    <script src="${
        cdn
            ? cdn
            : `https://cdn.jsdelivr.net/npm/@scalar/api-reference@${version}/dist/browser/standalone.min.js`
    }" crossorigin></script>
  </body>
</html>`
