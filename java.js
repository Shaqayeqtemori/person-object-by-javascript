let info_of_user ={
    Name :"Sara",
    Last_Name :"Sharifi",
    Email :"Sharifi@gmail.com",
    Age : 26,
    Manner :"Single",
    info: function () {
        return this.Name +" "+ this.Last_Name  +" "+ this.Email  +" "+ this.Age  +" "+ this.Manner ;
    }     
};
console.log(info_of_user.info());
document.getElementById("result").innerText = info_of_user.info();