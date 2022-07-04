import { Breadcrumb } from 'antd';
import React, { useState, useEffect } from 'react';
import './index.less';

interface CrumbItem {
  title: string;
  id: number;
  url: string;
}

const Crumb: React.FC = () => {

  // 这两种方法均可以赋值使用
  // let arr1: CrumbItem[] = [];
  // console.log(arr1);
  // const [crumbList, setCrumbList] = useState(arr1);
  // const arr2 = Array<CrumbItem>();
  // console.log(arr2);
  // const [crumbList, setCrumbList] = useState(arr2);

  const [crumbList, setCrumbList] = useState(Array<CrumbItem>());
  useEffect(() => {
    setCrumbList([
      {
        title: 'Home',
        id: 1,
        url: ''
      }, {
        title: 'Application Center',
        id: 2,
        url: ''
      }, {
        title: 'Application List',
        id: 3,
        url: ''
      }, {
        title: 'An Application',
        id: 4,
        url: ''
      }
    ]);
    console.log('crumbList: ', crumbList);
  }, []);
  return (
    <Breadcrumb separator="/">
      {crumbList.map((item: CrumbItem) => {
        return (
          <Breadcrumb.Item className='item' key={item.id} href={item.url}>{item.title}</Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default Crumb;
