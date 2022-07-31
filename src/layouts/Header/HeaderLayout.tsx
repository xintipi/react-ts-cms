import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

import styles from './header-layout.module.scss';

function HeaderLayout() {
  return (
    <div className={styles['header__content']}>
      <Breadcrumb className={styles['header__content--left']} />
      <div className={styles['header__content--right']}>
        <Button className={styles['btn__search']}>
          <SearchOutlined />
        </Button>
        Profile here!!!
      </div>
    </div>
  );
}

export default HeaderLayout;
