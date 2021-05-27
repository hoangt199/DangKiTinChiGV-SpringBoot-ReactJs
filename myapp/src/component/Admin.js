import React, { useState, useEffect,Component } from "react";
import { Link ,Route,Switch} from "react-router-dom";
import { Descriptions } from "antd";
import  addSubject from '../component/CRUD-Subject/addSubject'
import subjectComponent from '../component/CRUD-Subject/subjectComponent'
import subjectList from '../component/CRUD-Subject/subjectList'
const BoardAdmin = () => {
  const [content, setContent] = useState("");

//   useEffect(() => {
//     UserService.getAdminBoard().then(
//       (response) => {
//         setContent(response.data);
//       },
//       (error) => {
//         const _content =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();

//         setContent(_content);
//       }
//     );
//   }, []);

  return (
    <div className="main">
          <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/add-subject/mon-hoc"} className="nav-link">
                  Danh sách môn học
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add-subject/add"} className="nav-link">
                    Thêm môn mới
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={"/add-subject/mon-hoc/"} component={subjectList} />
            <Route exact path="/add-subject/add" component={addSubject} />
            <Route path="/add-subject/mon-hoc/:id" component={subjectComponent} />
          </Switch>
        </div>
      </div>
      <div>
          <footer style = {{backgroundColor : "" , width : "100%",marginTop : "300px"}}>
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

export default BoardAdmin;