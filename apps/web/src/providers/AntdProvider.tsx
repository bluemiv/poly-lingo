import { ConfigProvider, theme } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { TPropsWithChildren } from '@repo/core/types';

export default function AntdProvider({ children }: TPropsWithChildren) {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>{children}</ConfigProvider>
    </StyleProvider>
  );
}
