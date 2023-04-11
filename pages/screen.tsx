import {useState} from 'react';
import style from "@/styles/Screen.module.css"

interface display{
    disp: string
}
export default function Screen(props: display){
    return(
        <div className={style.screen}><p>{props.disp}</p></div>
    )
}