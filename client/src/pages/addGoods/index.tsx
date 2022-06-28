import React from 'react';
import { Button, Select, Input, InputNumber, DatePicker, Form } from 'antd';
import './index.less';

const { RangePicker } = DatePicker;

const { Option } = Select;

const SELECT_WIDTH = 340;

const aaa = () => {
  console.log('自定义函数监听');
};

function AddGoods() {
  // 表单提交
  const handleSubmit = (values: any) => {
    console.log('表单提交监听:', values);
  };

  return (
    <section className="addGoods">
      <Form style={{ width: 800 }} labelAlign="right" name="addGoods" onFinish={handleSubmit}>
        <Form.Item
          label="输入框"
          name="barCode"
          rules={[
            {
              required: true,
              message: '请输入条形码'
            }
          ]}
        >
          <Input style={{ width: SELECT_WIDTH }} placeholder="输入框" />
        </Form.Item>
        <Form.Item label="数字输入框" name="inventory">
          <InputNumber style={{ width: SELECT_WIDTH }} placeholder="数字输入框" />
        </Form.Item>
        <Form.Item label="Select框" name="goodsLabel">
          <Select allowClear style={{ width: SELECT_WIDTH }} placeholder="Select框">
            <Option value={1}>aaaa</Option>
            <Option value={2}>bbbb</Option>
          </Select>
        </Form.Item>
        <Form.Item label="时间选择器" name="createTime">
          <RangePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={aaa}>
            提交
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}

export default AddGoods;
