import { createClient } from "contentful";
import type { TypePortfolioHomeSkeleton, TypePortfolioProjectsPageSkeleton } from "./contentfulTypes";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

const getPortfolioHome = async () => {
  const entries = await client.getEntries<TypePortfolioHomeSkeleton>({
    content_type: "portfolioHome",
  });
  if (entries.items) return entries.items;
};

const getPortfolioProjects = async () => {
  const entries = await client.getEntries<TypePortfolioProjectsPageSkeleton>({
    content_type: "portfolioProjectsPage",
  });

  const sortedEntries = entries.items.sort((a, b) => +b.fields.projectOrder! - +a.fields.projectOrder!);
  if (sortedEntries) return sortedEntries;
};

export { getPortfolioHome, getPortfolioProjects };
