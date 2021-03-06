import React, { Component, useState } from "react";
import { Descriptions, Input, Button, Modal, Select, message } from "antd";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import userService from "../../service/user.service";
import "./stylee/subjectList.css"
import addSubject from "../CRUD-Subject/addSubject"
import { flushSync } from "react-dom";
const { Option } = Select;
function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}
function onSearchDayOfWeek(val) {
  console.log('search:', val);
}
export default class subjectList extends Component {

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
      modalVisibleEdit: false,
      subjectEdit: null
    };
  }

  componentDidMount = () => {
    this.retrieveSubjects();
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


  retrieveSubjects = () => {
    userService.getAll()
      .then(response => {
        this.setState({
          subjects: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList = () => {
    this.retrieveSubjects();
    this.setState({
      currentSubject: null,
      currentIndex: -1
    });
  }
  setActiveSubject = (Subject, index) => {
    this.setState({
      currentSubject: Subject,
      currentIndex: index
    });
  }
  setModalVisible = (modalVisible) => {
    this.setState({ modalVisible });
    message.warning("X??a th???t b???i!");
  }
  onDelete = (id) => {
    console.log(id);
    this.setState({
      modalVisible: true
    })
  }
  onUpdate = (id) => {
    console.log(id)
    userService.get(id).then(res => {
      let subjectOld = res.data;
      console.log(subjectOld);
      this.setState({
        id: subjectOld.id,
        nameSub: subjectOld.name_subject,
        room: subjectOld.room,
        specialized: subjectOld.specialized,
        weekdays: subjectOld.weekdays,
        mathematicCode: subjectOld.mathematics_code
      })

    })

    this.setState({
      modalVisibleEdit: true
    })
  }
  setModalVisibleEdit1 = (modalVisible, id) => {
    this.setState({ modalVisibleEdit: false, id: id })
    let subjectOld = userService.get(id);
    console.log(subjectOld);
    let subjectNew = {
      id: subjectOld.id,
      name_subject: this.state.nameSub,
      specialized: this.state.specialized,
      room: this.state.room,
      weekdays: this.state.weekdays,
      mathematics_code: this.state.mathematicCode
    }
    console.log(subjectNew)
    if(subjectNew.name_subject.length == 0  
      || subjectNew.specialized.length == 0
     || subjectNew.weekdays.length == 0
     ||subjectNew.mathematics_code.length == 0
     ||subjectNew.room.length == 0){
       message.warning("Kh??ng ???????c ????? tr???ng th??ng tin c??c tr?????ng!")
       this.setState({
         modalVisibleEdit : true
       })
     }else{
      userService.update(id, subjectNew).then(res => {
        {
          message.info(res.data)
        }
      })
      this.setState({
        modalVisibleEdit : false
      })
      // message.success("S???a ?????i th??nh c??ng!")
      setTimeout(5000);
      window.location.reload();
     }
   
  }
  setModalVisibleEdit = (modalVisible) => {
    this.setState({ modalVisibleEdit: modalVisible })

  }

  setModalVisible1 = (modalVisible, id) => {
    this.setState({ modalVisible });
    userService.deleteSub(id).then(res => {
      console.log("delete successed")
    })
    message.success("X??a m??n h???c th??nh c??ng!")
    window.location.reload();
  }
  removeAllSubject = () => {
    userService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchTitle = () => {
    this.setState({
      currentSubject: null,
      currentIndex: -1
    });

    userService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          subjects: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    const { searchName, subjects, currentSubject, currentIndex } = this.state;
    let i = 1;
    return (
      <div className="list row">
        <div className="col-md-8" >
          <div className="input-group mb-3" >
            <Input
              type="text"
              className="form-control"
              placeholder="T??m ki???m theo t??n m??n"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <Button
                className="btn btn-outline-secondary"
                type="primary"
                onClick={this.searchName}
              >
                T??m ki???m
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Danh s??ch l???p h???c ph???n</h4>

          <table className="table table-bordered table-hover" style={{ width: '1050px', textAlign: "center" }} >
            <thead>
              <tr>
                <th>STT</th>
                <th>Thay ?????i</th>
                <th>T??n m??n h???c</th>
                <th>Ph??ng h???c</th>
                <th>Chuy??n ng??nh</th>
                <th>Th???</th>
                <th>K??p h???c</th>
              </tr>
            </thead>
            <tbody >
              {this.state.subjects.map(
                subject =>
                  <tr key={subject.id}>
                    <td>{i++}</td>
                    <td>
                      <Button type="primary"
                        style={{}}
                        className="btn btn-success mr-5"
                        onClick={() => this.onUpdate(subject.id)}>
                        S???a ?????i</Button>
                      <Modal
                        // title="20px to Top"
                        style={{ top: 100 }}
                        visible={this.state.modalVisibleEdit}
                        onOk={() => this.setModalVisibleEdit1(true, subject.id)}
                        onCancel={() => this.setModalVisibleEdit(false)}
                      >
                        {/* form update */}
                        <h1 style={{ textAlign: "center" }}>S???a th??ng tin l???p h???c ph???n</h1>
                        <div className="row" >
                          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" style={{ width: "100%", margin: "0 auto", border: "1px dashed grey", borderRadius: "5px", padding: "20px 20px 20px 20px" }}>
                            <form action="" method="POST" role="form" >
                              <div className="form-group">
                                <label for="">T??n m??n h???c</label>
                                <Input type="text"
                                  className="form-control"
                                  name="nameSub"
                                  value={this.state.nameSub}
                                  placeholder="T??n m??n h???c"
                                  onChange={this.onChangeName}
                                  style={{ borderRadius: "5px" }}
                                />
                              </div>
                              <div className="form-group">
                                <label for="">Chuy??n Ng??nh</label>
                                <Select
                                  showSearch
                                  style={{ width: "100%" }}
                                  placeholder="Ch???n chuy??n ng??nh"
                                  optionFilterProp="children"
                                  onChange={this.onChangeCN}
                                  onFocus={onFocus}
                                  onBlur={onBlur}
                                  onSearch={onSearch}
                                  name="specialized"
                                  value={this.state.specialized}
                                  filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                  }
                                >
                                  <Option value="CNPM">CNPM</Option>
                                  <Option value="HTTT">HTTT</Option>
                                </Select>
                              </div>
                              <div className="form-group">
                                <label for="">Ph??ng</label>
                                <Select
                                  showSearch
                                  style={{ width: "100%" }}
                                  placeholder="Ch???n ph??ng h???c"
                                  optionFilterProp="children"
                                  name="room"
                                  onChange={this.onChangeRoom}
                                  onFocus={onFocus}
                                  onBlur={onBlur}
                                  onSearch={onSearch}
                                  value={this.state.room}
                                  filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                  }
                                >
                                  <Option value="101 - A2">101 - A2</Option>
                                  <Option value="201 - A2">201 - A2</Option>
                                  <Option value="301 - A2">301 - A2</Option>
                                  <Option value="401 - A2">401 - A2</Option>
                                  <Option value="501 - A2">501 - A2</Option>
                                  <Option value="601 - A2">601 - A2</Option>
                                  <Option value="701 - A2">701 - A2</Option>
                                </Select>
                              </div>
                              <div className="form-group">
                                <label for="">Th???</label>
                                <Select
                                  showSearch
                                  style={{ width: "100%" }}
                                  placeholder="Ch???n th??? trong tu???n"
                                  optionFilterProp="children"
                                  name="weekdays"
                                  onChange={this.onChangeDayofWeek}
                                  onFocus={onFocus}
                                  onBlur={onBlur}
                                  onSearch={onSearchDayOfWeek}
                                  value={this.state.weekdays}
                                  filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                  }
                                >
                                  <Option value="Th??? 2">Th??? 2</Option>
                                  <Option value="Th??? 3">Th??? 3</Option>
                                  <Option value="Th??? 4">Th??? 4</Option>
                                  <Option value="Th??? 5">Th??? 5</Option>
                                  <Option value="Th??? 6">Th??? 6</Option>
                                  <Option value="Th??? 7">Th??? 7</Option>
                                </Select>
                              </div>
                              <div className="form-group">
                                <label for="">K??p h???c</label>
                                <Select
                                  showSearch
                                  style={{ width: "100%" }}
                                  placeholder="Ch???n k??p d???y"
                                  optionFilterProp="children"
                                  name="mathematicCode"
                                  onChange={this.onChangeKip}
                                  onFocus={onFocus}
                                  onBlur={onBlur}
                                  onSearch={onSearchDayOfWeek}
                                  value={this.state.mathematicCode}
                                  filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                  }
                                >
                                  <Option value="7h - 8h50">7h - 8h50</Option>
                                  <Option value="9h - 10h50">9h - 10h50</Option>
                                  <Option value="12h - 13h50">12h - 13h50</Option>
                                  <Option value="14h - 15h50">14h - 15h50</Option>
                                  <Option value="16h - 17h50">16h - 17h50</Option>
                                  <Option value="18h - 19h50">18h - 19h50</Option>
                                </Select>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Modal>
                      <Button type="primary"

                        style={{ backgroundColor: "#FF6A6A", color: "black" }}
                        className="btn btn-danger mr-5"
                        onClick={() => this.onDelete(this.subject)}
                      >X??a</Button>
                      <Modal
                        // title="20px to Top"
                        style={{ top: 100 }}
                        visible={this.state.modalVisible}
                        onOk={() => this.setModalVisible1(false, subject.id)}
                        onCancel={() => this.setModalVisible(false)}
                      >
                        <label>B???n c?? ch???c ch???n mu???n x??a m??n h???c?</label>
                      </Modal>
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

          <Button
            type="primary"
            onClick={this.open}
          >
            X??a t???t c???
          </Button>

        </div>
      </div>
    );
  }
}