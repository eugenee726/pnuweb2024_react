// import { GiFlexibleLamp } from 'react-icons/gi';
import clock from './colock.png';
import './MyCom.css';
// import { CgEnter } from 'react-icons/cg';
// 스타일시트는 오브젝트 형식으로 작성하며 '-'사용 불가. 카멜표기법으로 작성
function MyCome() {
    const mycomDiv = {
        width : '100%',
        display : 'flex',
        justifyContent: 'center',
        alingnItems: 'center',
        flexDirection: 'column'
    };

    return(
        <div style={mycomDiv}>
            <p className='mycomP'>
                <img src={clock} alt='시계' style={{'width':'400px'}}/>
                {/* 스타일작성시 중괄호 두번 사용 */}
            </p>
            <p className='mycomP'>현재 시간 :{new Date().toLocaleTimeString()} </p>
        </div>
    );
}
export default MyCome; 