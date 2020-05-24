
export const captureImage = (video) => {
    const canvas = document.createElement("canvas");//创建一个canvas
    canvas.width = video.videoWidth * scale;//设置canvas的宽度为视频的宽度
    canvas.height = video.videoHeight * scale;//设置canvas的高度为视频的高度
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);//绘制图像

    // const img = document.createElement("img");//创建img
    // img.src = canvas.toDataURL("image/png");//将绘制的图像用img显示出来
    // imgbox.appendChild(img);//将img添加到imgbox里

    return canvas.toDataURL("image/png")

};
