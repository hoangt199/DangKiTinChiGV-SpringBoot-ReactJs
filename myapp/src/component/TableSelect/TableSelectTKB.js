
import Highlighter from 'react-highlight-words';
import React, { Component } from "react";
import { Table, Radio, Divider, Button, Modal, Input } from 'antd';
import userService from '../../service/user.service';
import { render } from '@testing-library/react';

// rowSelection object indicates the need for row selection

export default class TableSelectTKB extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRoom = this.onChangeRoom.bind(this);
    this.onChangeCN = this.onChangeCN.bind(this);
    this.onChangeDayofWeek = this.onChangeDayofWeek.bind(this);
    this.onChangeKip = this.onChangeKip.bind(this);
    this.state = {
      subjects: [],
      currentSubject: null,
      currentIndex: -1,
      searchName: "",
      id: null,
      nameSub: "",
      specialized: "",
      room: "",
      mathematicCode: "",
      weekdays: "",
      modalVisible: false,
    };
  }
  onChangeSearchName = (e) => {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }
  onChangeRoom(value) {
    console.log(`selected ${value}`);
    this.setState({
      room: value
    });
  }
  onChangeName(e) {
    console.log(`selected ${e.target.value}`);
    this.setState({
      nameSub: e.target.value
    });
  }

  onChangeDayofWeek(value) {
    console.log(`selected ${value}`);
    this.setState({
      weekdays: value
    });
  }

  onChangeKip(value) {
    console.log(`selected ${value}`);
    this.setState({
      mathematicCode: value
    });
  }

  onChangeCN(value) {
    console.log(`selected ${value}`)
    this.setState({
      specialized: value
    });
  }
  onDelete = (id) => {
    console.log(id);
    this.setState({
      modalVisible: true
    })
  }
  onRegister = (id) => {
    console.log(id)
  }
  componentWillMount = () => {
    userService.getAll().then(
      (response) => {
        this.setState({
          subjects: response.data
        })
      },
      (error) => {
        const dataAll =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
  render() {

    let i = 1;
    return (
      <div className="list row">
        <div className="col-md-8" >
          <div className="input-group mb-3" >
            <Input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm theo tên môn"
            // value={searchName}
            // onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <Button
                className="btn btn-outline-secondary"
                type="primary"
                onClick={this.searchName}
              >
                Tìm kiếm
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Danh sách lớp học phần</h4>

          <table className="table table-bordered table-hover" style={{ width: '1050px', textAlign: "center" }} >
            <thead>
              <tr>
                <th>STT</th>
                <th>Thay Đổi</th>
                <th>Tên môn học</th>
                <th>Phòng học</th>
                <th>Chuyên ngành</th>
                <th>Thứ</th>
                <th>Kíp học</th>
              </tr>
            </thead>
            <tbody >
              {this.state.subjects.map(
                subject =>
                  <tr key={subject.id}>
                    <td>{i++}</td>
                    <td>
                      <Button type="primary"

                        style={{ backgroundColor: "limegreen", color: "black" }}
                        className="btn btn-danger mr-5"
                        onClick={() => this.onRegister(subject.id)}
                      >Đăng kí</Button>

                    </td>
                    <td>{subject.name_subject}</td>
                    <td>{subject.room}</td>
                    <td>{subject.specialized}</td>
                    <td>{subject.weekdays}</td>
                    <td>{subject.mathematics_code}</td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

