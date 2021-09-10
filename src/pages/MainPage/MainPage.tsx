import {Button} from 'components/atoms/Button/Button'
import './MainPage.sass'

export const MainPage = () => {
  return (
    <div className="main-page page">
      <div className="main-page__wrap wrap">
        <h1 className="main-page__title">Welcome!</h1>
        <div className="main-page__actions">
          <Button text="New coil" mod="new" href="/calc"/>
          <Button text="Open coil" mod="open"/>
        </div>
      </div>
    </div>
  )
}