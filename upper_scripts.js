// GLOBAL VARIABLES
var lastWord = ""

var textboxDivs = [];
var overlayDivs = [];
var columns = 6;
var rows = 2;
var keyCache = new Map();
var essaySpans = [];

var containerKeys = {
  six_by_2: "six_by_2",
  three_by_4: "three_by_4",
  custom_layer_1: "custom_layer_1",
  six_by_2_2: "six_by_2_2",
  three_by_4_2: "three_by_4_2",
}
var containerKeyArr = Object.keys(containerKeys);
var currentKeyIdx = 0;
var useableBoxes = new Map();
var inUseBoxes = [];
var prevInUseBoxes = [];
var toRecycleBoxes = [];

function getRandomColor() {
  // var letters = '0123456789ABCDEF';
  // var color = '#';
  // for (var i = 0; i < 6; i++) {
  //   color += letters[Math.floor(Math.random() * 16)];
  // }

  let r = Math.random() * 256;
  let g = Math.random() * 256;
  let b = Math.random() * 256;

  if (r > g && r > b) {
    r = Math.min(255, Math.floor(r * 1.4));
    g = Math.floor(g * 0.5);
    b = Math.floor(b * 0.5);
  } else if (g > r && g > b) {
    g = Math.min(255, Math.floor(g * 1.4));
    r = Math.floor(r * 0.5);
    b = Math.floor(b * 0.5);
  } else {
    b = Math.min(255, Math.floor(b * 1.4));
    g = Math.floor(g * 0.5);
    r = Math.floor(r * 0.5);
  }

  let color = `rgb(${r}, ${g}, ${b})`;
  console.log(color)

  return color;
}

let makeFillerFlexDiv = (flex) => {
  let row = document.createElement("div");
  Object.assign(row.style, {
      flex: flex ? flex : 0.1,
      // height: "100%",
      // backgroundColor: getRandomColor(),
    });
  return row;
}

function genSixByTwoLayer(inputKey) {
  let essayDiv = document.getElementById("essays");
  let outer = document.createElement("div");
  Object.assign(outer.style, {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: "95%",
    height: `${$(essayDiv).offset().top}px`,
    maxHeight: `${$(essayDiv).offset().top}px`,
  });

  let key = containerKeys[inputKey];
  useableBoxes.set(key, []);

  outer.appendChild(makeFillerFlexDiv());
  for (let i = 0; i < 2; i++) {
    let row = document.createElement("div");
    Object.assign(row.style, {
      flex: 1,
      display: "flex",
      width: "95%",
      overflow: "hidden"
      // height: "50%",
    });
    for (let j = 0; j < 6; j++) {
      let box = document.createElement("div");
      Object.assign(box.style, {
        flex: 1,
        height: "100%",
        visibility: "hidden",
        backgroundColor: getRandomColor(),
        overflow: "hidden",
      });
      if (i === 0) {
        if (j === 3) {
          row.appendChild(makeFillerFlexDiv(0.2));
        }
        if (j % 2 === 0) {
          box.style.flex = 1.3;
        }
      } else {
        if (j === 1) {
          row.appendChild(makeFillerFlexDiv(0.2));
        } else if (j % 3 === 0) {
          box.style.flex = 0.65; 
        }
      }
      row.appendChild(box);
      useableBoxes.get(key).push(box);
      box.setAttribute("layer", key);
    }
    outer.appendChild(row);
  }
  outer.appendChild(makeFillerFlexDiv());
  return outer;
}

function genThreeByFourlayer(inputKey) {
  let essayDiv = document.getElementById("essays");
  let outer = document.createElement("div");
  Object.assign(outer.style, {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: "95%",
    height: `${$(essayDiv).offset().top}px`,
    maxHeight: `${$(essayDiv).offset().top}px`,
  });

  let key = containerKeys[inputKey];
  useableBoxes.set(key, []);

  for (let i = 0; i < 4; i++) {
    let row = document.createElement("div");
    Object.assign(row.style, {
      flex: 1,
      display: "flex",
      width: "100%",
      overflow: "hidden",
      // height: "50%",
    });
    row.appendChild(makeFillerFlexDiv());
    for (let j = 0; j < 3; j++) {
      if (i % 2 === 0 && j === 1) {
        row.appendChild(makeFillerFlexDiv());
      } else if (i % 2 === 1 && j === 2) {
        row.appendChild(makeFillerFlexDiv(0.2));
      }
      let box = document.createElement("div");
      Object.assign(box.style, {
        flex: 1,
        height: "100%",
        visibility: "hidden",
        backgroundColor: getRandomColor(),
        overflow: "hidden",
      });
      row.appendChild(box);
      useableBoxes.get(key).push(box);
      box.setAttribute("layer", key);
    }
    row.appendChild(makeFillerFlexDiv());
    outer.appendChild(row);
  }
  return outer;
}

function genCustomLayer1() {
  let essayDiv = document.getElementById("essays");
  let outer = document.createElement("div");
  Object.assign(outer.style, {
    display: "flex",
    position: "absolute",
    width: "95%",
    height: `${$(essayDiv).offset().top}px`,
    maxHeight: `${$(essayDiv).offset().top}px`,
  });

  let key = containerKeys.custom_layer_1;
  useableBoxes.set(key, []);

  for (let i = 0; i < 4; i++) {
    let col = document.createElement("div");
    Object.assign(col.style, {
      display: "flex",
      width: "100%",
      overflow: "hidden",
      flexDirection: "column",
    });

    if (i == 0 || i == 3) {
      col.style.flex = 2;
      for (let j = 0; j < 4; j++) {
        let box = document.createElement("div");
        Object.assign(box.style, {
          flex: 1,
          width: "100%",
          visibility: "hidden",
          backgroundColor: getRandomColor(),
          overflow: "hidden"
        });
        col.appendChild(box);
        useableBoxes.get(key).push(box);
        box.setAttribute("layer", key);
      }
    }

    else {
      for (let j = 0; j < 2; j++) {
        col.style.flex = 1;
        let box = document.createElement("div");
        Object.assign(box.style, {
          flex: 1,
          width: "100%",
          visibility: "hidden",
          backgroundColor: getRandomColor(),
          overflow: "hidden"
        });
        col.appendChild(box);
        useableBoxes.get(key).push(box);
        box.setAttribute("layer", key);
      }
    }

    outer.appendChild(col);
  }
  return outer;
}

function genTopTextBoxes() {
  let essayDiv = document.getElementById("essays");

  let layer1 = genSixByTwoLayer("six_by_2");
  let layer2 = genThreeByFourlayer("three_by_4");
  let layer3 = genCustomLayer1();
  let layer4 = genSixByTwoLayer("six_by_2_2");
  let layer5 = genThreeByFourlayer("three_by_4_2");

  document.body.insertBefore(layer3, essayDiv);
  document.body.insertBefore(layer2, layer3);
  document.body.insertBefore(layer1, layer2);
  document.body.insertBefore(layer4, layer1);
  document.body.insertBefore(layer5, layer4);
}

function chooseNextBox() {
  if (inUseBoxes.length == 8) {
    prevInUseBoxes.forEach(box => {
      box.style.zIndex = box.style.zIndex - 1;
    });
    if (prevInUseBoxes.length >= (containerKeyArr.length - 1) * 8) {
      for (let i = 0; i < 8; i++) {
        let box = prevInUseBoxes[i];
        box.style.visibility = "hidden";
        box.style.zIndex = 1;
        let container = box.getAttribute("layer");
        useableBoxes.get(container).push(box);
      }
      prevInUseBoxes.splice(0, 8);
    }
    // prevInUseBoxes.forEach(box => {
    //   box.style.visibility = "hidden";
    //   box.style.zIndex = 1;
    //   let container = box.getAttribute("layer");
    //   useableBoxes.get(container).push(box);
    // });
    // prevInUseBoxes = [];
    inUseBoxes.forEach(box => {
      box.style.zIndex = box.style.zIndex - 2;
      prevInUseBoxes.push(box);
    })
    inUseBoxes = [];
    currentKeyIdx = (currentKeyIdx + 1) % containerKeyArr.length;
  }

  let containerKey = containerKeyArr[currentKeyIdx];
  let candidateBoxes = useableBoxes.get(containerKey);
  let candidateIdx = Math.floor(Math.random() * candidateBoxes.length);
  let chosenBox = candidateBoxes.splice(candidateIdx, 1)[0];
  chosenBox.style.backgroundColor = getRandomColor();
  // chosenBox.style.zIndex = 3;
  // chosenBox.style.visibility = "visible";
  inUseBoxes.push(chosenBox);
  return chosenBox;
}

function genTopSectionContainer(childStyle) {
  let essayDiv = document.getElementById("essays");
  let topContainer = document.createElement("div");
  topContainer.style.display = "flex";
  topContainer.style.flexWrap = "wrap";
  topContainer.style.width = "100%";
  topContainer.style.height = `${$(essayDiv).offset().top}px`;
  topContainer.style.backgroundColor = getRandomColor();
  for (let i = 0; i < 12; i++) {
    let textboxDiv = document.createElement("div");
    Object.assign(textboxDiv.style, {
      ...childStyle,
      backgroundColor: getRandomColor(),
    });
    topContainer.appendChild(textboxDiv);
  }
  return topContainer;
}

function insertFirstLayer() {
  let essayDiv = document.getElementById("essays");
  let container = genTopSectionContainer({
      flex: "1",
      flexBasis: "33.3333%",
      height: "25%",
  });
  // container.style.padding = "10px";
  document.body.insertBefore(container, essayDiv);
  return;
}

function chopItOff(word) {
  var charAscii = word[word.length - 1].charCodeAt(0);
  if (charAscii < 65 || charAscii > 90 && charAscii < 97 || charAscii > 122) {
    return word.substring(0, word.length - 1);
  } else {
    return word;
  }
}

function randomlySelectAWordsLocation(element) {
  if (element === essayBox) {
    return Math.floor(Math.random() * essaySpans.length);
  }
  var wordList = element.textContent.split(" ")
  var word = ""

  var thereIsWordsGreaterThan3 =
    wordList.filter(word => word.length >= 3).length > 0

  while (word.length < 3 && thereIsWordsGreaterThan3) {
    var selection = Math.floor(Math.random() * wordList.length)
    word = wordList[selection]
  }

  return selection
}

function stringToHTML(str) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, 'text/html');
  return doc.body;
};

function range(a, b) {
  return Math.random() * (b - a) + a
}

function getLightColor() {
  var r = range(150, 255)
  var g = range(150, 255)
  var b = range(150, 255)
  var color = { r, g, b }
  return color
}

function isLight(color) {
  return color.r >= 150
}

function getDarkColor() {
  var r = range(0, 100)
  var g = range(0, 100)
  var b = range(0, 100)
  var color = { r, g, b }
  return color
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function setBoxColors(box) {
  var rgb = getLightColor()
  var colorR = rgb.r;
  var colorG = rgb.g;
  var colorB = rgb.b;
  var color = "rgb(" + colorR + "," + colorG + "," + colorB + ")"
  box.style.backgroundColor = color;
  if ((colorR * 0.299 + colorG * 0.587 + colorB * 0.114) > 150) {
    box.style.color = "#000000";
  } else {
    box.style.color = "#FFFFFF";
  }
  return rgb;
}

function getTextColor(color) {
  var textColor
  if ((color.r * 0.299 + color.g * 0.587 + color.b * 0.114) > 150) {
    textColor = "#000000";
  } else {
    textColor = "#FFFFFF";
  }
  return textColor;
}

function formatColor(object) {
  var string = "rgb(" + object.r + "," + object.g + "," + object.b + ")"
  return string
}

function invertColor(rgb) {
  var r = 255 - rgb.r;
  var g = 255 - rgb.g;
  var b = 255 - rgb.b;
  return { r, g, b };
}

function isJsonBorked(json, word) {
  var isContentsNull = json.contents === null
  var wikiDom = stringToHTML(json.contents);
  var isMissingTag = wikiDom.getElementsByTagName("p").length == 0
  var isSameWord = word == lastWord
  var isBorked = isContentsNull || isMissingTag || isSameWord
  return isBorked
}

var slotTakenObject = {}

function addSpan(element, location) {
  if (element === essays) {
    window.alert("error????");
    let splittedHTML = element.innerHTML.split(" ");
    let word = splittedHTML[location];
    if (word.startsWith("<span>") || word.startsWith("donotsplit")) {
      return;
    }
    let prevElem = document.getElementById("upper_key_new");
    if (prevElem) {
      prevElem.id = "";
      prevElem.style.backgroundColor = "transparent";
      splittedHTML = element.innerHTML.split(" ");
    }
    splittedHTML[location] = `<span donotsplitattr=""style=\"background-color:yellow;\"id=\"upper_key_new\">${word}</span>`
    essays.innerHTML = splittedHTML.join(" ");
    return document.getElementById("upper_key_new");
  }
  var words = element.textContent.split(" ");
  var word = words[location];
  word = " <span>" + word + "</span> ";

  element.innerHTML =
    words.slice(0, location).join(" ")
    + word
    + words.slice(location + 1, words.length).join(" ");

  var span = element.getElementsByTagName("span")[0];
  span.style.backgroundColor = "yellow";
  return span;
}

function cleanDOM() {
  if (textboxDivs.length >= rows * columns * 3) {
    let removeCount = textboxDivs.length / 3;
    for (let i = 0; i < removeCount; i++) {
      document.body.removeChild(textboxDivs[0]);
      textboxDivs.shift();
    }
  }
  while (overlayDivs.length >= 2) {
    document.body.removeChild(overlayDivs[0]);
    overlayDivs.shift();
  }
}

function cacheHelper(key, paragraph) {
  if (keyCache.size >= 100000) {
    let keys = Array.from(keyCache.keys());
    for (let i=0; i<keys.length; i+=2) {
      foo.delete(keys[i]);
    }
  }
  if (!keyCache.has(key)) {
    console.log("adding to cache", keyCache.size);
    keyCache.set(key, paragraph);
  }
}

function createAndStyleBox(textContent) {
  let chosenBox = chooseNextBox();
  if (inUseBoxes.length === 1) {
    while (document.getElementsByClassName("lineDiv").length > 0) {
      document.body.removeChild(document.getElementsByClassName("lineDiv").item(0));
    }

    while (overlayDivs.length >= 2) {
      document.body.removeChild(overlayDivs[0]);
      overlayDivs.shift();
    }
    let dim = document.createElement("div");
    document.body.appendChild(dim);
    overlayDivs.push(dim);
    dim.style.position = "absolute";
    dim.style.left = 0;
    dim.style.top = 0;
    dim.style.margin = "0";
    dim.style.padding = "0";
    dim.style.width = "100%";
    dim.style.height = `${$(essayBox).offset().top}px`;
    dim.style.zIndex = containerKeyArr.length + 2;
    dim.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
  }
  chosenBox.style.zIndex = containerKeyArr.length + 3;
  chosenBox.style.visibility = "visible";
  chosenBox.textContent = textContent;

  return chosenBox;

  var padLR = 1; // % each side (left right)
  var padTB = 10; // px each side (top bottom)
  box1.style.position = "absolute";
  box1.style.padding = padTB + "px " + padLR + "% " + padTB + "px " + padLR + "%";
  box1.style.fontSize = "13px";
  box1.style.width = width + "%";
  box1.style.height = height + "px";
  box1.style.overflow = "scroll";
  box1.style.left = x * (width + padLR * 2) + "%";
  box1.style.top = y * (height + padTB * 2) + "px";

  return box1;
}

function chopParagraph(paragraph) {
  var words = paragraph.split(" ")
  if (words.length > 45) {
    var shortParagraph = words.slice(0, 46)
    shortParagraph.push("...")
  } else {
    var shortParagraph = words
  }
  return shortParagraph.join(" ")
}

function getParagraphFromJson(json) {
  var wikiDom = stringToHTML(json.contents);
  var paragraph = Array.from(wikiDom.getElementsByTagName("p"))
    .map(p => p.innerText)
    .join(" ")
  return paragraph
}

function drawLine(x1, y1, x2, y2) {
  var distance = Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
  var xMid = (x1 + x2) / 2;
  var yMid = (y1 + y2) / 2;
  var slopeR = Math.atan2(y1 - y2, x1 - x2);
  var slopeD = (slopeR * 180) / Math.PI;
  var line = document.createElement("div");
  line.className = "lineDiv";
  document.body.appendChild(line);
  line.style.position = "absolute";
  // debugger;
  line.style.width = distance + "px";
  line.style.height = "2px";
  line.style.left = (xMid - (distance / 2)) + "px";
  line.style.top = yMid + "px";
  line.style.transform = "rotate(" + slopeD + "deg)";
  line.style.zIndex = containerKeyArr.length + 3;
  return line;
}

function animateLine(x1, y1, x2, y2, frames, totalTime, color, box1) {
  function drawFrame(frameCount) {
    var ratio = (1 / frames) * frameCount
    var line = drawLine(
      x1,
      y1,
      x1 + (x2 - x1) * ratio,
      y1 + (y2 - y1) * ratio)
    line.style.backgroundColor = formatColor(color);

    if (frameCount < frames) {
      setTimeout(function () {
        drawFrame(frameCount + 1)
      }, totalTime / frames)
    }
    if (frameCount == frames) {
      box1.style.backgroundColor = formatColor(color);
      box1.style.color = getTextColor(color);
    }
  }
  drawFrame(0)
}

// animateLine(0, 100, 100, 100, 100, 1000)

function isParagraphBorked(paragraph) {
  if (paragraph.split(" ").length < 50) {
    // console.log("Paragraph is borked")
    return true
  }
  return false
}

function loadNextPage(lastBox, lastBoxColor) {
  var word
  var urlToLoad
  let span;
  if (lastBox === essayBox) {
    let selection = randomlySelectAWordsLocation(lastBox);
    if (document.getElementById("upper_key_new")) {
      document.getElementById("upper_key_new").style.backgroundColor = "transparent";
      document.getElementById("upper_key_new").id = "";
    }
    essaySpans[selection].style.backgroundColor = "yellow";
    essaySpans[selection].id = "upper_key_new";
    span = essaySpans[selection];
    word = chopItOff(essaySpans[selection].innerHTML);
  } else {
    var selection = randomlySelectAWordsLocation(lastBox);
    var words = lastBox.textContent.split(" ")
    span = addSpan(lastBox, selection)
    word = chopItOff(words[selection])
  }

  // console.log("word = " + word)
  urlToLoad = `https://api.allorigins.win/get?url=${encodeURIComponent('https://en.wikipedia.org/wiki/' + word)}`


  let controller = new AbortController();
  let signal = controller.signal

  try {
    if (keyCache.has(word)) {
      console.log("cache hit", word);
      let shortText = keyCache.get(word);
      let box1 = createAndStyleBox(shortText);
      box1.style.color = "rgba(255,255,255,0)"
      box1.style.backgroundColor = "rgba(255,255,255,0)"

      var spanColor = isLight(lastBoxColor) ? getDarkColor() : getLightColor();
      span.style.backgroundColor = formatColor(spanColor);
      span.style.color = getTextColor(spanColor);
      let from = {left: $(span).offset().left, top: $(span).offset().top};
      let to = {left: $(box1).offset().left, top: $(box1).offset().top};
      animateLine(from.left, from.top, to.left, to.top, 48, 500, spanColor, box1);
      lastWord = word;
      setTimeout(function () {
        loadNextPage(box1, spanColor)
      }, 2000);
    }
    else {
      console.log("cache miss");
      let timeoutId = setTimeout(() => {
        controller.abort();
        throw new Error("Fetch timed out");
      }, 500);
      fetch(urlToLoad, {signal}).then(response => {
        clearTimeout(timeoutId);
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Network response was not ok.')
        }
      }).then(json => {
        if (isJsonBorked(json, word)) {
          console.log("bad json", word);
          loadNextPage(lastBox, lastBoxColor);
        } else {
          var paragraph = getParagraphFromJson(json)
          if (isParagraphBorked(paragraph)) {
            loadNextPage(lastBox, lastBoxColor);
          } else {
            let shortText = chopParagraph(paragraph)
            let box1 = createAndStyleBox(shortText)
            cacheHelper(word, shortText);
            box1.style.color = "rgba(255,255,255,0)"
            box1.style.backgroundColor = "rgba(255,255,255,0)"

            // var wordColor = "rgb(" + irgb.r + "," + irgb.g + "," + irgb.b + ")"
            // console.log(wordColor);
            var spanColor = isLight(lastBoxColor) ? getDarkColor() : getLightColor();
            span.style.backgroundColor = formatColor(spanColor);
            span.style.color = getTextColor(spanColor);
            let from = {left: $(span).offset().left, top: $(span).offset().top};
            let to = {left: $(box1).offset().left, top: $(box1).offset().top};
            animateLine(from.left, from.top, to.left, to.top, 48, 250, spanColor, box1);
            // line.style.backgroundColor = formatColor(spanColor);
            // box1.style.backgroundColor = formatColor(spanColor);
            // box1.style.color = getTextColor(spanColor);
            // remember the last word, so we don't repeat it
            // its a global variable
            lastWord = word;
            setTimeout(function () {
              loadNextPage(box1, spanColor)
            }, 2000)
          }
        }
      }).catch(err => {
        // throw new Error("fetch returned with error");
        // console.log("?error???");
        loadNextPage(lastBox, lastBoxColor);

      });
    }
  } catch (err) {
    console.log("fetch errored", err);
    loadNextPage(lastBox, spanColor);
  }
}

var essayBox = document.getElementById("essays");
let splittedEssayHTML = essayBox.innerHTML.split(" ");
let singleWordSpans = splittedEssayHTML.map(token => {
  if (token.startsWith("<span")) {
    return token;
  }
  else if (token.startsWith("<p")) {
    return token;
  }
  else {
    return `<span class="upper_key_candidate">${token}</span>`;
  }
});
essayBox.innerHTML = singleWordSpans.join(" ");
essaySpans = Array.from(essayBox.getElementsByClassName("upper_key_candidate"));




// insertFirstLayer();
genTopTextBoxes();
// setInterval(chooseNextBox, 1000);
loadNextPage(essayBox, { r: 255, g: 255, b: 255 })
