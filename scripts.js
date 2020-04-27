var paths = [
	[15, 16, 17, 18, 19, 20, 21],
	[1, 2, 3, 4, 5, 6, 7],
	[22, 23, 24, 25, 26, 27, 28],
	[8, 9, 10, 11, 12, 13, 14],
];

var boxContents = new Map([
	[1, "interconnectedness provides a framework for people to explore the ways in which people, nature, and objects interact with one another to form a complex whole that operates as a system. It focuses on the properties of social-ecological systems, which are interwoven systems of <span>humans</span> and nature."],
	[2, "Human life is the highest expression of nature. It is the stage of evolution where ‘nature’ can think about its own thoughts, qualities, <span>feelings</span> and characteristics. It is called self-reflective thinking. You do not only think, but you can also think about or evaluate your thoughts."],
	[3, "A fundamental difference between feelings and emotions is that feelings are experienced consciously, while emotions manifest either consciously or <span>subconsciously</span>. Some people may spend years, or even a lifetime, not understanding the depths of their emotions."],
	[4, " Examples of our subconscious are memories, beliefs, fears and subjective maps of reality. The thing with your unconscious mind is it’s very powerful and can, without your <span>awareness</span>, direct the course of what you do in your life."],
	[5, "Self-awareness means knowing your <span>values</span>, personality, needs, habits, emotions, strengths, weaknesses, etc. ... Moreover, self-awareness allows you to motivate yourself and manage your stress better, helps you with your intuitive decision making, and helps you to lead and motivate others more effectively."],
	[6, "Honesty, creativity, imagination and excellence can be consider as personal values. Peace, human dignity, equal human rights and freedom can be consider as <span>universal</span> values. Respect to others and ourselves, keep promises, show gratitude to others, encourage others are moral values."],
	[7, "Everything and everyone is universal <span>interconnected</span>, interdependent and interrelated. We are part of A NATURAL AND SOCIAL WEB OF LIFE that supports and sustains us. We are connected to nature and dependent on it for the things we need to keep us alive. We are also connected to our family and friends and our com- munity."],
	[8, "Inspiration awakens us to new possibilities by allowing us to transcend our ordinary experiences and limitations. Inspiration propels a person from apathy to possibility, and transforms the way we perceive our own <span>capabilities</span>. Inspiration may sometimes be overlooked because of its elusive nature."],
	[9, "Community capacity building is defined as the “process of develping and strengthening the skills, <span>instincts</span>, abilities, processes and resources that organizations and communities need to survive, adapt, and thrive in the fast-changing world.”"],
	[10, "Instinct is a term used to describe a set of behaviors that are both unlearned and set in motion as the result of some environmental trigger. Instincts are also often discussed in relation to <span>motivation</span> since they can also occur in response to an organism’s need to satisfy some innate internal drive tied to survival."],
	[11, " There are emotional, biological, social, and <span>cognitive</span> factors that all play an important role in motivation. Understanding the causes of motivation can help somebody improve their quality of life, success, self-esteem, and much more."],
	[12, "Cognition is the process by which one acquires knowledge through experience, thought and sensory input. When a person uses this cognition to integrate various inputs to create an understanding, it’s called as cognitive thinking. Cognitive skills are used to <span>comprehend</span>, process, remember and apply incoming information."],
	[13, "To comprehend something is to understand it, like when you have to read a difficult <span>passage</span> more than once in order to comprehend it. When you comprehend something, you grasp its meaning."],
	[14, " passage is the act or process of moving through, under, over, or past something on the way from one place to another. It could be something easy by getting the <span>inspiration</span> in people’s normal life"],
	[15, "Tiresomely long,seemingly without end,infinitely great in number. Endless waves, having no known beginning and <span>presumably</span> no end. For example, time is endless, love is endless, hope is endless."],
	[16, "By reasonable assumption, If his <span>experiments</span> work, employees on other floors will presumably notice and adapt similar techniques. If you say that something is presumably the case, you mean that you think it is very likely to be the case, although you are not certain."],
	[17, "The act of conducting a controlled test or investigation,the testing of an idea. Experiment also means a venture at something new or different. To <span>conduct</span> a test or investigation, try something new, as in order to gain experience."],
	[18, "Direct the course of; manage or control, such as to conduct a business. Lead, as in the performance of a composition, behave in a certain manner, transmit or serve as the <span>medium</span> for transmission, take somebody somewhere."],
	[19, "If something is of medium size, it is neither large nor small, but approximately halfway between the two. You use medium to describe something that is <span>average</span> in degree or amount, or approximately halfway along a scale between two extremes."],
	[20, "You use average to refer to a number or size that varies but is always approximately the same such as a <span>halfway</span> of the distance. An average person or thing is typical or normal. We average 8 hours (work) a day."],
	[21, "Halfway means in the middle of a place or between two points, at an equal distance from each of them, but it cannot to be describe something which have <span>endless</span> amount."],
	[22, "The general ideas or opinions of a person or group can be referred to as their thinking, it is the activity of using your brain by considering a problem or <span>possibility</span> or creating an idea."],
	[23, " If you say there is a possibility that something is the case or that something will happen, you mean that it might be the case or it might happen. A possibility is one of several <span>different</span> things that could be done."],
	[24, "You can describe something as different when it is unusual and not like others of the same kind. People sometimes say that one thing is different than another. This use is <span>acceptable</span> in American English, but is often considered incorrect in British English."],
	[25, " Acceptable activities and situations are those that most people approve of or consider to be normal. If something is <span>acceptable</span> to someone, they agree to consider it, use it, or allow it to happen."],
	[26, "If you are considering doing something, you intend to do it, but have not yet made a final <span>decision</span> whether to do it. If you consider a person or thing to be something, you have the opinion that this is what they are."],
	[27, "When you make a decision, you choose what should be done or which is the best of various possible actions. Decision is the act of deciding something or the need to decide something. Decision is the <span>ability</span> to decide quickly and definitely what to do."],
	[28, " Your ability to do something is the fact that you can do it, the basic abilities for human such as <span>thinking</span>, talking, touching... Your ability is the quality or skill that you have which makes it possible for you to do something."],
]);

var boxCfg = {
	1: {
		"color": "#b7dce0"
	},
	2: {
		"color": "#bc5958"
	},
	3: {
		"color": "#9dc697"
	},
	4: {
		"color": "#7f89ac"
	},
	5: {
		"color": "#40b8df"
	},
	6: {
		"color": "#e9b29a"
	},
	7: {
		"color": "#b397b9"
	},
	8: {
		"color": "rgb(247, 172, 76)"
	},
	9: {
		"color": "rgb(121, 55, 35)"
	},
	10: {
		"color": "rgb(64, 119, 12)"
	},
	11: {
		"color": "rgb(65, 161, 133)"
	},
	12: {
		"color": "rgb(169, 156, 20)"
	},
	13: {
		"color": "rgb(159, 49, 212)"
	},
	14: {
		"color": "rgb(84, 25, 162)"
	},
	15: {
		"color": "rgb(67, 122, 214)"
	},
	16: {
		"color": "rgb(81, 10, 218)"
	},
	17: {
		"color": "rgb(114, 41, 14)"
	},
	18: {
		"color": "rgb(24, 193, 171)"
	},
	19: {
		"color": "rgb(178, 168, 109)"
	},
	20: {
		"color": "rgb(78, 121, 153)"
	},
	21: {
		"color": "rgb(198, 122, 171)"
	},
	22: {
		"color": "rgb(119, 96, 162)"
	},
	23: {
		"color": "rgb(165, 124, 120)"
	},
	24: {
		"color": "rgb(246, 51, 14)"
	},
	25: {
		"color": "rgb(123, 151, 15)"
	},
	26: {
		"color": "rgb(238, 54, 169)"
	},
	27: {
		"color": "rgb(98, 6, 97)"
	},
	28: {
		"color": "rgb(237, 187, 73)"
	},
}

var currentPathIdx = -1;
var toggleSinglePath = true;
var prevPathToHide = [];

function setLowerPostion() {
	let lowerSection = document.getElementById("lower");
	let essays = document.getElementById("essays");
	let top = $(essays).offset().top + essays.getBoundingClientRect().height;	
	let left = $(essays).offset().left;
	lowerSection.style.position = "absolute";
	lowerSection.style.top = `${top}px`;
	lowerSection.style.left = `${left}px`;

	let linesLayer = document.getElementById("lines_layer");
	linesLayer.style.top = `${$(essays).offset().top}px`;
	linesLayer.style.left = `${$(lowerSection).offset().left}px`;
	// linesLayer.style.bottom = "0%";
	linesLayer.style.minHeight = $(essays).height() + lowerSection.getBoundingClientRect().height;
	// linesLayer.style.height = lowerSection.getBoundingClientRect().height;
	linesLayer.style.minWidth = "95%";

	Array.from(essays.getElementsByTagName("span")).forEach(elem => {
		if (!elem.classList.contains("upper_key_candidate")) {
			elem.classList.add("lower_key_word");
		}
	});

	Array.from(essays.getElementsByClassName("lower_key_word")).forEach((elem, idx) => {
		elem.setAttribute("key", idx);
	});
}

function applyBoxConfigs() {
	for (let key in boxCfg) {
		if (boxCfg.hasOwnProperty(key)) {
			if (boxCfg[key].color) {
				document.getElementById(`linkbox_${key}`).style.backgroundColor = boxCfg[key].color;
			}
		}
	}
}

function drawSVGLine(beginElem, endElem) {
	let linesLayer = document.getElementById("lines_layer");
	let x1 = $(beginElem).offset().left - $(linesLayer).offset().left;
	let y1 = $(beginElem).offset().top - $(linesLayer).offset().top;
	let x2 = $(endElem).offset().left - $(linesLayer).offset().left;
	let y2 = $(endElem).offset().top - $(linesLayer).offset().top;
	let color = endElem.style.backgroundColor;
	let line = document.createElementNS(linesLayer.namespaceURI, "line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.setAttribute("stroke-width", "1");
	line.setAttribute("stroke", color);
	linesLayer.appendChild(line);
	prevPathToHide.push(line);
}

function layoutPath() {
	paths.forEach(path => {
		path.forEach((i, idx) => {
			// if (idx == 0) return;
			document.getElementById("linkbox_"+i).style.visibility = "hidden";
		});
		for (let i = 0; i < path.length-1; i++) {
			let boxIdx = path[i];
			let nextBoxIdx = path[i+1];
			let boxDiv = document.getElementById(`linkbox_${boxIdx}`);
			let linkText = boxDiv.getElementsByTagName("span").item(0);
			if (linkText) {
				let nextBoxDiv = document.getElementById(`linkbox_${nextBoxIdx}`);
				linkText.style.border = `1px solid ${nextBoxDiv.style.backgroundColor}`;
				linkText.style.backgroundColor = nextBoxDiv.style.backgroundColor;
				linkText.onclick = () => {
					linkText.style.backgroundColor = nextBoxDiv.style.backgroundColor;
					nextBoxDiv.style.visibility = "visible";
					drawSVGLine(linkText, nextBoxDiv);
					prevPathToHide.push(nextBoxDiv);
					let parent = nextBoxDiv.parentNode;
					while (!parent.classList.contains("top_level_container")) {
						parent = parent.parentNode;
					}
					parent.style.zIndex = 2;
				}
			} else {
				boxDiv.onclick = () => {
					let nextBoxDiv = document.getElementById(`linkbox_${nextBoxIdx}`);
					nextBoxDiv.style.visibility = "visible";
					drawSVGLine(boxDiv, nextBoxDiv);
				}
			}
			
		}
	});

	Array.from(essays.getElementsByClassName("lower_key_word")).forEach((elem) => {
		let idx = parseInt(elem.getAttribute("key"));

		let nextBoxDiv = document.getElementById(`linkbox_${paths[idx][0]}`);
		// elem.style.border = `1px solid ${nextBoxDiv.style.backgroundColor}`;
		elem.style.backgroundColor = nextBoxDiv.style.backgroundColor;
		elem.onclick = () => {
			if (toggleSinglePath) {
				if (currentPathIdx != -1) {
					return;
				}
				prevPathToHide.forEach((elem) => {
					if (elem.classList.contains("lower_box")) {
						elem.style.visibility = "hidden";
					}
					else {
						elem.parentNode.removeChild(elem);
					}
				});
				prevPathToHide = [];
				Array.from(document.getElementsByClassName("top_level_container")).forEach(container => {
					container.style.zIndex = 1;
				});
				let parent = nextBoxDiv.parentNode;
				while (!parent.classList.contains("top_level_container")) {
					parent = parent.parentNode;
				}
				parent.style.zIndex = 2;
			}

			currentPathIdx = idx;
			elem.style.backgroundColor = nextBoxDiv.style.backgroundColor;
			nextBoxDiv.style.visibility = "visible";
			prevPathToHide.push(nextBoxDiv);
			drawSVGLine(elem, nextBoxDiv);
		}
		let path = paths[idx];
		let lastBoxIdx = path[path.length-1];
		let lastBoxDiv = document.getElementById(`linkbox_${lastBoxIdx}`);
		let linkText = lastBoxDiv.getElementsByTagName("span").item(0);
		// linkText.style.border = `1px solid ${nextBoxDiv.style.backgroundColor}`;
		linkText.style.backgroundColor = nextBoxDiv.style.backgroundColor;
		if (linkText) {
			linkText.onclick = () => {
				currentPathIdx = -1;
				linkText.style.backgroundColor = nextBoxDiv.style.backgroundColor;
				drawSVGLine(linkText, elem);
			}
		}
	});
}

function fillBoxContent() {
	Array.from(boxContents.keys()).forEach(k => {
		let boxDiv = document.getElementById(`linkbox_${k}`);
		boxDiv.innerHTML = "<div style=\"z-index: 10\">"+boxContents.get(k)+"</div>";
	});
}

function traversePathHelper(idx) {
	toggleSinglePath = false;
	essays.getElementsByClassName("lower_key_word").item(idx).onclick();
	paths[idx].forEach(idx => {
		let boxDiv = document.getElementById(`linkbox_${idx}`);
		let linkText = boxDiv.getElementsByTagName("span").item(0);
		linkText.onclick();
	});
}

function forceRepositionLinesLayer() {
	let linesLayer = document.getElementById("lines_layer");
	let lowerSection = document.getElementById("lower");
	let essays = document.getElementById("essays");

	linesLayer.style.top = `${$(essays).offset().top}px`;
	linesLayer.style.height = $(essays).height() + $(lowerSection).height();
}

function initAfterLoad() {
	
	setLowerPostion();
	applyBoxConfigs();
	fillBoxContent();
	layoutPath();
	forceRepositionLinesLayer();
	// traversePathHelper(0);
	// traversePathHelper(1);
	// traversePathHelper(2);
	// traversePathHelper(3);
}

initAfterLoad();