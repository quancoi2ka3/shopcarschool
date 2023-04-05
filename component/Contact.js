import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import isEmpty from "validator/lib/isEmpty";
import isMobilePhone from "validator/lib/isMobilePhone";
import isEmail from "validator/lib/isEmail";



function Contact() {
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [select, setSelect] = useState("");
  const [content, setContent] = useState("");
  const [check, setCheck] = useState("");
  const [valimsg, setValiMsg] = useState("");
  const [success, setSuccess] = useState("");

  const onChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const onChangePhoneNumber = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
  };
  const onChangeSelect = (event) => {
    const value = event.target.value;
    setSelect(value);
  };
  const onChangeContent = (event) => {
    const value = event.target.value;
    if (value.length <= 300) {
      setContent(value);
    }
  };
  const onChangeCheck = (event) => {
    const value = event.target.value;
    setCheck(value);
  };

  const valiAll = () => {
    const msg = {};
    if (isEmpty(phonenumber)) {
      msg.phonenumber = "Làm ơn điền số điện thoại";
    } else if (!isMobilePhone(phonenumber)) {
      msg.phonenumber = "Số điện thoại bạn điền chưa đúng";
    }
    if (isEmpty(email)) {
      msg.email = "Làm ơn điền email";
    } else if (!isEmail(email)) {
      msg.email = "Email của bạn phải có kí tự '@'";
    }
    if (isEmpty(content)) {
      msg.content = "Nội dung không được bỏ trống";
    }
    if (isEmpty(select)) {
      msg.select = "Bạn phải chọn dịch vụ";
    }
    if (isEmpty(check)) {
      msg.check = "Bạn phải đồng ý với điều khoản";
    }

    setValiMsg(msg);
    if (Object.keys(msg).length > 0) return false;

    return true;
  };

  const onSubmitLogin = () => {
    const isValid = valiAll();
    const done = {};
    if (isValid) {
      done.success =
        "Bạn đã gửi liên hệ thành công. Chúng tôi sẽ sớm liên hệ lại với Bạn";
      setSuccess(done);
    }
  };
  return (
    <div className="container shadow-lg p-0" id="form_contact">
      <form>
        <div className="row m-0" id="headcontact">
          <p> CONTACT US</p>
        </div>
        <div className="container mt-3">
          <div className="col-12 row">
            <div className="col-6">
              <input
                type="text"
                placeholder="Họ tên"
                className="form-control"
                name="fullname"
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                placeholder="E-mail*"
                className="form-control"
                onChange={onChangeEmail}
                name="email"
              />
              <p className="text-danger">{valimsg.email}</p>
            </div>
          </div>
          <div className="col-12 row mt-2">
            <div className="col-6">
              <input
                type="text"
                placeholder="Điện thoại*"
                className="form-control"
                onChange={onChangePhoneNumber}
                name="phonenumber"
              />
              <p className="text-danger">{valimsg.phonenumber}</p>
            </div>
            <div className="col-6">
              <input
                type="text"
                placeholder="Địa chỉ"
                className="form-control"
                name="location"
              />
            </div>
            <div className="col-12 mt-2">
              <select
                name="select"
                id=""
                className="form-select"
                onChange={onChangeSelect}
              >
                <option value="">Chọn 1 dịch vụ*</option>
                <option value="1">Facebook</option>
                <option value="2">Twitter</option>
                <option value="3">Instagram</option>
              </select>
              <p className="text-danger">{valimsg.select}</p>
            </div>
            <div className="col-12 mt-2">
              <textarea
                name="content"
                id=""
                className="form-control textarea mt-2"
                placeholder="Nội dung*"
                rows="5"
                onkeyup="validate()"
                value={content}
                onChange={onChangeContent}
              ></textarea>
              <p className="d-flex justify-content-end">
                {" "}
                {content.length}/300
              </p>
              <p className="text-danger">{valimsg.content}</p>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center mt-3  ">
              <div className="container-fluid d-flex justify-content-center">
                <input
                  type="checkbox"
                  className="mx-1"
                  name="check"
                  onChange={onChangeCheck}
                />
                Tôi đã đọc và đồng ý với
                <a style={{ textDecoration: "none" }} href="/" className="mx-1">
                  điều khoản
                </a>
              </div>
              <p className="text-danger">{valimsg.check}</p>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4  flex-column align-items-center">
            <button
              type="button"
              className="btn btn-primary shadow-lg d-flex align-items-center justify-content-center"
              style={{ width: "80px", height: "30px" }}
              onClick={onSubmitLogin}
            >
              GỬI
            </button>
            <p className="text-success ">
              {success.success}
            </p>
          </div>
          
          <p  className="p-3">(*)Thông tin bắt buộc phải nhập</p>
        </div>
     
      </form>
    </div>
  );
}
export default Contact;
