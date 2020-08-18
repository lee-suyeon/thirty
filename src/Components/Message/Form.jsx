import React, { useState, useRef, useCallback, useEffect, useContext, useMemo } from 'react';
import styled from 'styled-components';
import Button from '../commons/Button';
import { START_CHALLENGE, ChallengeContext, TOGGLE_MODAL } from '../../App';

const FormGroup = styled.form`
  width: 100%;
`;
const FormBlock = styled.div`
  label {
    display: inline-block;
    color : #666;
    font-size: 1.6rem;
    margin: 2.5rem 0 1rem 0.3rem;
  }
  span.message{
    display: inline-block;
    font-size: 1rem;
    color: tomato;
    margin-left: 1rem;
  }
  input, textarea {
    width: 100%;
    border: 1px solid #d4e2d4;
    border-radius: 5px;
    outline: none;
    padding: 1rem;
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
  span.end-date {
    font-weight: 500;
    color:  #447d53;
  }
`;

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
  let sum30days = inputDate.getDate() + 29;
  inputDate.setDate(sum30days);
  return convertDateString(inputDate);
}

const Form = () => {
  const { challenge, dispatch, initial, count } = useContext(ChallengeContext);
  const [inputs, setInputs] = useState({
    goal: challenge.goal,
    motivate: challenge.motivate,
  });
  const selectStartDate = useMemo(() => getToday(), []);
  const [dates, setDates] = useState({
    startDate: selectStartDate,
    endDate: getAfter30days(selectStartDate),
  });
  const [message, setMessage] = useState('');
  const { goal, motivate } = inputs;
  const { startDate, endDate } = dates;
  const inputRef = useRef(null);
  
  const onChangeInput = useCallback((e) => {
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value,
    });
  },[inputs]);

  const onChangeDate = useCallback((e) => {
    setDates({
      ...dates,
      startDate: e.target.value,
      endDate: getAfter30days(e.target.value),
    });
  },[dates]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault(); 
    if(!goal){
        setMessage('목표를 입력해주세요');
        inputRef.current.focus();
    } else {
      dispatch({ 
        type: START_CHALLENGE, 
        challenge: {
          goal: goal,
          startDate: startDate,
          endDate: endDate,
          motivate: motivate
        },
      });
      dispatch({ type: TOGGLE_MODAL, form: false });
    }
  }, [goal, {...challenge}, initial]);

  useEffect(() => {
    const { startDate, endDate } = challenge;
    if(!initial){
      setDates({
        startDate: startDate,
        endDate: endDate,
      });
    }
  }, [initial]);

  return (
    <>
      <FormGroup onSubmit={onSubmitForm}>
        <FormBlock>
          <label htmlFor="goal">MY GOAL</label>
          <span className="message">{message}</span>
          <input
            id="goal" 
            name="goal" 
            value={goal}
            placeholder="Study React"
            autoComplete="off"
            onChange={onChangeInput}
            ref={inputRef}
          />
        </FormBlock>
        <FormBlock>
          <label htmlFor="startDate">START DAY</label>
          <span className="message">{count !== 0 && "날짜를 변경 할 수 없습니다"}</span>
          <input 
            type="date" 
            id="startDate"
            name="startDate"
            value={startDate}
            min={selectStartDate}
            disabled={count}
            onChange={onChangeDate}
          />
          <p>도전 종료일은 <span className="end-date">{endDate}</span> 입니다</p>
        </FormBlock>
        <FormBlock>
          <label htmlFor="motivate">MOTIVATE YOURSELF</label>
          <textarea 
            name="motivate" 
            placeholder="The truth is that everyone is bored, and devotes himself to cultivating habits."
            value={motivate}
            maxLength="47"
            onChange={onChangeInput}
          ></textarea>
        </FormBlock>
        <Button title="START" type="subimt"/>
      </FormGroup>
    </>
  );
}

export default Form;