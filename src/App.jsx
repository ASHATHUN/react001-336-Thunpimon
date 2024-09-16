import {useState} from "react";


export default function App(){
  const [level, setLevel] = useState(0)

  const newimage = () => {
    if (level >= 100) {
      return "https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/460004755_448996788173862_2209194816851786592_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF1zxTqBMOGEmLGHXf8b-j50J8FX2MffH3QnwVfYx98faBFRLq1zSzgXKNBHP9vVuy_9VJ0cODSsD-zAJzR5995&_nc_ohc=QHioJIfuhs0Q7kNvgH8-_6Q&_nc_ht=scontent.fbkk29-1.fna&_nc_gid=AC4V72P0ibxDY2isEAkdnzi&oh=00_AYC8aKR_GqBo0CXoMET3lKZ1MpDPfx19WsDXs7HPiONkFQ&oe=66EDC069"; // รูปใหม่เมื่อถึงเลเวล 50
    }
    return "https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSGobOaoB2l01CJneHJRJAJg0MevRX.jpg"; // รูปเริ่มต้น
  };
  const resetLevel = () => {
    setLevel(0);
  };

  return(
    <>
      <h2>Moo-Deng wants to eat something</h2>
      <h6>Please, give food for Moo-Deng!</h6>
      <h1>level {level}</h1>
      <div style={{ display: 'flex' }}>  
        <img src={newimage()} alt="หมูเด้ง" 
        width={200 + level}/>
      </div>
        <br />
        <div style={{display: 'flex', gap:50}}>
          <img 
            src="https://static.vecteezy.com/system/resources/previews/029/200/216/non_2x/watermelon-transparent-background-free-png.png" alt="แตงโม" 
            width={150} 
            onClick={() => setLevel(() => level + 5)}
            style={{ cursor: 'pointer' }}/>
        
          <img 
            src="https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6ImQyZDJiNDc0OThjODVlMjNlOTk2ZTZlOGI0N2RmODRhLmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=a55aaa8c471ada545098e9c393d385ac0b42903c1443ca708ba210d327fe4c7e" alt="ฟักทอง" 
            width={150}
            onClick={() => setLevel(() => level + 10)}
            style={{ cursor: 'pointer' }}/>

          <img 
            src="https://png.pngtree.com/png-vector/20231014/ourmid/pngtree-green-grass-grass-bush-png-image_10160082.png" alt="หญ้า" 
            width={150}
            onClick={() => setLevel(() => level + 20)}
            style={{ cursor: 'pointer' }}/>
        </div>
        <h3>Watermelon = 5 point | Pumpkin = 10 point | Grass = 20 point</h3>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={resetLevel} style={{ marginTop: '10px', padding: '10px', fontSize: '15px', cursor: 'pointer', }}>
          Back to Moo-Deng
          </button>
        </div>   
    </>
  );
}