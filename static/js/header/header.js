/**
 * 导航栏配置和功能模块
 * 支持多语言切换和响应式设计
 */

// ==================== 配置常量 ====================
const HeaderConfig = {
  // 导航菜单配置
  navMenu: [
    { name: "首页", url: "./index.html", type: 1 },
    // { name: "最新讯息", url: "#", type: 1 },
    // { name: "关于我们", url: "#", type: 1 },
    { name: "产品中心", url: "./products.html", type: 1 },
    // { name: "服务技术", url: "#", type: 1 },
    // { name: "切削信息", url: "#", type: 1 }
  ],
  
  // 语言配置
  languages: [
    { code: 'zh-CN', name: '简体中文', display: 'CN', storageKey: 'zh', translateCode: 'chinese_simplified' },
    { code: 'zh-TW', name: '繁體中文', display: 'TW', storageKey: 'tw', translateCode: 'chinese_traditional' },
    { code: 'en', name: 'English', display: 'EN', storageKey: 'en', translateCode: 'english' },
    { code: 'ja', name: '日本語', display: 'JA', storageKey: 'ja', translateCode: 'japanese' },
    { code: 'ko', name: '한국어', display: 'KO', storageKey: 'ko', translateCode: 'korean' }
  ],
  
  // 翻译术语映射
  translateTerminology: `
    最新讯息=Latest News
    关于我们=About Us
    产品中心=Product Center
    服务技术=Service & Tech
    切削信息=Cutting Info
    联系我们=Contact Us
    繁体中文=Traditional Chinese
    简体中文=Simplified Chinese
  `,
  
  // 资源路径
  logoPath: './static/images/logo/logo.jpg',
  
  // 翻译脚本URL
  translateScriptUrl: 'https://res.zvo.cn/translate/inspector_v2.js',
  
  // 调试模式
  debug: false
};

// ==================== 工具函数 ====================
const HeaderUtils = {
  /**
   * 获取当前语言
   */
  getCurrentLanguage() {
    const lang = localStorage.getItem('language') || 'zh';
    return HeaderConfig.languages.find(l => l.storageKey === lang) || HeaderConfig.languages[0];
  },
  
  /**
   * 设置语言
   */
  setLanguage(langCode) {
    const lang = HeaderConfig.languages.find(l => l.code === langCode || l.storageKey === langCode || l.display === langCode);
    if (lang) {
      localStorage.setItem('language', lang.storageKey);
      return lang;
    }
    return HeaderConfig.languages[0];
  },
  
  /**
   * 日志输出
   */
  log(...args) {
    if (HeaderConfig.debug) {
      console.log('[Header]', ...args);
    }
  },
  
  /**
   * 缓存DOM查询
   */
  cache: {},
  
  /**
   * 获取缓存的元素或进行查询
   */
  $(selector) {
    if (!this.cache[selector]) {
      this.cache[selector] = $(selector);
    }
    return this.cache[selector];
  },
  
  /**
   * 清除缓存
   */
  clearCache() {
    this.cache = {};
  }
};

// ==================== 导航栏初始化 ====================
function initHeader() {
  const headerContainer = $('.dj_header');
  if (headerContainer.length === 0) {
    HeaderUtils.log('未找到导航栏容器');
    return;
  }
  
  HeaderUtils.log('初始化导航栏...');
  
  // 清除旧的缓存和事件
  HeaderUtils.clearCache();
  
  // 生成导航HTML
  const navHtml = generateNavHTML();
  headerContainer.html(navHtml);
  
  // 绑定交互事件
  bindProductsCurtainHover();
  setActiveMenuItem();
  handleResponsive();
  
  // 延迟初始化需要DOM渲染后的功能
  setTimeout(() => {
    initContactScroll();
  }, 100);
  
  HeaderUtils.log('导航栏初始化完成');
}

// ==================== 生成导航HTML ====================
function generateNavHTML() {
  const currentLang = HeaderUtils.getCurrentLanguage();
  const menuItems = HeaderConfig.navMenu.map(item => 
    `<li><a href="${item.url}">${item.name}</a></li>`
  ).join('');
  
  return `
    <div class="nav-container">
      <div class="nav-left">
        <div class="nav-logo">
          <a href="./index.html">
            <img src="${HeaderConfig.logoPath}" alt="Logo">
          </a>
        </div>
        <ul class="nav-menu" id="navMenu">
          ${menuItems}
        </ul>
      </div>
      <div class="nav-right">
        <a href="./contact.html" class="nav-contact" id="contactLink">联系我们</a>
        <span class="dj_navber_btn active" id="changeLange">${currentLang.display}</span>
        <button class="mobile-menu-btn" id="mobileMenuBtn">
          <i class="iconfont icon-menu"></i>
        </button>
      </div>
    </div>
  `;
}

// ==================== 设置活动菜单项 ====================
function setActiveMenuItem() {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop() || 'index.html';
  
  $('.nav-menu a').each(function() {
    const href = $(this).attr('href');
    if (href && href.includes(currentPage)) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });

  // 点击时切换 active
  $(document).off('click.navActive').on('click.navActive', '.nav-menu a', function(e) {
    $('.nav-menu a').removeClass('active');
    $(this).addClass('active');
  });
}

// ==================== 滚动行为 ====================
function initScrollBehavior() {
  let lastScrollTop = 0;
  let ticking = false;
  const header = $('.dj_header');
  
  function updateScroll() {
    const scrollTop = $(window).scrollTop();
    
    // 背景切换逻辑
    if (header.hasClass('homeHeader')) {
      if (scrollTop > 50) {
        header.removeClass('dj_bg_t').addClass('dj_bg_1');
      } else {
        header.removeClass('dj_bg_1').addClass('dj_bg_t');
      }
    }
    
    // 滚动隐藏/显示逻辑
    if (Math.abs(lastScrollTop - scrollTop) <= 5) {
      ticking = false;
      return;
    }
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.addClass('hidden');
    } else {
      header.removeClass('hidden');
    }
    
    lastScrollTop = scrollTop;
    ticking = false;
  }
  
  $(window).on('scroll.headerScroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(updateScroll);
      ticking = true;
    }
  });
}

// ==================== 移动端菜单 ====================
function initMobileMenu() {
  const $mobileBtn = $('#mobileMenuBtn');
  const $navMenu = $('#navMenu');
  const $menuIcon = $mobileBtn.find('i');
  
  // 切换菜单显示/隐藏
  const toggleMenu = (show) => {
    if (show) {
      $navMenu.addClass('show');
      $menuIcon.removeClass('icon-menu').addClass('icon-close');
    } else {
      $navMenu.removeClass('show');
      $menuIcon.removeClass('icon-close').addClass('icon-menu');
    }
  };
  
  // 菜单按钮点击
  $mobileBtn.on('click.headerMobile', function(e) {
    e.stopPropagation();
    toggleMenu(!$navMenu.hasClass('show'));
  });
  
  // 菜单项点击（移动端自动关闭）
  $('.nav-menu a').on('click.headerNav', function() {
    if ($(window).width() <= 768) {
      toggleMenu(false);
    }
  });
  
  // 点击外部区域关闭菜单
  $(document).on('click.headerDocument', function(e) {
    if (!$(e.target).closest('.nav-menu, #mobileMenuBtn').length && $navMenu.hasClass('show')) {
      toggleMenu(false);
    }
  });
  
  // ESC键关闭菜单
  $(document).on('keydown.headerESC', function(e) {
    if (e.key === 'Escape' && $navMenu.hasClass('show')) {
      toggleMenu(false);
    }
  });
}

// ==================== 语言选择器 ====================
function initLanguageSelector() {
  createLanguageDropdown();
  
  // 语言按钮点击显示/隐藏下拉菜单
  $(document).on('click', '#changeLange', function(e) {
    e.stopPropagation();
    $('#languageDropdown').toggle();
  });
  
  // 点击外部区域关闭下拉菜单
  $(document).on('click', function(e) {
    if (!$(e.target).closest('#changeLange, #languageDropdown').length) {
      $('#languageDropdown').hide();
    }
  });
  
  // 语言选择事件
  $(document).on('click', '.language-option', function() {
    const langCode = $(this).data('lang');
    const lang = HeaderUtils.setLanguage(langCode);
    
    // 更新按钮显示
    $('#changeLange').text(lang.display);
    
    // 切换翻译
    if (typeof translate !== 'undefined') {
      translate.changeLanguage(lang.translateCode);
    }
    
    // 关闭下拉菜单
    $('#languageDropdown').hide();
    
    HeaderUtils.log('切换到语言:', lang.name);
  });
}

// ==================== 创建语言下拉菜单 ====================
function createLanguageDropdown() {
  const $changeLangBtn = $('#changeLange');
  if (!$changeLangBtn.length) {
    HeaderUtils.log('未找到语言切换按钮');
    return;
  }
  
  // 检查是否已创建下拉菜单
  if ($('#languageDropdown').length) {
    return;
  }
  
  const optionsHtml = HeaderConfig.languages.map(lang => 
    `<div class="language-option" data-lang="${lang.code}">${lang.name}</div>`
  ).join('');
  
  const dropdownHtml = `
    <div id="languageDropdown" class="language-dropdown" style="display: none;">
      ${optionsHtml}
    </div>
  `;
  
  $changeLangBtn.after(dropdownHtml);
  addLanguageDropdownStyles();
}

// ==================== 添加语言下拉菜单样式 ====================
function addLanguageDropdownStyles() {
  if ($('#languageDropdownStyles').length) return;
  
  $('head').append(`
    <style id="languageDropdownStyles">
      .language-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        background: white;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        z-index: 1000;
        min-width: 140px;
      }
      .language-option {
        padding: 8px 12px;
        cursor: pointer;
        border-bottom: 1px solid #eee;
        transition: background-color 0.2s;
      }
      .language-option:last-child {
        border-bottom: none;
      }
      .language-option:hover {
        background-color: #f5f5f5;
      }
      .nav-right {
        position: relative;
      }
    </style>
  `);
}

// ==================== 响应式处理 ====================
function handleResponsive() {
  let resizeTimer = null;
  
  $(window).on('resize.headerResponsive', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      const windowWidth = $(window).width();
      
      if (windowWidth > 768) {
        $('#navMenu').removeClass('show');
        $('#mobileMenuBtn i').removeClass('icon-close').addClass('icon-menu');
      }
    }, 250);
  });
}

// ==================== 初始化翻译脚本 ====================
function initExecute() {
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = HeaderConfig.translateScriptUrl;
  head.appendChild(script);
  
  setTimeout(function() {
    if (typeof translate !== 'undefined') {
      // 术语映射
      translate.nomenclature.append('chinese_simplified', 'english', HeaderConfig.translateTerminology);
      
      // 启动翻译引擎
      try { translate.listener.start(); } catch (e) {}
      try { translate.execute(); } catch (e) {}
      
      // 移除第三方下拉框
      try {
        removeTranslateDropdown();
        setupTranslateDropdownObserver();
      } catch (e) {}
      
      // 按持久化语言设置初始化
      const lang = HeaderUtils.getCurrentLanguage();
      translate.changeLanguage(lang.translateCode);
      $('#changeLange').text(lang.display);
      
      HeaderUtils.log('翻译初始化完成，当前语言:', lang.name);
    }
  }, 1000);
}

// ==================== 移除第三方翻译下拉框 ====================
function removeTranslateDropdown() {
  const byId = document.getElementById('translateSelectLanguage');
  if (byId) byId.remove();
  const byClass = document.getElementsByClassName('translateSelectLanguage');
  if (byClass && byClass.length) {
    Array.from(byClass).forEach(el => el.remove());
  }
}

// ==================== 监听DOM变化 ====================
function setupTranslateDropdownObserver() {
  const observer = new MutationObserver(() => removeTranslateDropdown());
  observer.observe(document.body, { childList: true, subtree: true });
}

// ==================== 产品中心悬浮幕布 ====================
function bindProductsCurtainHover() {
  const $curtain = $('#productsCurtain');
  const $productsLink = $('.nav-menu a[href$="products.html"]');
  
  if (!$curtain.length || !$productsLink.length) {
    return;
  }
  
  let hideTimer = null;
  const SHOW_DELAY = 100;
  const HIDE_DELAY = 200;
  
  const showCurtain = () => {
    clearTimeout(hideTimer);
    $curtain.addClass('show');
  };
  
  const hideCurtain = () => {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      $curtain.removeClass('show');
    }, HIDE_DELAY);
  };
  
  // 产品链接悬浮
  $productsLink.on('mouseenter.headerCurtain', showCurtain);
  $productsLink.on('mouseleave.headerCurtain', hideCurtain);
  
  // 幕布自身悬浮
  $curtain.on('mouseenter.headerCurtain', () => clearTimeout(hideTimer));
  $curtain.on('mouseleave.headerCurtain', hideCurtain);
  
  // 其他菜单项悬浮时隐藏
  $('.nav-menu a').not($productsLink).on('mouseenter.headerCurtain', hideCurtain);
  
  // 滚动时隐藏
  $(window).on('scroll.headerCurtain', hideCurtain);
}

// ==================== 联系我们滚动处理 ====================
function initContactScroll() {
  const $contactLink = $('#contactLink');
  if (!$contactLink.length) {
    HeaderUtils.log('未找到联系我们链接');
    return;
  }
  
  $contactLink.on('click.headerContact', function(e) {
    e.preventDefault();
    
    // 获取页面高度和窗口高度
    const docHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollTarget = docHeight - windowHeight;
    
    // 平滑滚动到页面底部
    $('html, body').animate({
      scrollTop: scrollTarget
    }, {
      duration: 600,
      easing: 'swing',
      complete: function() {
        HeaderUtils.log('已滚动到页面底部');
      }
    });
  });
}

// ==================== 页面初始化 ====================
$(document).ready(function() {
  initHeader();
  initScrollBehavior();
  initMobileMenu();
  initLanguageSelector();
  initExecute();
});

// ==================== 导出API ====================
window.HeaderUtils = {
  // 方法
  setActiveMenuItem,
  getCurrentLanguage: () => HeaderUtils.getCurrentLanguage(),
  setLanguage: (code) => HeaderUtils.setLanguage(code),
  initHeader,
  initContactScroll,
  
  // 配置对象
  CONFIG: HeaderConfig,
  Config: HeaderConfig,
  
  // 工具对象
  Utils: HeaderUtils,
  
  // 日志方法
  log: (...args) => HeaderUtils.log(...args),
  
  // 启用/禁用调试模式
  setDebug: (enabled) => {
    HeaderConfig.debug = enabled;
  }
};
