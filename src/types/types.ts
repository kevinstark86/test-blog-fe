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

export type Author = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type TagsNode = {
  id: string;
  name: string;
};
