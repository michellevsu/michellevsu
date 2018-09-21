
		var experience = [
			{
				companyName: "Visa, Inc.",
				website: "https://www.developer.visa.com",
				role: "Product Management Intern – Visa Developer Platform, Summer 2018",
				location: "Foster City, CA",
				image: "img/visa.png",
				bullet1: "Analyzed platform data to build wireframes, requirements, and an execution plan for growing user acquisition from outside referrals by 30% and streamlining user support.",
				bullet2: "Identified 100% drop in data collection from gap analysis and managed technology fix by working with technology and design teams in subsequent sprint.",
				bullet3: "Led end-to-end logistics and promotional planning for TechCrunch hackathon sponsorship, garnering 20K+ landing page views, 22 project submissions, and over 20M social impressions.",
				keywords:"marketing,strategy,consulting",
			},
			
			{
				companyName: "interTrend Communications",
				website: "https://www.intertrend.com",
				role: "Strategy and Engagement Planning Intern, Summer 2017",
				location: "Long Beach, CA",
				image: "img/intertrend.jpg",
				bullet1: "Strategized new product launch plan and digital ad campaign for fast-growth men's skincare brand using primary and secondary research analysis gathered from leading focus groups and surveys.",
				bullet2: "Aggregated and analyzed data to report on competitor landscape, social listening analysis, and industry trends for a downtown Los Angeles quick service restaurant’s marketing and rebranding plan.",
				bullet3: "Identified and synthesized best practices of emerging social media platforms for industry-leading automaker's user experience enhancement campaigns.",
				keywords:"marketing,strategy,consulting",
			},

			{
				companyName: "Richemont Asia Pacific Limited, IWC Schaffhausen Taiwan Branch",
				website:"https://www.richemont.com/",
				role: "Digital Media Marketing and Analytics Intern, Summer 2016",
				location: "Taipei, Taiwan",
				image: "img/iwc.png",
				bullet1: "Analyzed competitors’ social media strategies to present weekly trend updates and curate promotional content for growing the brand’s 6% engagement rate, reaching 380,000 followers.",
				bullet2: "Conducted in-language research and site visits to develop status reports on brand’s distribution channels and CRM strategies in luxury watch retail stores and brand-specific boutiques.",
				bullet3: "Assisted with visual merchandising for IWC's Taipei 101 boutique and promotional event-planning for VIP customers and media.",
				keywords:"marketing,strategy"
			},

			{
				companyName: "Kaya Press",
				website:"https://www.kaya.com",
				role: "Publicity and Events Intern, February 2016-Present",
				location: "Los Angeles, CA",
				image:"img/kaya.png",
				bullet1: "Enhancing brand presence and audience reach in Los Angeles book publishing space by diversifying publicity tactics and promotional designs to match different event types and book genres.",
				bullet2: "Managing partnerships with university departments and local vendors in planning literary events with 50-200 in attendance, including USC Visions & Voices and the L.A. Times Festival of Books.",
				bullet3: "N/A",
				keywords:"marketing,design"
			},

			{
				companyName: "USC Undergraduate Student Government",
				website:"https://www.uscapasa.com",
				role: "Executive Director of Asian Pacific American Student Assembly, Fall 2015-Present",
				location: "N/A",
				image:"img/apasa.png",
				bullet1:"Leading a team of 28 to create programming for 700+ students, managing a $75,000 budget, and fostering collaboration with student and community organizations, local businesses, and mid to high-profile talent.",
				bullet2:"Increased event attendance by 20%, secured 5 business sponsorships, and grew organization by 13% by coordinating new initiatives with executive board within one semester.",
				bullet3:"N/A",
				keywords:"marketing,design,strategy,consulting"
			},

			{
				companyName: "PwC Challenge Case Competition",
				role: "Team Competitor, October 2016",
				location: "N/A",
				image: "img/pwc.png",
				bullet1: "Forecasted 5-year revenue growth to determine net present value of M&A transaction and reconciled financial statements to provide a profitable and strategic recommendation within 1 week.",
				bullet2:"N/A",
				bullet3:"N/A",
				keywords:"strategy,consulting"
			},

			{
				companyName: "Deloitte R.I.S.E. Advisory Case Competition, 2nd in Region",
				role:"Team Competitor, March 2017",
				location: "N/A",
				image:"img/deloitte.png",
				bullet1:"Identified risks and growth drivers relating to geographic expansion and regulatory & compliance issues for a multinational manufacturing company in a comprehensive response to a Request for Proposal.",
				bullet2:"N/A",
				bullet3:"N/A",
				keywords:"marketing,strategy,consulting"
			},

			{
				companyName:"Marshall Business Student Government",
				website:"https://uscmbsg.org",
				role: "Director of Marketing, Fall 2015-Fall 2016",
				location: "N/A",
				image:"img/mbsg.png",
				bullet1:"Design digital promotional materials and social media campaigns for professional events and recruitment.",
				bullet2:"Coordinate and assist with Marshall-wide events for recruiter informational sessions, Marshall Career Advantage Program events, and a weeklong professional development event with Boeing.",
				bullet3:"N/A",
				keywords:"marketing,design"
			},

			{
				companyName:"Business Development and Rebranding",
				website:"https://mistertint.com",
				role:"Mr. Tint (Film Solution Family Business)",
				location: "N/A",
				image:"img/mistertint.png",
				bullet1: "Led diagnostic recommendation and implementation of new organizational structure to improve operational efficiency and company culture.",
				bullet2:"Streamlined website to improve user flow, decrease bounce rate by 10%, and rebrand company to draw more attention to less popular service lines.",
				bullet3:"N/A",
				keywords:"marketing,design,strategy,consulting"
			},

			{
				companyName: "Agile Marketing Strategy and Analytics",
				website:"https://solvegrowth.com",
				role:"SolveGrowth Start-up",
				location: "N/A",
				image:"img/solvegrowth.png",
				bullet1:"Conducted digital marketing sprints with 1-week turnaround times and created landing pages that boosted engagement by 12% and lead generation by 20%.",
				bullet2:"N/A",
				bullet3:"N/A",
				keywords:"marketing,design,strategy,consulting"
			},
		]

			document.querySelector("#marketingButton").onclick = function() {
				var regExp = new RegExp("marketing,");
				document.querySelector("#experience").innerHTML = "";

				console.log(experience);
        for(var i = 0; i < experience.length; i++) {
				  if (experience[i].keywords.includes("marketing")) {
						console.log(experience[i].companyName + experience[i].role + experience[i].location + experience[i].image + experience[i].bullet1 + experience[i].bullet2 + experience[i].bullet3);

						if (experience[i].location == "N/A" && experience[i].bullet2 =="N/A" && experience[i].bullet3 =="N/A") {
							document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<ul><li>" + experience[i].bullet1 + "</li></ul>";
						}

						else if (experience[i].location == "N/A" && experience[i].bullet3 =="N/A") {
							document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<ul><li>" + experience[i].bullet1 + "</li><li>" + experience[i].bullet2 + "</li></ul>";
						}

						else if (experience[i].location == "N/A") {
						document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<ul><li>" + experience[i].bullet1 + "</li><li>" + experience[i].bullet2 + "</li><li>" + experience[i].bullet3 + "</li></ul>";
						}

						else {
							console.log("Adding " + experience[i].companyName);

							document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<br><em>" + experience[i].location + "</em></p>" + "<ul><li>" + experience[i].bullet1 + "</li><li>" + experience[i].bullet2 + "</li><li>" + experience[i].bullet3 + "</li></ul>";
						}
					}
				}
			}

			document.querySelector("#consultingButton").onclick = function() {
				var regExp = new RegExp("consulting");
				document.querySelector("#experience").innerHTML = "";

				for(var i=0; i<experience.length; i++) {
					if (regExp.test(experience[i].keywords) == true) {
						console.log(experience[i].companyName + experience[i].role + experience[i].location + experience[i].image + experience[i].bullet1 + experience[i].bullet2 + experience[i].bullet3);

						if (experience[i].location == "N/A" && experience[i].bullet2 =="N/A" && experience[i].bullet3 =="N/A") {
							document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<ul><li>" + experience[i].bullet1 + "</li>";
						}

						else if (experience[i].location == "N/A" && experience[i].bullet3 =="N/A") {
							document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<ul><li>" + experience[i].bullet1 + "</li><li>" + experience[i].bullet2 + "</li>";
						}

						else if (experience[i].location == "N/A") {
						document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<ul><li>" + experience[i].bullet1 + "</li><li>" + experience[i].bullet2 + "</li><li>" + experience[i].bullet3 + "</li></ul>";
						}

						else {
						document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<br><em>" + experience[i].location + "</em></p>" + "<ul><li>" + experience[i].bullet1 + "</li><li>" + experience[i].bullet2 + "</li><li>" + experience[i].bullet3 + "</li></ul>";
						}
					}
				}
			}

			document.querySelector("#designButton").onclick = function() {
				var regExp = new RegExp("design");
				document.querySelector("#experience").innerHTML = "";

        for(var i=0; i<experience.length; i++) {
				  if (regExp.test(experience[i].keywords) == true) {
						console.log(experience[i].companyName + experience[i].role + experience[i].location + experience[i].image + experience[i].bullet1 + experience[i].bullet2 + experience[i].bullet3);

						if (experience[i].location == "N/A" && experience[i].bullet2 =="N/A" && experience[i].bullet3 =="N/A") {
							document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<ul><li>" + experience[i].bullet1 + "</li>";
						}

						else if (experience[i].location == "N/A" && experience[i].bullet3 =="N/A") {
							document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<ul><li>" + experience[i].bullet1 + "</li><li>" + experience[i].bullet2 + "</li>";
						}

						else if (experience[i].location == "N/A") {
						document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<ul><li>" + experience[i].bullet1 + "</li><li>" + experience[i].bullet2 + "</li><li>" + experience[i].bullet3 + "</li></ul>";
						}

						else {
						document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<br><em>" + experience[i].location + "</em></p>" + "<ul><li>" + experience[i].bullet1 + "</li><li>" + experience[i].bullet2 + "</li><li>" + experience[i].bullet3 + "</li></ul>";
						}
					}
				}
			}

			document.querySelector("#strategyButton").onclick = function() {
				var regExp = new RegExp("strategy");
				document.querySelector("#experience").innerHTML = "";

				for(var i=0; i<experience.length; i++) {
					if (regExp.test(experience[i].keywords) == true) {
						console.log(experience[i].companyName + experience[i].role + experience[i].location + experience[i].image + experience[i].bullet1 + experience[i].bullet2 + experience[i].bullet3);

						if (experience[i].location == "N/A" && experience[i].bullet2 =="N/A" && experience[i].bullet3 =="N/A") {
							document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<ul><li>" + experience[i].bullet1 + "</li>";
						}

						else if (experience[i].location == "N/A" && experience[i].bullet3 =="N/A") {
							document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<ul><li>" + experience[i].bullet1 + "</li><li>" + experience[i].bullet2 + "</li>";
						}

						else if (experience[i].location == "N/A") {
							document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<ul><li>" + experience[i].bullet1 + "</li><li>" + experience[i].bullet2 + "</li><li>" + experience[i].bullet3 + "</li></ul>";
						}

						else {
							document.querySelector("#experience").innerHTML += "<img class='images' src='" + experience[i].image + "'><a href='" + experience[i].website + "'><h4>" + experience[i].companyName + "</h4></a>" + experience[i].role + "<br><em>" + experience[i].location + "</em></p>" + "<ul><li>" + experience[i].bullet1 + "</li><li>" + experience[i].bullet2 + "</li><li>" + experience[i].bullet3 + "</li></ul>";
						}
					}
				}
			}
