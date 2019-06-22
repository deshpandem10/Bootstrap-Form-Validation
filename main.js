/* -- Contract Start Date and Contract End Date input fields made datepicker */
$(function() {

    $('#contract-startDate').datetimepicker({
        timepicker: false,
        format: 'd-M-Y'
    });

    $('#contract-endDate').datetimepicker({
        timepicker: false,
        format: 'd-M-Y'
    });
});
/* -- ./..Contract Start Date and Contract End Date input fields made datepicker */


$(function() {
    var installmentPaymenttype;
    var fullPaymentType;
    var dateDifference;
    $('.paymentTypeRadio').on('change', function() {
        installmentPaymenttype = document.getElementById('installmentPayment').checked;
        fullPaymentType = document.getElementById('fullPayment').checked;
    });   

    /* -- Form Validation */
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

            let contactNumStr = contactNum.match(regEx_num);
            if(contactNumStr === null) {
                Swal.fire ({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Invalid Contact Number!'
                });
            }

            //Analyse contract start date and contract end date to decide the contract total amount
            let fromDate = new Date($('#contract-startDate').val());
            let toDate = new Date($('#contract-endDate').val());

            if(fromDate > toDate) {
                Swal.fire ({
                    type: 'error',
                    title: 'Error',
                    text: 'Please enter valid Dates!'
                });
                return;
            }

            let timeDiff = Math.abs(toDate.getTime() - fromDate.getTime());
            let dateDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

            if (dateDiff < 30) {
                Swal.fire ({
                    type: 'error',
                    title: 'Error',
                    text: 'Minimum duration of Contract should be atleast 1 month!'
                });
                return;
            }           
        }
    });
    /* -- ./..Form Validation */

    //Total Amount calculation and Installment Amount calculation
    $('#billingCycle').on('change', function() {
        let billingCycle = $('#billingCycle').val();
        let fromDate = new Date($('#contract-startDate').val());
        let toDate = new Date($('#contract-endDate').val());

        let timeDiff = Math.abs(toDate.getTime() - fromDate.getTime());
        dateDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));

        if (((dateDifference == 30) || (dateDifference == 31)) && (billingCycle == 'monthly')) {
            document.getElementById('totalAmount').value = "100";
        }
        else if ((dateDifference > 31) && ((dateDifference <= 91) || (dateDifference <= 92))) {
            document.getElementById('totalAmount').value = "300";
        }
        else if ((dateDifference > 92) && (dateDifference <= 184)) {
            document.getElementById('totalAmount').value = "600";
        }
        else if ((dateDifference > 184) && (dateDifference <= 366)) {
            document.getElementById('totalAmount').value = "1200";
        }
    });
}); 


$(function() {
    // dropdown for Billing Cycle is made select2
    $('#billingCycle').select2();
    
});
