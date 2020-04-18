declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

interface GraphQLSiteMetadata {
  site: {
    siteMetadata: object;
  };
}
