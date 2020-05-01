class person {
  constructor(name, surname, gender, dob) {
    this.name=name;
    this.surname=surname;
    this.gender=gender;
    this.dob=dob;
  }
}

//TASK 1

var p = new person('Wheein','Jung','F','17/04/1995');

function Surname (surname){
    var new_sur = "";
    code_sur = p.surname.replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/gi, "");
    code_sur += p.surname.replace(/[^AEIOU]/gi, "");
    code_sur += "XXX";
    code_sur = code_sur.substr(0, 3);
    new_sur += code_sur.toUpperCase();

    return new_sur;
}

function Name (name){
    var new_name = "";
    code_name = p.name.replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/gi, "");
    code_name += "XXX";
    code_name = code_name.substr(0, 3);
    new_name += code_name.toUpperCase();

    return new_name;
}

const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 
    6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };

function BDay (dob){
    var b_day = "";
    valid = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
    arr = p.dob.match(valid);
    day = arr[1];
    month = arr[3];
    year = arr[4];

    b_day += year.substr(-2);
    b_day += months[month];

    if(p.gender=='M'){
        birth_day = day;
        if(birth_day < 10){
            b_day+='0';
            b_day+=birth_day;
        }
	    else{
		    b_day+=birth_day;
	    }
    }
    else{
	    b_day+= (parseInt(day)+40);
    }
    
    return b_day;
}

var code = "";
code = new_sur + new_name + b_day;


//TASK 2
function Mass(object) {
	var new_arr = [];
	for (x of Object.keys(object)) {
		new_arr.push([x, object[x]])
	}
	return newArray;
}
var task2 = Mass({n: "1", m: "2",})
console.log("\nTASK 2:\n\t", task2)


//TASK 3
function Vozrast(string) {
	var res = true;
	var pluss = false;
	var mass = []

	for (var ii = 1; ii <= Math.floor(string.length/2); ii++) {
		for (var j = 0; j < string.length; j+=ii) {
			var new_num = Number(string.slice(j, j+ii+pluss));
			mass.push(new_num);
			j += pluss;
			if (new_num.toString().length + 1 === (new_num+1).toString().length
				&& new_num.toString().length === ii) {
				pluss = true;
			}
		}
		pluss = false;

		for (var l=1; l < mass.length; l++) {
			if (mass[l] - mass[l-1] === 1) {
				continue;
			}
			res = false;
		}

		if (res) {return res;}
		mass = [];
	}

	return false;
}

var task3 = Vozrast("65738914")
console.log("\nTASK 3:\n\t", task3)