export default async function handler() {
  // ==========这里改成你自己的list.json CDN地址==========
  const jsonUrl = "https://cdn.jsdelivr.net/gh/ordinary521/cangku@main/list.json";
  // ==================================================
  try {
    // 读取图库所有图片链接
    const res = await fetch(jsonUrl);
    const imgList = await res.json();
    // 随机抽取一张
    const randomImg = imgList[Math.floor(Math.random() * imgList.length)];
    // 302重定向到图片，OK影视直接加载图片
    return Response.redirect(randomImg, 302);
  } catch (err) {
    // 加载失败兜底图，替换成你一张壁纸CDN链接
    return Response.redirect("https://cdn.jsdelivr.net/gh/ordinary521/cangku@main/images/1.jpg", 302);
  }
}
