'use client';

import { ReactNode } from 'react';
import theme from 'antd/es/theme';
import ConfigProvider, { ThemeConfig } from 'antd/es/config-provider';
import { colorConst } from '@/constants/colorConst';

const configTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: colorConst.COLOR_PRIMARY,
  },
};

type AntdProviderType = {
  children: ReactNode;
};

const AntDesignProvider = ({ children }: AntdProviderType) => {
  return <ConfigProvider theme={configTheme}>{children}</ConfigProvider>;
};

export default AntDesignProvider;
