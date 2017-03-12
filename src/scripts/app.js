// ///////importing the templates and nav bar click.evt///////////
import $ from 'jquery';
import {radioCollection, radioModel} from './models/models.js'
import {playlistTemplate, homeTemplate} from './templates/templates.js'

// function forEach(arr, cb){
//   for (var i = 0; i < arr.length; i++) {
//     cb(arr[i], i, arr)}
// becuase of the seperator this isnt needed!!!!
// no need for previous forEach function because of the [...],
 // able to iterate over with its own forEach

const AppRouter = Backbone.Router.extend({
  initialize: function(){
            let buttonEl = document.querySelectorAll('nav button');
            let buttonElArray = [...buttonEl];

      buttonElArray.forEach(function(domEl, i){
         console.log(i);
         domEl.addEventListener('click', function(evt){

            var clickedButton = evt.target;
            var activeRoute = clickedButton.dataset.route;
            window.location.hash = activeRoute
         })
      })
   Backbone.history.start()
  },

	routes : {
		'radio2' : 'renderRadio2',
		'radio1' : 'renderRadio1',
		'' : 'renderHome'
	},
// ////////home route//////////
	renderHome: function(homeRoute){
		let bbcRadioModel = new radioModel({singleFetch: true})
		bbcRadioModel.fetch().then(function(serverRes){
			console.log(bbcRadioModel);
			let bigHTMLStr = homeTemplate(bbcRadioModel, 'root', {})
			document.querySelector('.row').innerHTML = bigHTMLStr
		})

	},
   // /////////playlist 1//////////
	renderRadio1: function(radioRoute){
		let bbcRadioColl = new radioCollection(1)
		bbcRadioColl.fetch().then(function(serverRes){
			console.log(bbcRadioColl);
			let playlistModelsList = bbcRadioColl.models
			let bigHTMLStr = playlistTemplate(playlistModelsList, 'root', {})
			document.querySelector('.row').innerHTML = bigHTMLStr
		})

	},
// ///////playlist 2////////////
	renderRadio2: function(radioRoute){
		let bbcRadioColl = new radioCollection(2)
		bbcRadioColl.fetch().then(function(serverRes){
         // console.log(serverRes);
			let playlistModelsList = bbcRadioColl.models
			let bigHTMLStr = playlistTemplate(playlistModelsList, 'root', {})
			document.querySelector('.row').innerHTML = bigHTMLStr
		})

	},

})

   const myApp = new AppRouter()
