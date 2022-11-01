import {cars} from './components/cars'
import {Footer} from './components/Footer'

const [honda, tesla] = cars;

const {speedStats:{topSpeed:hondaTopSpeed}} = honda;
const {speedStats:{topSpeed:teslaTopSpeed}} = tesla;

const {coloursByPopularity:[hondaTopColor]} = honda;
const {coloursByPopularity:[teslaTopColor]} = tesla;


export const Destructuring = () => {
  return (
    <>
   <div className='flex-container'>
         <table>
            <tbody>
            <tr>
                <th>Brand</th>
                <th>Top Speed</th>
                <th>Top Color</th>
            </tr>
            <tr>
                <td>{tesla.model}</td>
                <td>{teslaTopSpeed}</td>
                <td>{teslaTopColor}</td>
            </tr>
            <tr>
                <td>{honda.model}</td>
                <td>{hondaTopSpeed}</td>
                <td>{hondaTopColor}</td>
            </tr>
            </tbody>
            
        </table>
        
   </div>
   <div className='footer'><Footer /></div>
   </>
  )
}
