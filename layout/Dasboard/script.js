document.addEventListener("DOMContentLoaded", function () {
  var lineCanvas = document.getElementById("lineChart");
  var lineCtx = lineCanvas.getContext("2d");

  var lineData = [30, 20, 50, 40, 60, 80];
  var labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  lineCtx.beginPath();
  lineCtx.moveTo(30, 250);
  lineCtx.lineTo(30, 30);
  lineCtx.lineTo(280, 30);
  lineCtx.stroke();

  lineCtx.strokeStyle = "blue";
  lineCtx.beginPath();
  lineCtx.moveTo(30, 250 - lineData[0]);

  for (var i = 1; i < lineData.length; i++) {
    var x = 30 + i * 50;
    var y = 250 - lineData[i];
    lineCtx.lineTo(x, y);
  }

  lineCtx.stroke();

  var barCanvas = document.getElementById("barChart");
  var barCtx = barCanvas.getContext("2d");

  var barData = [12, 19, 3, 5, 2, 3];
  var barColors = ["red", "green", "blue", "orange", "purple", "brown"];

  var barWidth = 40;
  var barSpacing = 50;

  for (var i = 0; i < barData.length; i++) {
    var x = 50 + i * barSpacing;
    var y = 300 - barData[i] * 10;
    barCtx.fillStyle = barColors[i];
    barCtx.fillRect(x, y, barWidth, barData[i] * 10);
  }

  var pieCanvas = document.getElementById("pieChart");
  var pieCtx = pieCanvas.getContext("2d");

  var pieData = [10, 20, 30, 40];
  var pieColors = ["red", "blue", "green", "yellow"];

  var total = pieData.reduce(function (acc, val) {
    return acc + val;
  }, 0);

  var currentAngle = 0;

  for (var i = 0; i < pieData.length; i++) {
    var sliceAngle = (pieData[i] / total) * 2 * Math.PI;

    pieCtx.beginPath();
    pieCtx.moveTo(150, 150);
    pieCtx.arc(150, 150, 100, currentAngle, currentAngle + sliceAngle);
    pieCtx.closePath();

    pieCtx.fillStyle = pieColors[i];
    pieCtx.fill();
    currentAngle += sliceAngle;
  }
});
