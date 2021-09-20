import React from 'react'
import {TResultTableProps} from 'types/props'

import './ResultTable.sass'

export const ResultTable: React.FC<TResultTableProps> = ({finalData, isForcing}) => {
  return (
    <table className="result-table">
      <thead>
      <tr>
        <th colSpan={3} rowSpan={2}></th>
        <th colSpan={3}>R</th>
        <th colSpan={3}>I</th>
        <th colSpan={3}>M</th>
        <th colSpan={3}>J</th>
      </tr>
      <tr>
        <th>Мин.</th>
        <th>Ном.</th>
        <th>Макс.</th>
        <th>Мин.</th>
        <th>Ном.</th>
        <th>Макс.</th>
        <th>Мин.</th>
        <th>Ном.</th>
        <th>Макс.</th>
        <th>Мин.</th>
        <th>Ном.</th>
        <th>Макс.</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td rowSpan={6}>ну</td>
        <td rowSpan={3}>БП</td>
        <td>+%</td>
        <td rowSpan={3}>-</td>
        <td rowSpan={3}>-</td>
        <td rowSpan={3}>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>0%</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>-%</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowSpan={3}>П</td>
        <td>+%</td>
        <td rowSpan={3}>-</td>
        <td rowSpan={3}>-</td>
        <td rowSpan={3}>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>0%</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>-%</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      {isForcing && <>
      <tr>
        <td rowSpan={6}>нф</td>
        <td rowSpan={3}>БП</td>
        <td>+%</td>
        <td rowSpan={3}>-</td>
        <td rowSpan={3}>-</td>
        <td rowSpan={3}>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
        <tr>
        <td>0%</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        </tr>
        <tr>
        <td>-%</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        </tr>
        <tr>
        <td rowSpan={3}>П</td>
        <td>+%</td>
        <td rowSpan={3}>-</td>
        <td rowSpan={3}>-</td>
        <td rowSpan={3}>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        </tr>
        <tr>
        <td>0%</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        </tr>
        <tr>
        <td>-%</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        </tr>
      </>}


      </tbody>
    </table>
  )
}