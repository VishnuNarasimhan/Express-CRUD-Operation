const User = require("../models/users");

//Get All Users --- Done
const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.render("app", { users });
};

//Create User --- Done
const createUser = async (req, res) => {
  const newUser = req.body;
  await User.create(newUser);
  res.redirect("/");

};

//Delete User --- Done
const deleteUser = async (req, res) => {
  await User.deleteOne({ _id: req.params.id });
  res.redirect("/");
};

//Update User --- Done
const updateUser = async (req, res) => {
  const {id:userID} = req.params 
  const user = await User.findById({_id : userID})
  let status = true;
  if(user.isPromoted === null){
    status = true;
  }else{
    status = false;
  }

  await User.findByIdAndUpdate(userID,{isPromoted:status});
  res.redirect("/");
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
};
