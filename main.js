
/* -- Contract Start Date and Contract End Date input fields made datepicker */
$(function() {

    $('#contract-startDate').datetimepicker({
        timepicker: false,
        format: 'd-m-Y'
    });

    $('#contract-endDate').datetimepicker({
        timepicker: false,
        format: 'd-m-Y'
    });
});
/* -- ./..Contract Start Date and Contract End Date input fields made datepicker */

/* -- Form Validation */
$(function() {
    var installmentPaymenttype;
    var fullPaymentType;
    $('.paymentTypeRadio').on('change', function() {
        installmentPaymenttype = document.getElementById('installmentPayment').checked;
        fullPaymentType = document.getElementById('fullPayment').checked;
    });

    $('#submitBtn').on('click', function() {
        let fName = document.getElementById('firstName').value;
        let lName = document.getElementById('lastName').value;
        let contactNum = document.getElementById('contactNumber').value;
        let contractStart = document.getElementById('contract-startDate').value;
        let contractEnd = document.getElementById('contract-endDate').value;
        let billingCycle = document.getElementById('billingCycle').value;

        if((fName == "") || (lName == "") || (contactNum == "") || (contractStart == "") || 
            (contractEnd == "") || (billingCycle == "") || ((installmentPaymenttype == "") && (fullPaymentType == ""))) {
            alert('throw error message here...');
        }
        else {
            //RegEx - Regular Expression application on input fields wherever necessary
            let regEx_alpha = /^[A-Za-z]+$/g;
            let regEx_num = /^[0-9]+$/g;

            let fNameStr = fName.match(regEx_alpha);
            if(fNameStr === null) {
                Swal.fire ({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Invalid First Name!'
                });
            }

            let lNameStr = lName.match(regEx_alpha);
            if(lNameStr === null) {
                Swal.fire ({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Invalid Last Name!'
                });
            }
        }
    });
});
/* -- ./..Form Validation */

$(function() {

    // dropdown for Billing Cycle is made select2
    $('#billingCycle').select2();
});
