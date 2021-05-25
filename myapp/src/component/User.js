import React, { useState, useEffect } from "react";
import {Input ,Select,Descriptions} from "antd";
import "antd/dist/antd.css";
import UserService from "../service/user.service";
import TableResult from './TableSelect/TableResult'
import TableSelectTKB from '../component/TableSelect/TableSelectTKB'
const User = () => {
  const [content, setContent] = useState("");
 
  const { Option } = Select;
  
  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);

 

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1890ff',
//     }}
//   />
// );

const onSearch = value => console.log(value);

const { Search } = Input;

  return (
    <div className="container">
      <header className="jumbotron">
      <Select
    showSearch
    style={{ width: "600px" }}
    placeholder="Chọn 1 môn trong kì"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
     <Option value="0">---Chọn một môn ---</Option>
    <Option value="1">Đảm bảo chất lượng phần mêm</Option>
    <Option value="2">Trí tuệ nhân tạo</Option>
    <Option value="3">Kĩ thuật số</Option>
    <Option value="4">Các hệ thống phân tán</Option>
    <Option value="5">Phát triển thiết bị di động</Option>
    <Option value="6">Phát triển phần mềm hướng dịch vụ</Option>
  </Select>,
      </header>
      <body>
        <strong>Các môn trong kì</strong>
        <TableSelectTKB/>
        <br/>
        <label>Xem đăng kí</label>
        <br/>
        <TableResult/>
      </body>
      <div>
          <footer style = {{backgroundColor : "" , width : "100%",paddingBottom : "10px"}}>
              <Descriptions title="Về chúng tôi" layout="vertical">
            <Descriptions.Item label="Trường">Học Viện Công Nghệ Bưu Chính Viễn Thông</Descriptions.Item>
            <Descriptions.Item label="Hotline">1810000000</Descriptions.Item>
            <Descriptions.Item label="Địa chỉ">Số xx Trần Phú,Hà Đông</Descriptions.Item>
            <Descriptions.Item label="Address" span={2}>
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
          </Descriptions>
          </footer>
          </div>
      </div>
  );
};

export default User;