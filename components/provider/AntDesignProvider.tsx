'use client';

import { ReactNode } from 'react';
import theme from 'antd/es/theme';
import ConfigProvider, { ThemeConfig } from 'antd/es/config-provider';

const configTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#f5821e',
  },
};

type AntdProviderType = {
  children: ReactNode;
};

const AntDesignProvider = ({ children }: AntdProviderType) => {
  return <ConfigProvider theme={configTheme}>{children}</ConfigProvider>;
};

export default AntDesignProvider;
