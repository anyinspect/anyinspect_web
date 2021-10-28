import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import {
  supportedLanguages,
  useCurrentLanguage,
} from '../../utils/useCurrentLanguage';

import './index.less';

const SelectLanguageItemFlag = ({ name, flag }: any) => {
  return <img alt={name} className={'select-language-item-flag'} src={flag} />;
};

const SelectLanguage = () => {
  const { currentLanguage, setCurrentLanguage } = useCurrentLanguage();

  const handleMenuClick = ({ key }) => {
    setCurrentLanguage(key);
  };

  return (
    <Dropdown
      overlay={
        <Menu onClick={handleMenuClick}>
          {Object.keys(supportedLanguages).map((code) => {
            const supportedLanguage = supportedLanguages[code];
            return (
              <Menu.Item
                key={code}
                icon={<SelectLanguageItemFlag {...supportedLanguage} />}
              >
                {supportedLanguage.name}
              </Menu.Item>
            );
          })}
        </Menu>
      }
    >
      <Button icon={<SelectLanguageItemFlag {...currentLanguage} />}>
        {currentLanguage.name}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default SelectLanguage;
