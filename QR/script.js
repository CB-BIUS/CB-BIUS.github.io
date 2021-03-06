qrData = document.getElementById('dataInput');
qrImage = document.getElementById('imageInput');
qrColor = document.getElementById('colorInput');
qrType = document.getElementById('typeInput');

var img;

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  margin: 10,
  data: "http://www.bionicalsolutionsgroup.com/",
  image: "",
  dotsOptions: {
    color: "#000",
    type: "square"
  },
});

function validate() {
  var imgCheck = document.getElementById("imageCheck");
  if (imgCheck.checked) {
    qrCode.update({
      image: "bionicalLogo.png"
    });
  } 
  }

const updateQrData = () => {
  newQrData = qrData.value;
  qrCode.update({
    data: newQrData
  });
};

const updateQrImg = () => {
  newQrImage = URL.createObjectURL(qrImage.files[0]);
  console.log(newQrImage);
  qrCode.update({
    image: newQrImage
  });
};

const updateQrColor = () => {
  newQrColor = qrColor.value;
  qrCode.update({
    dotsOptions: {
      color: newQrColor
    }
  });
};

const updateQrType = () => {
  newQrType = qrType.value;
  qrCode.update({
    dotsOptions: {
      type: newQrType
    }
  });
};

const download = () => qrCode.download("png");

qrCode.append(document.getElementById('canvas'));

