window.onload = function(){
  var arrayOfObjects;
  var removedObjects = [];
    
  let options = { //set plot options
    series: { 
      points: {show: true},
      lines: {show: true}
    },
    xaxis: {
      show: true,
      mode: "time",
      timeformat: "%m/%d/%y %H:%M"
    },
    yaxes: [{position: "left"}],
    legend: {
      show: true,
      container: $("#legend")
    },
    grid: {
      clickable: true,
      hoverable: true
    }
  }; 
  arrayOfObjects = [];

  for (let series in collectedData) {
    arrayOfObjects.push({data:collectedData[series], label: series, yaxis: 1});
  }
  // plot measurements
  $.plot($("#placeholder"),arrayOfObjects,options);
  $("#placeholder").bind("plotclick", function(event, pos, item) {
    if (item == null) return;
    removedObjects.push(arrayOfObjects.splice(item.seriesIndex,1)[0]);
    $.plot($("#placeholder"),arrayOfObjects,options);
    let insertionPoint = document.querySelector("#removedLines");
    let box = document.createElement("input");
    box.setAttribute("type", "checkbox");
    box.setAttribute("value", item.series.label);
    box.setAttribute("name", item.series.label);
    box.innerHTML = item.series.label;
    box.onclick = function(event) {
      for (let seriesIndex = 0; seriesIndex < removedObjects.length; seriesIndex++) {
        if (this.getAttribute("name") === removedObjects[seriesIndex].label) {
          arrayOfObjects.push(removedObjects[seriesIndex]);
          removedObjects.splice(seriesIndex,1);
          $.plot($("#placeholder"),arrayOfObjects,options);
          this.nextSibling.remove(); // remove label
          this.remove(); // remove checkbox
          if (removedObjects.length == 0) {
            insertionPoint.removeAttribute("style");
          }
          break;
        } 
      }
    };

    let label = document.createElement("label");
    label.innerHTML = item.series.label;
    insertionPoint.appendChild(box);
    insertionPoint.appendChild(label);
    insertionPoint.setAttribute("style", "display:block;");
    });
  // Create list of series
  let insertionPoint = document.querySelector("#ownAxis");
  let checkedBoxes = 0;
  for (let seriesIndex = 0; seriesIndex < arrayOfObjects.length; seriesIndex++) {
    let series = arrayOfObjects[seriesIndex];
    let box = document.createElement("input");
    box.setAttribute("type", "checkbox");
    box.setAttribute("value", series.label);
    box.setAttribute("name", series.label);
    box.innerHTML = series.label;
    box.onclick = function(event) {
      let found = false;
      for (let seriesIndex = 0; seriesIndex < arrayOfObjects.length; seriesIndex++) {
        if (this.getAttribute("name") === arrayOfObjects[seriesIndex].label) {
          if (arrayOfObjects[seriesIndex].yaxis === 1) {
            checkedBoxes++;
            if (options.yaxes.length < checkedBoxes + 1) {
              options.yaxes.push({position: "right"});
            }
            arrayOfObjects[seriesIndex].yaxis = checkedBoxes + 1;
          } else {
            arrayOfObjects[seriesIndex].yaxis = 1;
            checkedBoxes--;
          }
          $.plot($("#placeholder"),arrayOfObjects,options);
          found = true;
          break;
        } 
      }
      if (!found) {
        for (let seriesIndex = 0; seriesIndex < removedObjects.length; seriesIndex++) {
          if (this.getAttribute("name") === removedObjects[seriesIndex].label) {
            if (removedObjects[seriesIndex].yaxis === 1) {
              checkedBoxes++;
              if (options.yaxes.length < checkedBoxes + 1) {
                options.yaxes.push({position: "right"});
              }
              removedObjects[seriesIndex].yaxis = checkedBoxes + 1;
            } else {
              removedObjects[seriesIndex].yaxis = 1;
              checkedBoxes--;
            }
            found = true;
            break;
          } 
        }
      }
      console.log("processing " + this.getAttribute("name") + ", checkedBoxes: " + checkedBoxes);
      if (!found) {
        console.log("logic error - element reference not found");
      }
    };
    let label = document.createElement("label");
    label.innerHTML = series.label;
    insertionPoint.appendChild(box);
    insertionPoint.appendChild(label);
  }
};

