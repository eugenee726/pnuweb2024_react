import './Hello.css'
import MyCome from './MyCom';

function Hello() {
    const name = 'PNU' ;
    return (
        <> 
            <div className='hellodiv'>
                {name}님 안녕하세요!
            </div>
            <div>
                <MyCome/>
            </div>
        </> //div를 묶어주는 tag = fragement tag
    );
}

export default Hello;