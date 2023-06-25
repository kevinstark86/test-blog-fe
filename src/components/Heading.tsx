import {Typography} from '@mui/material';

type HeadingType = {
  content: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
export default function Heading(props: HeadingType) {
  const {type, content} = props;
  return <Typography variant={type}>{content}</Typography>;
}
