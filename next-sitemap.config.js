module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.goldenstatewebdesign.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
