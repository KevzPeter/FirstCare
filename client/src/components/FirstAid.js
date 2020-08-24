import React,{useState} from 'react'
import blood from '../svg/blood.svg'
import choking from '../svg/choking.svg'
import stroke from '../svg/stroke.svg'
import fire from '../svg/fire.svg'
import fracture from '../svg/fracture.svg'
import heartattack from '../svg/heart-attack.svg'
import poison from '../svg/poison.svg'
import sting from '../svg/sting.svg'
import {Bleeding} from './FAInfo/Bleeding'
import {Choking} from './FAInfo/Choking'
import {HeartAttack} from './FAInfo/HeartAttack'
import {Stroke} from './FAInfo/Stroke'
import {Burns} from './FAInfo/Burns'
import {Anaphylaxis} from './FAInfo/Anaphylaxis'
import {Poisoning} from './FAInfo/Poisoning'
import {Fractures} from './FAInfo/Fractures'

export const FirstAid=()=>{

    const [num,setnum]=useState(0)
    function  HandleClick({value}){
        switch (value){
            case 1:
                setnum(1)
                return(<>
                    <button className="btn btn-primary" onClick={() => setnum(0)}>
                        <i class="fas fa-chevron-circle-up"></i>
                    </button>
                   <Bleeding />
                   </>
                )
            case 2:
                setnum(2)
                return(<>
                    <button className="btn btn-primary" onClick={() => setnum(0)}>
                        <i class="fas fa-chevron-circle-up"></i>
                    </button>
                   <Choking />
                   </>
                )
            case 3:
                setnum(3)
                return(<>
                    <button className="btn btn-primary" onClick={() => setnum(0)}>
                    <i class="fas fa-chevron-circle-up"></i>
                    </button>
                   <Stroke />
                   </>
                )
            case 4:
                setnum(4)
                return(<>
                    <button className="btn btn-primary" onClick={() => setnum(0)}>
                    <i class="fas fa-chevron-circle-up"></i>
                    </button>
                   <Burns />
                   </>
                )
            case 5:
                setnum(5)
                return(<>
                    <button className="btn btn-primary" onClick={() => setnum(0)}>
                    <i class="fas fa-chevron-circle-up"></i>
                    </button>
                   <Fractures />
                   </>
                )
            case 6:
                setnum(6)
                return(<>
                    <button className="btn btn-primary" onClick={() => setnum(0)}>
                    <i class="fas fa-chevron-circle-up"></i>
                    </button>
                   <HeartAttack />
                   </>
                )
            case 7:
                setnum(7)
                return(<>
                    <button className="btn btn-primary" onClick={() => setnum(0)}>
                    <i class="fas fa-chevron-circle-up"></i>
                    </button>
                   <Poisoning />
                   </>
                )
            case 8:
                setnum(8)
                return(<>
                    <button className="btn btn-primary" onClick={() => setnum(0)}>
                    <i class="fas fa-chevron-circle-up"></i>
                    </button>
                   <Anaphylaxis />
                   </>
                )
            default:
                return null
        }
    }
    return(
        <>
        <p className="header" id="help">Need Help?</p>
        <div className="first-aid">
            <div className="tag bleeding" onClick={()=>setnum(1)}>
                <img src={blood}alt="Bleeding" ></img>
                <p className="title">Bleeding</p>
               </div>
            <div className="tag choking" onClick={()=>setnum(2)}>
                <img src={choking} alt="Choking"></img>
                <p className="title">Choking</p>
            </div>
            <div className="tag stroke" onClick={()=>setnum(3)}>
                <img src={stroke} alt="Stroke"></img>
                <p className="title">Stroke</p>
            </div>
            <div className="tag fire" onClick={()=>setnum(4)}>
                <img src={fire} alt="Burns"></img>
                <p className="title">Burns/Scalds</p>
            </div>
            <div className="tag fracture" onClick={()=>setnum(5)}>
                <img src={fracture} alt="Fracture"></img>
                <p className="title">Fracture</p>
            </div>
            <div className="tag heartattack" onClick={()=>setnum(6)}>
                <img src={heartattack} alt="HeartAttack"></img>
                <p className="title">Heart Attack</p>
            </div>
            <div className="tag poison" onClick={()=>setnum(7)}>
                <img src={poison} alt="Poison"></img>
                <p className="title">Poisoning</p>
            </div>
            <div className="tag sting" onClick={()=>setnum(8)}>
                <img src={sting} alt="Allergy"></img>
                <p className="title">Anaphylaxis</p>
            </div>
        </div>
          <HandleClick value={num}/>
        </>
    )
}