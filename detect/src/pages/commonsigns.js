import React, { Component } from "react";
import '../components/css/signs.css';
import Particles from "react-tsparticles";
import { Main } from "tsparticles-engine";
import { loadBubblesPreset } from "tsparticles-preset-bubbles";
import Navbar from "../components/navbar";
class signApp extends React.Component {
    constructor() {
      super();
      this.state = {
        signs: [{
          title:"Good Morning",
            url:"https://thumbs.gfycat.com/HeartfeltLateBrocketdeer-max-1mb.gif",
            instructions: "This is a two part sign. First sign good by touching one flat hand to your chin and bringing it down to meet your other hand, which is at about waist height and palm up.Next sign “morning” by bending the elbow of one arm, leaving the arm parallel to your body, and resting the finger tips in the crook of the elbow of your second arm. With the second hand, bring the flat and palm up hand from under the first arm up and towards you – like the sun coming up over the horizon.Put together, this is a Good – Morning!"
        
          },
        {
          title:"Good Night",
          url:"https://thumbs.gfycat.com/MistySnarlingAnglerfish-size_restricted.gif",
          instructions:'This is a two part sign. First sign “good” by touching one flat hand to your chin and bringing it down to meet your other hand, which is at about waistheight and palm up. Next sign night by bringing one arm parallel to your body and then rest the forearm of the second arm on the fingertips of the first. Slowly lower thesecond hand down like the sun is setting over the horizon.  Put together this is Good – Night!'

        },
        {
          title:"hello",
          url:"https://c.tenor.com/VpGTBesoKX8AAAAC/tuna-rungu-hello.gif",
          instructions:"Extend your fingers and cross your thumb in front of your palm. Then, starting with your hand in front of your ear, flick it outward and away from your body.          "
        },
        {
          title: "Thank you",
          url:"https://images.ctfassets.net/vz6nkkbc6q75/2wHIqJmIziBv5PODZThVlu/9c46b5c9fe7666aa767d2d48c6bf8095/Thank_2BYou_2BSmaller.gif",
          instructions:"Start with your dominant hand. Then place your fingers near your lips, with your hand as flat as possible. Move your hand forward and slightly downwards toward the person you are thanking."
        },
        {
          title:"NICE TO MEET YOU",
          url:"https://cudoo.com/blog/wp-content/uploads/2020/01/Nice-to-meet-you.gif",
          instructions:"he first sign ‘nice’ is signed by placing your passive hand in front of you, palm up, and moving the flat palm of your active hand across your passive hand.The second sign which is ‘meet’ is signed with both hands up, palms facing each other, active hand close to your chest. The fingers represent two people that are meeting.",

        }, 
        {
          title:"Please",
          url:"https://cudoo.com/blog/wp-content/uploads/2020/01/Please.gif",
          instructions:" Place your active hand on your passive shoulder and rotate it a couple of times.",

        },
         {
          title:"YOU’RE WELCOME",
          url:"https://cudoo.com/blog/wp-content/uploads/2020/01/Welcome-.gif",
          instructions:"Move your active hand away from your body and towards your torso.",

        }, {
          title:"Sorry",
          url:"https://cudoo.com/blog/wp-content/uploads/2020/01/Sorry.gif",
          instructions:"Make a fist shape using your active hand and place it on your passive shoulder and rotate it a few times.",

        }, 
        {
          title:"Help",
          url:"https://cudoo.com/blog/wp-content/uploads/2020/01/Help.gif",
          instructions:"Both hands are joined for assistance (The lower hand seems to give assistance to the other hand). You close your active hand on the shape of a 10 resting on your passive hand opening your palm upwards. Then move your hands slightly upward in front of the chest.Asking for help: Move both hands back to your chest.Help someone: Move both hands towards the person you are signing to.",

        }, {
          title:"No",
          url:"https://cudoo.com/blog/wp-content/uploads/2020/01/No.gif",
          instructions:"Snap the first three fingers of your active hand once or twice.",

        }, {
          title:"Yes",
          url:"https://cudoo.com/blog/wp-content/uploads/2020/01/Yes.gif",
          instructions:"Make a fist using your active hand and move it up and down as you are nodding your head in agreement.",

        }, {
          title:"Happy/ Glad/ Delighted",
          url:"https://cudoo.com/blog/wp-content/uploads/2020/01/Happy.gif",
          instructions:"Take your active hand and brush it in little circles up your chest a couple of times. ",

        }, {
          title:"Eat",
          url:"https://media2.giphy.com/media/l3vRhFBHY2JT5QIdq/200.gif",
          instructions:"Pinch the tips of all fingers together and bring up to your mouth. Tap fingertips on your lips a few times. This sign looks just like you are popping some yummy food into your mouth. Use this visual to help you remember the sign.",

        }, {
          title:"Feel",
          url:"https://media0.giphy.com/media/XDLtWz5FGOF12jOKl7/200.gif?cid=95b2794413b301bf01114377546fb94be7053e5a5babf79f&rid=200.gif&ct=g",
          instructions:"With your palm flat and facing towards you, keep your fingers outstretched and angle your middle finger down closer to you than the others.Brush your middle finger over your heart a couple of times.Your feelings are felt in your heart! Use this visual to help you remember the sign.    This sign is the same as the one for feelings, but we’ve provided different teaching tips for each.",

        }, {
          title:"Drink",
          url:"https://media0.giphy.com/media/3o6nUS5f0mrs6t4pOg/giphy.gif",
          instructions:"Make a c-shape with one hand and hold it so the palm is facing in and the pinky is down.Bring the hand up, rest the thumb on your chin, and tip your hand back towards your mouth. This sign looks just like you’re taking a drink from a cup! Use this visual to help you remember the sign!",

        }, {
          title:"Warm",
          url:"https://media1.giphy.com/media/l3vR4oqDTkdTkxhpm/200w.gif?cid=82a1493bf6gxqyqwtofiaz20gwtvqpi2hpbgxmaax15n9ndj&rid=200w.gif&ct=g",
          instructions:"Bring one hand up to your chin and close the fingers so the tips rest just in front of the chin. Raise the hand just slightly and at the same time open up the fingertips and extend the fingers. This sign looks like you are blowing warm air from your mouth. Use this visual to help you remember the sign.",

        }, {
          title:"Cold",
          url:"https://i.gifer.com/ncK.gif",
          instructions:"Make two fists and bring them up about shoulder height, thumbs facing to shoulders (but out from the shoulder an inch or two.)Shake your fists back and forth, towards and away from each other, a few times.This sign looks like you are shaking with cold! Use the visual to help you remember the sign",

        }, {
          title:"Sad",
          url:"https://i.gifer.com/4CcX.gif",
          instructions:"Hold both hands in front of your face. The palms face you and fingers are slightly separated. One hand is just slightly higher than the other. Draw the hands down a few inches as you make a sad face. It’s really important to show the emotion for this sign! This sign just looks sad, and your face is crestfallen. Use this visual to help you remember the sign.",

        }, {
          title:"Frustrated",
          url:"https://i.gifer.com/3YCk.gif",
          instructions:"Frustrated is signed by first taking your open, dominant hand, with palm facing outward, and gently tapping the back of your hand against your mouth and nose. Then push the hand outward again, as if you are frustrated because you walked into a brick wall.",

        }, {
          title:"Love",
          url:"https://thumbs.gfycat.com/SatisfiedEveryHart-max-1mb.gif",
          instructions:"Cross both arms over your chest. Give yourself a little squeeze and rock your torso left to right a few times. This sign looks like you are hugging someone you love. Use this visual to help you remember the sign.",

        }, {
          title:"Scared",
          url:"https://media2.giphy.com/media/zaPhPctbHaC7PDvBB2/giphy.gif?cid=790b7611f1f6ec794ac6daf71cc03898473e3098a8bb2ac4&rid=giphy.gif&ct=g",
          instructions:"Hold both hands in front of you in fists, palms towards your body. Flick the fingers forward so you end up with an open palm, with fingers extended. Raise your shoulders some while you do this.Make your face look like you are really scared at the same time! This sign looks like something suddenly scared you! Use this visual to help you remember the sign. TIP: Facial expression and body language are really important when communicating meaning in sign language. Make sure you really show how scared you are!!",

        },],
        currentPage: 1,
        signsPerPage: 5
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }
    customInit(main: Main) {
      // this adds the preset to tsParticles, you can safely use the
      loadBubblesPreset(main);
    }

    render() {
      const { signs, currentPage, signsPerPage } = this.state;
      const options = {
        particles: {
          move: {
            speed: 10,
            outModes: {
              default: "destroy",
              bottom: "none"
            }
          },
          size: {
            value: 30
          }
        },
        emitters: {
          direction: "top",
          size: {
            width: 200,
            height: 0
          },
          color: {
            value: "#ffffff"
          },
          position: {
            x: 50,
            y: 101
          },
          rate: {
            quantity: 5,
            delay: 0.3
          }
        },
        background: {
          image:
            "url('https://hdwallsource.com/img/2014/4/digital-wallpapers-24971-25651-hd-wallpapers.jpg')",
          size: "100% 100%",
          repeat: "no-repeat"
        },
        
        preset: "bubbles",
      };

      // Logic for displaying current signs
      const indexOfLastsign = currentPage * signsPerPage;
      const indexOfFirstsign = indexOfLastsign - signsPerPage;
      const currentsigns = signs.slice(indexOfFirstsign, indexOfLastsign);

      const rendersigns = currentsigns.map((sign, index) => {
        return (<div key={index} className="cards">
         {/* <h1 style={{color:"black",textAlign:"left"}}>{sign.title}</h1>
          <img key={index} src={sign.url} className="sign-img"/>
        <p>{sign.instructions}</p>
        <hr/>*/}
          <a href="" className="card">
      <img src={sign.url} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">{sign.title}</h3>
            <span className="card__status">Hover Here for text instructions</span>
          </div>          
        </div>
        <p className="card__description">{sign.instructions}</p>
      </div>
    </a>
  
        </div>);
      });

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(signs.length / signsPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });

      return (
        <div className="commonsigns">
          <Navbar/>
         <Particles options={options} init={this.customInit} />
          <h1>Everyday Signs</h1>
          <div className="all-signs">
          <ul style={{color:"black"}}>
            {rendersigns}
          </ul>
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
          </div>
        </div>
      );
    }
  }


  export default signApp