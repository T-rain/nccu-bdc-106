### 企業資料通訊TA 10

---

<p style="font-size:150px;"> ppt.cc/fl8pwx </p>

---

請下載 [Netacad BCD2/RSE 5.3.1.2](https://1387926.netacad.com/courses/639365/pages/launch-chapter-5?module_item_id=37983007)

---

前次複習:
* Docker
* Portrainer

---

<a href="#/9/16">Docker</a>

1. <p class="fragment">Docker是什麼?</p>
2. <p class="fragment">VM又是什麼?與Docker的差別?</p>

---

<a href="#/9/37">Portrainer</a>

1. <p class="fragment">Portrainer是什麼?</p>
2. <p class="fragment">Portrainer首頁上有哪四個元件?</p>
3. <p class="fragment">分別有什麼功用呢?</p>

---

目標：

* [PT] RSE 5.3.1.2
* CSE 5
* Install Mysql with Portrainer

---

請打開 [Netacad BCD2/RSE 5.3.1.2](https://1387926.netacad.com/courses/639365/pages/launch-chapter-5?module_item_id=37983007)

---

來練習設定一下 Switch

---

請依照要求完成所有步驟

---

Requirements
* Configure S1 with the following initial settings:
    ```
    enable
    config t
    ```
    - Hostname  
    ```
    hostname S1
    ```
    - Banner that includes the word warning
    ```
    banner motd #warning#
    ```
    - Console port login and password cisco
    ```
    line con 0
    password cisco
    login
    exit
    ```

---

* Configure S1 with the following initial settings:
    - Encrypted enable password of class

    ```
    enable secret class
    ```
    - Encrypt plain text passwords

    ```
    service password-encryption
    ```
    - Management interface addressing

    ```
    int vlan 1
    ip address 10.10.10.2 255.255.255.0
    no shutdown
    exit
    ```

---

* Configure SSH to secure remote access with the following settings:
    - Domain name of cisco.com
    ```
    ip domain-name cisco.com
    ```
    - RSA key-pair parameters to support SSH version 2
    ```
    crypto key generate rsa
    yes
    1024
    ```
    - Set SSH version 2
    ```
    ip ssh version 2
    ```
---
* Configure SSH to secure remote access with the following settings:
    - User admin with secret password ccna
    ```
    username admin privilege 15 secret ccna
    ```
    - VTY lines only accept SSH connections and use local login for authentication
    ```
    line vty 0 15
    transport input ssh
    login local
    exit
    ```

---

* Configure the port security feature to restrict network access:
    - Disable all unused ports.
    ```
    int range fa0/3-24, g0/1-2
    shutdown
    exit
    ```
    - Set the interface mode to access.
    ```
    int range fa0/1-2
    switchport mode access 
    ```
    - Enable port security to allow only two hosts per port.
    ```
    switchport port-security
    switchport port-security maximum 2
    ```
---

* Configure the port security feature to restrict network access:
    - Record the MAC address in the running configuration.
    ```
    switchport port-security mac-address sticky 
    ```
    - Ensure that port violations disable ports.
    ```
    switchport port-security violation shutdown 
    no shutdown
    ```
---

CSE 5

---

請大家去 [Netacad CSE](https://1387926.netacad.com/courses/639353/modules) 找到 CSE5 投影片

---

那就開始看投影片啦

---

Ref: [資料庫的完整性規則](https://www.mysql.tw/2017/04/blog-post.html)

---

看完這個資料庫投影片，有沒有手癢想要實作一下啊

---

那就來試試看吧

---

先開啟portainer

---

理論上你沒有加restart的話  
portainer是不會自己重新啟動的  
所以我們要先找到該container，並啟動它

---

忘記docker container id 的，可以下

```
docker ps -a
```
來看所有的container(沒有被刪掉的)

---

可以找到狀態非 up 的 portrainer container  
並找到其id或name  
接著用下面指令啟動該container

```
docker start id或name
```

---

接著該做的設定就跟上禮拜一樣啦

---

那打開 portainer 吧

---

請至portainer -> App Templates

---

找到 mysql template

---

設好container name,root password

---

network用預設的bridge  
Access Control的部分用預設的Adminsitrators  
當然用Restricted會更安全  

---

按下 Show advance options

---

設定好port forwarding(docker host(Ubuntu)對上其container)

---

按下 Deploy the container

---

跑完後回到 Container List  
應該可以找到自己設定的那個 mysql container!!  
順便截圖當作業啊~~

---

若在virtual box 裡頭做的話  
可以在virtual box再設一層port forwarding  
讓裝在 windows 電腦上的 GUI 介面可以連進去  
(同portrainer)

---

Mysql GUI client

---

* windows: DBeaver/HeidiSQL
* mac: Sequel Pro (非常推)/DBeaver
* linux: mycli (friendly指令介面)/DBeaver

---

要是你是用 DBeaver  
記得選 Mysql 3.X 這個 connection type

---

連線進去後開始使用吧!!

---

### 作業來啦!!!

---

作業的要求：  

1. 5.3.1.2截圖
2. portrainer 含有 mysql 的截圖

---

繳交方式：

1. 將做完的截圖做成一份文件，上傳到 WM5 的作業十

---

繳交時間:

下禮拜三TA課前