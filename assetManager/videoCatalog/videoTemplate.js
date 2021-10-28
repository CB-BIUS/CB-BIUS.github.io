function videoCardTemplate(video) {
    return `
        <div class="grid-item col-lg-4 col-md-6 my-2 ${video.tags}">
            <div class="card grid-item-content mb-5 h-100">
                <img src="${video.poster}" class="card-img-top" data-toggle="modal" data-target="#${video.modalid}" alt="Card image cap">
             <div class="card-body">
                <h5 class="card-title">${video.cardTitle}</h5>
                <p class="card-text">${video.cardText}</p>
                <div class="d-flex justify-content-between align-items-center">
                   <div class="btn-group">
                     <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#${video.modalid}">Preview</button>
                     <div class="modal fade" id="${video.modalid}" tabindex="-1" role="dialog" aria-labelledby="tremfyaCardTitle" aria-hidden="true">
                                  <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="${video.modalid}Title">${video.modalTitle}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div class="modal-body">
                                      <div style="position: relative; padding-top: 56.25%;"><iframe src="https://iframe.mediadelivery.net/embed/16441/${video.src}?autoplay=false" loading="lazy" style="border: none; position: absolute; top: 0; height: 100%; width: 100%;" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe></div>
                                      </div>
                                      <div class="modal-footer">
                                        <a href="${video.linkButton}" class="btn blueButton" target="_blank">Open Link</a>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <a href="${video.linkButton}" class="btn btn-sm btn-outline-secondary" target="_blank">Open Link</a>
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