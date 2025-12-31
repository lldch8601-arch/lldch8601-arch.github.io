// common-nav.js

document.addEventListener("DOMContentLoaded", function() {
    // 1. 定义导航栏 HTML 模板
    // 注意：这里用的是反引号 ` (键盘Esc下面那个键)，支持换行
    const navTemplate = `
    <header class="nav-header">
        <div class="nav-container">
            <a href="index.html" class="logo">CH-商品推荐</a>
            <ul class="nav-menu">
                <!-- 首页 -->
                <li><a href="index.html" data-page="index.html">首页</a></li>
                
                <!-- 新品页 -->
                <li><a href="new_pro.html" data-page="new_pro.html">最强新品推荐（潜力爆款）</a></li>
                
                <!-- 下拉菜单 -->
                <li class="dropdown">
                    <a href="#" data-page="march_bestsellers.html">同期热销品 ▼</a>
                    <div class="dropdown-content">
                        <a href="march_bestsellers.html">同期3月</a>
                        <!-- 未来可以在这里加 4月、5月，所有页面都会同步更新 -->
                    </div>
                </li>

                <li><a href="#">其他分类1（可扩展）</a></li>
                <li><a href="#">其他分类2（可扩展）</a></li>
            </ul>
        </div>
    </header>
    `;

    // 2. 找到页面上的占位符，把导航栏插进去
    const placeholder = document.getElementById("nav-placeholder");
    if (placeholder) {
        placeholder.innerHTML = navTemplate;
    }

    // 3. 自动高亮当前页面的菜单
    highlightActiveMenu();
});

function highlightActiveMenu() {
    // 获取当前页面的文件名 (比如 march_bestsellers.html)
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html"; // 如果是根目录，默认index.html

    const links = document.querySelectorAll(".nav-menu a");
    
    links.forEach(link => {
        // 先移除所有 active
        link.classList.remove("active");
        
        // 获取链接的目标地址
        const href = link.getAttribute("href");
        
        // 如果链接地址包含当前文件名，就加粗
        if (href === page) {
            link.classList.add("active");
            
            // 特殊处理：如果是下拉菜单里的子项被选中，主菜单也要高亮
            const parentDropdown = link.closest(".dropdown");
            if (parentDropdown) {
                // 找到下拉菜单的主标题 <a> 标签并高亮
                parentDropdown.querySelector("a").classList.add("active");
            }
        }
    });
}
