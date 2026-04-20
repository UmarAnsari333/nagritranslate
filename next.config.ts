import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: [
              '<https://nagritranslate.com/sitemap.xml>; rel="sitemap"; type="application/xml"',
              '<https://nagritranslate.com/api/translate>; rel="service-endpoint"',
              '<https://nagritranslate.com/robots.txt>; rel="robots"',
              '<https://nagritranslate.com/.well-known/oauth-authorization-server>; rel="oauth-authorization-server"',
              '<https://nagritranslate.com/.well-known/openid-configuration>; rel="openid-configuration"',
              '<https://nagritranslate.com/.well-known/oauth-protected-resource>; rel="oauth-protected-resource"',
              '<https://nagritranslate.com/.well-known/api-catalog>; rel="api-catalog"',
              '<https://nagritranslate.com/.well-known/mcp/server-card.json>; rel="mcp-server-card"',
              '<https://nagritranslate.com/.well-known/agent-skills/index.json>; rel="agent-skills"',
            ].join(', '),
          },
          {
            key: 'Vary',
            value: 'Accept',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
