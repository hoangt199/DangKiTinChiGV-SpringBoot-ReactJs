import React, { useState, useEffect } from "react";
import { Descriptions } from "antd";
import UserService from "../service/user.service";

const Moderator = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getModeratorBoard().then(
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

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
      <div>
          <footer style = {{backgroundColor : "" , width : "100%",paddingBottom : "10px"}}>
              <Descriptions title="Về chúng tôi" layout="vertical">
            <Descriptions.Item label="Trường">Học Viện Công Nghệ Bưu Chính Viễn Thông</Descriptions.Item>
            <Descriptions.Item label="Hotline">1810000000</Descriptions.Item>
            <Descriptions.Item label="Địa chỉ">Số xx Trần Phú,Hà Đông</Descriptions.Item>
            <Descriptions.Item label="Address" span={2}>
                 Liên hệ chúng tôi
            </Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
          </Descriptions>
          </footer>
          </div>
    </div>
  );
};

export default Moderator;