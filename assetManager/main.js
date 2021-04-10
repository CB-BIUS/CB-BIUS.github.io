const projectData = [
    {
        tags: "medselect unbranded postcard hcpyes pdfno dseno vaeno emailcustomno",
        topImg: "mages/90147bmsAfibPostcardMedselect/afib-thumb.PNG",
        cardTitle: "90147 Pfizer BMS AFib Postcard",
        cardText: "Medselect &#9679; Unbranded &#9679; Postcard &#9679; HCP toggle",
        modalid: "afibCard",
        modalTitle: "AFib Postcard",
        slideTwo: "images/90147bmsAfibPostcardMedselect/afibTwo.PNG",
        slideThree: "images/90147bmsAfibPostcardMedselect/afibThree.PNG",
        slideFour: "images/90147bmsAfibPostcardMedselect/afibFour.PNG",
        linkButton: "https://bionicalllc.sharefile.com/d-sa3d7d94e3ecd4f429597a89431fa0a24"
    },
    {
        tags: "patientprofiler branded pdfno hcpno dseno vaeyes emailcustomyes",
        topImg: "images/90138cyclosetPatientProfiler/cycloset-thumb.PNG",
        cardTitle: "90138 Bausch-Salix Cycloset Patient Profiler",
        cardText: "Patient profiler &#9679; Branded &#9679; Approved Email",
        modalid: "cyclosetCard",
        modalTitle: "Cycloset Patient Profiler",
        slideTwo: "images/90138cyclosetPatientProfiler/cyclosetTwo.PNG",
        slideThree: "images/90138cyclosetPatientProfiler/cyclosetThree.PNG",
        slideFour: "images/90138cyclosetPatientProfiler/cyclosetFour.PNG",
        linkButton: "https://bionicalllc.sharefile.com/d-s5c71f9e2213b4dbc991a79013a51fe32"
    },
    {
        tags: "kolselect branded pdfno hcpno dseno vaeyes",
        topImg: "images/90116tremfyaDermKolselect/tremfya-thumb.PNG",
        cardTitle: "90116 Janssen Tremfya Derm KOL Select",
        cardText: "Kolselect &#9679; Branded &#9679; Approved Email",
        modalid: "tremfyaCard",
        modalTitle: "Tremfya Derm KOL",
        slideTwo: "images/90116tremfyaDermKolselect/tremfyaTwo.PNG",
        slideThree: "images/90116tremfyaDermKolselect/tremfya-thumb.PNG",
        slideFour: "images/90116tremfyaDermKolselect/tremfyaTwo.PNG",
        linkButton: "https://bionicalllc.sharefile.com/d-s439cc4ab1f4f4ce5a2d4cfd0069199e4"
    },
    {
        tags: "medselect branded brochure pdfyes hcpyes dseno vaeno emailcustomno",
        topImg: "images/90156janssenSpravatoMedselect/spravato-thumb.PNG",
        cardTitle: "90156 Janssen Spravato MED Select",
        cardText: "MED Select &#9679; Branded &#9679; Brochure &#9679; PDF Delivery &#9679; HCP toggle",
        modalid: "spravatoCard",
        modalTitle: "Spravato MED Select",
        slideTwo: "images/90156janssenSpravatoMedselect/spravatoTwo.PNG",
        slideThree: "images/90156janssenSpravatoMedselect/spravatoThree.PNG",
        slideFour: "images/90156janssenSpravatoMedselect/spravatoFour.PNG",
        linkButton: "https://bionicalllc.sharefile.com/d-se743463237fd45a59d89665fb7a67483"
    },
    {
        tags: "medselect branded tearpad pdfno hcpno dseno vaeno emailcustomno",
        topImg: "images/90097endoNascobalMedselect/nascobal-thumb.PNG",
        cardTitle: "90097 Endo Nascobal MED Select",
        cardText: "MED Select &#9679; Branded &#9679; Tearpad",
        modalid: "nascobalCard",
        modalTitle: "Endo Nascobal MED Select",
        slideTwo: "images/90097endoNascobalMedselect/nascobalTwo.PNG",
        slideThree: "images/90097endoNascobalMedselect/nascobalThree.PNG",
        slideFour: "images/90097endoNascobalMedselect/nascobalFour.PNG",
        linkButton: "https://bionicalllc.sharefile.com/d-sa4824fdc3c894b549bb45a2363cb6c0c"
    },
    {
        tags: "medselect unbranded tearpad wallchart pdfno hcpyes dseno vaeno emailcustomno",
        topImg: "images/90146merckKeytrudaMedSelect/keytruda-thumb.PNG",
        cardTitle: "90146 Merck Keytruda MED Select",
        cardText: "MED Select &#9679; Unbranded &#9679; Wallchart &#9679; Tearpad &#9679; HCP toggle",
        modalid: "keytrudaCard",
        modalTitle: "Merck Keytruda MED Select",
        slideTwo: "images/90146merckKeytrudaMedSelect/keytrudaTwo.PNG",
        slideThree: "images/90146merckKeytrudaMedSelect/keytrudaThree.PNG",
        slideFour: "images/90146merckKeytrudaMedSelect/keytrudaFour.PNG",
        linkButton: "https://bionicalllc.sharefile.com/d-sda1b24e68b79484a91fd1bc8422e8c59"
    }
    ];

    function cardTemplate(prog) {
        return `
            <div class="grid-item col-lg-4 col-md-6 my-2 ${prog.tags}">
                <div class="card grid-item-content mb-5 h-100">
                    <img src="${prog.topImg}" class="card-img-top" data-toggle="modal" data-target="#${prog.modalid}" alt="Card image cap">
                 <div class="card-body">
                    <h5 class="card-title">${prog.cardTitle}</h5>
                    <p class="card-text">${prog.cardText}</p>
                    <div class="d-flex justify-content-between align-items-center">
                       <div class="btn-group">
                         <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#${prog.modalid}">Preview</button>
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
                                              <a class="carousel-control-prev" href="#${prog.modalid}Controls" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                              </a>
                                              <a class="carousel-control-next" href="#${prog.modalid}Controls" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                              </a>
                                            </div>
                                          </div>
                                          <div class="modal-footer">
                                            <a href="${prog.linkButton}" class="btn btn-info" target="_blank">Open Link</a>
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <a href="${prog.linkButton}" class="btn btn-sm btn-outline-secondary" target="_blank">Open Link</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
        `
    }

    document.getElementById("projects").innerHTML = `
        ${projectData.map(cardTemplate).join('')}
    `
