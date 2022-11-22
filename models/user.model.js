var arrUser =[
    {id:1,username:'abc',email:"abc@gmail.com"},
    {id:2,username:'abc2',email:"abc2@gmail.com"},
    {id:3,username:'abc3',email:"abc3@gmail.com"},
];
var ids = 1;
//ham lay danh sach
function getAll() {
    return arrUser;
}
function addNew(usename,email) {
    id = ids;
    arrUser[id]= {id:id,username: usename,email: email};
    ids++;
}
module.exports = {
    getAll,
    addNew
}