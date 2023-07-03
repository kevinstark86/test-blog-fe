import {PayloadMedia} from '@/types/payload-types';

export type RichTextNode = {
  bold?: Boolean;
  code?: Boolean;
  italic?: Boolean;
  strikethrough?: Boolean;
  text: String;
  type: String;
  url?: string;
  children: RichTextNode[];
  value?: PayloadMedia;
};

export type TagsNode = {
  id: string;
  name: string;
};
