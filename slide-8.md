### 企業資料通訊TA 8

---

<p style="font-size:150px;"> ppt.cc/fl8pwx </p>

---

請大家先到
* [Netacad BCD2 2.2.2.4](https://1387926.netacad.com/courses/639365/pages/launch-chapter-2?module_item_id=44092867)

下載pka

---

前次複習:
* Virtual Box

---

<a href="#/7/8">Virtual Box</a>

1. <p class="fragment">Virtual Box 是什麼軟體? </p>
2. <p class="fragment">它有什麼用途呢? </p>
3. <p class="fragment">所以我在virtual box上面安裝病毒會影響我的主機嗎?</p>
4. <p class="fragment">Host vs Guest</p>

---

目標：

* Static Route 設定
* CSE 7
* Install SSH Server

---

那我們就來練習一下設定 static route

---

點開 R1，先輸入

```
show ip route
```
來看一下當前route的設定

---

```
ip route [destination_network] [destination_network_netmask] [該往哪裡送(下一個節點/介面)]
```

---

Route 1

```yaml
enable
config t
ip route 172.31.0.0 255.255.255.0 172.31.1.193
ip route 172.31.1.196 255.255.255.252 172.31.1.193
ip route 172.31.1.128 255.255.255.192 172.31.1.193

```

---

Route 2

```yaml
enable
config t
ip route 172.31.1.0 255.255.255.128 172.31.1.194
ip route 172.31.1.128 255.255.255.192 172.31.1.198

```

---

來換個口味，使用 default route  

Route 3

```yaml
enable
config t
ip route 0.0.0.0 0.0.0.0 serial 0/0/1

```

---

CSE 7

---

請大家去 [Netacad CSE](https://1387926.netacad.com/courses/639353/modules) 找到 `CSE7` 投影片

---

那就開始看投影片啦

---

在安裝完 Ubuntu 16.04 之後還應該要做什麼?  
[Initial Server Setup with Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)

---

Hardware Monitor:  
[netdata](https://github.com/firehol/netdata)

---

Install SSH Server

---

在要控制的電腦安裝了 SSH Server  
我們就可以透過 ssh 遠端控制一台電腦

---

那來安裝吧!!!

---

以下開始為使用Ubuntu作為範例  
其它作業系統就請google一下  

---

```
sudo apt-get update //更新
sudo apt-get install openssh-server //安裝ssh-server
```

這樣子就安裝成功了  

---

當然可能會遇到一些其他問題  
也希望大家能夠試著去解決  
或是可再貼問題圖片給助教

---

不過安裝完還是要改一下設定

---

更改設定檔(/etc/ssh/sshd_config)

```
sudo gedit /etc/ssh/sshd_config #GUI記事本
```

或者

```
sudo vim /etc/ssh/sshd_config #神之編輯器
```

---

確認這個文件檔中

```YAML
#/etc/ssh/sshd_config的文件內容
PermitRootLogin no  #禁止Root
PasswordAuthentication yes #開啟密碼登入

```

請注意該註解/不該註解的地方

---

重新啟動ssh server

```Bash
sudo systemctl restart ssh
```

沒有錯誤訊息的話，設定就成功了

---

我這邊做沒有遇到防火牆的問題  
印象是16.04防火牆沒有預設安裝  
[How To Set Up a Firewall with UFW on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-16-04)

---

在這邊要記得的是，要是你沒辦法連到自己的服務  
可能是防火牆沒開相對應的port，那記得去打開

---

有人是設定檔沒寫好或是之後的Port forward問題  
這些都可能會造成問題

---

請查看自己的問題log，並google一下，也可以問助教

---

來用ssh client 連線到 ssh server吧!!

---

windows下可以使用 putty / cmder full version  
進行連線

---

mac應該已經安裝好了，linux的話安裝完ssh就有了

---

ssh client的指令：

```Bash
ssh -v // 檢查版本(用來檢查有無安裝)
ssh [要操控的主機使用者名稱]@[要操控的主機ip] -p [要操控的主機ssh server所開的port]

```

---

舉個例子：  
在這裡的話要是你有一台機器是擁有public ip的，例如140.119.168.10，並在上頭架設ssh server，使用者名稱為nccu，用預設的port 22

---

那我們可以對它進行連線，下指令為
```
ssh nccu@140.119.168.10 -p 22

```
PS: -p 若沒有加的話即用ssh預設的port 22

---

實際上，若你直接裝在一台擁有public ip 的主機  
上的話是完全不用設定Port Forwarding的  
但是請注意資安問題!!!  
(就是在說大Lab的主機啦，windows遠端桌面  
預設port 3389 大家都知道好嘛XD)  

---

通常直接裝在正常主機會做以下事情(擇一或都做)
* 放在 router/switch 之後
* 改變服務原本的port
* 加防火牆(像ubuntu就是ufw)

---

那拉回來，在這裡我們將ssh server架在guest上  
先找到 guest 的 ip  
所以原本應該要打的指令應該是

```
ssh travis@10.0.2.15 -p 22

```

---

在 Host 的 ssh client 試了一下...你騙我啊...

---

不不不，因為10.0.2.15是guest主機的虛擬網卡ip  
所以並不能這樣做

---

在這裡可以稍微提到一下 virtual box 裡頭網卡的  
橋接方式有好幾種，NAT,Bridge等等...

---

我們現在操作的是預設的，用NAT網卡橋接方式

---

而在這次練習中，我們選擇開一個虛擬機  
並利用虛擬機所提供的 Port Forwarding  
將連到host的某個port指定到guest的某個port

---

Port Forwarding 指的是連接阜轉送  
若你主機接在Router之後也要做這樣的設定

---

來設定Port Forwarding吧  

---

先來看實際操作

---
Ref:[[VirtualBox]使用Port forwarding連上NAT模式下的 VM](https://ephrain.net/virtualbox-%E4%BD%BF%E7%94%A8-port-forwarding-%E9%80%A3%E4%B8%8A-nat-%E6%A8%A1%E5%BC%8F%E4%B8%8B%E7%9A%84-vm/)

---

Host ip 留空或127.0.0.1(本機)  
Guest ip 也留空(讓virtual box自己找)

---

Host的port自己設 (我設定為2222)    
Guest port 設定為22

---

Guest port 設定為22的原因是我們在  
Ubuntu底下架設的SSH Server所開啟的port在22  
可以從sshd_config看到這些設定

---

Port forwarding的功用：   
將對 host(127.0.0.1)的 自定義port(我這裡設為2222)  
轉發到 guest(10.0.2.15)的 port 22  

---

127.0.0.1:2222 -> 10.0.2.15:22  
PS: 2222是自己決定的，看你要設哪個port都可以(1024 – 65535)，不要衝突就好

---

要是還是不懂的話  
可以把 Guest 當成是一個小港口  
這小港口有6萬多個對外的通道(Port)  
我們把服務開在 22 這個通道上

---

但是我們還是無法進入這個小港口  
因為我們其實只能進入所謂的  
真。對外的港口(Host)  

---

所以我們需要在外港(Host)中指定一個通道(Port)  
讓外界可以透過外港的通道，進入小港口的通道

---

<p style="font-size:35px">127.0.0.1(外港):2222(通道) -> 10.0.2.15(小港口):22(通道)</p>
這就是我們設的

---

設完 Port Forward 之後  
打開host的ssh client進行連線

---

所以我們打的指令為

```
ssh your_user_name@127.0.0.1 -p 2222

```

---

這樣你知道為什麼要這樣打與這樣設定  
才可以連線進去?

---

以下是一些Tips可以幫助你們除錯

---

看網路的相關設定指令：  
windows: ipconfig  
mac/linux: ifconfig

---

看開啟的進程中有沒有ssh服務(linux)

```
ps aux | grep ssh
```

---

[鳥哥-linux下的檔案管理權限](http://linux.vbird.org/linux_basic/0220filemanager.php)

---

### 作業來啦!!!

---

作業的要求：  

2. 作業 2.2.2.4 成功完成

---

繳交方式：

1. 將做完的截圖做成一份文件，上傳到 WM5 的作業八

---

繳交時間:

下禮拜三TA課前