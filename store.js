
dictionary = [];

var operation = process.argv[2];
var fs = require('fs');


switch (operation) {
    case "add":
        if (process.argv[3] && process.argv[4]) {
            fs.readFile('mynewfile1.txt', function (err, data) {
                dictionary = JSON.parse(data);
                dictionary.push({
                    key: process.argv[3],
                    value: process.argv[4]
                });
                fs.writeFile('mynewfile1.txt', JSON.stringify(dictionary), function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
            });
        } else if (process.argv[3]) {
            console.log("please enter value to add");
        } else {
            console.log("please enter key to add");
        }
        break;
    case "list":
        fs.readFile('mynewfile1.txt', function (err, data) {
            dictionary = JSON.parse(data);
            console.log(dictionary)
        });
        break;
    case "get":
        if (process.argv[3]) {
            var found = false;
            fs.readFile('mynewfile1.txt', function (err, data) {
                dictionary = JSON.parse(data);
                dictionary.forEach(element => {
                    if (element.key == process.argv[3]) {
                        found = true;
                        console.log(element)
                    }
                });
                if (found == false) {
                    console.log("your key is not found");
                }
            });
        } else {
            console.log("please enter the key to get");
        }
        break;
    case "remove":
        if (process.argv[3]) {
            var found = false;
            fs.readFile('mynewfile1.txt', function (err, data) {
                dictionary = JSON.parse(data);
                dictionary.forEach(element => {
                    if (element.key == process.argv[3]) {
                        found = true;
                        dictionary.splice(dictionary.indexOf(element), 1);
                        fs.writeFile('mynewfile1.txt', JSON.stringify(dictionary), function (err) {
                            if (err) throw err;
                            console.log('deleted!');
                        });
                    }
                });
                if (found == false) {
                    console.log("your key is not found");
                }
            });
        } else {
            console.log("please enter the key to remove");
        }
        break;
    case "clear":
        dictionary = [];
        fs.writeFile('mynewfile1.txt', JSON.stringify(dictionary), function (err) {
            if (err) throw err;
            console.log('cleared!');
        });
        break;
    default:
        console.log("please enter your choice from:\nadd key value \nlist \nremove key \nget key \nclear");
        break;
}



