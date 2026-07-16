// Cloudflare Pages 随机壁纸API，读取github list.json并302跳转图片
export default async function onRequestGet() {
  // ========== 1.替换成你图库list.json的CDN地址 ==========
  const jsonUrl = "https://cdn.jsdelivr.net/gh/ordinary521/cangku@main/list.json";
  // ========== 2.兜底图：图库任意一张图片CDN链接 ==========
  const fallbackImg = "https://cdn.jsdelivr.net/gh/ordinary521/cangku@main/images/1.jpg";

  try {
    // 拉取所有图片列表
    const res = await fetch(jsonUrl, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    if (!res.ok) throw new Error("列表加载失败");
    const imgList = await res.json();

    // 随机取一张
    const randomIndex = Math.floor(Math.random() * imgList.length);
    const targetImg = imgList[randomIndex];

    // 302临时重定向，OK影视直接加载图片
    return Response.redirect(targetImg, 302);
  } catch (err) {
    // 出错返回兜底壁纸
    return Response.redirect(fallbackImg, 302);
  }
}
