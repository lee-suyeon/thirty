import React, { useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Button';

const FormBlock = styled.div`
   label {
      color : #666;
      font-size: 1.6rem;
      margin: 2.5rem 0 1rem 0.3rem;
   }
   label .message{
      display: inline-block;
      font-size: 1rem;
      color: tomato;
      margin-left: 0.5rem;
   }
   input, textarea {
      width: 100%;
      padding: 1rem;
      border: 1px solid #d4e2d4;
      border-radius: 5px;
      outline: none;
   }

   input {
      height: 60px;
      font-size: 1.5rem;
      font-weight: 500;
   }
   textarea {
      height: 160px;
      font-size: 1.2rem;
      line-height: 1.5;
      resize: none;
   }
   input:focus,
   textarea:focus {
      border: 1px solid #447d53;
   }
   p {
      color : #666;
      margin-top: 0.7rem;
      text-align: right;
   }
   span {
      font-weight: 500;
      color:  #447d53;
   }
`
const getToday = () => {
   let today = new Date();
   return convertDateString(today);
}

const convertDateString = (date) => {
   let year = date.getFullYear();
   let month = date.getMonth() + 1;
   month = month >= 10 ? month : `0${month}`
   let day = date.getDate();
   day = day >= 10 ? day : `0${day}`
   return `${year}-${month}-${day}`
}

const getAfter30days = (date) => {
   let inputDate = new Date(date);
   inputDate.setDate( inputDate.getDate() + 29 );
   return convertDateString(inputDate);
}

const Form = ({ onToggleModal, onInsertChallenge, onEditChallenge }) => {
   const [goal, setGoal] = useState('');
   const [message, setMessage] = useState('');
   const [motivate, setMotivate] = useState('');
   const [date, setDate] = useState(getToday());
   const [endDay, setEndDay] = useState(getAfter30days(getToday()));
   const inputRef = useRef(null);

   const onChangeGoal = (e) => {
      setGoal(e.target.value);
   }

   const onChangeDate = (e) => {
      setDate(e.target.value);
      setEndDay(getAfter30days(e.target.value));
   }

   const onChangeMotivate = (e) => {
      setMotivate(e.target.value);
   }

   const onSubmitForm = (e) => {
      e.preventDefault(); 
      if(!goal){
         setMessage('목표를 입력해주세요');
         inputRef.current.focus();
      } else {
         onInsertChallenge(goal, date, endDay, motivate);
         onToggleModal();
      }
   }

   return (
      <>
         <form onSubmit={onSubmitForm}>
         <FormBlock>
               <label>MY GOAL<span className="message">{message}</span></label>
               <input
                  value={goal}
                  onChange={onChangeGoal}
                  name="goal" 
                  placeholder="Study React"
                  ref={inputRef}
               />
            </FormBlock>
            <FormBlock>
               <label>START DAY</label>
               <input 
                  type="date" 
                  name="date"
                  value={date}
                  onChange={onChangeDate}
                  min={getToday()}
               />
               <p>도전 종료일은 <span>{endDay}</span> 입니다</p>
            </FormBlock>
            <FormBlock>
               <label>MOTIVATE YOURSELF</label>
               <textarea 
                  name="motivate" 
                  placeholder="The truth is that everyone is bored, and devotes himself to cultivating habits."
                  value={motivate}
                  maxLength="100"
                  onChange={onChangeMotivate}
               ></textarea>
            </FormBlock>
            <Button title="START" type="subimt"/>
         </form>
      </>
   )
}

export default Form;