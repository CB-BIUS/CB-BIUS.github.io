function salesCardTemplate(sales) {
    return `
        <div class="grid-item col-lg-4 col-md-6 my-2 ${sales.tags}">
            <div class="card grid-item-content mb-5 h-100">
                <img src="${sales.topImg}" class="card-img-top" data-toggle="modal" data-target="#${sales.modalid}" alt="Card image cap">
             <div class="card-body">
                <h5 class="card-title">${sales.cardTitle}</h5>
                <p class="card-text">${sales.cardText}</p>
                <div class="d-flex justify-content-between align-items-center">
                   <div class="btn-group">
                     <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#${sales.modalid}">Preview</button>
                     <div class="modal fade" id="${sales.modalid}" tabindex="-1" role="dialog" aria-labelledby="tremfyaCardTitle" aria-hidden="true">
                                  <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="${sales.modalid}Title">${sales.modalTitle}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div class="modal-body">
                                        
                                      <img class="d-block w-100" src="${sales.topImg}" alt="...">
                                          
                                      </div>
                                      <div class="modal-footer">
                                        <a href="${sales.linkButton}" class="btn blueButton" target="_blank">Open Link</a>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <a href="${sales.linkButton}" class="btn btn-sm btn-outline-secondary" target="_blank">Open Link</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
    `
}

  document.getElementById("sales").innerHTML = `
      ${salesData.map(salesCardTemplate).join('')}
  `