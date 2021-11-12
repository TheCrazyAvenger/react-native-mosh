export type ImageInputProps = {
  uri?: string | null;
  onChange: any;
};

export type TweetItemProps = {
  title: string;
  price: string;
  uri: string;
  thumbnailUrl: string;
};

export type ImageInputListProps = {
  uris: Array<string> | [];
  onAdd: any;
  onRemove: any;
};

export type AccountPanelProps = {
  style?: any;
  name: string;
  email: string;
};

export type AccountItemProps = {
  style?: any;
  icon: string;
  iconColor: string;
  title: string;
  onPress: any;
};

export type ActivityIndicatorProps = {
  visible: boolean;
};
