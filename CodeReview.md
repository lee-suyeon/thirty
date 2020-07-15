# CodeReview

<img src="https://github.com/lee-suyeon/30days/blob/master/img/start-challenge.gif?raw=true" width="700" alt="startchallenge">

<br />

### 실행순서

1. add 버튼을 클릭하면 challenge를 입력할 수 있는 모달창이 뜹니다. 
2. 목표(goal)을 입력합니다.
3. 시작 날짜를 설정하면 도전이 끝나는 30일 후 날짜도 함께 알려줍니다.    
(기본 값은 오늘 날짜로 설정되어있습니다.)
4. motivate 메모를 작성할 수 있습니다.
5. 입력이 끝나면 start 버튼을 눌러 도전을 시작합니다.    
(goal을 입력하지 않았다면 시작할 수 없습니다. ) 
6. 입력된 내용은 왼쪽 화면에 그대로 표시됩니다. 
<img src="https://github.com/lee-suyeon/30days/blob/master/img/3.JPG?raw=true" width="700" alt="startchallenge">


---

```javascript
import React, { useState, useRef, useCallback, useEffect, useContext, useMemo } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { START_CHALLENGE, ChallengeContext, TOGGLE_MODAL } from '../App';

const FormGroup = styled.form`
  width: 100%;
`

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
  let sum30days = inputDate.getDate() + 29;
  inputDate.setDate(sum30days);
  return convertDateString(inputDate);
}

const Form = () => {
  const { challenge, dispatch, initial, count } = useContext(ChallengeContext);
  const [inputs, setInputs] = useState({
    goal: '',
    motivate: '',
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
          }
        });
        dispatch({ type: TOGGLE_MODAL, form: false });
      }
   }, [goal, {...challenge}]);

  useEffect(() => {
    const { goal, motivate, startDate, endDate } = challenge;
    if(!initial){
      setInputs({
        goal: goal,
        motivate: motivate,
      });
      setDates({
        ...dates,
        startDate: startDate,
        endDate: endDate,
      });
    }
  }, [initial, challenge]);

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
   )
}

export default Form;
```



