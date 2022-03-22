// timer
(function() {

	var saleTimer = function(translatedDate, cookiesState) {
		var myDate = new Date(),
							dateEnd = translatedDate || new Date(),// ДАТА ОКОНЧАНИЯ АКЦИИ!
							interval = null,
							dateOne = new Date(),
							dateTwo = new Date(dateEnd),
							cookiesTranslated = cookiesState ? cookiesState.split(',') : false;

							timeDiffCheck = function() {
								if(dateTwo.getTime() - dateOne.getTime() < 0){
									return false;
								}
								return true;
							}

							correctDate = function(d, h, m) {
								myDate.setDate(myDate.getDate() + d);
								myDate.setHours(myDate.getHours() + h);
								myDate.setMinutes(myDate.getMinutes() + m);

								return myDate;
							}
						if(cookiesTranslated){
							if($.cookie("timer")){
							  console.log("Is cookie");
							  var dateEnd = $.cookie('timer'); 
							}else{
							console.log( cookiesTranslated);
							  console.log("Is not cookie");
							  console.log(Number(cookiesTranslated[0]));
							  var dateEnd = correctDate(Number(cookiesTranslated[0]), Number(cookiesTranslated[1]), Number(cookiesTranslated[2]));
							  console.log(dateEnd);
							  $.cookie('timer', dateEnd, {expires: 365});
							}

						}

							getTime = function(){

					  var date1 = new Date(); //текущая дата
					  var date2 = new Date(dateEnd);
						// var date2 = new Date(2018, 7, 6, 15, 0, 0, 0); //дата окончания
						var timeDiff = date2.getTime() - date1.getTime();//разница м/у датами в ms			
						var seconds = Math.floor((timeDiff / 1000 ) % 60);
						var minutes = Math.floor( (timeDiff /1000/60) % 60 );
						var hours = Math.floor( (timeDiff/(1000*60*60)) % 24);
						var days = Math.floor( timeDiff/(1000*60*60*24) );

						return {
							remaining: timeDiff,
							days: days,
							hours: hours,
							minutes: minutes,
							seconds: seconds

						}
					}

					render = function(){
						var hourField = document.querySelector('.timer-window__hour'),
						minField = document.querySelector('.timer-window__minute'),
						secField = document.querySelector('.timer-window__second'),
						daysField = document.querySelector('.timer-window__days-count');
						
						if(!timeDiffCheck()){
							clearInterval(interval);
							interval = null;

							daysField.innerHTML = "00";
							hourField.innerHTML = "00";
							minField.innerHTML= "00";
							secField.innerHTML= "00";

							return;
						}

						var day = getTime().days,
						hour = getTime().hours,
						minutes = getTime().minutes,
						seconds = getTime().seconds;

						if(day < 0) day = '0';
						if(hour < 0) hour = '00';
						if(minutes < 0) minutes= '00';
						if(seconds < 0) {
							seconds = '00';
							clearInterval(interval);
							interval = null;
						}

						if(hour < 10 && hour > 0 || hour === 0) hour = '0' + hour;
						if(minutes < 10 && minutes > 0 || minutes === 0) minutes= '0' + minutes;
						if(seconds < 10 && seconds > 0 || seconds === 0) seconds= '0' + seconds;

						daysField.innerHTML = day;
						hourField.innerHTML = hour;
						minField.innerHTML= minutes;
						secField.innerHTML= seconds;
					}

					return {
						init: function() {
							interval = setInterval(render, 1000);
						}
					}
				};

				if(document.querySelector('.timer-window__timer') ){
					var thisTimer = document.querySelector('.timer-window__timer'),
						faildDate = thisTimer.dataset.date ? new Date(parseISOSimple(thisTimer.dataset.date)) : false,
						coockieTime = thisTimer.dataset.cookie || false;
					// saleTimer().init()
					// console.log(new Date().getFullYear() + "-"+ new Date().getMonth() + "-" +new Date().getDate() + " 00:00:00");
					console.log(faildDate, coockieTime);
					saleTimer(faildDate, coockieTime).init();

				}
				// "2022-03-28 00:00:00"
				function parseISOSimple(s) {//преобразование даты для правильного ее отображения на IOS
					var b = s.split(/\D/);
					return new Date(b[0],b[1]-1,b[2],b[3],b[4],b[5]);
				}
})();
	// end timer