window.onload = function() {
    document.querySelector('#reset').onclick = function() {
        // For web environment, might not close the window
        // You may want to define some reset logic instead
        alert("Close/Reset Button Clicked!");
    };

    document.querySelector('#impact').onclick = function() {
        openWindow("Impact Testing", "www.impacttestonline.com/htmlcc/");
    };
    document.querySelector('#powerschool').onclick = function() {
        openWindow("Powerschool", "ps.eagleschools.net");
    };
    document.querySelector('#frl').onclick = function() {
        openWindow("School Cafe Registration", "www.schoolcafe.com/EagleCountySD");
    };
    document.querySelector('#newstudent').onclick = function() {
        openWindow("New Student Registration", "secure.infosnap.com/family/gosnap.aspx?action=33437&culture=en");
    };
    document.querySelector('#returningstudent').onclick = function() {
        openWindow("Returning Student Registration", "secure.infosnap.com/family/gosnap.aspx?action=33438&culture=en");
    };
    document.querySelector('#yp365').onclick = function() {
        openWindow("YP365 Registration", "youthpower365.org");
    };
    document.querySelector('#smarttag').onclick = function() {
        openWindow("SmartTag Registration", "parent.smart-tag.net");
    };
    document.querySelector('#schoology').onclick = function() {
        openWindow("Schoology", "app.schoology.com/register.php?type=parent");
    };
    document.querySelector('#bessstudent').onclick = function() {
        openWindow("BESSstudent", "review360connect.com/Prod/EagleCountySchoolDistrict/Student");
    };
    document.querySelector('#bessparent').onclick = function() {
        openWindow("BESSparent", "review360connect.com/Prod/EagleCountySchoolDistrict/Parent");
    };
};

function openWindow(title, url) {
    // Open the link in a new tab
    window.open("https://" + url, '_blank');
}
