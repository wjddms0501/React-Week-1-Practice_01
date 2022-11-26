import React, { useState } from "react";
import "./App.css"; //  반드시 App.css 파일을 import 해줘야 합니다.
import CustomButton from "./components/CustomButton";
import User from "./components/User";

//버튼 Component
//이렇게 Component를 분리해주면 추가하기는 초록, 삭제는 빨강처럼
//간단히 props에 색을 넘겨주는 것만으로도 버튼의 색설정을 할 수 있다.
/*function CustomButton(props){
  const {color,onClick,children} = props //구조 분해 할당
  if(color){
    return <button
    style = {{backgroundColor:color, color:"white"}} 
    onClick = {onClick}>{children}</button>
  }
  return <button onClick = {onClick}>{children}</button>
}*/
//만약에 props에 color로 받아온 값이 있으면 color를 적용한 버튼을 만들어주고
//그게 아니면 그냥 버튼을 줄 거다.
//무조건 color가 있는 버튼을 만들어주고 싶다면 if문을 지우면된다.

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  };

  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };
  //👆각각의 유저 아이디가 지금 내가 설정한 아이디와 같지 않으면 그것만 filter해서 새로운 유저리스트를 만들어라
  //또는
  //const deleteUserHandler=(id) => {
  //const newUserList =
  //setUsers(users.filter((user)=>user.id!==id))
  //}

  return (
    /*<div className="app-style">
    {users.map((user) => {
      return <User user={user} key={user.id}></User>;
    })}*/
    <div>
      <div className="app-style">
        {users.map((user) => {
          if (user.age < 25) {
            return (
              <User
                handleDelete={deleteUserHandler}
                user={user}
                key={user.id}
              ></User>
            );
          } else {
            return null;
          }
        })}
      </div>

      <input
        value={name}
        placeholder="이름을 입력해주세요"
        // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={age}
        placeholder="나이를 입력해주세요"
        // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
        onChange={(e) => setAge(e.target.value)}
      />
      <CustomButton color="green" onClick={addUserHandler}>
        추가하기
      </CustomButton>
    </div>
  );
};

export default App;
