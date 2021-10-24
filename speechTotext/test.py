from os import link
import dominate;
from dominate.tags import *;
import speech_recognition as sr;
r = sr.Recognizer()


with sr.Microphone() as source:
    print('Say something')
    audio=r.listen(source)
    print('Done!')
    text=r.recognize_google(audio)
    print(text)



    
