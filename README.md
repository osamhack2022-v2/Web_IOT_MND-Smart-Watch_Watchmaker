![MSW](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/91794090-3af4-44e4-a987-7aab365e0ac6/2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221021T002915Z&X-Amz-Expires=86400&X-Amz-Signature=4f969023bcb0361ea3f9fa789ac91b43b15d150568098d829780c8407d7d0072&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%222.png%22&x-id=GetObject)

# ❤MSW 프로젝트 소개

**국군 장병들의 신속한 상황 파악을 위한 스마트워치와 이를 활용한 부대 인원 관리 웹 플랫폼**
- **심박/산소포화도를 활용하여 실시간 병력 관리**
- 부대별 생활관 인원 현황 확인의 어려움을 극복
- 각 시설 이용/출입시 출입비콘의 활용
- 스마트워치로 각종 데이터 수신 및 송신하여 사용자는 편의 제공을 관리자는 웹으로 쉽게 인원 확인/관리




# 💡기능 설명

### 웹 플랫폼
- 각 부대 전력 시각화
    - 전시 상황시 지휘체계
    - 스마트워치의 기능으로 부대별 인원 확인
    - 훈련/실제상황 발생시 심박수 데이터로 실시간 인원 및 위급상황자 확인
- 인원 현황 대시보드
    - 각 병사 위치 확인 (출근, 퇴근, 격리, 시설이용 등)
    - 휴가 및 외출 인원(군번, 출타시간, 휴가기간 등) 
- 전달 사항 / 특이사항
- 관리자 로그인/로그아웃 기능


### Iot(아두이노)
스마트워치 하드웨어 구성(심박수, NFC, 디스플레이, 배터리, 보드 등)
RFID/NFC 리더기(보드, RFID,NFC 리더)

- **스마트워치**
1. 시계 기능
2. 심박수 및 혈중산소포화도 측정 및 실시간 전송
3. NFC/RFID 
4. 특이사항보고

- **출입리더기**
1. RFID/NFC 리더 후 웹플랫폼 데이터 전달
2. 디스플레이(생략가능)



# 컴퓨터 구성 / 필수 조건 안내(Prerequisites)
## Browser
| <img src="https://user-images.githubusercontent.com/55467050/137036906-a6c0f879-5b51-49d3-8e02-d01994f64d18.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/55467050/137036913-033a988f-b9c9-4980-8540-5994cfa7e465.jpg" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/55467050/137036914-1a1f080e-9fb3-4b29-a143-517be979e78f.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/55467050/137036916-91328771-5dd5-41fb-a842-8562db3c480c.png" alt="Firefox" width="16px" height="16px" /> Firefox | <img src="https://user-images.githubusercontent.com/55467050/137036911-ccb70714-15fc-46fb-a074-19bb769727e9.png" alt="IE" width="16px" height="16px" /> Internet Explorer |
| :---: | :---: | :---: | :---: | :---: |
| Yes | Yes | Yes | Yes | 11+ |



## Server
| <img src="https://user-images.githubusercontent.com/71062855/197093088-35197723-a3ee-4f42-b4b2-390cfbbba466.png" alt="vue" width="16px" height="16px" /> Vue | <img src="https://user-images.githubusercontent.com/71062855/197093590-5aea074d-8fe6-4106-a0f9-9a14f653aa4d.png" alt="nodejs" width="16px" height="16px" /> Node.js | <img src="https://user-images.githubusercontent.com/71062855/197093406-c0701c00-d809-4168-b0ff-1b67b5fd6b0e.png" alt="express" width="16px" height="16px" /> Express | <img src="https://user-images.githubusercontent.com/71062855/197093394-95860fc4-982e-461b-b4c9-28bc2d6ba299.png" alt="sqlite" width="16px" height="16px" /> SQLite |
| :---: | :---: | :---: | :---: |
| 3.0.0+ | 18.9.1+ | 5+ | 3.19.3+ |

# 🔗시스템 구성도
![system](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/58843f95-68af-40dd-8f5c-984fd4a9673d/a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221021T014448Z&X-Amz-Expires=86400&X-Amz-Signature=a30711641c0c065c705441d559d5f676eb6003f6435cd51c1f8d45901a88368f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22a.png%22&x-id=GetObject)

# 프로젝트 사용법(Getting Started)  
이어지는 설치안내에 따라 패키지를 먼저 설치한 뒤 아래 커맨드를 입력합니다.  

**백엔드 구동**  
/WEB(BE) 디렉터리에서 ` npm run dev `

**프론트엔드 구동**  
/WEB(FE) 디렉터리에서 ` npm run serve `


# 📖설치 안내(Installation Process)

**node.js LTS 버전 설치**  
https://nodejs.org/en/

**이전 버전의 node.js인 경우 LTS 버전으로 업데이트하기**
```
npm install -g n
n lts
```

**/WEB(BE) 디렉터리에서 nodejs 패키지 설치**  

```
npm install
```
<!--
npm install -g express-generator
npm install sqlite3
npm install -g nodemon --save-dev
-->

**/WEB(FE) 디렉터리에서 nodejs 패키지 설치**  

```
npm install 
```
<!--
npm i @vue/cli-service 
npm i @vue/cli-plugin-babel 
npm i @vue/cli-plugin-eslint 
npm install -g sass-migrator
npm install vue-router --save
npm install axios --save
-->

# ✏기술 스택(Technique Used)

### Front-End
|<img src="https://img.shields.io/badge/vue-3FB27F?style=for-the-badge&logo=vue.js&logoColor=white">|<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">|<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">|<img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">|
|:---:|:---:|:---:|:---:|


### Back-End
|<img src="https://img.shields.io/badge/sqlite-4479A1?style=for-the-badge&logo=sqlite&logoColor=white">|<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">|<img src="https://img.shields.io/badge/express-F8F8F8?style=for-the-badge&logo=express&logoColor=black">|
|:---:|:---:|:---:|


### IoT
|<img src="https://img.shields.io/badge/arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white">|
|:---:|




# 😀팀정보(Team Information)

|이름|역할|E-Mail|Github|
|:---:|:---:|:---:|:---:|
|최수호| PM, 프론트/백엔드 개발|snp.sanso@gmail.com|[![Github Badge](https://img.shields.io/badge/Github-181717?style=flat&logo=Github&logoColor=white)](https://github.com/s4nso)
|윤지성| 프론트/백엔드 개발|silanon65@gmail.com|[![Github Badge](https://img.shields.io/badge/Github-181717?style=flat&logo=Github&logoColor=white)](https://github.com/jise8893)
|박원| DB백엔드 개발|myself9875@gmail.com|[![Github Badge](https://img.shields.io/badge/Github-181717?style=flat&logo=Github&logoColor=white)](https://github.com/1park)



# 📜저작권 및 사용권 정보(Copyleft / End User License)
- [MIT LICENSE](https://github.com/osamhack2022/Web_Iot_Cloud_MND-Smart-Watch_Watchmaker/blob/main/License)
