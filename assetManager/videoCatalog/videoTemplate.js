function videoCardTemplate(video) {
    return `
      <div class="grid-item col-lg-4 col-md-6 my-2 ${video.tags}">
        <div class="card grid-item-content mb-5 h-100">
           
            <video width="100%" height="100%" controls poster="${video.poster}">
            <source src="${video.src}" type="video/mp4">
            This browser doesn't support video tag.
            </video>

            <div class="card-body">
                <h5 class="card-title">${video.cardTitle}</h5>
                <span class="badge badge-danger">${video.tags}</span>
                <p class="card-text">${video.cardText}</p>
                
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">     
                    <a href="${video.linkButton}" class="btn btn-sm btn-outline-secondary" target="_blank">Open Link</a>
                  </div>
                  
                </div>    
            </div>
            
          </div>
        </div>
      </div>
    `
}

  document.getElementById("videos").innerHTML = `
      ${videoData.map(videoCardTemplate).join('')}
  `