  var users = [
  {userName:'manoharreddy',password:123456,firstName:'Manohar',lastName:'Reddy',role:'Student'},
  {userName:'haindavikrishna',password:12345678,firstName:'Haindavi',lastName:'Krishna',role:'Staff'},
  {userName:'mahipalreddy',password:12345678,firstName:'Mahipal',lastName:'Reddy',role:'Faculty'}
    ];
  var tableBody = jQuery("tbody")
  var user = [
              {userName:'suneethareddy',
                    password:12345678,
                    firstName:'Suneetha',
                    lastName:'Reddy',
                    role:'Faculty'}]

  var createUserBtn = jQuery("#create-user")
  createUserBtn.click(function (){
                        var user2 = [
                                      {userName:'hi',
                                            password:12345678,
                                            firstName:'Suneetha',
                                            lastName:'Reddy',
                                            role:'Faculty'}]
                      users.push(user2)
                      renderUsers(users)

                        })


console.log("hi")
console.log("hello")
  function renderUsers(users){
  tableBody.empty()
  for (var i=0;i<users.length;i++){
  var user = users[i]
    tableBody.prepend(`<tr>
                                   <td>${user.userName}</td>
                                   <td>${user.password}</td>
                                   <td>${user.firstName}</td>
                                   <td>${user.lastName}</td>
                                   <td>${user.role}</td>
                                   <td><i class="icon-remove-space btn btn-danger fa fa-times fa-2x"></i></td>
                                   <td><i class="icon-remove-space btn btn-info fa fa-pencil fa-2x"></i></td>
                               </tr>`);
  }
  }
  renderUsers(users)

