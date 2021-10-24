# LingoAlly

Prototype: https://infinite-brook-23552.herokuapp.com/
## Inspiration
Over 5% of the world’s population  – 432 million adults and 34 million children have impaired hearing. For deaf people, access to sign language is key to breaking down communication barriers and participating in society just like anyone else. The right of deaf people to get equal access for schools, medical treatment, or courts hinges on their opportunity to use their language, and the ability of their loved ones, educators, and hospital staff to provide them equal opportunities majorly depends upon efficient usage of Sign Language. Therefore, an accessible solution available in virtual environment for enabling the hard-of-hearing individuals to learn sign language: a key step towards accessing equal opportunities is needed.
Also, As many as 90 percent of deaf children are born to hearing parents, which can make learning sign language a family affair. We wanted to develop a solution to ease this process and make learning ASL a fun team activity. Parents and Guardians who learn ASL along with their child often find it easier to communicate on a deeper level with their deaf child. 
Today more than ever it’s common for educators to have children who are deaf or hard of hearing in their classroom. Many opt to learn ASL for this reason alone, and LingoAlly provides a hassle-free experience for them to gain proficiency in this language.
This inspired us to develop LingoAlly- a tool that not only allows deaf people to learn sign language through features for practicing signs, practicing communication with ASL, quizzes, etc. but also connect and interact with a wider community, learn from their experiences and share their opinions with them. We aim to empower the users financially by making them aware of the jobs so that they never miss out on opportunities, and simultaneously enhance workplace **diversity and inclusion** and help them to identify their rights by scraping out the best of the blogs from the internet. Users can also volunteer through our website or connect with the volunteers directly!

## What it does
#### LingoAlly -a complete Solution for the Empowerment of the hard-of-hearing Community!
The features of our app include:
#### Practice ASL alphabets:
The starting point of any language- mastering alphabets. We trained our model using Tensoreflow.js and used HandPose and Fingerpose to provide the user a real-time video interface that detects the letter they are signing and enables them to master letters step by step. 
#### Learn Essential Everyday Signs
Not only alphabets but knowing everyday signs is the key to communicating using ASL. This website has a collection of numerous gifs along with step-by-step instructions to help you learn everyday signs and Start Communicating!
#### Quizzes!
No learning Experience is Complete without a quiz to check your knowledge. Our app provides a short scored quiz to verify what you have learned!
#### ASL to English Translator
Type using ASL signs and get results in English. Master typing with ASL signs, and translate to English text!
#### English to ASL translator
Type in English and get results in ASL immediately!
### Transcribe Audios
Enter the URL of any audio File and get Transcripts in ASL. This has been achieved using *AssemblyAI API*.
#### Speech to text!
Speak and get ASL transcripts in real-time. The script for this feature is developed in Python. 
#### Communicate with ASL:
Signal any signs at the camera and get results of what you are trying to speak! This helps users master communication with ASL which is an essential part of everyday life!
#### Spaces:
Spaces are a feature to connect All users and help them interact, for groups, share experiences and learn together! The users can create new Spaces, or hop into existing ones. Once inside a space, they can create posts and interact with other users upon a post. Posts can range from doubts to advice!  Other users are free to comment on the post and Openly voice their opinions.
#### Job Opportunities:
LingoAlly enables all users to access job opportunities in their Area! This has been achieved using Google Job Results API enabling the deaf community to openly exercise their Independence to work in any Area they like and prove their capabilities. 
#### Blogs!
You can only access your rights if you are aware of them. Read the blogs from anywhere in the world and gain understanding and awareness about opportunities and rights, so that you are never denied the opportunity to grow! Our app lists all the blogs through Google Search API and provides the links to access them!
#### Volunteer
All volunteers are welcome! Anyone can join our website as a volunteer and offer support and general advice, and form connections with the people in need. Likewise, if anyone wishes to gain guidance, they can connect with any volunteer.

## How we built it
- We built our website's Front-end using React.js, with Node.js and Express.js server. 
- We used *MongoDB Atlas Google-cloud Database* for storing data. 
- Passport.js has been used for Authenticating users.
- We added the practice for static gestures feature using Handpose library for detecting key points on user's hands, Fingerpose for training certain gestures, and finally classified them. 
- We developed the python script for live frame-by-frame detection of sign language using Mediapipe and LSTM. Initially, the key points are detected using Mediapipe which are saved as a Numpy array of 30 frames and 30 samples for each action, during training. Later these samples are provided labels and an LSTM is trained to identify gestures in real-time while predicting the probability of all actions for which model has been trained. For now, we have included 3 gestures but this number can easily be enhanced, by just adding more labels, and training for them.
- Python is used for Real-time speech to ASL translation. 
- Assembly API has been used to convert Audio URLs to ASL transcripts. Once a user provides an audio URL, that URL is sent to node-server which later fetches the transcript in English from Assembly-AI API. This transcript can then be converted to ASL using react. 
- We also added animated backgrounds using React particles. 
- Google Search API has been used to get job search results and blog results. 
- Git has been utilized for collaboration and Heroku has been used for deployment.

## Challenges we ran into
- We faced a lot of challenges as this was the first time we both worked on a Full-stack react Website. Initially, while connecting Node.js API to React front-end, we ran into endless challenges. Also during authentication, we were unable to share logged-in users' credentials across Routes.
- It was tough for us to connect Python Script to Node-server initially as we had never used the Node.js child process before. 
- During deployment, we also faced some issues but were ultimately able to resolve them by gaining a deeper understanding of the process.
- When we were developing the python script for identifying live actions of sign language, we faced issues as we are new to machine learning. But using LSTM, we were able to accomplish our objective of live and frame-by-frame identification of some of the common signs like - hello, thank you, etc through sign language. We can easily train our model for a wider range of signs.

## Accomplishments that we're proud of
Our Amazing teamwork and a web app to empower the deaf community!

## What we learned
- As a result of this project, we are comfortable with React.js including React hooks, Props, and React-state. We know how to connect our website to various APIs and achieve perfect results with minimum code!
- Non-technically, I think we came to recognize the challenges faced by deaf individuals worldwide, got ourselves familiar with Sign-language and developed a sense of appreciation towards them!

## What's next for LingoAlly
According to us, this project has tremendous potential to grow.
- We can have a chrome extension which transcribes youtube/online videos to ASL in real-time!
- Integrating real-time Sign language detection into Google-meet/Zoom meetings.
- Personalizing the job-search and blogs results using recommendation systems and Machine learning
