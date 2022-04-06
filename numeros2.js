

function numerosRandom(max_numbers) {
    let numbers = [];
    let max_num = 45;
    for (var i = 1; i <= max_num; i++) {
      numbers.push(i);
    }
    nums = [];
    for (let x = 1; x <= max_numbers; x++) {
      rand = Math.floor(Math.random() * numbers.length);
      num = numbers[rand];
      nums.push(num);
      numbers.splice(rand, 1);
    }
  
    document.getElementById('numeros').innerHTML = nums.join(" ")
    console.log(nums.join(","))
  }
  
  

function getnumerosMt () {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("numerosmt").innerHTML = myObj.join(" ");
  
}

xmlhttp.open("GET", "numeros.php", true);
xmlhttp.send();

}
