import CustomButton from "./components/CustomButton";

function User(props) {
    return (
      <div className="square-style">
        {props.user.age}살 - {props.user.name}
        📍👉<CustomButton color="red" onClick={()=>{props.handleDelete(props.user.id)}}>삭제하기</CustomButton>
      {/*👆CustomButton의 props로 color 넘기기 */}
      {/*👆삭제버튼 */}
      </div>
    );
  }
  
  export default User
  export default CustomButton