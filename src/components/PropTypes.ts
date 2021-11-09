export type ImageInputProps = {
  uri?: string | null;
  onChange: any;
};

export type ImageInputListProps = {
  uris: Array<string> | [];
  onAdd: any;
  onRemove: any;
};
