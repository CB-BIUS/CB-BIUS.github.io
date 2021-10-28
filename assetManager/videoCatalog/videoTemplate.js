function videoCardTemplate(video) {
    return `
      <div class="grid-item col-lg-4 col-md-6 my-2 ${video.tags}">
        <div class="card grid-item-content mb-5 h-100">
          <div style="position: relative; padding-top: 56.25%;"><iframe src="https://iframe.mediadelivery.net/embed/16441/${video.src}?autoplay=false" loading="lazy" style="border: none; position: absolute; top: 0; height: 100%; width: 100%;" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe></div>
                
            <div class="card-body">
                <h5 class="card-title">${video.cardTitle}</h5>
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