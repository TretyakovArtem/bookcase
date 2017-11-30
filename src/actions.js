var addPhone = function (val) {
  return {
    type: "ADD_PHONE",
    val
  }
};
var deletePhone = function (val) {
  return {
    type: "DELETE_PHONE",
    val
  }
};
 
module.exports = {addPhone, deletePhone};