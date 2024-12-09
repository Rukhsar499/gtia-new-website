
    $(window).on('load', function() {
   setTimeout(()=>{
       $('#exampleModal').modal('show');
   },10000)
   
});



        function validateindexForm() {
            var name = document.forms.contact_form.name.value;
            var email = document.forms.contact_form.email.value;
            var phone = document.forms.contact_form.phone.value;
            var course = document.forms.contact_form.course.value;
            var location = document.forms.contact_form.location.value;
            var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
            var regPhone=/^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
            var regName = /\d+$/g;                                    // Javascript reGex for Name validation
 
            if (name == "" || regName.test(name)) {
                window.alert("Please enter your name properly.");
                //name.focus();
                return false;
            }
                 
            if (email == "" || !regEmail.test(email)) {
                window.alert("Please enter a valid e-mail address.");
                //email.focus();
                return false;
            }

            if (phone == "" || !regPhone.test(phone)) {
                alert("Please enter valid phone number.");
                //phone.focus();
                return false;
            }
            
            if (course == "" || regcourse.test(course)) {
                window.alert("Please enter course properly.");
                //name.focus();
                return false;
            }
            if (location == "" || !reglocation.test(location)) {
                alert("Please enter valid phone number.");
                //phone.focus();
                return false;
            }
         return true;
        }
       