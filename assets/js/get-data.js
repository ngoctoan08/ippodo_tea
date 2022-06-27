$(document).ready(function() {
    $("#create-ac").click(function() {
        var firstName = $("#firstname").val();
            var lastName = $("#lastname").val();
			var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
            
            var phone = $("#tel").val();
			var regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
            
            var email = $("#email").val();
			var reGexEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
			
			if (!regexName.test(firstName) || !regexName.test(lastName) || !regexPhone.test(phone) || !reGexEmail.test(email)) {
				$(".incorrect").css("display","flex");
			} else {
                alert("Register Successful");
                let data = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];
                data.push({
                    fistname : $("#firstname").val(),
                    lastname : $("#lastname").val(),
                    phone : $("#tel").val(),
                    province : $("#province :selected").text(),
                    district : $("#district :selected").text(),
                    ward : $("#ward :selected").text(),
                    email : $("#email").val(),
                })
                localStorage.setItem("data", JSON.stringify(data));
			}
        // let data = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];
        // data.push({
        //     fistname : $("#firstname").val(),
        //     lastname : $("#lastname").val(),
        //     phone : $("#tel").val(),
        //     province : $("#province :selected").text(),
        //     district : $("#district :selected").text(),
        //     ward : $("#ward :selected").text(),
        //     email : $("#email").val(),
        // })
        // localStorage.setItem("data", JSON.stringify(data));
        // displayData(data);
    })
})

function displayData() {
        let data = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];
        console.log(data);
        let table = `<tr>
        <th>First Name</th>\
        <th>Last Name</th>\
        <th>Phone</th>\
        <th>Province</th>\
        <th>District</th>\
        <th>Ward</th>\
        <th>Email</th>\
    </tr>`
        for(let i = 0; i < data.length ; i++) {
            table += `<tr>
                <td>${data[i].fistname}</td>
                <td>${data[i].lastname}</td>
                <td>${data[i].phone}</td>
                <td>${data[i].province}</td>
                <td>${data[i].district}</td>
                <td>${data[i].ward}</td>
                <td>${data[i].email}</td>
            </tr>`
        }
        $("#data").html(table);
}