import head from '@/styles/header.module.css'

export default function Header(){
    return(
        <header className={head.container}>
            <h2 className={head.h2}>calc</h2>

            <div className={head.toggleContainer}>
              <h3 className={head.toggleTitle}>theme</h3>

              <div className={head.toggleSelection}>
                <section className={head.typeContainer}>
                  <span className={head.toggleType}>1</span>
                  <span className={head.toggleType}>2</span>
                  <span className={head.toggleType}>3</span>
                </section>

                <section className={head.selection}>
                  <div className={head.toggleActive}></div>
                  <div></div>
                  <div></div>
                </section>
              </div>
            </div>
          </header>
    )
}