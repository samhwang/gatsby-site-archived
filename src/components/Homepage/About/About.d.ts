type AboutSection = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  socialLinks: Array<{ icon: string; name: string; url: string }>;
};

type AboutMetadata = {
  site: {
    siteMetadata: {
      personalInformation: AboutSection;
    };
  };
};

type AboutProps = {
  data: AboutMetadata;
};
