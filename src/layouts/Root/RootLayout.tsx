import { ConfigProvider, Layout } from 'antd';

import { useClassnames } from '@/hooks/useClassnames';
import HeaderLayout from '@/layouts/Header/HeaderLayout';
import SidebarLayout from '@/layouts/Sidebar/SidebarLayout';

import styles from './RootLayout.module.scss';

const { Header, Content } = Layout;

function RootLayout(props: { children: any }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SidebarLayout />

      <Layout
        className={useClassnames({
          [styles['site-layout']]: true,
          'd-flex': true,
        })}
      >
        <Header className={styles['site-layout-background']} style={{ padding: 0 }}>
          <HeaderLayout />
        </Header>
        <Content>
          <div className={styles['site-layout-background']} style={{ minHeight: '100%' }}>
            <ConfigProvider>{props.children}</ConfigProvider>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default RootLayout;
