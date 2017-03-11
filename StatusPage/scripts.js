$(document).ready(function() {
    var error = 4;

    var mainMsg = error === 0 ? 'Alle enheter er operative' : 'Mange enheter er ikke operative!';
    var mainStatus = error === 0 ? 'good' : 'error';

    $('#overall-status .card').addClass(mainStatus);
    $('#overall-status .card h5').text(mainMsg);

    var phoneWait = 5;
    var mailWait = 23;

    $('#responsetimes .row .col-sm-6:first div').addClass(phoneWait < 10 ? 'good' : 'warning');
    $('#responsetimes .row .col-sm-6:last div').addClass(mailWait < 25 ? 'good' : 'warning');

    $('#responsetimes .row .col-sm-6:first h5').text(phoneWait + ' minutter');
    $('#responsetimes .row .col-sm-6:last h5').text(mailWait + ' minutter');

    $('#servers .row div:first-child .card').addClass('good');
    $('#servers .row div:nth-child(2) .card').addClass('warning');
    $('#servers .row div:last-child .card').addClass('error');

    var enheter = {
        '1':{navn: 'Rick', status: 'good', message: 'Printeren er operativ'},
        '2':{navn: 'Dragon', status: 'error', message: 'Dragen har stått opp fra dvalen'},
        '3':{navn: 'Homer', status: 'error', message: 'Vedkommende er tom for øl'},
        '4':{navn: 'Misty', status: 'error', message: 'Vedkommende er sulten'},
        '5':{navn: 'Brook', status: 'warning', message: 'Maskinen står på'},
        '6':{navn: 'Centaur', status: 'warning', message: 'Maskinen står på'},
        '7':{navn: 'Morty', status: 'good', message: 'Maskinen er avslått'},
        '8':{navn: 'Marge', status: 'error', message: 'Way too long hair'},
        '9':{navn: 'Google', status: 'warning', message: 'DuckDuckGo is better!'}
    }

    for(var key in enheter){
        if (!enheter.hasOwnProperty(key)) continue;

        var orderVal = enheter[key].status === 'error' ? 'error-order':'good-order';
        orderVal = enheter[key].status === 'warning' ? 'warning-order':orderVal;

        $('#device-container').append(
            '<div class="col-sm-4 ' + orderVal + '">' +
                '<div class="container-fluid card ' + enheter[key].status + '">' +
                    '<p>' + enheter[key].navn + '</p>' +
                    '<h5>' + enheter[key].message + '</h5>' +
                '</div>' +
            '</div>'
        )
    }

    $('.nav-tabs a').click(function (e) {
        console.log( "ready!" );
        e.preventDefault();
        $(this).tab('show');
    });

});
