import React, { useState } from 'react';
import Crumb from '@components/Crumb/index';
import { UnlockOutlined, LockOutlined, FileDoneOutlined } from '@ant-design/icons';
import './index.less';

const OperationHeader: React.FC = () => (
  <>
    <div className='crumbList'>
      <Crumb />
    </div>
    <UnlockOutlined className='crumbIcon' />
    <LockOutlined className='crumbIcon' />
    <FileDoneOutlined className='crumbIcon' />
  </>
);

export default OperationHeader;
