import webbrowser
import time
import speech_recognition as sr;
r = sr.Recognizer()

home_content=""
temp="Say Something"

with open('home.html',"w") as html_file:
    home_content+=f"<html><h1>{temp}</h1></html>"
    html_file.write(home_content)
   
time.sleep(2)
webbrowser.open_new_tab("home.html")

with sr.Microphone() as source:
        audio=r.listen(source)
        print('Done!')
        text=r.recognize_google(audio)
        print(text)
        print("html file created sucessfully")


map={
                "A": "https://icon2.cleanpng.com/20180318/kse/kisspng-american-sign-language-fingerspelling-baby-sign-la-asl-alphabet-cliparts-5aae1abfc36641.4532042815213595518004.jpg",
                "a":"https://icon2.cleanpng.com/20180318/kse/kisspng-american-sign-language-fingerspelling-baby-sign-la-asl-alphabet-cliparts-5aae1abfc36641.4532042815213595518004.jpg",
                "B":"https://www.graphicsfactory.com/clip-art/image_files/image/9/1445259-300_jpg_ASL_sign_language_B_clipart_illustration.jpg",
                "b":"https://www.graphicsfactory.com/clip-art/image_files/image/9/1445259-300_jpg_ASL_sign_language_B_clipart_illustration.jpg",
                "C":"https://www.graphicsfactory.com/clip-art/image_files/image/8/1445268-300_jpg_ASL_sign_language_C_clipart_illustration.jpg",
                "c":"https://www.graphicsfactory.com/clip-art/image_files/image/8/1445268-300_jpg_ASL_sign_language_C_clipart_illustration.jpg",
                "d":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Sign_language_D.svg/1200px-Sign_language_D.svg.png",
                "D":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Sign_language_D.svg/1200px-Sign_language_D.svg.png",
                "e":"https://www.clipartmax.com/png/middle/43-432187_asl-e-sign-language-letter-e.png",
                "E":"https://www.clipartmax.com/png/middle/43-432187_asl-e-sign-language-letter-e.png",
                "f":"https://img.favpng.com/19/19/12/american-sign-language-letter-f-png-favpng-zPdLSuakQsRmVb936NECvdXvs.jpg",
                "F":"https://img.favpng.com/19/19/12/american-sign-language-letter-f-png-favpng-zPdLSuakQsRmVb936NECvdXvs.jpg",
                "g":"https://thumbs.dreamstime.com/z/finger-spelling-alphabet-american-sign-language-asl-letter-g-vector-icon-flat-style-isolated-white-background-179429882.jpg",
                "G":"https://thumbs.dreamstime.com/z/finger-spelling-alphabet-american-sign-language-asl-letter-g-vector-icon-flat-style-isolated-white-background-179429882.jpg",
                "h":"https://www.graphicsfactory.com/clip-art/image_files/image/2/1445312-300_jpg_ASL_sign_language_H_clipart_illustration.jpg",
                "H":"https://www.graphicsfactory.com/clip-art/image_files/image/2/1445312-300_jpg_ASL_sign_language_H_clipart_illustration.jpg",
                "i":"https://previews.123rf.com/images/khalide91/khalide911912/khalide91191200341/135102431-finger-spelling-the-alphabet-in-american-sign-language-asl-the-letter-i-vector.jpg",
                "I":"https://previews.123rf.com/images/khalide91/khalide911912/khalide91191200341/135102431-finger-spelling-the-alphabet-in-american-sign-language-asl-the-letter-i-vector.jpg",
                "j":"https://i.pinimg.com/736x/6a/6a/cc/6a6acc5714548ce3c0fff5c737c7938d--sign-language-download.jpg",
                "J":"https://i.pinimg.com/736x/6a/6a/cc/6a6acc5714548ce3c0fff5c737c7938d--sign-language-download.jpg",
                "k":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sign_language_K.svg/1200px-Sign_language_K.svg.png",
                "K":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sign_language_K.svg/1200px-Sign_language_K.svg.png",
                "l":"https://i.pinimg.com/originals/e6/da/68/e6da68b1485d2908b6c5ba264d2d8eff.jpg",
                "L":"https://i.pinimg.com/originals/e6/da/68/e6da68b1485d2908b6c5ba264d2d8eff.jpg",
                "m":"https://thumbs.dreamstime.com/z/finger-spelling-alphabet-american-sign-language-asl-letter-m-vector-finger-spelling-icon-flat-style-isolated-white-179430010.jpg",
                "M":"https://thumbs.dreamstime.com/z/finger-spelling-alphabet-american-sign-language-asl-letter-m-vector-finger-spelling-icon-flat-style-isolated-white-179430010.jpg",
                "N":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sign_language_N.svg/1200px-Sign_language_N.svg.png",
                "n":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sign_language_N.svg/1200px-Sign_language_N.svg.png",
                "o":"https://c8.alamy.com/comp/K76NRX/sign-language-and-the-alphabetthe-letter-o-K76NRX.jpg",
                "O":"https://c8.alamy.com/comp/K76NRX/sign-language-and-the-alphabetthe-letter-o-K76NRX.jpg",
                "p":"https://www.pngfind.com/pngs/m/433-4334318_p-asl-png-download-sign-language-alphabet-p.png",
                "P":"https://www.pngfind.com/pngs/m/433-4334318_p-asl-png-download-sign-language-alphabet-p.png",
                "q":"https://i.pinimg.com/originals/fa/0a/25/fa0a255f495c3e47e4f58423cba03f33.jpg",
                "Q":"https://i.pinimg.com/originals/fa/0a/25/fa0a255f495c3e47e4f58423cba03f33.jpg",
                "R":"https://images.all-free-download.com/images/graphiclarge/sign_language_r_clip_art_19716.jpg",
                "r":"https://images.all-free-download.com/images/graphiclarge/sign_language_r_clip_art_19716.jpg",
                "S":"https://i.pinimg.com/736x/cd/e0/23/cde023b27bd44a7424db9d189da16586--name-letters-american-sign-language.jpg",
                "s":"https://i.pinimg.com/736x/cd/e0/23/cde023b27bd44a7424db9d189da16586--name-letters-american-sign-language.jpg",
                "t":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sign_language_T.svg/1552px-Sign_language_T.svg.png",
                "T":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sign_language_T.svg/1552px-Sign_language_T.svg.png",
                "u":"https://www.clipartmax.com/png/middle/99-994175_open-sign-language-letter-u.png",
                "U":"https://www.clipartmax.com/png/middle/99-994175_open-sign-language-letter-u.png",
                "v":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sign_language_V.svg/494px-Sign_language_V.svg.png",
                "V":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sign_language_V.svg/494px-Sign_language_V.svg.png",
                "W":"https://static.thenounproject.com/png/251874-200.png",
                "w":"https://static.thenounproject.com/png/251874-200.png",
                "x":"https://www.graphicsfactory.com/clip-art/image_files/image/7/1445457-300_jpg_ASL_sign_language_X_clipart_illustration.jpg",
                "X":"https://www.graphicsfactory.com/clip-art/image_files/image/7/1445457-300_jpg_ASL_sign_language_X_clipart_illustration.jpg",
                "y":"https://i.ytimg.com/vi/spieu1DHQPQ/maxresdefault.jpg",
                "Y":"https://i.ytimg.com/vi/spieu1DHQPQ/maxresdefault.jpg",
                "Z":"https://static.thenounproject.com/png/253039-200.png",
                "z":"https://static.thenounproject.com/png/253039-200.png",

            }

content=""
for element in text:
    print(element)
    if element.isalpha():
        content+=f"<img src='{map.get(element)}' / height=100px / width=100px />"
html_content=f"<html>{content}</html>"

with open('index.html',"w") as html_file:
    html_file.write(html_content)
    print("html file created sucessfully")

time.sleep(2)
webbrowser.open_new_tab("index.html")