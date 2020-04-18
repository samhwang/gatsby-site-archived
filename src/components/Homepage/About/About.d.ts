interface AboutSection {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  socialLinks: Array<{ icon: string; name: string; url: string }>;
}

interface AboutMetadata extends GraphQLSiteMetadata {
  site: {
    siteMetadata: {
      personalInformation: AboutSection;
    };
  };
}

interface AboutProps {
  data: AboutMetadata;
}
