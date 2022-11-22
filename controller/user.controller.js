var userModel = require('../models/user.model');


exports.getUsers= (req,res,next)=>{
    //Viet noi dung xu ly cho ham

    let ds_user = userModel.getAll();
    res.render('./user/listUser',{tieude:"danh sach tai khoan: ",ds_user:ds_user});

}

// Action hien thi form nhap du lieu
exports.getAddForm =(req,res,next)=>{
    res.render('./user/addUser');
}

//nhan du lieu post
exports.postAddUser = (req,res,next)=>{
    //lay du lieu gui tu form len
    let  data = req.body;
    console.log(data)
    //goi ham model ghi du lieu
    userModel.addNew(data.username,data.email);
    //chuyen huong neu ghi xong
    res.redirect('/users');
}