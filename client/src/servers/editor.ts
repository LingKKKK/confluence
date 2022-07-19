import request from '@/request';

// 获取编辑器内容数据
export function getFileData() {
  return request({
    url: 'getFileData.json',
    method: 'GET'
  });
}
