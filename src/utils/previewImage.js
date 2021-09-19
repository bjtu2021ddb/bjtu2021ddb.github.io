const previewImage = async (image) => {
  let src = image.url;
  if (!src) {
    src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(image.originFileObj);
      reader.onload = () => resolve(reader.result);
    });
  }
  const img = new Image();
  img.src = src;
  const imgWindow = window.open(src);
  imgWindow.document.write(img.outerHTML);
};

export default previewImage;
