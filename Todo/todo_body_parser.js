var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get ('/',function(req,res){

    var todo = '  <div>'+
        '<h1>'+'ToDo App'+'</h1>'+
        '<table>' + '<form action="/todo" method="post" style="text-align:center">' +
            '<thead>'  +  '<tr>'+
                    '<th>'+'Name:'+'</th>'
                    +'<th>'+'Email:'+'</th>'
                +'</tr>'+
                '<tbody>'+
                    '<tr>'+
                        '<td>'+ '<input type="text" name="name" id="name" placeholder="Enter Name" autofocus>' + '</td>'+
                                '<td>'+ '<input type="email" name="email" id="email" placeholder="Enter Email" autofocus> '+'</td>'+
                                    '<td>'+ '<button type="submit" id="add"">'+'ADD'+'</button>'+
                '</tr>'+
        '</tbody>' + 
        '</form>'+
 '       </table>'+
    '</div>';
res.send(todo);
});


app.post('/todo', function (req, res) {
    console.log(req.body)
    var myName = req.body.name;
    var myEmail = req.body.email;

    var html =
        'Hello: ' + myName + '.<br>' +
        '<br>' + 'Your Email Is: ' + myEmail + '<br>' +
        '.<br>' + '<a href="/">Try again.</a>';
    res.send(html);
});


app.listen(3000);