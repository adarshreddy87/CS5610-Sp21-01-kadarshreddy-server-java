var userNameFld
var passwordFld
var firstNameFld
var lastNameFld
var roleFld
var createUserBtn
var updateUserBtn
var tableBody
var userAdminService = new UserAdminServiceClient()
var users = [];
var selectedUser = null
function selectUser(event){
    var selectBtn = jQuery(event.target)
    var theIndex = selectBtn.attr("id")
    selectedUser = users.find(user => user._id === theIndex)
    userNameFld.val(selectedUser.username)
    passwordFld.val(selectedUser.password)
    firstNameFld.val(selectedUser.firstName)
    lastNameFld.val(selectedUser.lastName)
    roleFld.val(selectedUser.role)
}
function renderUsers(users) {
    tableBody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        tableBody.append(`<tr>
                                   <td>${user.username}</td>
                                   <td class="hidden">${user.password}</td>
                                   <td>${user.firstName}</td>
                                   <td>${user.lastName}</td>
                                   <td>${user.role}</td>
                                   <td><i id="${i}" class="delete-user btn btn-danger fa fa-times fa-2x"></i></td>
                                   <td><i id="${user._id}" class="select-user btn btn-info fa fa-pencil fa-2x"></i></td>
                               </tr>`
        );
    }
    jQuery(".delete-user").click(deleteUser)
    jQuery(".select-user").click(selectUser)
}
// renderUsers(users)

function createUser(user){
    userAdminService.createUser(user)
        .then(function (actualUser){
            users.push(actualUser)
            renderUsers(users)
        })
}

function deleteUser(event) {
    var deleteBtn = jQuery(event.target)
    var theIndex = deleteBtn.attr("id")
    var theId = users[theIndex]._id
    userAdminService.deleteUser(theId)
        .then(function (status){
            users.splice(theIndex, 1)
            renderUsers(users)
        })
}

function updateUser(){
    selectedUser.username = userNameFld.val()
    selectedUser.password = passwordFld.val()
    selectedUser.firstName = firstNameFld.val()
    selectedUser.lastName = lastNameFld.val()
    selectedUser.role = roleFld.val()
    userNameFld.val("")
    passwordFld.val("")
    firstNameFld.val("")
    lastNameFld.val("")
    roleFld.val("")
    userAdminService.updateUser(selectedUser._id,selectedUser)
        .then(function (status){
            var index = users.findIndex(user => user._id === selectedUser._id)
            users[index] = selectedUser
            renderUsers(users)
        })
}
function main(){
    userNameFld=jQuery(".usernameFld")
    passwordFld=jQuery(".passwordFld")
    firstNameFld=jQuery(".firstnameFld")
    lastNameFld=jQuery(".lastnameFld")
    roleFld=jQuery(".roleFld")
    tableBody= jQuery("tbody")
    createUserBtn = jQuery("#create-user")
    updateUserBtn = jQuery("#update-user")
    updateUserBtn.click(updateUser)
    createUserBtn.click(function (){

        createUser({
            username:userNameFld.val(),
            password:passwordFld.val(),
            firstName:firstNameFld.val(),
            lastName:lastNameFld.val(),
            role:roleFld.val()
            })
            userNameFld.val("")
            passwordFld.val("")
            firstNameFld.val("")
            lastNameFld.val("")
            roleFld.val("")
        }
    )
    userAdminService.findAllUsers()
        .then(function (actualUsersFromServer){
            users = actualUsersFromServer
            renderUsers(users)
        })
}

jQuery(main)