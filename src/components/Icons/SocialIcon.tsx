import { OutboundLink } from 'gatsby-plugin-google-gtag';

export interface SocialLinkProps {
  icon: string;
  name: string;
  url: string;
}

function SocialIcon({ icon, name, url }: SocialLinkProps) {
  return (
    <OutboundLink href={url} alt={`${name} link`}>
      <i className={`devicon-${icon}`} />
    </OutboundLink>
  );
}

export default SocialIcon;
