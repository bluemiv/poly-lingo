import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { TPropsWithChildren } from '@repo/core/types';

export default function AntdProvider({ children }: TPropsWithChildren) {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider theme={{ token: { colorPrimary: '#4F46E5' } }}>{children}</ConfigProvider>
    </StyleProvider>
  );
}
