var arrSanpham =[
    {id:1,tensanpham:'abc',soluong:"172y72"},

];
var ids = 1;
//ham lay danh sach
function getAll() {
    return arrSanpham;
}
function addNew(tensanpham,soluong) {
    id = ids;
    arrSanpham[id]= {id:id,tensanpham: tensanpham,soluong: soluong};
    ids++;
}
module.exports = {
    getAll,
    addNew
}