import head from '@/styles/header.module.css'
import styles from './styles'
import { useState } from 'react'

export default function Header(){
    const [headState, setHead] = useState({
      toggleValue: 0,
      numOfValues: 3
    })

    const toggleType = [1, 2, 3].map(i => <span className={head.toggleType}>{i}</span>)

    const selectButton = [1, 2, 3].map(i => headState.toggleValue === i-1? <div className={head.toggleActive}></div> : <div></div>)
    
    function clickButton(){
      setHead(prev => {return {
        ...prev,
        toggleValue: (headState.toggleValue + 1) % headState.numOfValues
      }});
      console.log(styles[0]);
      // changeStyles();
    }

    // function changeStyles(){
    //   const rt = document.querySelector(':root');
    //   let rs = getComputedStyle(rt);
    // }
    return(
        <header className={head.container}>
            <h2 className={head.h2}>calc</h2>

            <div className={head.toggleContainer}>
              <h3 className={head.toggleTitle}>theme</h3>

              <div className={head.toggleSelection}>
                <section className={head.typeContainer}>
                  {toggleType}
                </section>

                <section onClick={clickButton} className={head.selection}>
                  {selectButton}
                </section>
              </div>
            </div>
          </header>
    )
}