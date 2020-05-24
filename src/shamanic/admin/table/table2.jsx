import React from 'react';
import { Table, Tag, Space, Radio, Divider,InputNumber, Popconfirm, Form } from 'antd';

const { Column, ColumnGroup } = Table;

const originData = [];


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    onFilter: (value, record) => record.email.indexOf(value) === 0,
    sorter: (a, b) => a.email.length - b.email.length,
    sortDirections: ['descend', 'ascend'],
  },{
    title: 'Created At',
    dataIndex: 'date',
    key: 'date',
  },{
    title: 'Lead At',
    dataIndex: 'lead',
    key: 'lead',
  }
];

const data = [
    {
      key: '1',
      name: 'John Brown',
      date: 32,
      email: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      date: 42,
      email: 'London No. 1 Lake Park',
    }
  ];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  

  

const Tablex = (props) => {


    const [selectionType, setSelectionType] = React.useState('checkbox');

return ( 
    <React.Fragment>
    <Radio.Group
    onChange={({ target: { value } }) => {
      setSelectionType(value);
    }}
    value={selectionType}
  >
    <Radio value="checkbox">Checkbox</Radio>
    <Radio value="radio">radio</Radio>
  </Radio.Group>

  <Divider />
<Table
  rowSelection={{
    type: selectionType,
    ...rowSelection,
  }}
columns={columns} 
dataSource={data} />

</React.Fragment>)

}


export default Tablex