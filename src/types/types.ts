import {PayloadMedia} from '@/types/payload-types';

export type RichTextNode = {
  bold?: Boolean;
  code?: Boolean;
  italic?: Boolean;
  strikethrough?: Boolean;
  text: String;
  type: String;
  url?: String;
  children: RichTextNode[];
  value?: PayloadMedia;
};
