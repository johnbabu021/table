import React from 'react';
import 'antd/dist/antd.css';
import { Button, Row, Space, Table, Tag } from 'antd';
import '../styles/table.css'
import { PlusOutlined } from '@ant-design/icons';
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    // tags: 'John',
    lastPrice: 'Brown',
    zestimate: 32,
    estm:'$1234',
    image:'logo192.png',
    bed:4,
    bath:3,
    sqft:1200,
    price:12000000
  }
];
for(let i=0;i<4;i++){
    data.push({
        key: '1',
        // tags: 'John',
        lastPrice: 'Brown',
    image:'logo192.png',
        zestimate: 32,
        estm:'$1234',
        bed:4,
        bath:3,
        sqft:1200,
        price:12000000

      })
}

export const TableComponent = () => (
 <div className='table'>
   <Table dataSource={data}>
      <Column title="image" dataIndex="image" key="Image" fixed="left"
     render={(src)=>{
      return(
<img style={{
  width:'100px',
  height:'100px'
}} src={src}/>
        )
     }}
      />
          <ColumnGroup  id="overview" className='columngroup'  title="Overview" >

<Column title="Tags" dataIndex="Tags" key="tags"  render={()=>{
  return(
    <Button type='primary' style={{
      background:"62a9b7 !important",
      borderRadius:'10px'
    }}><PlusOutlined />Add my tags</Button>
  )
}}/>
<Column title="List price" dataIndex='lastPrice'/>
<Column title="Zestimate" dataIndex='zestimate'/>
<Column title="Estimated monthly cost" dataIndex='estm'/>
<Column title="Price/sqft" dataIndex='price'/>
<Column title="Bedrooms" dataIndex='bed'/>
<Column title="Bathrooms" dataIndex='bath'/>
<Column title="Square Feet" dataIndex='sqft'/>
        </ColumnGroup>
        <ColumnGroup  id="interior"  className='columngroup' title="Interior">

{/* <Column title="Tags" dataIndex="Tags" key="tags"  render={()=>{
  return(
    <Button type='primary'  style={{
      borderRadius:'10px'
    }}><PlusOutlined />Add my tags</Button>
  )
}}/> */}
<Column title="List price" dataIndex='lastPrice'/>
<Column title="Zestimate" dataIndex='lastPrice'/>
<Column title="Estimated monthly cost" dataIndex='lastPrice'/>
<Column title="Price/sqft" dataIndex='lastPrice'/>
<Column title="Bedrooms" dataIndex='lastPrice'/>
<Column title="Bathrooms" dataIndex='lastPrice'/>
<Column title="Square Feet" dataIndex='lastPrice'/>
        </ColumnGroup>

  </Table>

 </div>
);

