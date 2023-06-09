
var data = [
    ["1", "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
    ["2", "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
    ["3", "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
    ["4", "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060"],
    ["5", "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
    ["6", "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000"],
    ["7", "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500"],
    ["8", "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900"],
    ["9", "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500"],
    ["10", "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600"],
    ["11", "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
    ["12", "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000"],
    ["13", "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600"],
    ["14", "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500"],
    ["15", "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750"],
    ["16", "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500"]

];

$(document).ready(function () {
    $('#example').DataTable({
        data: data,
        scrollY: "400px",
    });
});