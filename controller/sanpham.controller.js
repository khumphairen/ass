var sanphamModel = require('../models/sanpham.model');


exports.getSanphams= (req,res,next)=>{
    //Viet noi dung xu ly cho ham

    let ds_sanpham = sanphamModel.getAll();
    res.render('./sanpham/listSanpham',{tieude:"danh sach san pham: ",ds_sanpham:ds_sanpham});

}

// Action hien thi form nhap du lieu
exports.getAddFormSanpham =(req,res,next)=>{
    res.render('./sanpham/addSanpham');
}

//nhan du lieu post
exports.postAddSanpham = (req,res,next)=>{
    //lay du lieu gui tu form len
    let  data = req.body;
    console.log(data)
    //goi ham model ghi du lieu
    sanphamModel.addNew(data.tensanpham,data.soluong);
    //chuyen huong neu ghi xong
    res.redirect('/sanphams');
}