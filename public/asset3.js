var o=document.querySelectorAll("#o2");
o.forEach(function(o2){
    if(o2.textContent>=95){
        o2.className += "ui green message";
    }else if(o2.textContent>=90 && o2.textContent<95){
        o2.className += "ui yellow message";
    }else{
        o2.className += "ui red message";
    }
});

var sys = document.querySelectorAll("#sys");
sys.forEach(function(s){
    if(s.textContent>160){
        s.className += "ui red message";
    }else if(s.textContent>=140 && s.textContent<=160){
        s.className += "ui orange message";
    }else if(s.textContent>120 && s.textContent< 140){
        s.className+= "ui yellow message";
    }else if(s.textContent>99 && s.textContent<=120){
        s.className += "ui green message";
    }else if(s.textContent>=90 && s.textContent<=99){
        s.className += "ui yellow message";
    }else{
        s.className+= "ui red message";
    }
});

var dia = document.querySelectorAll("#dias");
dia.forEach(function(ds){
    if (ds.textContent>99){
        ds.className += "ui red message";
    }else if(ds.textContent>=90 && ds.textContent<=99){
        ds.className += "ui orange message";
    }else if(ds.textContent>80 && ds.textContent<90){
        ds.className += "ui yellow message";
    }else if(ds.textContent>=60 && ds.textContent<=80){
        ds.className += "ui green message";
    }else{
        ds.className += "ui yellow message";
    }
});

var pu = document.querySelectorAll("#pul");
pu.forEach(function(p){
    if(p.textContent>=60 && p.textContent<=100){
        p.className +="ui green message";
    }else{
        p.className +="ui yellow message";
    }
});

var ttt = document.querySelectorAll("#tem");
ttt.forEach(function(tt){
    if(tt.textContent>=97 && tt.textContent<99.0){
        tt.className += "ui green message";
    }else if(tt.textContent>=99.0 && tt.textContent<=100.4){
        tt.className += "ui yellow message";
    }else if (tt.textContent>100.4){
        tt.className += "ui red message";
    }else if(tt.textContent<95.0){
        tt.className += "ui red message";
    }else{
        tt.className += "ui yellow message";
    }
});

var sss = document.querySelectorAll("#sug");
sss.forEach(function(ss){
    if(ss.textContent>=70 && ss.textContent<=100){
        ss.className += "ui green message";
    }else if(ss.textContent>100){
        ss.className += "ui red message";
    }else{
        ss.className+= "ui red message";
    }
});