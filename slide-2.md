### 企業資料通訊TA 2
---

<p style="font-size:150px;"> goo.gl/LiNPag </p>

---

目標：

* [PT]設定好一個可以連通的網路

<p style="font-size:11px;margin-bottom: 25px">PS:以後用[PT]來代表與Packet Tracer有關</p>

---

請大家先下載 
* [Netcad 2.3.2.5](https://1387926.netacad.com/courses/639250/pages/launch-chapter-2)

---

前次複習:
* [PT]了解 Packet Tracer 環境
* WAN/LAN
* [PT]嘗試CISCO IOS

---

有瞭解網路與Packet Tracer到底是什麼東西了嗎?

---

請記得Packet Tracer裡頭是模擬真實世界中的東西的

---

所以你要知道現實世界中你也是可能會用到這些router,switch,computer,線材的

---

WAN跟LAN之間的基本差別大家知道了嗎?

---

### [PT]設定好一個可以連通的網路

---

那就先來設定一個網路啦

---

請打開 [Netcad 2.3.2.5](https://1387926.netacad.com/courses/550021/pages/launch-chapter-2) 所附的 pka 檔

---

首先要講一些基本設定，那挑個switch試試

---

接下來的設定，請確定在特權模式(root)，

設定時會先打`configure terminal`/`configure t`來做設定

---

指定名稱為 s1hahaha

```cmd
enable
configure terminal

hostname s1hahaha

exit
show running-config //顯示當前配置
```
---

到這裡是上禮拜的東西，那要從這裡繼續往下做啦

---

保護線路

```cmd
enable
configure terminal

line console 0
password test
login

exit
exit
```
一直離開到最一開始進入，就可以看到要輸入密碼

---

保護特權模式

```cmd
enable
configure terminal

enable password testroot

exit
```
---

檢驗配置文件

```cmd
show running-config
或
show run
```

---

加密密碼

```cmd
config t(等同configure terminal)

enable secret testsecretroot

exit
```

---

將密碼不顯示為明文

```cmd
config t

service password-encryption

exit
```

---

配置一開始就顯示的標語

```cmd
config t

banner motd “travis”

exit
```
---

將配置文件保存到 NVRAM (重開機時就不會要重新設定)

```cmd
show running-config //顯示當前配置
copy running-config startup-config //複製到NVRAM
show startup-config //查看在NVRAM中的設定
```
---

在熟悉基本設定後，  
接下來就是有關於網路之間的設定了

---

### 設定pc1

1. 點選PC1
2. 點擊Desktop
3. 點擊ip configuration
4. 填入 ip: 192.168.1.1 submask:255.255.255.0

---

### 設定pc2

1. 點選PC2
2. 點擊Desktop
3. 點擊ip configuration
4. 填入 ip: 192.168.1.2 submask:255.255.255.0

---

### 設定s1(switch 1)

```
configure terminal
interface vlan 1
ip address 192.168.1.253 255.255.255.0
no shutdown
exit
```

---

### 設定s2(switch 2)

```
configure terminal
interface vlan 1
ip address 192.168.1.254 255.255.255.0
no shutdown
exit
```
---

嘗試看看在 pc1 ping一下 pc2 吧  
或是你可以ping switch，應該都會是連通的狀態  
有任何一個沒有設定，都會有問題的~~

---

### 作業來啦!!!

---

作業的要求：
1. 請使用PC1，並ping PC2，並附上成功的圖給我看

---

繳交方式：

1. 將做完的截圖做成一份文件，上傳到 WM5 的作業二

---

繳交時間:

下禮拜三TA課前