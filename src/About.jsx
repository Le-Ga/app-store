import AlexImage from './alex-card.jpg';

function About() {
   return (
      <div className="wrapper">
         <div className="container">
            <div className='about__row'>
               <img src={AlexImage} alt="Alex" width='700px' />
               <ul className='about-list'>
                  <li>Звони</li>
                  <li>Пиши</li>
                  <li>Отправляй письма</li>
                  <li>Всё расскажу, подскажу</li>
                  <li>Проконсультирую</li>
               </ul>
            </div>
            <div className='text'>
               <p>
                  Спортивное питание дает возможность организму получить необходимые аминокислоты. Они необходимы для восстановления мышечной ткани после физических нагрузок. Аминокислоты бывают заменимыми и незаменимыми (в зависимости от возможности организма вырабатывать их самостоятельно при помощи синтеза). При недостатке в организме необходимых аминокислот ухудшается самочувствие и ослабляется иммунитет.
               </p>
            </div>
         </div>
      </div>
   )
}
export default About;