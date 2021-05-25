import { Button, Input, Select ,message,Descriptions} from "antd";
import '../CRUD-Subject/stylee/addSubject.css'
import userSevice from "../../../src/service/user.service";
import React, { Component } from "react";
import "../CRUD-Subject/stylee/addSubject.css"
const {Option} = Select;

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

export default class addSubject extends Component {

  constructor(props) {
    
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRoom = this.onChangeRoom.bind(this);
    this.onChangeCN = this.onChangeCN.bind(this);
    this.onChangeDayofWeek = this.onChangeDayofWeek.bind(this);
    this.onChangeKip = this.onChangeKip.bind(this);
    this.saveSubject = this.saveSubject.bind(this);
    this.state = {
      id :  this.props.match.params.id,
      nameSub : "",
      specialized : "",
      room : "",
      mathematicCode : "",
      weekdays : "",
      submitted : false,
      subject : []
    };
  }
   simpleStringify (object){
    var simpleObject = {};
    for (var prop in object ){
        if (!object.hasOwnProperty(prop)){
            continue;
        }
        if (typeof(object[prop]) == 'object'){
            continue;
        }
        if (typeof(object[prop]) == 'function'){
            continue;
        }
        simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
};
  saveSubject(e){
    
      let newSubject = {
        name_subject : this.state.nameSub,
        specialized : this.state.specialized,
        room : this.state.room,
        weekdays : this.state.weekdays,
        mathematics_code : this.state.mathematicCode
      }
      userSevice.create(newSubject).then( res =>{
          this.setState({
            submitted:true
          })
      });
  }
  onChangeRoom(value) {
    console.log(`selected ${value}`);
    this.setState({
      room  : value
    });
  }
   onChangeName(e) {
    console.log(`selected ${e.target.value}`);
    this.setState({
      nameSub  : e.target.value
    });
  }
  
 onChangeDayofWeek(value) {
  console.log(`selected ${ value}`);
  this.setState({
    weekdays  : value
  });
}
 required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
          Không được để trống trường này!
      </div>
    );
  }
};
 onChangeKip(value) {
  console.log(`selected ${ value}`);
  this.setState({
    mathematicCode  :  value
  });
}

 onChangeCN(value) {
  console.log(`selected ${ value}`)
  this.setState({
    specialized  :  value
  });
}

  // onHandleChange = (event) =>{
  //   var target = event.target;
  //   var giatri = target.value;
  //   var ten = target.name;
  //   console.log(giatri)
  //   this.setState({
  //       [ten] : giatri
  //   });
  // }
 
  render() {
    return (
      
      <div className="submit-form">
        {this.state.submitted ? (
          message.success("Thêm mới môn học thành công!"),
          this.props.history.push("/add-subject/mon-hoc")
        ) : (
          
          <div className = "content">
            
          <h1 style ={{textAlign : "center"}}>Thêm môn học mới</h1>
                <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"   style ={{border : "1px dashed grey",borderRadius:"5px",padding : "20px 20px 20px 20px" }}>
                <form action="" method="POST" role="form" >
                    <div className="form-group">
                        <label for="">Tên môn học</label>
                        <Input type="text" 
                        className="form-control"
                        name= "nameSub" 
                        value = {this.state.nameSub}
                        placeholder="Tên môn học"
                        onChange = {this.onChangeName}
                          style = {{borderRadius : "5px"}}
                          validations={[this.required()]}
                        />
                    </div>
                    <div className="form-group">
                        <label for="">Chuyên Ngành</label>
                        <Select
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn chuyên ngành"
                            optionFilterProp="children"
                            onChange={this.onChangeCN}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            name = "specialized"
                            value = {this.state.specialized}
                            filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            validations={[this.required()]}
                          >
                            <Option value="CNPM">CNPM</Option>
                            <Option value="HTTT">HTTT</Option>
                          </Select>
                    </div>
                    <div className="form-group">
                        <label for="">Phòng</label>
                        <Select
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn phòng học"
                            optionFilterProp="children"
                            name = "room"
                            onChange={this.onChangeRoom}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            value = {this.state.room}
                            filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            validations={[this.required()]}
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
                        <label for="">Thứ</label>
                        <Select
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn thứ trong tuần"
                            optionFilterProp="children"
                            name = "weekdays"
                            onChange={this.onChangeDayofWeek}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearchDayOfWeek}
                            value = {this.state.weekdays}
                            filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            validations={[this.required()]}
                          >
                            <Option value="Thứ 2">Thứ 2</Option>
                            <Option value="Thứ 3">Thứ 3</Option>
                            <Option value="Thứ 4">Thứ 4</Option>
                            <Option value="Thứ 5">Thứ 5</Option>
                            <Option value="Thứ 6">Thứ 6</Option>
                            <Option value="Thứ 7">Thứ 7</Option>
                          </Select>
                    </div>
                    <div className="form-group">
                        <label for="">Kíp học</label>
                        <Select
                        showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn kíp dạy"
                            optionFilterProp="children"
                            name = "mathematicCode"
                            onChange={this.onChangeKip}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearchDayOfWeek}
                            value = {this.state.mathematicCode}
                            filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            validations={[this.required()]}>
                            <Option value="7h - 8h50">7h - 8h50</Option>
                            <Option value="9h - 10h50">9h - 10h50</Option>
                            <Option value="12h - 13h50">12h - 13h50</Option>
                            <Option value="14h - 15h50">14h - 15h50</Option>
                            <Option value="16h - 17h50">16h - 17h50</Option>
                            <Option value="18h - 19h50">18h - 19h50</Option>
                        </Select>
                    </div>
                    <Button onClick={(e) => this.saveSubject(e)} type="primary">
                    Submit
                </Button>
                </form>
            </div>
        </div>
            
          </div>
        )}
      </div>
    );
  }
}
