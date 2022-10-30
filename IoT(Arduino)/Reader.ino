#include <AddicoreRFID.h>
#include <SPI.h>
#include <ESP8266WiFi.h>
#define uchar   unsigned char
#define uint    unsigned int
#define location "AAOC" 
//4 bytes tag serial number, the first 5 bytes for the checksum byte
uchar serNumA[5];
 
uchar fifobytes;
uchar fifoValue;
 
AddicoreRFID myRFID; // create AddicoreRFID object to control the RFID module
 
/////////////////////////////////////////////////////////////////////
//set the pins
/////////////////////////////////////////////////////////////////////
const int chipSelectPin = 10;
const int NRSTPD = 9;
 
//Maximum length of the array
#define MAX_LEN 16
 
void setup() {                
   Serial.begin(9600);                        // RFID reader SOUT pin connected to Serial RX pin at 9600bps 
  
  // start the SPI library:
  SPI.begin();
   
  pinMode(chipSelectPin,OUTPUT);              // Set digital pin 10 as OUTPUT to connect it to the RFID /ENABLE pin 
    digitalWrite(chipSelectPin, LOW);         // Activate the RFID reader
  pinMode(NRSTPD,OUTPUT);                     // Set digital pin 10 , Not Reset and Power-down
    digitalWrite(NRSTPD, HIGH);
 
  myRFID.AddicoreRFID_Init();  
}
 
void loop()
{
  uchar i, tmp, checksum1;
  uchar status;
  uchar str[MAX_LEN];
  uchar RC_size;
  uchar blockAddr;  //Selection operation block address 0 to 63
  String mynum = "";
  str[1] = 0x4400;


    //Find tags, return tag type
    status = myRFID.AddicoreRFID_Request(PICC_REQIDL, str); 
    if (status == MI_OK)
    {
          Serial.println("RFID tag detected");
            Serial.print(str[0],BIN);
          Serial.print(" , ");
            Serial.print(str[1],BIN);
          Serial.println(" ");
    }
 
    //Anti-collision, return tag serial number 4 bytes
    status = myRFID.AddicoreRFID_Anticoll(str);
    if (status == MI_OK)
    {
      checksum1 = str[0] ^ str[1] ^ str[2] ^ str[3];
      Serial.println("The tag's number is  : ");
      //Serial.print(2);
      Serial.print(str[0]);
      Serial.print(" , ");
      Serial.print(str[1],BIN);
      Serial.print(" , ");
      Serial.print(str[2],BIN);
      Serial.print(" , ");
      Serial.print(str[3],BIN);
      Serial.print(" , ");
      Serial.print(str[4],BIN);
      Serial.print(" , ");
      Serial.println(checksum1,BIN);
       
      //이 아래 코드를 수정하여 자기 카드인지 아닌지 확인합니다.
      
      Serial.println();
      delay(1000);
    }
    
    WiFiClient client;
    if (!client.connect("localhost", 8080)) {
    Serial.println("connection failed");//서버 접속에 실패
    return;
    } else {
     client.write(location);
     String recevbline = client.readStringUntil('\r');
     Serial.println(line);
    }   
    myRFID.AddicoreRFID_Halt();     
}