// 新增这一行，声明边缘运行时，不再需要vercel.json配置
export const runtime = "edge";

export default async function handler() {
  // ==========替换成你自己的list.json CDN地址==========
  const jsonUrl = "https://cdn.jsdelivr.net/gh/ordinary521/cangku@main/list.json?v=1";
  // ==================================================
  try {
    const res = await fetch(jsonUrl);
    const imgList = await res.json();
    const randomImg = imgList[Math.floor(Math.random() * imgList.length)];
    return Response.redirect(randomImg, 302);
  } catch (err) {
    // 兜底图，替换成你一张壁纸链接
    return Response.redirect("https://cdn.jsdelivr.net/gh/ordinary521/cangku@main/images/1.jpg", 302);
  }
}
