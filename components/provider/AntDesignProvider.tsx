'use client';

import { ReactNode } from 'react';
import theme from 'antd/es/theme';
import ConfigProvider from 'antd/es/config-provider';

type AntdProviderType = {
  children: ReactNode;
};

const AntDesignProvider = ({ children }: AntdProviderType) => {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      {children}
    </ConfigProvider>
  );
};

export default AntDesignProvider;
