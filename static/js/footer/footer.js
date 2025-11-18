// 通用页脚模块（优化版 - 结构清晰 + 可配置链接 + 移动端折叠）
(function () {
    'use strict';
    
    const DJFooter = window.DJFooter || {};
    let initialized = false;

    // 配置数据 - 便于维护和修改
    const config = {
        templateURLs: [
            './static/module/footer/footer.html',
            '/static/module/footer/footer.html'
        ],
        fetchTimeout: 4000,
        mobileBreakpoint: 768,
        companyInfo: {
            name: 'By Rick',
            englishName: 'Dongguan Yunshi Watch Industry Co., Ltd.',
            address: '东莞市厚街镇白濠村第三工业区',
            englishAddress: 'No.3 Industrial Zone, Baihao Village, Houjie Town, Dongguan City, Guangdong, China.',
            tel: '13631715893',
            email: '3095937257@qq.com',
            overseasEmail: 'tingsang150@163.com'
        },
        // 导航菜单配置 - 便于维护和跳转
        navigation: {
            '最新讯息': [
                { text: '最新讯息', url: './news.html' }
            ],
            '关于我们': [
                { text: '关于我们', url: './about.html' }
            ],
            '产品中心': [
                { text: 'PCD-PCBN超硬系列', url: './products.html?category=pcd' },
                { text: '捨弃式铣刀系列', url: './products.html?category=milling' },
                { text: 'S330系列', url: './products.html?category=s330' },
                { text: 'M630系列', url: './products.html?category=m630' },
                { text: 'L830系列', url: './products.html?category=l830' },
                { text: '复合材料系列', url: './products.html?category=composite' },
                { text: '铣牙刀系列', url: './products.html?category=thread' },
                { text: '成型刀系列', url: './products.html?category=forming' },
                { text: '钻头.铰刀系列', url: './products.html?category=drill' },
                { text: '车床刀具系列', url: './products.html?category=lathe' },
                { text: '锯片.圆刀', url: './products.html?category=saw' },
                { text: '型录下载', url: './download.html' }
            ],
            '服务与技术': [
                { text: '再生研磨服务', url: './serv_tech.html?service=regrinding' },
                { text: '硬脆材料加工・PCD切削刀具', url: './serv_tech.html?service=pcd' },
                { text: '钻石切削刀具｜专业客制化', url: './serv_tech.html?service=diamond' },
                { text: '承制PCD特殊成型刀具', url: './serv_tech.html?service=pcd-forming' },
                { text: '承制特殊成型刀具', url: './serv_tech.html?service=forming' },
                { text: 'OEM医疗刀具制造', url: './serv_tech.html?service=medical' },
                { text: 'LPGX高进给型铣刀片', url: './serv_tech.html?product=lpgx' },
                { text: 'JDC粉末高速钢钻头', url: './serv_tech.html?product=jdc' },
                { text: 'PCD聚晶钻石车刀片', url: './serv_tech.html?product=pcd-turning' },
                { text: 'LNMX高进给型铣刀片', url: './serv_tech.html?product=lnmx' },
                { text: '多功能钨钢倒角铣刀', url: './serv_tech.html?product=chamfer' },
                { text: '多功能舍弃式倒角铣刀', url: './serv_tech.html?product=disposable-chamfer' },
                { text: 'CEU钨钢雕刻刀', url: './serv_tech.html?product=ceu' },
                { text: '平底型钻头', url: './serv_tech.html?product=flat-drill' },
                { text: 'METV高效型铣刀', url: './serv_tech.html?product=metv' },
                { text: 'MEV高效型铣刀', url: './serv_tech.html?product=mev' },
                { text: 'MEHU不等距高导型铣刀', url: './serv_tech.html?product=mehu' },
                { text: 'CEXSH铝用强力型铣刀', url: './serv_tech.html?product=cexsh' },
                { text: 'CEXV铝用高效型铣刀', url: './serv_tech.html?product=cexv' },
                { text: 'MEMH不锈钢用高导型铣刀', url: './serv_tech.html?product=memh' },
                { text: '多功能单牙钻镗牙刀', url: './serv_tech.html?product=single-thread' },
                { text: '钻牙式钨钢铣刀头', url: './serv_tech.html?product=drill-thread' },
                { text: '精密模具用扁头&斜颈铣刀', url: './serv_tech.html?product=precision-mold' },
                { text: 'BNMX高进给型铣刀片', url: './serv_tech.html?product=bnmx' },
                { text: '高CP值/铣刀片', url: './serv_tech.html?product=high-cp' },
                { text: '加工异常原因及对策', url: './serv_tech.html?article=troubleshooting' }
            ],
            '切削信息': [
                { text: '切削信息', url: './cutting.html' }
            ],
            '服务站点': [
                { text: '服务站点', url: './service.html' }
            ]
        }
    };

    // 工具函数
    const utils = {
        log(...args) {
            try {
                console.log.apply(console, ['[footer]'].concat(args));
            } catch (e) {}
        },

        unique(arr) {
            return Array.from(new Set(arr.filter(Boolean)));
        },

        generateListHTML(items) {
            return items.map(item => 
                `<li><a href="${item.url}" title="${item.text}">${item.text}</a></li>`
            ).join('\n');
        },

        splitArray(arr, chunkSize) {
            const result = [];
            for (let i = 0; i < arr.length; i += chunkSize) {
                result.push(arr.slice(i, i + chunkSize));
            }
            return result;
        }
    };

    // DOM 操作相关函数
    const dom = {
        ensureHost() {
            let host = document.querySelector('footer.dj_footer') || 
                       document.querySelector('.dj_footer') || 
                       document.querySelector('footer');
            
            if (!host) {
                host = document.createElement('footer');
                host.className = 'dj_footer';
                document.body.appendChild(host);
                utils.log('created footer host automatically');
            } else if (!host.classList.contains('dj_footer')) {
                host.classList.add('dj_footer');
            }
            return host;
        },

        resolveTemplateURLs() {
            const candidates = [...config.templateURLs];
            
            try {
                const scripts = document.getElementsByTagName('script');
                for (let script of scripts) {
                    const src = script.src || '';
                    if (src.includes('/static/js/footer/footer.js') || src.includes('footer.js')) {
                        const base = src.split('/static/js/footer/')[0];
                        if (base) {
                            candidates.push(`${base}/static/module/footer/footer.html`);
                        }
                    }
                }
            } catch (e) {
                utils.log('script detection error', e);
            }
            
            return utils.unique(candidates);
        },

        createDefaultHTML() {
            const year = new Date().getFullYear();
            const { companyInfo, navigation } = config;
            
            // 分割服务与技术为两列
            const serviceChunks = utils.splitArray(navigation['服务与技术'], 13);
            
            return `
<div class="footer-black">
  <div class="container">
    <div class="footer-cols">
      <div class="footer-col">
        <h4>最新讯息</h4>
        <ul>${utils.generateListHTML(navigation['最新讯息'])}</ul>
      </div>
      <div class="footer-col">
        <h4>关于我们</h4>
        <ul>${utils.generateListHTML(navigation['关于我们'])}</ul>
      </div>
      <div class="footer-col">
        <h4>产品中心</h4>
        <ul>${utils.generateListHTML(navigation['产品中心'])}</ul>
      </div>
      <div class="footer-col">
        <h4>服务与技术</h4>
        <ul>${utils.generateListHTML(serviceChunks[0] || [])}</ul>
      </div>
      <div class="footer-col">
        <h4 class="hidden-title">服务与技术（续）</h4>
        <ul>${utils.generateListHTML(serviceChunks[1] || [])}</ul>
      </div>
      <div class="footer-col">
        <h4>切削信息</h4>
        <ul>${utils.generateListHTML(navigation['切削信息'])}</ul>
      </div>
      <div class="footer-col">
        <h4>服务站点</h4>
        <ul>${utils.generateListHTML(navigation['服务站点'])}</ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-left">
        <h4>联系我们</h4>
        <ul>
          <li>TEL：${companyInfo.tel}</li>
          <li>E-mail：<a href="mailto:${companyInfo.email}">${companyInfo.email}</a></li>
          <li>Overseas Sales：<a href="mailto:${companyInfo.overseasEmail}">${companyInfo.overseasEmail}</a></li>
        </ul>
      </div>
      <div class="footer-bottom-right">
        <div>${companyInfo.name} ${companyInfo.englishName}</div>
        <div>${companyInfo.address}</div>
        <div>${companyInfo.englishAddress}</div>
        <div>Copyright © ${year} ${companyInfo.name}. All Rights Reserved. Design by ting.</div>
      </div>
    </div>
  </div>
</div>`;
        }
    };

    // 网络请求相关
    const network = {
        async fetchWithTimeout(url, options = {}) {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => {
                try { controller.abort(); } catch (e) {}
            }, options.timeout || config.fetchTimeout);

            try {
                const response = await fetch(url, {
                    cache: 'no-cache',
                    headers: { 'Accept': 'text/html' },
                    credentials: 'same-origin',
                    signal: controller.signal,
                    ...options
                });

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }

                return await response.text();
            } finally {
                clearTimeout(timeoutId);
            }
        },

        async loadTemplate(host) {
            const urls = dom.resolveTemplateURLs();
            
            for (const url of urls) {
                try {
                    const html = await this.fetchWithTimeout(url);
                    host.innerHTML = html;
                    return true;
                } catch (error) {
                    utils.log('fetch template failed', url, error.message);
                    continue;
                }
            }
            
            // 所有URL都失败，使用默认HTML
            utils.log('all template urls failed, fallback to default');
            host.innerHTML = dom.createDefaultHTML();
            return false;
        }
    };

    // 功能模块
    const features = {
        bindYear(host) {
            const yearEl = host.querySelector('.year');
            if (yearEl) {
                yearEl.textContent = new Date().getFullYear();
            }
        },

        bindCollapse(host) {
            const applyMode = () => {
                const isMobile = window.innerWidth <= config.mobileBreakpoint;
                const cols = host.querySelectorAll('.footer-col');
                
                cols.forEach(col => {
                    const title = col.querySelector('h4');
                    if (!title) return;
                    
                    if (isMobile) {
                        title.setAttribute('role', 'button');
                        title.setAttribute('tabindex', '0');
                        title.classList.add('collapsible');
                        col.classList.remove('open');
                        
                        // 移除旧事件监听器，避免重复绑定
                        title.removeEventListener('click', title._clickHandler);
                        title.removeEventListener('keypress', title._keyHandler);
                        
                        // 创建新的事件处理函数
                        const clickHandler = () => col.classList.toggle('open');
                        const keyHandler = (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                col.classList.toggle('open');
                            }
                        };
                        
                        title.addEventListener('click', clickHandler);
                        title.addEventListener('keypress', keyHandler);
                        
                        // 保存引用以便后续移除
                        title._clickHandler = clickHandler;
                        title._keyHandler = keyHandler;
                    } else {
                        title.classList.remove('collapsible');
                        title.removeAttribute('role');
                        title.removeAttribute('tabindex');
                        title.removeEventListener('click', title._clickHandler);
                        title.removeEventListener('keypress', title._keyHandler);
                        col.classList.add('open');
                    }
                });
            };
            
            applyMode();
            window.addEventListener('resize', applyMode);
        },

        bindBackToTop(host) {
            const backBtn = host.querySelector('.back-to-top');
            if (backBtn) {
                backBtn.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        }
    };

    // 主初始化函数
    async function init() {
        if (initialized) {
            utils.log('already initialized');
            return;
        }
        
        try {
            const host = dom.ensureHost();
            await network.loadTemplate(host);
            
            // 绑定功能
            features.bindYear(host);
            features.bindCollapse(host);
            features.bindBackToTop(host);
            
            initialized = true;
            utils.log('footer initialized successfully');
            
        } catch (error) {
            utils.log('initialization failed', error);
        }
    }

    function reload() {
        initialized = false;
        init();
    }

    // 自动初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 导出API
    window.DJFooter = {
        init,
        reload,
        version: '2.0.0',
        config, // 暴露配置以便外部修改
        utils   // 暴露工具函数
    };

})();