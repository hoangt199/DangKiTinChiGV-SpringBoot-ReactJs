import { Button, Input, Select ,message,Descriptions,Space,InputNumber} from "antd";
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
function  required(value){
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
          Không được để trống trường này!
      </div>
    );
  }
};
export default class addSubject extends Component {

  constructor(props) {
    
    super(props);
    // this.onChangeName = this.onChangeName.bind(this);
    // this.onChangeRoom = this.onChangeRoom.bind(this);
    // this.onChangeCN = this.onChangeCN.bind(this);
    // this.onChangeDayofWeek = this.onChangeDayofWeek.bind(this);
    // this.onChangeKip = this.onChangeKip.bind(this);
    // this.saveSubject = this.saveSubject.bind(this);
    this.state = {
      id :  this.props.match.params.id,
      idTour: null,
      nameTour : "",
      nameEmployee : "",
      idCustomer : null,
      nameCustomer : "",
      numCustomer : "",
      priceTicket : "",
      totalPrice : this.statepriceTicket * this.statenumCustomer,
      submitted : false,
      // subject : []
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
    
      let newTicket = {
        idTour : this.state.idTour,
        nameTour : this.state.nameTour,
        nameEmployee : this.state.nameEmployee,
        nameCustomer : this.state.nameCustomer,
        idCustomer : this.state.idCustomer,
        numCustomer : this.state.numCustomer,
        priceTicket : this.state.priceTicket,
        totalPrice : this.state.totalPrice
      }
      if(newTicket.id == null 
        || newTicket.idTour.length == 0 
        || newTicket.nameTour.length==0 
        || newTicket.priceTicket.length == 0 
        || newTicket.nameCustomer.length == 0 
        || newTicket.nameEmployee.length == 0 
        || newTicket.priceTicket <= 0 
        || newTicket.numCustomer <= 0){
        this.setState({
          submitted : false
        })
        message.warning("Không được để trống các trường!")
      }else{
        userSevice.create(newTicket).then( res =>{
          this.setState({
            submitted:true
          })
          message.info(res.data)
      });
      }
   
  }
//   onChangeRoom(value) {
//     console.log(`selected ${value}`);
//     this.setState({
//       room  : value
//     });
//   }
//    onChangeName(e) {
//     console.log(`selected ${e.target.value}`);
//     this.setState({
//       nameSub  : e.target.value
//     });
//   }
  
//  onChangeDayofWeek(value) {
//   console.log(`selected ${ value}`);
//   this.setState({
//     weekdays  : value
//   });
// }

//  onChangeKip(value) {
//   console.log(`selected ${ value}`);
//   this.setState({
//     mathematicCode  :  value
//   });
// }

//  onChangeCN(value) {
//   console.log(`selected ${ value}`)
//   this.setState({
//     specialized  :  value
//   });
// }

  // onHandleChange = (event) =>{
  //   var target = event.target;
  //   var giatri = target.value;
  //   var ten = target.name;
  //   console.log(giatri)
  //   this.setState({
  //       [ten] : giatri
  //   });
  // }
  onChangeNumberCustomer(event,value) {
      console.log(value)
      // this.setState({
      //   numCustomer : value
      // })
  }
  render() {
    return (
      
      <div className="submit-form">
        {this.state.submitted ? (
          {/* message.success("Thêm mới môn học thành công!"), */}
          ,this.props.history.push("/add-subject/mon-hoc")
        ) : (
          
          <div className = "content">
            
          <h1 style ={{textAlign : "center"}}>Tạo Vé</h1>
                <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"   style ={{border : "1px dashed grey",borderRadius:"5px",padding : "20px 20px 20px 20px" }}>
                <form action="" method="POST" role="form" >
                    <div className="form-group">
                        <label for="">Id khách hàng</label>
                        <Input type="text" 
                        className="form-control"
                        name= "idCustomer" 
                        value = {this.state.idCustomer}
                        disabled  = {true}
                        // onChange = {this.onChangeName}
                          style = {{borderRadius : "5px"}}
                          validations={[required]}
                        />
                        <label for="">Tên khách hàng</label>
                        <Input type="text" 
                        className="form-control"
                        name= "nameSub" 
                        value = {this.state.nameSub}
                        disabled = {true}
                        // onChange = {this.onChangeName}
                          style = {{borderRadius : "5px"}}
                          validations={[required]}
                        />
                    </div>
                    <div className="form-group">
                        <label for="">Tour</label>
                        <Select
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn Tour"
                            optionFilterProp="children"
                            // onChange={this.onChangeCN}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            name = "nameTour"
                            value = {this.state.nameTour}
                            filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            validations={[required]}
                          >
                            <Option value="Tour Hà Nội">Tour Hà Nội</Option>
                            <Option value="Tour Tp.HCM">Tour Tp.HCM</Option>
                          </Select>
                    </div>
                    <div className="form-group">
                        <label for="">Nhân viên phụ trách</label>
                        <Select
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Chọn nhân viên phụ trách"
                            optionFilterProp="children"
                            name = "nameEmployee"
                            // onChange={this.onChangeRoom}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            value = {this.state.nameEmployee}
                            filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            validations={[required]}
                          >
                            <Option value="">Trần Văn A</Option>
                            <Option value="">Trần Văn B</Option>
                            <Option value="">Trần Văn C</Option>
                            <Option value="">Trần Văn D</Option>
                            <Option value="">Trần Văn E</Option>
                            <Option value="">Trần Văn F</Option>
                            <Option value="">Trần Văn G</Option>
                          </Select>
                    </div>
                   <div className="form-group">
                   <label>Số lượng khách</label>
                    <Space>
                    <InputNumber name="numCustomer" size="large" min={1} max={100000} defaultValue={3} onChange={this.onChangeNumberCustomer} />
                  </Space>
                   </div>
                    <div className="form-group">
                        <label for="">Giá vé/Người</label>
                        <Input type="text" 
                        className="form-control"
                        name= "priceTicket" 
                        value = {this.state.priceTicket}
                        disabled  = {true}
                        // onChange = {this.onChangeName}
                          style = {{borderRadius : "5px"}}
                          validations={[required]}
                        />
                    </div>
                    <div className="form-group">
                        <label for="">Tổng tiền</label>
                        <Input type="text" 
                        className="form-control"
                        name= "totalPrice" 
                        value = {this.state.totalPrice}
                        disabled  = {true}
                        // onChange = {this.onChangeName}
                          style = {{borderRadius : "5px"}}
                          validations={[required]}
                          placeholder = "Tổng tiền"
                        />
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
