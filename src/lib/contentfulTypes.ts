import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePortfolioHomeFields {
    portfolioTitle?: EntryFieldTypes.Symbol;
    introContent?: EntryFieldTypes.RichText;
    aboutImage?: EntryFieldTypes.AssetLink;
    aboutContent?: EntryFieldTypes.RichText;
}

export type TypePortfolioHomeSkeleton = EntrySkeletonType<TypePortfolioHomeFields, "portfolioHome">;
export type TypePortfolioHome<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePortfolioHomeSkeleton, Modifiers, Locales>;

export interface TypePortfolioProjectsPageFields {
    projectTitle?: EntryFieldTypes.Symbol;
    projectOrder?: EntryFieldTypes.Integer;
    slug?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    titleImage?: EntryFieldTypes.AssetLink;
    projectImages?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypePortfolioProjectsPageSkeleton = EntrySkeletonType<TypePortfolioProjectsPageFields, "portfolioProjectsPage">;
export type TypePortfolioProjectsPage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePortfolioProjectsPageSkeleton, Modifiers, Locales>;

