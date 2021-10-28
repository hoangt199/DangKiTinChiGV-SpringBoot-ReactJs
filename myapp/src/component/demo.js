    import React from 'react';
    import { form } from 'react-validation/build/form';
    import './demo.css'
    import { Layout, Menu, Breadcrumb ,Image,Table} from 'antd';
    import Title from 'antd/lib/skeleton/Title';
    const { Header, Content, Footer } = Layout;
    const columns = [
        {
          title: 'STT',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
          width: 150,
        },
        {
          title: 'Time',
          dataIndex: 'age',
          key: 'age',
          width: 80,
        },
        {
          title: 'File Name',
          dataIndex: 'name',
          key: 'address 1',
          ellipsis: true,
        },
        {
          title: 'Status',
          dataIndex: 'address',
          key: 'address 2',
          ellipsis: true,
        },

      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'Approve',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'Approve',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Approve',
          tags: ['cool', 'teacher'],
        },
      ];
    function demo() {
        return (
            <div className="container">
        <Layout className="layout-page" style={{backgroundColor:'white'}}>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64}}>
        <div className="header" >
            <div className="logo"></div>
            <strong className="title">CONTRACT APPROVAL REQUEST</strong>
        </div>
        <div className="head-page" >
                <div className="content-inside left">
                <fieldset className="field-approve">
                    <legend><strong>General Infomation</strong></legend>
                    <table className="tblInfo" style={{border:'none'}}>
                        <tr>
                            <td>Customer Name:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Contract Name:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Delivery Unit:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Revenue:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Man/Month:</td>
                            <td></td>
                        </tr>
                        </table>
                </fieldset>
                </div>
                <div className="qrCode left"></div>
        </div>
        <div>
            <fieldset className="field-approve">
                <legend className="legend-approve"><strong>Approval Status</strong></legend>
                <Table columns={columns} dataSource={data} />
            </fieldset>
        </div>
        <div >
            <fieldset className="field-approve">
                <legend className="legend-approve"><strong>Attachment Files</strong></legend>
                <Table columns={columns} dataSource={data} />
            </fieldset>
        </div>
        
        </Content>
        <Footer style={{ textAlign: 'center' ,backgroundColor:'white'}}>CMC Global ©2021 Created by CMC Coparator</Footer>
    </Layout>
            </div>
        );
    }

    export default demo;