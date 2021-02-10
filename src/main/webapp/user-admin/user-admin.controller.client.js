var userNameFld
var passwordFld
var firstNameFld
var lastNameFld
var roleFld
var createUserBtn
var tableBody
var users = [
    // {userName: 'manoharreddy', password:123456, firstName:'Manohar', lastName:'Reddy', role:'Student'},
    // {userName: 'haindavikrishna', password:12345678, firstName:'Haindavi', lastName:'Krishna', role:'Staff'},
    // {userName: 'mahipalreddy', password:12345678, firstName:'Mahipal', lastName:'Reddy', role:'Faculty'}
];

function renderUsers(users) {
    tableBody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        tableBody.prepend(`<tr>
                                   <td>${user.userName}</td>
                                   <td>${user.password}</td>
                                   <td>${user.firstName}</td>
                                   <td>${user.lastName}</td>
                                   <td>${user.role}</td>
                                   <td><button style="white-space:nowrap" class="delete-user btn btn-danger fa fa-times fa-2x" id="${i}"></button></td>
                                   <td><button style="white-space:nowrap" class="btn btn-info fa fa-pencil fa-2x"></button></td>
                               </tr>`
        );
    }
    jQuery(".delete-user").click(deleteUser)
}
// renderUsers(users)

function createUser(userCreate){
    users.push(userCreate)
    renderUsers(users)
}

function deleteUser(event) {
    var deleteBtn = jQuery(event.target)
    var theId = deleteBtn.attr("id")
    users.splice(theId, 1)
    renderUsers(users)
}
function init(){
    userNameFld=jQuery(".usernameFld")
    passwordFld=jQuery(".passwordFld")
    firstNameFld=jQuery(".firstnameFld")
    lastNameFld=jQuery(".lastnameFld")
    roleFld=jQuery(".roleFld")
    tableBody= jQuery("tbody")
    createUserBtn = jQuery("#create-user")
    createUserBtn.click(function (){
            createUser({
                userName:userNameFld.val(),
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
}

jQuery(init)