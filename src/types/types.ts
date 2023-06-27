import {PayloadMedia} from '@/types/payload-types';

export type RichTextNode = {
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  text: string;
  type: string;
  url?: string | undefined;
  children: RichTextNode[];
  value?: PayloadMedia;
};
