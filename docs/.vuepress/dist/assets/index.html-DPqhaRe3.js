import{_ as t,c as e,b as s,o as a}from"./app-DhMiPK-A.js";const n={};function d(r,i){return a(),e("div",null,i[0]||(i[0]=[s(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><div style="text-align:center;"><img src="https://assets.hnr1.xyz/images/b-software-docker-2.zfile/ZFile-icon.png" alt="ZFile-icon" style="height:100px;width:auto;max-width:100%;object-fit:contain;"></div><blockquote><p>ZFile，最方便快捷的在线目录展示程序，支持将本地文件、FTP、SFTP、S3、OneDrive 等存储在网站上展示并浏览.</p><p>Docker Hub：<a href="https://hub.docker.com/r/zhaojun1998/zfile" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/zhaojun1998/zfile</a></p><p>Github：<a href="https://github.com/zfile-dev/zfile" target="_blank" rel="noopener noreferrer">https://github.com/zfile-dev/zfile⁠</a></p><p>官方网站：<a href="https://www.zfile.vip/" target="_blank" rel="noopener noreferrer">https://www.zfile.vip/⁠</a></p></blockquote><h2 id="compose-配置" tabindex="-1"><a class="header-anchor" href="#compose-配置"><span>Compose 配置</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">3.3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">services</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    zfile</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        container_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> zfile</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        restart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> always</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        ports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">8080:8080</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        volumes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/volume1/docker/zfile/db:/root/.zfile-v4/db</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/volume1/docker/zfile/logs:/root/.zfile-v4/logs</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/volume2/share/zfile:/data/file</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line diff add"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/volume1/docker/zfile/application.properties:/root/application.properties</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> zhaojun1998/zfile:latest</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title"><strong>配置文件映射</strong></p><p>需要先在宿主机下载配置文件，然后映射到容器内: 下载 <a href="https://c.jun6.net/ZFILE/application.properties" target="_blank" rel="noopener noreferrer"><code>application.properties</code></a> 文件到 <code>/root/zfile/</code> 目录下, 此目录可自行更改, 命令如:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -k</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /volume1/docker/zfile/application.properties</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://c.jun6.net/ZFILE/application.properties</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>然后增加一个 <code>-v</code> 参数(见上面倒数第二行)，将此源文件映射到容器内（如修改宿主机的 <code>application.properties</code> 为其他路径, 则上面命令也要一起修改）</strong></p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>启动容器后无法修改文件映射，需先 <code>docker rm -f zfile</code> 删除容器，再重新运行命令.</p></div><h2 id="unraid-配置" tabindex="-1"><a class="header-anchor" href="#unraid-配置"><span>Unraid 配置</span></a></h2><table><thead><tr><th>项目</th><th>参数</th><th>备注</th></tr></thead><tbody><tr><td>名称</td><td><code>ZFile</code></td><td></td></tr><tr><td>概述</td><td>空</td><td></td></tr><tr><td>额外要求</td><td>空</td><td></td></tr><tr><td>存储库</td><td><code>zhaojun1998/zfile</code></td><td></td></tr><tr><td>Registry URL</td><td><a href="https://registry.hub.docker.com/r/zhaojun1998/zfile" target="_blank" rel="noopener noreferrer">https://registry.hub.docker.com/r/zhaojun1998/zfile</a></td><td></td></tr><tr><td>图标链接</td><td><code>/mnt/user/Pictures/docker-logos/ZFile-icon.png</code></td><td></td></tr><tr><td>WebUI</td><td>空</td><td></td></tr><tr><td>额外参数</td><td>空</td><td></td></tr><tr><td>发布参数</td><td>空</td><td></td></tr><tr><td>CPU 绑定</td><td>自定义</td><td></td></tr><tr><td>网络类型</td><td><code>Bridge</code></td><td></td></tr><tr><td>Use Tailscale</td><td>关</td><td></td></tr><tr><td>控制台 shell 命令</td><td><code>Shell</code></td><td></td></tr><tr><td>特权</td><td>关</td><td></td></tr><tr><td>路径</td><td>容器路径：<code>/root/.zfile-v4/db</code>；主机路径：<code>/mnt/user/appdata/ZFile/db</code></td><td>数据库路径</td></tr><tr><td>路径</td><td>容器路径：<code>/root/.zfile-v4/logs</code>；主机路径：<code>/mnt/user/appdata/ZFile/logs</code></td><td>日志路径</td></tr><tr><td>路径</td><td>容器路径：<code>/data/file</code>；主机路径：<code>/mnt/user/Work/</code></td><td>存储路径</td></tr><tr><td>端口</td><td>容器端口：<code>8080</code>；主机端口：<code>8080</code>；连接类型：<code>TCP</code></td><td>映射端口</td></tr></tbody></table>`,9)]))}const h=t(n,[["render",d]]),p=JSON.parse('{"path":"/article/vtzi3kg7/","title":"ZFile","lang":"zh-CN","frontmatter":{"title":"ZFile","createTime":"2025/04/11 21:14:50","permalink":"/article/vtzi3kg7/","tags":["zfile","网盘","compose","unraid"],"description":"简介 ZFile-icon ZFile，最方便快捷的在线目录展示程序，支持将本地文件、FTP、SFTP、S3、OneDrive 等存储在网站上展示并浏览. Docker Hub：https://hub.docker.com/r/zhaojun1998/zfile Github：https://github.com/zfile-dev/zfile⁠ 官方...","head":[["meta",{"property":"og:url","content":"https://blog.hnr1.xyz/article/vtzi3kg7/"}],["meta",{"property":"og:site_name","content":"𝒷𝑒𝓈𝓉 𝓂𝒶𝓃"}],["meta",{"property":"og:title","content":"ZFile"}],["meta",{"property":"og:description","content":"简介 ZFile-icon ZFile，最方便快捷的在线目录展示程序，支持将本地文件、FTP、SFTP、S3、OneDrive 等存储在网站上展示并浏览. Docker Hub：https://hub.docker.com/r/zhaojun1998/zfile Github：https://github.com/zfile-dev/zfile⁠ 官方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"zfile"}],["meta",{"property":"article:tag","content":"网盘"}],["meta",{"property":"article:tag","content":"compose"}],["meta",{"property":"article:tag","content":"unraid"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ZFile\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.41,"words":422},"git":{},"autoDesc":true,"filePathRelative":"2.软件/1.Docker/b-software-docker-2.zfile.md","categoryList":[{"id":"5231f5","sort":2,"name":"软件"},{"id":"7b155b","sort":1,"name":"Docker"}]}');export{h as comp,p as data};
