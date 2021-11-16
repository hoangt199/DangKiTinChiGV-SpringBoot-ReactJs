import React, { Component } from "react";
import {Descriptions,Image,Rate,Button} from "antd";
import UserService from "../service/user.service";
import "./style/Home.css"
import image1 from '../image/image1.png'
import PositionCarouselDemo from "./Carousel"
 
export default class Home extends Component {

  render() {
    
    return (
      <div style={{width : "100%"}}>
          <div className="content">
            <div className="_content_carousel">
              <PositionCarouselDemo/>
            </div>
          </div>
          <div>
          <div className ="_content-title">
                <h2>Du lịch khắp mọi nơi</h2>
            </div>
            <div className="_content_detail-tour ">
                <div className="_content_detail-row">
                  <div className="_content_detail-colunm">
                        <h3>Tour Hà Nội</h3>
                        <div className="_content-image-1"></div>
                        <lable  className="_content-description">Trải nghiệm Phố đi bộ Hồ Gươm về đêm với nhưng nét độc đáo mà không đâu có được ....</lable><br/>
                        <Rate defaultValue={5}/><br/>
                        <Button type="primary">Xem chi tiết</Button>
                  </div>
                  <div className="_content_detail-colunm">
                        <h3>Tour Đà Nẵng</h3>
                        <div className="_content-image-2"></div>
                        <lable  className="_content-description">Trải nghiệm Phố đi bộ Hồ Gươm về đêm với nhưng nét độc đáo mà không đâu có được ....</lable><br/>
                        <Rate defaultValue={5} /><br/>
                        <Button  type="primary"> Xem chi tiết</Button>
                  </div>
                </div> 
                <div className="_content_detail-row">
                  <div className="_content_detail-colunm">
                        <h3>Tour Kinh Thành Huế</h3>
                        <div className="_content-image-3"></div>
                        <lable  className="_content-description">Trải nghiệm Phố đi bộ Hồ Gươm về đêm với nhưng nét độc đáo mà không đâu có được ....</lable><br/>
                        <Rate defaultValue={5}/><br/>
                        <Button  type="primary">Xem chi tiết</Button>
                  </div>
                  <div className="_content_detail-colunm">
                        <h3>Tour Tp.Hồ Chí Minh</h3>
                        <div className="_content-image-4"></div>
                        <lable  className="_content-description">Trải nghiệm Phố đi bộ Hồ Gươm về đêm với nhưng nét độc đáo mà không đâu có được ....</lable><br/>
                        <Rate defaultValue={5} /><br/>
                        <Button   type="primary"> Xem chi tiết</Button>
                  </div>
                </div> 
                <div className="_content_detail-row">
                  <div className="_content_detail-colunm">
                        <h3>Tour Sầm Sơn - Thanh Hóa</h3>
                        <div className="_content-image-5"></div>
                        <lable  className="_content-description">Trải nghiệm Phố đi bộ Hồ Gươm về đêm với nhưng nét độc đáo mà không đâu có được ....</lable><br/>
                        <Rate defaultValue={5}/><br/>
                        <Button type="primary">Xem chi tiết</Button>
                  </div>
                  <div className="_content_detail-colunm">
                        <h3>Tour Hạ Long - Quảng Ninh</h3>
                        <div className="_content-image-6"></div>
                        <lable  className="_content-description">Trải nghiệm Phố đi bộ Hồ Gươm về đêm với nhưng nét độc đáo mà không đâu có được ....</lable><br/>
                        <Rate defaultValue={5} /><br/>
                        <Button type="primary" > Xem chi tiết</Button>
                  </div>
                </div> 
                <div className="_info-partner">
                    <div className="_info-partner-list">

                    </div>  
                </div> 
                <div className="_content_detail-row backgroundColor" style={{marginBottom:"0 !important" }}>
                    <div className="_content_detail-colunm">
                        <div className="center">
                        <h3>Tham quan các địa điểm trong và ngoài nước</h3>
                        <label>Rất nhiều lựa chọn hấp dẫn các căn hộ và biệt thự trên TravelApp</label>
                        </div>
                    </div>  
                    <div className="_content_detail-colunm">
                      <div className="_content-image-colunm"></div>
                    </div>  
                </div> 
            </div>
          </div>
          <div style={{ height:"300px",backgroundColor:"gray"}} className="footer">
      </div>
      </div>
    );
  }
}