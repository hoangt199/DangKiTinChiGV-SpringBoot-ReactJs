import React, { Component } from "react";
import {Descriptions} from "antd";
import UserService from "../service/user.service";

export default class Home extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       content: ""
//     };
//   }

//   componentDidMount() {
//     UserService.getPublicContent().then(
//       response => {
//         this.setState({
//           content: response.data
//         });
//       },
//       error => {
//         this.setState({
//           content:
//             (error.response && error.response.data) ||
//             error.message ||
//             error.toString()
//         });
//       }
//     );
//   }

  render() {
    return (
      <div>
        <div className="container">
        <header className="jumbotron">
            <label>
            <strong style = {{color : ""}}>THÔNG BÁO:</strong>
            <span style = {{color : ""}}>V/v: Đăng ký các học phần Tốt nghiệp của sinh viên khóa 2017 các ngành: Quản trị kinh doanh; Kế toán; Marketing và Truyền thông đa phương tiện.</span>
            <br></br>
            </label>
            <span>  Thực hiện kế hoạch năm học 2020-2021, Phòng Giáo vụ thông báo về việc đăng ký và tổ chức học các học phần tốt nghiệp cho sinh viên các ngành khối Kinh tế, Truyền thông đa phương tiện hệ Đại học chính quy khóa 2017 và sinh viên các khóa trước còn nợ tốt nghiệp, cụ thể như sau:
<br></br>
<br></br>
<h4>1.  Đối tượng:</h4>

<span>- Tất cả Sinh viên các ngành: Marketing, Quản trị kinh doanh, Kế toán và TTĐPT hệ Đại học chính quy khóa 2017 đủ điều kiện làm khóa luận tốt nghiệp hoặc học các học phần thay thế tốt nghiệp (Danh sách sinh viên đủ điều kiện làm khóa luận tốt nghiệp hoặc học các học phần thay thế tốt nghiệp sẽ được phòng Giáo vụ dự kiến công bố trước ngày 13/04/2021 trên website <a href="https://portal.ptit.edu.vn/giaovu/">www.ptit.edu.vn/giaovu</a>).</span>
<br></br>
<span>- Sinh viên các ngành Marketing, Quản trị kinh doanh, Kế toán và, TTĐPT thuộc các khóa 2014, 2015, 2016 còn nợ học phần thay thế tốt nghiệp. </span> 
<br></br>
<br></br>
<h4>2. Hình thức và thời gian đăng ký:</h4>

<span>- Hình thức đăng ký: Sinh viên đăng ký trên hệ thống <a href ="https://qldt.ptit.edu.vn/Default.aspx?page=gioithieu">http://qldt.ptit.edu.vn;</a> </span>Cụ thể:<br></br>

<span>+ Đối với sinh viên làm khóa luận tốt nghiệp: chỉ được đăng ký học phần “khóa luận tốt nghiệp”.</span><br></br>

+ Đối với sinh viên học các học phần thay thế tốt nghiệp khóa 2017 (bao gồm cả các sinh viên có đơn xin chuyển từ làm khóa luận sang học các học phần thay thế) và sinh viên từ khóa 2016 về trước chỉ được đăng ký học các học phần tốt nghiệp.<br></br>

- Thời gian đăng ký: từ 12h00 ngày 13/04/2021 đến 24h00 ngày 16/04/2021.<br></br>
<br></br>
<strong>Lưu ý:</strong>  Sinh viên nào đăng ký cả 2 hình thức làm Khóa luận và học môn thay thế tốt nghiệp sẽ bị hủy toàn bộ kết quả đăng ký; Sinh viên tự chịu trách nhiệm với thời gian đăng ký học của cá nhân. Nếu có vướng mắc, sinh viên liên hệ tại Văn phòng 1 của – ô số 1 (giờ hành chính) trong 2 ngày 19/04 và 20/04/2021 để được giải đáp.</span>
        </header>
      </div>
      <div>
          <footer style = {{backgroundColor : ""}}>
              <Descriptions title="Về chúng tôi" layout="vertical">
            <Descriptions.Item label="Trường">Học Viện Công Nghệ Bưu Chính Viễn Thông</Descriptions.Item>
            <Descriptions.Item label="Hotline">1810000000</Descriptions.Item>
            <Descriptions.Item label="Địa chỉ">Số xx Trần Phú,Hà Đông</Descriptions.Item>
            <Descriptions.Item label="Address" span={2}>
                Liên hệ chúng tôi:
            </Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
          </Descriptions>
          </footer>
          </div>
      </div>
    );
  }
}