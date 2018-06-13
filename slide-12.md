### 企業資料通訊TA 12

---

<p style="font-size:150px;"> ppt.cc/fl8pwx </p>

---

前次複習:  
* SQL Injection

---

<a href="#/11/13">SQL Injection</a>

1. <p class="fragment">SQL?</p>
1. <p class="fragment">Injection?</p>
1. <p class="fragment">最經典的例子?</p>
1. <p class="fragment">'or''='</p>

---

目標：

* RSE CH7 PT

---

在一開始先提醒大家幾件事:

---

[CSE Final Quiz](https://1387926.netacad.com/courses/550024/quizzes)  
有佔2%的分數，大家要記得做啊

---

CSE有好幾個quiz，只有final的部分會計分  
其他的做為練習

---

CSE Final Quiz 共可以做兩次  
每次60分鐘，共開放兩個禮拜

---

接著是這禮拜要講的  

[RSE Chapter 7 Practice Skills Assessment - PT](https://1387926.netacad.com/courses/639365/assignments/12763458) 

也要記得做啊~~

---

### RSE CH7 PT

---

請看小視窗的題目  
第一點在做環境介紹，大家要看一下  
這次的設定你會發現都不能直接點機器  
請記得用之前的老方法接console線啊

---

* 2.Configure Mgmt and HQ with all initial confi  
-gurations that you have learned in the course so far:

    - Configure the switch hostname: Mgmt.
    - Configure the router hostname: HQ.

```
hostname XXX
```

---

* Configure Mgmt and HQ with all initial confi...
    - Prevent the router from attempting to resolve unrecognized CLI entries as domain names.

    ```
    no ip domain-lookup
    ```

    - Protect device configurations from unauthorized access with the encrypted password cisco.

    ```
    enable secret cisco
    ```
---

* Configure Mgmt and HQ with all initial confi...

    - Secure the router and switch console and remote access lines with password cisco.
    
    ```
    line console 0
    password cisco
    login
    line vty 0 15
    password cisco
    login
    exit
    ```

---

* Configure Mgmt and HQ with all initial confi...
    - Prevent all passwords from being viewed in clear text in device configuration files.
    ```
    service password-encryption 
    ```

---

* Step 3: Configure VLANs  
Configure four VLANs on the Mgmt, Acct, and HR switches using the values in the Addressing Table.

    ```
    # XXX是根據你的Addressing Table設定的
    enable
    config t
    vlan 20
    name XXX
    vlan 40
    name XXX
    vlan 60
    name XXX
    vlan 88
    name XXX
    # 題目說要做三個，請記得做三次啊
    ```
---

* Step 4: Assign Switch Interfaces to VLANs  
Configure FastEthernet interfaces on Acct and HR according to the following guidelines:
```txt
Interfaces Fa0/1 - Fa0/5 are assigned to VLAN 20  
Interfaces Fa0/6 - Fa0/10 are assigned to VLAN 40  
Interfaces Fa0/11 - Fa0/15 are assigned to VLAN 60  
```

```
int range fa0/1-5
switchport mode access 
switchport access vlan 20
int range fa0/6-10
switchport mode access 
switchport access vlan 40
int range fa0/11-15
switchport mode access 
switchport access vlan 60
exit
```

---

* Step 5: Configure the Switches for Remote Management
    - Configure the SVIs of the Mgmt, Acct, and HR switches using the information in the VLAN and Addressing Tables.  
    - Configure the IP address for the management VLAN and the default-gateway IP address.  
    - Configure the SVIs so that they will be reachable by devices on other networks after the network has been fully configured.

---

白話講的意思就是請看上面的Addressing Tables  
來為三個switches做ip address,default-gateway的設定   
ip請挑可用範圍的，一樣是有三個switch所以做三次

```
enable
config t
int vlan 88 
ip address 172.16.88.XXX 255.255.255.0
no shutdown
exit
ip default-gateway 172.16.88.254
```

---

* Step 6: Configure VLAN Trunking  
    - Configure VLAN trunking between the Mgmt, Acct, and HR switches.  
    - Manually configure the trunking ports on the Mgmt, Acct, and HR switches.  
```
int g0/1
switchport mode trunk
int f0/23
switchport mode trunk
int f0/24
switchport mode trunk
```
請依照每台所認識的VLAN才做設定

---

* Step 7: Configure inter-VLAN Routing  
Use the information ... configure inter-VLAN routing on HQ according ...
    - Configure inter-VLAN routing among VLANs 20, 40, 60 and 88 through Gi0/0 subinterfaces.
    ```
    int g0/0.20
    encapsulation dot1Q 20
    ip address 172.16.20.254 255.255.255.0
    int g0/0.40
    encapsulation dot1Q 40
    ip address 172.16.40.254 255.255.255.0
    int g0/0.60
    encapsulation dot1Q 60
    ip address 172.16.60.254 255.255.255.0
    int g0/0.88
    encapsulation dot1Q 88
    ip address 172.16.88.254 255.255.255.0
    int g0/0
    no shutdown
    ```
---

Ref: [在Cisco設備上的VLAN 設定指令](http://www.netadmin.com.tw/article_content.aspx?sn=0911260001)

---

* Step 7: Configure inter-VLAN Routing  
Use the information ... configure inter-VLAN routing on HQ according ...

    - Configure inter-VLAN routing for VLANs 250 and 254 through Gi0/1 subinterfaces.
    ```
    int g0/1.250
    encapsulation dot1Q 250
    ip address 172.16.250.254 255.255.255.0
    int g0/1.254
    encapsulation dot1Q 254
    ip address 172.16.254.254 255.255.255.0
    int g0/1
    no shutdown
    ```

---

* Step 8: Configure Host Addressing
    - Address the hosts according to the values in the addressing table. 
    - Use a DNS server address of 172.16.254.252. 
    - All hosts should be able to reach the www.cisco.com server.

---

白話解釋:請幫最下方六台電腦設定相對應的  
ip/subnet mask/default gateway/dns  
ip,default gateway一樣是參考addressing table

* ip: 172.16.20/40/60.5/6
* subnet mask: 255.255.255.0
* default gateway: 172.16.20/40/60.254
* dns: 172.16.254.252

---

* Step 9: Configure Access Control Lists  
You will configure two access control lists on the HQ router. The ACL specifications are as follows:

---

* A. Restrict access to the vty lines on HQ.
    - Create a numbered standard ACL using number 10. Be sure that you use this number exactly as it appears in these instructions.
    - Allow only hosts on the HR VLAN to access the vty lines of HQ.
    - No other internal and Internet hosts should be able to access the vty lines of HQ.
    - Your solution should consist of a single ACL statement.

---

* A. Restrict access to the vty lines on HQ.
    ```
    access-list 10 permit 172.16.60.0 0.0.0.255 
    line vty 0 15
    access-class 10 in
    ```

---

* B. Restrict access to the internal web server
    - Create a named standard ACL using the name INT-WEB. Be sure that you use this name exactly as it appears in these instructions.
    - Allow hosts on the Acct and HR VLANs to reach the internal administrative web server at www.int.com.
    - No other internal and Internet hosts should be able to access the internal administrative web server.
    - Your solution should consist of two ACL statements.

---

* B. Restrict access to the internal web server
    ```
    ip access-list standard INT-WEB
    permit 172.16.40.0 0.0.0.255
    permit 172.16.60.0 0.0.0.255
    int g0/1.250
    ip access-group INT-WEB out
    ```

---

這禮拜的PT上完啦，下禮拜還會再來一次~

---

那畢竟接近學期末了，助教又想不到什麼作業可以出

---

來幫我填個問卷好了XD  
[BDC_TA_FEEDBACK](http://lsurvey.nccu.edu.tw/limesurvey/index.php/696579?lang=zh-Hant-TW)  
(填完之後就知道作業是什麼啦)

---

### 作業來啦!!!

---

作業的要求：  

1. 請找出作業是什麼並做完

---

繳交方式：

1. 將作業做成一份文件，上傳到 WM5 的 作業十二

---

繳交時間:

下禮拜三TA課前