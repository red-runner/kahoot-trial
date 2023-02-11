export type FieldTuple<N extends number, T> = N extends 0
  ? string[]
  : {
      0: T;
      length: N;
    } & ReadonlyArray<T>;

export interface ItemsHeaderProps {
  fields: FieldTuple<3, string>;
}
