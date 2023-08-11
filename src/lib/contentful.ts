import { createClient } from "contentful"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
})

const getPortfolioWebsite = async () => {
  const entries = await client.getEntries({
    content_type: "portfolioWebsite",
  });
  if (entries.items) return entries.items;
};

export default getPortfolioWebsite;