import {Button} from 'components/atoms/Button/Button'
import './MainPage.sass'

export const MainPage = () => {
  return (
    <>
      <div className="main-page__wrap">
        <Button text="New coil" mod="new"/>
        <Button text="Open coil" mod="open"/>
      </div>
    </>
  )
}