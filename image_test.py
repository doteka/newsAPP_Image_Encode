import sys
import os
from PIL import Image
import requests
import base64

print(sys.argv)

image_url = ('https://i.ytimg.com/vi/nLyJ_pu7jlU/maxresdefault.jpg')
image = requests.get(image_url).content #서버 응답을 받아 파일내용 획득. content는 응답받은 RawData
filename = os.path.basename(image_url)  #URL에서 파일명 획득. 뒷부분의 python.png란 파일명만 저장
with open(filename, 'wb') as f: #wb: 쓰기 파이러니
    f.write(image)#파일 저장
from IPython.display import Image
Image(filename='maxresdefault.jpg')

mysize = os.path.getsize('maxresdefault.jpg')
print("원본 용량 (Byte) : ",mysize)

from PIL import Image
with Image.open('maxresdefault.jpg') as im:
    im.save('maxresdefault_40.jpg', quality=30) #quality는 jpg포맷만 유효

mysize2 = os.path.getsize('maxresdefault_40.jpg')
print("수정 후 용량 (Byte) : ",mysize2)

fp = open('maxresdefault.jpg',"rb")
data = fp.read()
str_e = base64.b64encode(data).decode('utf-8')
#str = base64.b64decode('maxresdefault.jpg')
#str2 = base64.b64encode('maxresdefault.jpg')
print("link : ", str_e)
#print(str_e)
