import React, {useState} from 'react';

const hobbyDB1 = {
  creative_short: 'Sketch a blind contour drawing of your hand.',
  creative_medium: 'Make a video of yourself, explaining how was your today or yesterday. ',
  creative_long: 'Paint a simple watercolor postcard and mail it to a friend.',
  physical_short: 'Do 20 squats and a 1‑minute plank.',
  physical_medium: 'Follow a 15‑minute yoga stretch on YouTube.',
  physical_long: 'Go for a 30‑minute walk without headphones — just observe.',
  analytical_short: 'Solve a chess puzzle or a logic riddle.',
  analytical_medium: 'Learn a new Excel or coding trick and try it out.',
  analytical_long: 'Read a chapter of a non‑fiction book and summarise it in your own words.',
  social_short: 'Have a good conversation with your friend.',
  social_medium: 'Call a family member just to say hi — no agenda.',
  social_long: 'Organise a board game night or a group hike for the weekend.',
};

const hobbyDB2 = {
  creative_short: ' Create a meme related to any work you do',
  creative_medium: 'Write a haiku about the last thing that made you smile.',
  creative_long: 'A video which explains your work and edit it. ',
  physical_short: 'Do 2 minutes of star jumps — just you and the floor.',
  physical_medium: 'Learn a new dance move from a short YouTube tutorial.',
  physical_long: 'Go for a run while listening to a podcast you love.',
  analytical_short: 'Solve a Sudoku puzzle.',
  analytical_medium: 'Learn how a simple machine works (like a blender or lock).',
  analytical_long: 'Write down three things you learned today and connect them.',
  social_short: 'Leave a positive comment on someone’s social post.',
  social_medium: 'Send a voice note to a friend telling them why you appreciate them.',
  social_long: 'Plan a surprise outing or a small gift for someone close.',
};

const hobbyDB3 = {
  creative_short: 'Take the most interesting photos possible inside your room. ',
  creative_medium: 'Redesign the cover of your favourite book in 20 minutes.',
  creative_long: 'Compose a short song or poem about your current mood.',
  physical_short: 'Stretch your neck and shoulders for 3 minutes with slow circles.',
  physical_medium: 'Practice balancing on one leg for 2 minutes, then switch.',
  physical_long: 'Explore a new park or street you’ve never walked down before.',
  analytical_short: "Solve a rubik's cube. ",
  analytical_medium: 'Take an online typing speed test and try to beat your record.',
  analytical_long: 'Research a historical event that happened on today’s date.',
  social_short: 'Connect and meet with one of your old teachers. ',
  social_medium: 'Write a short thank‑you note and send a photo of it.',
  social_long: 'Host a virtual coffee chat with someone you haven’t spoken to in a year.',
};

const hobbyDB4 = {
  creative_short: 'Make an online poster of your company using an editor',
  creative_medium: 'Analyse your daily time table and try to fix one bad habit into a good one',
  creative_long: 'Take a paper, write your weaknesses and strengths on it and ways to tackle your weaknesses',
  physical_short: 'Skipping on a rope. ',
  physical_medium: 'One small round of running at your favourite place. ',
  physical_long: "Jogging at your favourite place. ",
  analytical_short: 'Play A cross word game. ',
  analytical_medium: 'Watching birds fly in clear sky. ',
  analytical_long: 'Track Planetry movement and seeing different constellations. ',
  social_short: 'Going to play an arcade game. ',
  social_medium: 'Create a recipe video of your favourite dish. ',
  social_long: 'Community Gardening. ',
};

const hobbyDB5 = {
  creative_short: 'use oragami to make something fun. ',
  creative_medium: 'Read a chapter in one of your favourite fiction novels. ',
  creative_long: 'Write one horror incident happend with you in past. ',
  physical_short: 'Hanging on a bar or a rod. ',
  physical_medium: 'Running being at your own place without moving. ',
  physical_long: "Ride on a bicycle. ",
  analytical_short: 'Play a quick quiz trivia with your friend. ',
  analytical_medium: 'Learning a new language. ',
  analytical_long: 'Build one gadget using Arduino. ',
  social_short: 'Tell one of your horror stories to your friend. ',
  social_medium: 'Tutorial video of things you find intresting like coding, mathematics etc. ',
  social_long: 'Hiking. ',
};

const hobbyDB=[hobbyDB1, hobbyDB2, hobbyDB3, hobbyDB4, hobbyDB5];

function Form() {
  const[isChecked1, setIsChecked1]= useState(false);
  const[isChecked2, setIsChecked2]= useState(false);
  const[isChecked3, setIsChecked3]= useState(false);
  const[isChecked4, setIsChecked4]= useState(false);
  const[showresult, setShowresult]= useState(false);
  const[time, setTime]=useState('');
  const[hobby, setHobby]=useState('');
  const[previousIndex, setPreviousIndex]=useState(-1);

  function findHobby(){
    if(!time){
      alert('🌸 Please select how much time you’d like to reclaim.');
      return;
    }
    if(!isChecked1 && !isChecked2 && !isChecked3 && !isChecked4){
      alert('✨ Pick at least one activity type that speaks to you.');
      return;
    }
    let i=Math.floor(Math.random()*5);
    while (i==previousIndex && hobbyDB.length>1){
      i=Math.floor(Math.random()*hobbyDB.length);
    }
    setPreviousIndex(i);
    const categories=[];
    if(isChecked1) categories.push("creative");
    if(isChecked2) categories.push("physical");
    if(isChecked3) categories.push("analytical");
    if(isChecked4) categories.push("social");
    let rand=(Math.floor(Math.random()*categories.length));
    const randcategory=categories[rand];
    let duration="";
    if(time=="10") duration="short";
    else if(time=="30") duration="medium";
    else if(time=="60") duration="long";
    const key= `${randcategory}_${duration}`;
    setHobby(hobbyDB[i][key]);
    setShowresult(true);
    
  }

  return (
    <div className='container'>
      <label>
      What is your average screentime per day?
      <br></br>
      <input type='number' placeholder='eg 8' max={24} min={0}/>
      </label>
      <br></br>
      <label>
        What type of activity you like (you can select as many as you want)?
        <br></br><br></br>
        <label className='option'><input type='checkbox' checked={isChecked1} onChange={(e)=>setIsChecked1(e.target.checked)}/>Creative</label>
        <br></br>
        <label className='option'><input type='checkbox' checked={isChecked2} onChange={(e)=>setIsChecked2(e.target.checked)}/>Physical</label>
        <br></br>
        <label className='option'><input type='checkbox' checked={isChecked3} onChange={(e)=>setIsChecked3(e.target.checked)}/>Analytical</label>
        <br></br>
        <label className='option'><input type='checkbox' checked={isChecked4} onChange={(e)=>setIsChecked4(e.target.checked)}/>Social</label>
      </label>
      <br></br>
      <br></br>
      <label>How much time you want to reclaim?
        <br></br>
        <label className='option'><input type ="radio" value="10" checked={time==="10"} onChange={(e)=>{setTime(e.target.value)}}/>10 minutes</label>
        <br></br>
        <label className='option'><input type ="radio" value="30" checked={time==="30"} onChange={(e)=>setTime(e.target.value)}/>30 minutes</label>
        <br></br>
        <label className='option'><input type ="radio" value="60" checked={time==="60"} onChange={(e)=>setTime(e.target.value)}/>60 minutes</label>
        <br></br>
      </label>
      <br></br>
      <br></br>
      <br></br>

      <button onClick={findHobby} className='output'>Find my hobby</button>

      <br></br><br></br>

      {showresult && (<div className= "result box">
        <h1>Hobby that fit you, who you are right now </h1>
        <br></br>
        <h2>{hobby}</h2>

      </div>)}
    </div>
  );
}

export default Form;