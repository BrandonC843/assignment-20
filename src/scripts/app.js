// console.log('wowow')
// import $ from 'jquery';
//
// $.getJSON('/proxy?api=http://www.bbc.co.uk/radio1/playlist.json').then(function(serverRes){
// 	console.log(serverRes)
// })
const BbcRadio1Model = Backbone.Model.extend({
})

const BbcRadioCollection = Backbone.Collection.extend({
   intitalize: function(qryStrParams){
      if(typeof qryStrParams !== 'undefined'){
         this.url = `${this.url}&${qryStrParams}`
      }
   },
   parse: function(rawServerRes){
      console.log('current Parsing');
      return serverRes.results
   },

   url: '/proxy?api=http://www.bbc.co.uk/radio1/playlist.json'

      model: BbcRadio1Model
})
// const AppRouter = Backbone.Router.extend({
// 	initialize: function(){
// 		console.log('app routing');
// 		Backbone.history.start()
// 	},
   routes: {
      '' : 'homePage',
      '#radio/1' : 'radio',
      '#radio/2' : 'radio'


   }

   const myApp = new AppRouter()
