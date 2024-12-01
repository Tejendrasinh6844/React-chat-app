import "./userInfo.css"

const Userinfo = () => {
  return (
    <>
    <div className='UserInfo'>
        <div className="user">
          <img src="./avatar.png" alt="avatar image" />
          <h2>Tejendrasinh</h2>
        </div>
           
        <div className="icons">
            <img src="./more.png" alt=""  />
            <img src="./video.png" alt=""  />
            <img src="./edit.png" alt=""  />

        </div>
    </div>
    </>
  )
}

export default Userinfo