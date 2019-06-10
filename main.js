
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

$(function() {

    $('#submitBtn').on('click', function() {
        let fName = document.getElementById('firstName').value;
        let lName = document.getElementById('lastName').value;
        let contactNum = document.getElementById('contactNumber').value;
        let contractStart = document.getElementById('contract-startDate').value;
        let contractEnd = document.getElementById('contract-endDate').value;
        let billingCycle = document.getElementById('billingCycle').value;

        if((fName == "") || (lName == "") || (contactNum == "") || (contractStart == "") || 
            (contractEnd == "") || (billingCycle == "")) {
            alert('throw error message');
        }
    });
});
