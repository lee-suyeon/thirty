import React, { useState, useRef, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Button';
import { START_CHALLENGE } from '../App';

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

const getDday = (date) => {
   const startDay = new Date(date);
   const after30Days = getAfter30days(getToday());
   const endDay = new Date(after30Days);

   const gap = startDay.getTime() - endDay.getTime();
   const dDay = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;

   return dDay + 1;
}



const Form = ({ onToggleModal, onInsertChallenge, challenge, initial, dispatch }) => {
   const [goal, setGoal] = useState('');
   const [message, setMessage] = useState('');
   const [startDate, setStartDate] = useState(getToday());
   const [endDate, setEndDate] = useState(getAfter30days(getToday()));
   const [motivate, setMotivate] = useState('');
   const inputRef = useRef(null);
   const dday = getDday(startDate);
   
   const onChangeGoal = useCallback((e) => {
      setGoal(e.target.value);
   },[]);

   const onChangeDate = useCallback((e) => {
      setStartDate(e.target.value);
      setEndDate(getAfter30days(e.target.value));
   },[]);

   const onChangeMotivate = useCallback((e) => {
      setMotivate(e.target.value);
   },[]);

   const onSubmitForm = (e) => {
      e.preventDefault(); 
      if(!goal){
         setMessage('목표를 입력해주세요');
         inputRef.current.focus();
      } else {
         onToggleModal();
         dispatch({ 
            type: START_CHALLENGE, 
            challenge: {
               goal: goal,
               startDate: startDate,
               endDate: endDate,
               dday: dday,
               motivate: motivate
            }
         });
         
         console.log('close')
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
                  autoComplete="off"
                  ref={inputRef}
               />
            </FormBlock>
            <FormBlock>
               <label>START DAY</label>
               <input 
                  type="date" 
                  name="date"
                  value={startDate}
                  onChange={onChangeDate}
                  min={getToday()}
               />
               <p>도전 종료일은 <span>{endDate}</span> 입니다</p>
            </FormBlock>
            <FormBlock>
               <label>MOTIVATE YOURSELF</label>
               <textarea 
                  name="motivate" 
                  placeholder="The truth is that everyone is bored, and devotes himself to cultivating habits."
                  value={motivate}
                  maxLength="47"
                  onChange={onChangeMotivate}
               ></textarea>
            </FormBlock>
            <Button title="START" type="subimt"/>
         </form>
      </>
   )
}

export default Form;