var table = document.querySelector("table");
var output = document.querySelector("pre");
var chart = anychart.line();
var tableData = parseTable(table);
//Systole and Diastole
var x=[];
var y=[];
var d=[];
var z=[];
for(i=0;i<tableData.length;i++){
    x.push(tableData[i]["Date"]);
    y.push(tableData[i]["Systole(mmHg)"]);
    d.push(tableData[i]["Diastole(mmHg)"]);
    z[i]={
        "Date":x[i],
        "Systole":y[i],
        "Diastole":d[i]
    }
}
chart.data(z);
chart.container("container");
chart.xScale().mode('continuous');
chart.title("Systole and Diastole(mmHg)");
chart.getSeriesAt(0).name("Systole");
chart.getSeriesAt(0).color("green");
chart.getSeriesAt(1).name("Diastole");
var xAxisLabels = chart.xAxis().labels();
xAxisLabels.rotation(90)
chart.legend(true);
chart.draw();
//Pulse
var p=[];
var z1=[];
for(i=0;i<tableData.length;i++){
    p.push(tableData[i]["Pulse(/min)"]);
    z1[i]={
        "Date":x[i],
        "Pulse":p[i]
    }
}
var chart1 = anychart.line();
chart1.data(z1);
chart1.container("container1");
chart1.xScale().mode('continuous');
chart1.title("Pulse(/min)");
chart1.getSeriesAt(0).name("Pulse");
chart1.getSeriesAt(0).color("red");
var xAxisLabels = chart1.xAxis().labels();
xAxisLabels.rotation(90)
chart1.draw();
//Oxygen Saturation
var o=[];
var z2=[];
for(i=0;i<tableData.length;i++){
    o.push(tableData[i]["Oxygen Saturation(%)"]);
    z2[i]={
        "Date":x[i],
        "Oxygen Saturation":o[i]
    }
}
var chart2 = anychart.line();
chart2.data(z2);
chart2.container("container2");
chart2.xScale().mode('continuous');
chart2.title("Oxygen Saturation(%)");
chart2.getSeriesAt(0).name("O2 Saturation");
var xAxisLabels = chart2.xAxis().labels();
xAxisLabels.rotation(90)
chart2.draw();
//Sugar
var S=[];
var z3=[];
for(i=0;i<tableData.length;i++){
    S.push(tableData[i]["Sugar(mg/dl)"]);
    z3[i]={
        "Date":x[i],
        "Sugar":S[i]
    }
}
var chart3 = anychart.line();
chart3.data(z3);
chart3.container("container3");
chart3.xScale().mode('continuous');
chart3.title("Sugar(mg/dl)");
chart3.getSeriesAt(0).name("Sugar");
chart3.getSeriesAt(0).color("Orange");
var xAxisLabels = chart3.xAxis().labels();
xAxisLabels.rotation(90)
chart3.draw();
//Temperature
var T=[];
var z4=[];
for(i=0;i<tableData.length;i++){
    T.push(tableData[i]["Temperature(F)"]);
    z4[i]={
        "Date":x[i],
        "Temperature":T[i]
    }
}
var chart4 = anychart.line();
chart4.data(z4);
chart4.container("container4");
chart4.xScale().mode('continuous');
chart4.title("Temperature(F)");
chart4.getSeriesAt(0).name("Temperature");
chart4.getSeriesAt(0).color("Brown");
var xAxisLabels = chart4.xAxis().labels();
xAxisLabels.rotation(90)
chart4.draw();