import $ from 'jquery';
import Rx from 'rxjs/Rx';

Rx.Observable.fromEvent(document, 'mousemove')
    .subscribe(e => {
        $('#timer').html(e.clientX + ', ' +e.clientY);
    });

var getData = function () {
    return $.ajax({
        url: "https://api.github.com/users/gs-ysingh",
        dataType: "jsonp"
    }).promise();
}

Rx.Observable.fromPromise(getData())
    .subscribe(
        (x) => {
            console.log( x);
            $('#img').attr('src', x.data.avatar_url);
        },
        (e) => { console.log('error' + e); },
        () => { console.log('completed');  }
    );