### 企業資料通訊TA 11

---

<p style="font-size:150px;"> ppt.cc/fl8pwx </p>

---

前次複習:
* Switch 設定
* 資料庫的一些原則
* Portrainer vs Mysql

---

<a href="#/10/14">Switch 設定</a>

1. <p class="fragment">講講看有哪些switch的相關指令??</p>

---

<a href="#/10/19">資料庫的一些原則</a>

1. <p class="fragment">資料庫的完整性規則</p>
1. <p class="fragment">關聯式資料庫</p>
1. <p class="fragment">正規化</p>
1. <p class="fragment">關聯-外鍵限制</p>

---

* Ref: [MySQL入门教程（MySQL tutorial book）](https://github.com/jaywcjlove/mysql-tutorial)

* <p style="font-size:35px">Ref: <a href="https://www.ithome.com.tw/node/47440">為何使用資料庫儲存資料時，需要先執行正規化？</a></p>

* Ref: [資料庫的完整性規則](https://www.mysql.tw/2017/04/blog-post.html)

* <p style="font-size:35px">Ref: <a href="http://lagunawang.pixnet.net/blog/post/25455909-mysql-建立foreign-key-%28-innodb-%29-時要注意的一件事">MySQL 建立Foreign Key ( InnoDB ) 時要注意的一件事</a></p>

---

<a href="#/10/27">Portrainer vs Mysql</a>

1. <p class="fragment">Docker到VM的Forward??</p>
1. <p class="fragment">VM到Host的Forward??</p>
1. <p class="fragment">我們有設定Mysql的使用者嗎?</p>

---

目標：

* CSE 8
* SQL injection
* 資安補充資訊

---

### CSE8

---

請大家去 [Netacad CSE](https://1387926.netacad.com/courses/639353/modules) 找到 CSE 8 投影片

---

那就開始來看最後的CSE投影片啦

---

那這學期的CSE課程就到這邊了

---

先跟大家預告一下之後會有 CSE 的 Final Test  
大家要記得做啊~~

---

### SQL injection

---

上禮拜教大家架資料庫  
那這禮拜來跟大家講一下與資料庫安全性的相關事情

---

大家應該都知道SQL是什麼吧?

---

不知道的話也可以到[sqlzoo](https://sqlzoo.net/)練習一下

---

sqlzoo裡面包含了各種常用的語法  
還不熟悉的也可以去看看練習一下

---

那我們今天也要藉由其中的一個練習  
來介紹SQL injection

---

[sqlzoo-SQLI主頁](http://sqlzoo.net/hack/index.html)

---

那就來簡單介紹 SQL injection

---

打開sqlzoo-SQLI其中的一頁[介紹](http://sqlzoo.net/hack/12access.htm)

---

從上面介紹可以知道什麼是最基本的SQLI

---

跟上次XSS要注意的事情一樣:  
不可以相信任何input

---

那來試試看吧

---

[Find a password using SQL Injection](http://sqlzoo.net/hack/16password.htm)

---

單純用網頁的提示的話，你所擁有的就是
* 這四個提示中的正確提示或反向提示
* %: SQL的萬用字元(任意長度)
* _: SQL的萬用字元(單一字元)
* [首頁](http://sqlzoo.net/hack/index.html)也有提示喔!!

---

基本上靠這些就可以找出來啦  
要是你不靠提示，用tool暴力破解我也是沒意見啦...

---

大家記得在作業提交你的做法  
下禮拜把大家的做法整理share給大家

---

題外話

---

接下來基本上有兩個比較大的實作  

---

PT RSE 7,PT Final 1  

---

都會花比較多時間，那大家要記得留些時間啊

---

### 補充資訊

---

助教課也差不多快到尾聲了

---

這禮拜先補充一些有關於資安的東西  
因為畢竟資安教的有點少

---

不過算是給大家資訊啦，不算是教學

---

[Got Your PW](https://gotyour.pw)

---

這個網站算是資安新手入門級網站  
可以稍微看一下/瞭解一下

---

[OWASP](https://www.owasp.org/)  
先放官網讓大家聞香一下

---

[【資安周報第70期】OWASP釋出新十大資安風險，API風險是新威脅](https://www.ithome.com.tw/news/113873)  
放個中文版介紹XD  

---

我們之前教的XSS跟SQL Injection都是在前十名啦

---

### 作業來啦!!!

---

作業的要求：  

1. 找出[sqlzoo injection練習](http://sqlzoo.net/hack/16password.htm)帳號/密碼
2. 列出如何找到的步驟

---

繳交方式：

1. 將作業做成一份文件，上傳到 WM5 的作業十一

---

繳交時間:

下禮拜三TA課前