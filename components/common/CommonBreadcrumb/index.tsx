'use client';
import Breadcrumb, {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from 'antd/es/breadcrumb/Breadcrumb';
import Link from 'next/link';

type Props = {
  items?: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[];
};

const CommonBreadcrumb = ({ items }: Props) => {
  return (
    <Breadcrumb
      items={items}
      itemRender={(route, _params, routes, _paths) => {
        if (!route.href || route.path === routes.length.toString()) {
          return <span>{route.title}</span>;
        }

        return <Link href={route.href}>{route.title}</Link>;
      }}
    />
  );
};

export default CommonBreadcrumb;
