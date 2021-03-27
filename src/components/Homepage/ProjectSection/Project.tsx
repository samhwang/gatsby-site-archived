import { OutboundLink } from 'gatsby-plugin-google-gtag';

export interface ProjectProps {
  title: string;
  description: string;
  url?: string;
}

function Project({ title, description, url }: ProjectProps) {
  const titleText = url ? (
    <OutboundLink href={url}>
      <strong>{`${title}:`}</strong>
    </OutboundLink>
  ) : (
    <strong>{`${title}:`}</strong>
  );

  return (
    <li>
      <i className="fa-li fa fa-tasks text-warning" />
      <p>
        {titleText}
        {` ${description}`}
      </p>
    </li>
  );
}

Project.defaultProps = {
  url: '',
};

export default Project;
