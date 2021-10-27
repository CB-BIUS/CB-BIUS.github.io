 function catalogCardTemplate(prog) {
        return `
            <div class="grid-item col-lg-4 col-md-6 my-2 ${prog.tags}">
                <div class="card grid-item-content mb-5 h-100">
                    <img src="${prog.topImg}" class="card-img-top" data-toggle="modal" data-target="#${prog.modalid}" alt="Card image cap" width="500" height="300">
                 <div class="card-body">
                    <h5 class="card-title">${prog.cardTitle}</h5>
                    <p class="card-text">${prog.cardText}</p>
                    <p class="card-text">${prog.date}</p>
                    <p class="card-text">${prog.timestamp}</p>
                    <div class="d-flex justify-content-between align-items-center">
                       <div>
                         <button type="button" class="btn btn-sm blueButton mb-2" data-toggle="modal" data-target="#${prog.modalid}">Preview</button>
                         <div class="modal fade" id="${prog.modalid}" tabindex="-1" role="dialog" aria-labelledby="tremfyaCardTitle" aria-hidden="true">
                                      <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h5 class="modal-title" id="${prog.modalid}Title">${prog.modalTitle}</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                              <span aria-hidden="true">&times;</span>
                                            </button>
                                          </div>
                                          <div class="modal-body">
                                            <div id="${prog.modalid}Controls" class="carousel slide" data-ride="carousel">
                                              <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                  <img class="d-block w-100" src="${prog.topImg}" alt="First slide">
                                                </div>
                                                <div class="carousel-item">
                                                  <img class="d-block w-100" src="${prog.slideTwo}" alt="Second slide">
                                                </div>
                                                <div class="carousel-item">
                                                  <img class="d-block w-100" src="${prog.slideThree}" alt="Third slide">
                                                </div>
                                                <div class="carousel-item">
                                                  <img class="d-block w-100" src="${prog.slideFour}" alt="Fourth slide">
                                                </div>
                                              </div>
                                              <a class="carousel-control-prev" id="${prog.noCarousel}" href="#${prog.modalid}Controls" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                              </a>
                                              <a class="carousel-control-next" id="${prog.noCarousel}" href="#${prog.modalid}Controls" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                              </a>
                                            </div>
                                          </div>
                                          <div class="modal-footer">
                                            <a href="${prog.linkButton}" class="btn blueButton" target="_blank">Open Link</a>
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    
                                  </div>
                              </div>
                              <div class="btn-group flex-wrap">
                                    <a href="${prog.linkButton}" class="btn btn-sm btn-outline-secondary" target="_blank">Open Screens</a>
                                    <a href="${prog.trainingButton}" class="btn btn-sm btn-outline-secondary" target="_blank">Training Manual</a>
                              </div>
                              <form method="POST" action="https://www.medselect.north51digital.com/api/v0/form-login-dashboard">
                              <div class="form-group mt-2">
                                      <input type="hidden" name="email" value="${prog.dashboardEmail}"/>
                                      <input type="hidden" name="password" value="${prog.dashboardPassword}"/>
                                      <input type="${prog.dashboardSubmit}" class="btn btn-sm btn-outline-secondary" value="Dashboard" formtarget="_blank">
                              </div>
                              </form>
                          </div>
                      </div>
                  </div>
        `
    }

     document.getElementById("catalog").innerHTML = `
         ${projectData.map(catalogCardTemplate).join('')}
     `