import {Typography} from '@mui/material';

type ParaType = {
  content: string;
};
export default function TextParagraph(props: ParaType) {
  const {content} = props;
  return (
    <Typography variant="body1" sx={{marginBottom: 1}}>
      {content}
    </Typography>
  );
}
