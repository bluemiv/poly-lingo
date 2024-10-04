import { TPropsWithChildren } from '@repo/ui/types';
import { StyleProvider } from '@ant-design/cssinjs';

export default function AntdProvider({ children }: TPropsWithChildren) {
  return <StyleProvider hashPriority="high">{children}</StyleProvider>;
}
