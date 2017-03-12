export const radioModel = Backbone.Model.extend({
	initialize: function(radioObj){
		this._singleFetch = radioObj.singleFetch
	},

	parse: function(rawJSONRes){
      console.log(rawJSONRes);
		if (this._singleFetch === true ){
			return rawJSONRes.playlist.introducing[0]
		} else {
			return rawJSONRes
		}
	},

	url: `/proxy?api=http://www.bbc.co.uk/radio1/playlist.json`,

	_singleFetch: false

})
export const radioCollection = Backbone.Collection.extend({
	initialize: function(radioNumber){
			this.url = `/proxy?api=http://www.bbc.co.uk/radio${radioNumber}/playlist.json`
	},

	parse: function(rawServerRes){
		console.log('trying to find response')
		return rawServerRes.playlist.a
	},

	url: '/proxy?api=http://www.bbc.co.uk/?callback=?',

	model: radioModel
})
