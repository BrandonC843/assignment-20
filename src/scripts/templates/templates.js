/////////////playlist template for both sets of playlists//////////
export function playlistTemplate(playlistThumbnails){

	let playlistHtml = playlistThumbnails.map( function(playlistObj){
	return `
				<div class="col-sm-3 col-md-4 thumbnail-container">
          <div class="clearfix visible-xs-block"></div>
          <div class="thumbnail">
            <img src="${playlistObj.get('image')}">
            <div class="caption">
              <h5>${playlistObj.get('artist')}</h5>
              <h3>${playlistObj.get('title')}<h3>
            </div>
          </div>
        </div>`

	}).join('')
	return playlistHtml
}

// ////////////////single artist template///////////////
export function homeTemplate(featuredArtistModel){
  // console.log(featuredArtistModel);
	return `
        <div class="panel-body">
          <h3>ARTIST</h3>
        </div>
  			<div class="col-md-6 col-md-offset-3 thumbnail-container">
          <div class="thumbnail">
            <img src="${featuredArtistModel.get('image')}">
            <div class="caption">
              <h5>${featuredArtistModel.get('artist')}</h5>
              <h3>${featuredArtistModel.get('title')}</h3>
            </div>
          </div>
        </div>`

}
