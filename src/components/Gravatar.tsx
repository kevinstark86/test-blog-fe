import crypto from 'crypto';
import {Avatar} from '@mui/material';

type GravatarProfile = {
  email: string;
  size: number;
};

export default function Gravatar({email, size = 100}: GravatarProfile) {
  const hash = crypto.createHash('md5').update(email.trim().toLocaleLowerCase()).digest('hex');
  const url = `https://www.gravatar.com/avatar/${hash}?s=${size}`;
  return <Avatar src={url} alt="gravatar" style={{width: size, height: size}} />;
}
