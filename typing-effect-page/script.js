let target = document.querySelector('#dynamic');


function randomString(){
  let stringArr = ["Peek Peek A Peek A Boo", "Ice Cream Cake", "Red-red-red flavor", "Who dat, who dat, who dat boy?", "You got me feeling like a psycho psycho", "Zimzalabim", "Russian roulette", "Shine on me, let it shine on me"];
  // * 곱하기 하는 이유 = 미만 ex => random()*4 4미만의 랜덤숫자가 만들어짐
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  // split("") => ""기준으로 분리시켜라
  let selectStringArr = selectString.split("");

  return selectStringArr;
}


// resetTyping 타이핑 리셋
function resetTyping(){
  target.textContent = '';
  dynamic(randomString());
}

// 한글자씩 텍스트 출력 함수
function dynamic(randomArr){
  console.log(randomArr);
  if(randomArr.length > 0){
    // shift는 배열의 맨 앞부터 빼냄
    target.textContent += randomArr.shift();
    setTimeout(function(){
      // 문자가 다 빠져 나갈때 까지 호출함
      dynamic(randomArr);
    },80);
    // 더 이상 출력될 값이 없을 때
  }else{
    setTimeout(resetTyping, 1500);
  }
}

dynamic(randomString());

console.log(selectString);
console.log(selectStringArr);

// class 붙였다가 뗐다가 (커서 깜빡임)
function blick(){
  target.classList.toggle("active");
};
// .5초마다 깜빡거리게
setInterval(blick, 500);