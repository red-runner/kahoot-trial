import { ReactNode, CSSProperties } from 'react';

export interface FlexContainerProps
  extends Pick<
    CSSProperties,
    'alignItems' | 'justifyContent' | 'flexWrap' | 'gap' | 'margin' | 'padding' | 'flexDirection' | 'flexGrow'
  > {
  children: ReactNode;
  style?: CSSProperties;
}
