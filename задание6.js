var num = [5, 3, 5, 5];

 function myfun(a) {
   for (var b = 0; b < a.length; b++)
     if (a[b] !== a[0]) return !1;
   return !0
 };

 console.log(myfun(num)); 